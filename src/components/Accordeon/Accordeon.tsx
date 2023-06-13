import React, {PropsWithChildren} from "react"
import { StyledAccordeon, StyledAccordeonContent, StyledAccordeonHeader, StyledAccordeonHeaderContent, StyledChevron } from "./Accordeon.styled"


export const Accordeon: React.FC<PropsWithChildren> = ({ children }) => {

    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <StyledAccordeon>
            <StyledAccordeonHeader onClick={() => setIsExpanded((prev) => !prev)}>
                <StyledAccordeonHeaderContent>Rozwiń</StyledAccordeonHeaderContent>
                <StyledChevron isExpanded={isExpanded} src="\pictures\expand_more.png" height="30" width="30"/>
            </StyledAccordeonHeader>
            <StyledAccordeonContent isExpanded={isExpanded}>

                {children}

            </StyledAccordeonContent>
        </StyledAccordeon>
    )
}