import styled from "styled-components";
import { User, LogIn } from "lucide-react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: silver;
  color: white;
  padding: 0px 20px;
`;

const Logotmp = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.button`
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

export default function Header(){
    return(
    <Container>
        <Logotmp>
            Project J
        </Logotmp>
        <UserActions>
        <IconButton>
            <User size={24} />
        </IconButton>
        <IconButton>
            <LogIn size={24} />
        </IconButton>
      </UserActions>
    </Container>
    );  
}