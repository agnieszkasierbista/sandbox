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

                <Route path="/b" element={<Accordeon/>}>
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