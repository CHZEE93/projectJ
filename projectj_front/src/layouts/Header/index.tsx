import styled from "styled-components";
import IconButton from "../../Components/IconButton";
import { LogIn, User, UserPlus } from "lucide-react";

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



export default function Header(){
    return(
    <Container>
        <Logotmp>
            Project J
        </Logotmp>
        <UserActions>
          <IconButton icon={<UserPlus size={24} />} url="./signup"/>
          <IconButton icon={<LogIn size={24} />} url="./login"/>
        </UserActions>
    </Container>
    );  
}