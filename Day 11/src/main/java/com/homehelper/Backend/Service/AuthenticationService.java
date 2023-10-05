package com.homehelper.Backend.Service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.homehelper.Backend.Dto.Request.AuthenticationRequest;
import com.homehelper.Backend.Dto.Request.RegisterRequest;
import com.homehelper.Backend.Dto.Response.AuthenticationResponse;
import com.homehelper.Backend.Model.User;
import com.homehelper.Backend.Model.Enum.Role;
import com.homehelper.Backend.Repository.UserRepository;
import com.homehelper.Backend.Util.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AuthenticationService { 

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request){
        var user = User.builder()
        .name(request.getName())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();     
    }

    public AuthenticationResponse authenticate (AuthenticationRequest request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
            )
        );
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }   
}