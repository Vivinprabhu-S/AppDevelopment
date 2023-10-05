package com.homehelper.Backend.Controller;

import org.springframework.http.ResponseEntity;
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
@RequestMapping("/auth")
@RequiredArgsConstructor

public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
  
        @RequestBody RegisterRequest request
        ) {
    	
    	System.out.println("Hello");
        return ResponseEntity.ok(authenticationService.register(request));
        
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest authenticate) {
                return ResponseEntity.ok(authenticationService.authenticate(authenticate));
    }
    
}
