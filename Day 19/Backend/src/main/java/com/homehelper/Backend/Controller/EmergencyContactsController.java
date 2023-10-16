package com.homehelper.Backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homehelper.Backend.Dto.Request.EmergencyContactRequest;
import com.homehelper.Backend.Model.EmergencyContacts;
import com.homehelper.Backend.Service.EmergencyContactsService;

@RestController
@RequestMapping("/api/v1/emergencycontacts")

@CrossOrigin(origins = "http://localhost:3000")


public class EmergencyContactsController {
	
    private final EmergencyContactsService emergencyContactsService;

    @Autowired
    public EmergencyContactsController(EmergencyContactsService emergencyContactsService) {
        this.emergencyContactsService = emergencyContactsService;
    }


    @GetMapping("/get")
    public ResponseEntity<List<EmergencyContacts>> getAllEmergencyContacts() {
        List<EmergencyContacts> emergencyContacts = emergencyContactsService.getAllEmergencyContacts();
        return ResponseEntity.ok(emergencyContacts);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<EmergencyContacts> getEmergencyContactsById(@PathVariable long id) {
    	EmergencyContacts emergencyContacts = emergencyContactsService.getEmergencyContactsById(id);
        if (emergencyContacts != null) {
            return ResponseEntity.ok(emergencyContacts);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
    public ResponseEntity<String> createEmergencyContacts(@RequestBody EmergencyContactRequest emergencyContactsRequest) {
        try {
            boolean isDataSaved = emergencyContactsService.createEmergencyContacts(emergencyContactsRequest);
            if (isDataSaved) {
                return ResponseEntity.status(201).body("Emergency Contact added successfully");
            } else {
                return ResponseEntity.status(403).body("Failed to add");
            }
        } catch (Exception e) {
            e.printStackTrace(); 
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> updateEmergencyContacts(@PathVariable long id, @RequestBody EmergencyContactRequest emergencyContactsRequest) {
        boolean isUpdated = emergencyContactsService.updateEmergencyContacts(id, emergencyContactsRequest);
        return isUpdated ? ResponseEntity.ok("Updated successfully") : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmergencyContacts(@PathVariable long id) {
        boolean isDeleted = emergencyContactsService.deleteEmergencyContacts(id);
        return isDeleted ? ResponseEntity.ok("Deleted successfully") : ResponseEntity.notFound().build();
    }

}
