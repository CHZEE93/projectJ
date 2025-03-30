import styled from "styled-components";
import InputBox from "../../Components/InputBox";
import WideButton from "../../Components/WideButton";

const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #babfbd;
`;

const SignupBox = styled.div`
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


export default function Signup(){
    return(
    <SignupContainer>
        <SignupBox>
            <Title>회원가입</Title>
            <InputBox type="text" placeholder="이메일" required={true} />
            <InputBox type="text" placeholder="이름" required={true} />
            <InputBox type="password" placeholder="비밀번호" required={true} />
            <InputBox type="password" placeholder="비밀번호 확인" required={true} />
            <WideButton text="SIGNUP" />
        </SignupBox>
    </SignupContainer>
    );
}