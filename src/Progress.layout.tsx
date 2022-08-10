import { FillingStars } from "./FillingStars"
import { Loader } from "./Loader"
import { LoadingStars } from "./LoadingStars"

export const Progress = (props: any) => {
    return(
        <div>
            <LoadingStars toggleLoading={props.dispatchToggleIsLoading}/>
            <Loader isLoading={props.isLoading}/>
            <FillingStars></FillingStars>
        </div>
    )
}