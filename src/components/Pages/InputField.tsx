import styled from "styled-components";


const InputConatainer = styled.textarea`
    flex: 1;

	border-radius: 25px;
	border: 1px solid black;
	outline: none;
	resize: none;

	font-size: 15px;
	color: black;
    
    margin: 0 20px 20px 20px;
	padding: 30px;
`

const InputField = () => {
    return ( 
        <InputConatainer 
            name="Code" 
            id="Input-Field"
        />
    )
}

export default InputField;