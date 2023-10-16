package com.homehelper.Backend.Dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class EmergencyContactRequest {
	
	private String emergency_contact_name;
	private String emergency_contact_profession;
	private String emergency_contact_email;
	private String emergency_contact_contact;
	
}
