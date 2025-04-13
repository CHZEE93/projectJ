import axios from "axios";
import { SignInRequestDto } from "./request/auth";
import { SignInResponseDto} from "./response/auth";
import ResponseDto from "./response/response.dto";

const DOMAIN = "http://localhost:4000";

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;

export const signInRequest =  async (requestBody: SignInRequestDto ) => {
    const result = await axios.post(SIGN_IN_URL(), requestBody)
                    .then(response =>{
                        const responseBody : SignInResponseDto = response.data;
                        return responseBody;
                    })
                    .catch(error => {
                        if(!error.response.data) return null;
                        const responseBody: ResponseDto = error.response.data;
                        return responseBody;
                    });
    return result;
}