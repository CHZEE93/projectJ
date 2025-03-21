import styled from "styled-components";
import InputBox from "../../Components/InputBox";
import WideButton from "../../Components/WideButton";

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #babfbd;
`;

const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Button = styled.button`
  width: 100%;
  p
`;


export default function Login(){
    return(
    <LoginContainer>
        <LoginBox>
            <Title>로그인</Title>
            <InputBox type="text" placeholder="아이디" />
            <InputBox type="password" placeholder="비밀번호"/>
            <WideButton text="LOGIN" />
        </LoginBox>
    </LoginContainer>
    );
}