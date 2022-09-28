import {Component} from "react";
import {
    StyledBottomLeftWhite,
    StyledBottomRightBlack,
    StyledSVGwithPattern,
    StyledTopLeftBlack,
    StyledTopRightWhite
} from "./SCGcomponent.style";

export class SVGcomponentRectangles extends Component {
    render() {
        return (

            <StyledSVGwithPattern>
                <defs>
                    <pattern patternUnits="userSpaceOnUse" width="200" height="200" id="blocks">
                        <StyledTopLeftBlack fill="black" width="100" height="100"/>
                        <StyledTopRightWhite width="100" height="100"/>
                        <StyledBottomLeftWhite width="100" height="100"/>
                        <StyledBottomRightBlack width="100" height="100"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blocks)"/>
            </StyledSVGwithPattern>

        )
    }
}