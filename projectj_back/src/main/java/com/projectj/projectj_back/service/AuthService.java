package com.projectj.projectj_back.service;

import org.springframework.http.ResponseEntity;

import com.projectj.projectj_back.dto.request.auth.SignInRequestDto;
import com.projectj.projectj_back.dto.response.auth.SignInResponseDto;

public interface AuthService {

    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);

}
