import React from "react";
import {StyledLoader} from "../App/App.styled"

export const Loader = (props: { isLoading: boolean; }) => {

    React.useEffect(() => {

    }, [props.isLoading])

    return (

        <StyledLoader isLoading={props.isLoading}></StyledLoader>

    )
}