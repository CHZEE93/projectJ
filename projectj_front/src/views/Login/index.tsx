import styled from "styled-components";
import InputBox from "../../Components/InputBox";
import WideButton from "../../Components/WideButton";
import { SignInRequestDto } from "../../apis/request/auth";
import { useState } from "react";
import { SignInResponseDto } from "../../apis/response/auth";
import ResponseDto from "../../apis/response/response.dto";
import { MAIN_PATH } from "../../constant";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { signInRequest } from "../../apis";

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

    //쿠키 상태
    const[cookies, setCookie] = useCookies();

    //네비게이터
    const navigator = useNavigate();

    const [email, setEmail] = useState<string>('zndn887@naver.com');
    
    const [password, setPassword] = useState<string>('test');

    const [error, setError] = useState<boolean>(false);

    const signInResponse = (responseBody: SignInResponseDto | ResponseDto | null) => {
      
      if(!responseBody){
        alert('네트워크 이상입니다.');
        return;
      }

      const {code} = responseBody;
        if(code === 'DBE'){
          alert('데이터베이스 오류입니다.');
        }
        if(code === 'SF' || code === 'VF'){
          setError(true);
        }
        if(code !== 'SU'){
          return;
        }
        else
        {
          alert('성공!');
        }

        const {token, expirationTime} = responseBody as SignInResponseDto;
        const now = new Date().getTime();
        const expires = new Date(now + expirationTime * 100);

        setCookie('accessToken', token, {expires, path:MAIN_PATH()});
        navigator(MAIN_PATH());
    }

    const onSignInButtonClickHandler = () => {
      const requestBody: SignInRequestDto = {email, password};
      signInRequest(requestBody).then(signInResponse);
    }

    return(
    <LoginContainer>
        <LoginBox>
            <Title>로그인</Title>
            <InputBox type="text" placeholder="아이디" />
            <InputBox type="password" placeholder="비밀번호"/>
            <WideButton text="LOGIN" onClick={onSignInButtonClickHandler}/>
        </LoginBox>
    </LoginContainer>
    );
}