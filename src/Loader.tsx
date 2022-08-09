import { StyledLoader } from "./App.styled"
import { LoadingStars } from "./LoadingStars"

export const Loader = (props: any) => {
    return (
        
        <StyledLoader isLoading={props.isLoading}></StyledLoader>
        
    )
}