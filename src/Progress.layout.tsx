import { Loader } from "./Loader"
import { LoadingStars } from "./LoadingStars"

export const Progress = (props: any) => {
    return(
        <div>
            <LoadingStars toggleLoading={props.dispatchToggleIsLoading}/>
            <Loader isLoading={props.isLoading}/>
        </div>
    )
}