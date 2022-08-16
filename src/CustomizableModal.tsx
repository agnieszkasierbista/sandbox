import { StyledCustomizableModal } from "./App.styled"

export const CustomizableModal = () => {
    return(
        <StyledCustomizableModal>
            <section>
                <h2>Choose your background:</h2>
                <input type="radio" name="modalBackground" value="transparent" id="transparent"/>
                <label htmlFor="transparent">Transparent</label><br/>
                <input type="radio" name="modalBackground" value="blured" id="blured"/>
                <label htmlFor="blured">Blur</label><br/>
                <input type="radio" name="modalBackground" value="colored" id="colored"/>
                <label htmlFor="colored">Color</label><br/>
            </section>

            <section>
                <h2>Choose your color:</h2>
                <input type="radio" name="modalColor" value="blue" id="blue"/>
                <label htmlFor="blue">Blue</label><br/>
                <input type="radio" name="modalColor" value="yellow" id="yellow"/>
                <label htmlFor="yellow">Yellow</label><br/>
                <input type="radio" name="modalColor" value="green" id="green"/>
                <label htmlFor="green">Green</label><br/>
            </section>

            <section>
                <h2>Choose your creator:</h2>
                <input type="radio" name="modalCreator" value="portal" id="portal"/>
                <label htmlFor="portal">Protal</label><br/>
                <input type="radio" name="modalCreator" value="native" id="native"/>
                <label htmlFor="native">Native</label><br/>
                <input type="radio" name="modalCreator" value="custom" id="custom"/>
                <label htmlFor="custom">Custom</label><br/>
            </section>

            <button>Create modal!</button>
        </StyledCustomizableModal>
    )
}