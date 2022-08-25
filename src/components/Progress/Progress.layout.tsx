import {FillingStars} from "../FillingStars/FillingStars"
import {Loader} from "../Loader/Loader"
import {LoadingStars} from "../LoadingStars/LoadingStars"

export const Progress = (props: { dispatchToggleIsLoading: () => void; isLoading: boolean }) => {
    return (
        <div>
            <LoadingStars toggleLoading={props.dispatchToggleIsLoading}/>
            <Loader isLoading={props.isLoading}/>
            <FillingStars></FillingStars>
        </div>
    )
}