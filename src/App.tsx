import { Route, Routes } from "react-router-dom";
import { Accordeon } from "./Accordeon";
import { StyledLink, StyledNav } from "./App.styled";
import { CarouselContainer } from "./CarouselContainer";
import CreatePortalModalContainer from "./CreatePortalModal.container";
import CustomModal from "./CustomModal.container";
import Form from "./Form.container";
import NativeModal from "./NativeModal.container";
import Progress from "./Progress.container";
import Scroll  from "./Scroll.container";

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
                <Route path="/a" element={<CarouselContainer />}>
                </Route>

                <Route path="/b" element={<Accordeon />}>
                </Route>

                <Route path="/c" element={<Progress />}>
                </Route>

                <Route path="/scroll/*" element={<Scroll />}>
                </Route>

                <Route path="/" element={<Form />}>
                </Route>




            </Routes>
            <CustomModal />
            <CreatePortalModalContainer
                forXButton={() => console.log("forXButton")}
                forCancelButton={() => console.log("forCancelButton")}
                forConfirmButton={() => console.log("forConfirmButton")} />
            <NativeModal />
        </>
    )
}

export default App;