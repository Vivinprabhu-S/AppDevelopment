package com.homehelper.Backend.Dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ServiceProviderRequest {

    private String serviceprovider_name;
    private String serviceprovider_email;
    private String serviceprovider_phonenumber;
    private String serviceprovider_profession;
    private String serviceprovider_company;
      
}