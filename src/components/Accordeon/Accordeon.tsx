import React from "react"
import {
    StyledAccordeon,
    StyledAccordeonContent,
    StyledAccordeonHeader,
    StyledAccordeonHearedContent,
    StyledChevron as StyledChevron
} from "../App/App.styled"

export const Accordeon = () => {

const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <StyledAccordeon>
            <StyledAccordeonHeader onClick={() => setIsExpanded((prev) => !prev)}>
                <StyledAccordeonHearedContent>Rozwiń</StyledAccordeonHearedContent>
                <StyledChevron isExpanded={isExpanded} src="\pictures\expand_more.png" height="30" width="30"/>
            </StyledAccordeonHeader>
            <StyledAccordeonContent isExpanded={isExpanded}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel mi elementum, varius est vitae, aliquam lorem. Nam mauris ex, rutrum id fringilla vel, euismod et sem. Fusce non urna at sem mattis rutrum. Cras molestie turpis id tempus fermentum. Duis convallis lacus non ligula hendrerit tristique. Nam suscipit sit amet nunc bibendum ornare. Nullam sit amet dignissim lorem. Cras varius mauris felis, at vulputate lacus efficitur pharetra. Cras gravida cursus nulla, a rhoncus ipsum iaculis id. Aliquam dictum justo a dignissim tincidunt. Cras mattis, tellus eget tincidunt suscipit, augue est blandit nulla, id dictum nisl eros ac mauris. Suspendisse condimentum ante posuere odio iaculis eleifend.Mauris nec justo ut tellus condimentum malesuada sed sit amet magna. Donec fermentum massa nec arcu commodo facilisis. Nam massa risus, pellentesque at sollicitudin in, dapibus eget elit. Aenean sit amet viverra est. Praesent pretium semper efficitur. Aenean vitae eleifend est. Etiam eu eleifend nibh.Fusce eget blandit libero. Donec sed tempor diam, et dignissim ligula. Fusce nibh est, porta id bibendum id, placerat id eros. Nullam sed accumsan elit. Quisque finibus dolor ut nibh consectetur varius. Ut porta lectus vehicula nibh aliquet luctus. Phasellus tempus orci quis ligula pellentesque, ac euismod velit elementum. Donec vel pellentesque lorem. Maecenas vitae orci nec quam aliquam molestie vitae sed nunc. Nulla eleifend diam elit, sit amet porttitor justo vulputate eu. Aliquam eu leo lorem. Cras sodales purus et nisi commodo facilisis. Mauris vitae sem tellus. Donec tristique gravida cursus. Nullam mattis pulvinar diam. Cras ac elementum purus, at vulputate dolor.Sed semper scelerisque neque eu eleifend. Cras pulvinar est sed diam mattis blandit. 
            </StyledAccordeonContent>
        </StyledAccordeon>
    )
}