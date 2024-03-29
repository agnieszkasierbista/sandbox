/// <reference path="../../../index.d.ts" />
import React from "react";
import {StyledFillingStars, StyledStar} from "../App/App.styled";
import star_empty from "../../assets/pictures/star_empty.png";
import star_filled from "../../assets/pictures/star.png";

export const FillingStars = () => {

    const starsCount = 10;
    const starsArray: number[] = new Array(starsCount).fill(0);

    const star = <StyledStar src={star_filled}/>;
    const emptyStar = <StyledStar src={star_empty}/>;

    const [state, setState] = React.useState({
        starsArray: starsArray,
        isLoading: false
    })

    function updateState() {

        const timer = setTimeout(() => {
            setState((prev) => {

                const indexOfFirstZero = prev.starsArray.findIndex((item) => item === 0);
                const updatedArray = prev.starsArray.map((item, idx) => {
                    if (idx === indexOfFirstZero) {
                        return 1
                    } else if (item === 1) {
                        return 1
                    } else {
                        return 0
                    }
                });
                // console.log(indexOfFirstZero, "ZERO");
                // console.log(updatedArray, "updated");

                // console.log(state.starsArray, "STARS");

                return {
                    ...prev,
                    starsArray: updatedArray,
                    isLoading: indexOfFirstZero === -1 ? false : prev.isLoading
                }
            })
        }, 500);

    }

    React.useEffect(() => {

        state.isLoading && updateState();

    }, [state.isLoading, state.starsArray])


    return (
        <StyledFillingStars>
            <button onClick={() => {
                setState((prev) => {
                    return {...prev, isLoading: !prev.isLoading}
                });
            }}>
                Activate Loading
            </button>
            {
                state.starsArray.map((item, idx) => {
                    if (item === 0) {
                        return <div key={idx}>{emptyStar}</div>
                    } else {
                        return <div key={idx}>{star}</div>
                    }
                })
            }
        </StyledFillingStars>
    )
}