import React from "react";
import { StyledLoader } from "./App.styled"

export const Loader = (props: any) => {

React.useEffect(() => {
    
},[props.isLoading])

    console.log(props.isLoading, "isLoading");

    return (
        
        <StyledLoader isLoading={props.isLoading}></StyledLoader>
        
    )
}