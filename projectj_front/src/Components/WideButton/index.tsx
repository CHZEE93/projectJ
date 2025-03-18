import styled from "styled-components";

interface Props{
    text: string;
}

const ButtonContainer = styled.div`
    display:flex;
    width: 100%;
`

const ButtonContent = styled.button.attrs<{ onClick?: () => void}>((props) =>({
    onClick: props.onClick
}))`
    flex: 1;
    padding: 10px 0px;
    background-color:rgb(115, 158, 141);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
    background-color:rgb(147, 175, 164);
    }
`

export default function WideButton({text}:Props){

    const testHandler = () => {
        alert('test')
    }

    return(
    <ButtonContainer>
        <ButtonContent onClick={testHandler}>{text}</ButtonContent>
    </ButtonContainer>
    );
}