import styled from "styled-components";

interface Props {
    type : 'text' | 'password';
    label?: string
    placeholder?: string;
}

const InputBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0px;
`;

const InputBoxLabel = styled.div`
    display: flex;
    color: rgba(0,0,0,0.7);
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
`

const InputBoxBox = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    padding: 11px 16px 11px 0px;
    display: flex;
    align-items: center;
`;

const InputBoxContent = styled.input.attrs<{ inputType?: string, inputPlaceholder?: string}>(
    (props) => ({
        type: props.inputType || "text",
        placeholder: props.inputPlaceholder || ""
    })
)`
    border: none;
    background: none;
    outline: none;
    flex: 1;
    color:rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
`

export default function InputBox({type, label, placeholder}:Props){
    return(
        <InputBoxContainer>
            {label !== undefined && (<InputBoxLabel>{label}</InputBoxLabel>) }
            <InputBoxBox>
                <InputBoxContent inputType={type} inputPlaceholder={placeholder} />
            </InputBoxBox> 
        </InputBoxContainer>
    )
}