/// <reference path="../../../index.d.ts" />
import React, {PropsWithChildren} from "react"
import { StyledAccordeon, StyledAccordeonContent, StyledAccordeonHeader, StyledAccordeonHeaderContent, StyledChevron } from "./Accordeon.styled"
import expand_more from '../../assets/pictures/expand_more.png';

export const Accordeon: React.FC<PropsWithChildren> = ({ children }) => {

    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <StyledAccordeon>
            <StyledAccordeonHeader onClick={() => setIsExpanded((prev) => !prev)}>
                <StyledAccordeonHeaderContent>Expand</StyledAccordeonHeaderContent>
                <StyledChevron isExpanded={isExpanded} src={expand_more} height="30" width="30"/>
            </StyledAccordeonHeader>
            <StyledAccordeonContent isExpanded={isExpanded}>

                {children}

            </StyledAccordeonContent>
        </StyledAccordeon>
    )
}