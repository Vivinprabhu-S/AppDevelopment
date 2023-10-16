package com.homehelper.Backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name="service_providers")

public class ServiceProvider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int serviceprovider_id;
	
	@Column(length=50 , nullable=false)
	private String serviceprovider_name;
	@Column(length=30 , nullable=false)
	private String serviceprovider_email;
	@Column(length=15 , nullable=false)
	private String serviceprovider_phonenumber;
	@Column(length=30 , nullable=false)
	private String serviceprovider_profession;
	@Column(length=100 , nullable=false)
	private String serviceprovider_company;
	
	ServiceProvider(){
		
	}
	
	public ServiceProvider(int id, String name, String email, String phoneNumber, String profession , String company) {
	    this.serviceprovider_id = id;
	    this.serviceprovider_name = name;
	    this.serviceprovider_email = email;
	    this.serviceprovider_phonenumber = phoneNumber;
	    this.serviceprovider_profession = profession;
	    this.serviceprovider_company = company;
	}

}