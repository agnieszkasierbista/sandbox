import React from "react"
import { StyledLoadingStars, StyledStar } from "./App.styled"

export const LoadingStars = (props: {toggleLoading: () => void}) => {

    const [state, setState] = React.useState(
        {
            counter: 0,
            counterArray: [] as number[],
            isUpdating: false,
        }
    )


    React.useEffect(() => {

        const timer = setInterval(() => {

            if (state.counter <= 9) {
                setState((prev) => {

                    const b: number[] = prev?.counterArray;
                    const d: number = b.at?.(-1) || 0;    

                    // [1,2,3,4].slice(0, [1,2,3,4].length - 1)

                    return {
                        counter: prev.counter + 1,
                        counterArray: prev.counterArray.length
                            ? (d % 2)
                                ? prev.counterArray.concat(prev.counter)
                                : prev.counterArray.slice(0, prev.counterArray.length - 1).concat(prev.counter)
                            : prev.counterArray.concat(prev.counter),
                            isUpdating: prev.isUpdating ? prev.isUpdating : true
                    }
                });
                
            } else {
                clearInterval(timer);
                setState((prev) => {
                    return {...prev, isUpdating: false}
                });
            }

        }, 1000);

        return () => {
            clearInterval(timer);
        }

    }, [state.counter]);

    React.useEffect(() => {
            if(state.isUpdating === false) {
                props.toggleLoading()
            }
    }, [state.isUpdating])

   
    // function aaa(isUpdating: boolean) {
    //     if(isUpdating === false) {
    //         return props.toggleLoading
    //     }
    //     else {
    //         return console.log
    //     }
        
    // };
    
    // aaa(state.isUpdating)();

    // console.log(state.counter, "counter");
    // console.log(state.isUpdating);
    // console.log(state.counterArray, "Pa tera Mati");


    const star = <StyledStar src="/pictures/star.png" />;
    const emptyStar = <StyledStar src="/pictures/star_empty.png" />;

    return (
        <StyledLoadingStars >

            {
                state.counterArray.map((item, idx) => item % 2 ? <div key={"a" + idx}>{star}</div> : <div key={"ab" + item + idx}>{emptyStar}</div>)

            }
        </StyledLoadingStars>
    )
}