import {Route, Routes} from "react-router-dom";
import {Accordeon} from "../Accordeon/Accordeon";
import {StyledLink, StyledNav} from "./App.styled";
import {CarouselContainer} from "../Carousel/CarouselContainer";
import CreatePortalModalContainer from "../CreatePortalModal/CreatePortalModal.container";
import CustomModal from "../CustomModal/CustomModal.container";
import Form from "../Form/Form.container";
import NativeModal from "../NativeModal/NativeModal.container";
import Progress from "../Progress/Progress.container";
import Scroll from "../Scroll/Scroll.container";

export const accText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
    "                Praesent vel mi elementum, varius est vitae, aliquam lorem. Nam mauris ex, rutrum id fringilla vel,\n" +
    "                euismod et sem. Fusce non urna at sem mattis rutrum. Cras molestie turpis id tempus fermentum. Duis\n" +
    "                convallis lacus non ligula hendrerit tristique. Nam suscipit sit amet nunc bibendum ornare. Nullam sit\n" +
    "                amet dignissim lorem. Cras varius mauris felis, at vulputate lacus efficitur pharetra. Cras gravida\n" +
    "                cursus nulla, a rhoncus ipsum iaculis id. Aliquam dictum justo a dignissim tincidunt. Cras mattis,\n" +
    "                tellus eget tincidunt suscipit, augue est blandit nulla, id dictum nisl eros ac mauris. Suspendisse\n" +
    "                condimentum ante posuere odio iaculis eleifend.Mauris nec justo ut tellus condimentum malesuada sed sit\n" +
    "                amet magna. Donec fermentum massa nec arcu commodo facilisis. Nam massa risus, pellentesque at\n" +
    "                sollicitudin in, dapibus eget elit. Aenean sit amet viverra est. Praesent pretium semper efficitur.\n" +
    "                Aenean vitae eleifend est. Etiam eu eleifend nibh.Fusce eget blandit libero. Donec sed tempor diam, et\n" +
    "                dignissim ligula. Fusce nibh est, porta id bibendum id, placerat id eros. Nullam sed accumsan elit.\n" +
    "                Quisque finibus dolor ut nibh consectetur varius. Ut porta lectus vehicula nibh aliquet luctus.\n" +
    "                Phasellus tempus orci quis ligula pellentesque, ac euismod velit elementum. Donec vel pellentesque\n" +
    "                lorem. Maecenas vitae orci nec quam aliquam molestie vitae sed nunc. Nulla eleifend diam elit, sit amet\n" +
    "                porttitor justo vulputate eu. Aliquam eu leo lorem. Cras sodales purus et nisi commodo facilisis. Mauris\n" +
    "                vitae sem tellus. Donec tristique gravida cursus. Nullam mattis pulvinar diam. Cras ac elementum purus,\n" +
    "                at vulputate dolor.Sed semper scelerisque neque eu eleifend. Cras pulvinar est sed diam mattis blandit.";


const App = () => {
    return (
        <>

            <StyledNav>
                <StyledLink to="/">Form </StyledLink>
                <StyledLink to="/c">Loader </StyledLink>
                <StyledLink to="/a">Carousel </StyledLink>
                <StyledLink to="/b">Accordeon </StyledLink>
                <StyledLink to="/scroll">Scroll </StyledLink>
            </StyledNav>

            <Routes>
                <Route path="/a" element={<CarouselContainer/>}>
                </Route>

                <Route path="/b" element={<Accordeon>{accText}</Accordeon>}>
                </Route>

                <Route path="/c" element={<Progress/>}>
                </Route>

                <Route path="/scroll/*" element={<Scroll/>}>
                </Route>

                <Route path="/" element={<Form/>}>
                </Route>


            </Routes>
            <CustomModal/>
            <CreatePortalModalContainer
                forXButton={() => console.log("forXButton")}
                forCancelButton={() => console.log("forCancelButton")}
                forConfirmButton={() => console.log("forConfirmButton")}/>
            <NativeModal/>
        </>
    )
}

export default App;