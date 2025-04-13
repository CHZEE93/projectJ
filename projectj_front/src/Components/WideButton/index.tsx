import styled from "styled-components";

interface Props{
    text: string;
    onClick?: () => void; // 클릭 이벤트 핸들러 (선택적)
}

const ButtonContainer = styled.div`
    display:flex;
    width: 100%;
`

const ButtonContent = styled.button`
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

export default function WideButton({text, onClick}:Props){

    return(
    <ButtonContainer>
        <ButtonContent onClick={onClick}>{text}</ButtonContent>
    </ButtonContainer>
    );
}