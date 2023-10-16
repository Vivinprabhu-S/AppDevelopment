package com.homehelper.Backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import jakarta.persistence.Id;

@Data
@Builder
@Entity
@Table(name = "emergency_contacts")
public class EmergencyContacts {

    @Id
    @GeneratedValue
    private long Id;

    @Column(length = 50, nullable = false)
    private String emergency_contact_name;

    @Column(length = 30, nullable = false)
    private String emergency_contact_profession;

    @Column(length = 30, nullable = false)
    private String emergency_contact_email;

    @Column(length = 15, nullable = false)
    private String emergency_contact_contact;

    public EmergencyContacts(long id, String name, String profession, String email, String contact) {
        this.Id = id;
        this.emergency_contact_name = name;
        this.emergency_contact_profession = profession;
        this.emergency_contact_email = email;
        this.emergency_contact_contact = contact;
    }
    
    public EmergencyContacts(){
    	
    }
}
