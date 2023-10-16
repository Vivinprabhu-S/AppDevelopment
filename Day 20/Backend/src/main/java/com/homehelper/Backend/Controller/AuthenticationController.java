package com.homehelper.Backend.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homehelper.Backend.Dto.Request.AuthenticationRequest;
import com.homehelper.Backend.Dto.Request.RegisterRequest;
import com.homehelper.Backend.Dto.Response.AuthenticationResponse;
import com.homehelper.Backend.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor

@CrossOrigin(origins = "http://localhost:3000")

public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public String register(
  
        @RequestBody RegisterRequest request
        ) {
    	
    	System.out.println("Register");
        return authenticationService.register(request);
        
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest authenticate) {
                return ResponseEntity.ok(authenticationService.authenticate(authenticate));
    }
}