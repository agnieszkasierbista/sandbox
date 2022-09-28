import {Component} from "react";
import {StyledSVG} from "./SCGcomponent.style";

export class SVGcomponentCircles extends Component {
    render() {
        return (
            <div>
                <StyledSVG width="700" height="300">
                    <circle />
                    <circle />
                    <circle />
                    <circle />
                    <circle />
                    <circle />
                    <circle />
                    <circle />
                </StyledSVG>
            </div>
        )
    }
}