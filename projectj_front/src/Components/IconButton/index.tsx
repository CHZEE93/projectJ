import styled from "styled-components";
import { User, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props{
    icon: React.ReactElement; // React 요소를 받는 경우
    url: string
}

const Component = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color:white;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export default function IconButton({icon, url} : Props){

    const navigate = useNavigate();

    //클릭시 이동 이벤트
    const onComponetClickHandler = (url:string) => {
        navigate(url)
    }

    return(
        <Component onClick={() => onComponetClickHandler(url)}>
            {icon}
        </Component>
    );
}