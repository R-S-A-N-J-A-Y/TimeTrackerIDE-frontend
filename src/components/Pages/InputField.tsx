import styled from "styled-components";

interface Props{
    Name: string;
}

const Container = styled.div`
    position: relative;
    flex: 1;
`
const OutputConatainer = styled.textarea`
    height: 88%;
    width: 100%;
	border-radius: 25px;
	border: 1px solid black;
	outline: none;
	resize: none;

	font-size: 15px;
	color: black;

	padding: 30px;
`

const Input = styled.h1`
    position: absolute;
    left: 20px;
    top: 20px;
`

const InputField = ( { Name } : Props ) => {
    return ( 
        <Container>
            <Input className="fs-4">{Name}</Input>
            <OutputConatainer 
                name="Code" 
                id="Input-Field"
            />
        </Container>
    )
}

export default InputField;