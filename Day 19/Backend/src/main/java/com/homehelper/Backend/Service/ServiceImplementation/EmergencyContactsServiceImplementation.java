package com.homehelper.Backend.Service.ServiceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homehelper.Backend.Dto.Request.EmergencyContactRequest;
import com.homehelper.Backend.Model.EmergencyContacts;
import com.homehelper.Backend.Repository.EmergencyContactsRepository;
import com.homehelper.Backend.Service.EmergencyContactsService;

import java.util.List;
import java.util.Optional;

@Service
public class EmergencyContactsServiceImplementation implements EmergencyContactsService {
    private final EmergencyContactsRepository emergencyContactsRepository;

    @Autowired
    public EmergencyContactsServiceImplementation(EmergencyContactsRepository emergencyContactsRepository) {
        this.emergencyContactsRepository = emergencyContactsRepository;
    }

    @Override
    public List<EmergencyContacts> getAllEmergencyContacts() {
        return emergencyContactsRepository.findAll();
    }

    @Override
    public EmergencyContacts getEmergencyContactsById(Long id) {
        Optional<EmergencyContacts> optionalEmergencyContacts = emergencyContactsRepository.findById(id);
        return optionalEmergencyContacts.orElse(null);
    }

    @Override
    public boolean createEmergencyContacts(EmergencyContactRequest emergencyContactsRequest) {
        try {
            EmergencyContacts emergencyContacts = new EmergencyContacts();
            emergencyContacts.setEmergency_contact_name(emergencyContactsRequest.getEmergency_contact_name());
            emergencyContacts.setEmergency_contact_profession(emergencyContactsRequest.getEmergency_contact_profession());
            emergencyContacts.setEmergency_contact_email(emergencyContactsRequest.getEmergency_contact_email());
            emergencyContacts.setEmergency_contact_contact(emergencyContactsRequest.getEmergency_contact_contact());

            emergencyContactsRepository.save(emergencyContacts);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateEmergencyContacts(Long id, EmergencyContactRequest emergencyContactsRequest) {
        try {
            Optional<EmergencyContacts> optionalEmergencyContacts = emergencyContactsRepository.findById(id);
            if (optionalEmergencyContacts.isPresent()) {
                EmergencyContacts emergencyContacts = optionalEmergencyContacts.get();
                emergencyContacts.setEmergency_contact_name(emergencyContactsRequest.getEmergency_contact_name());
                emergencyContacts.setEmergency_contact_profession(emergencyContactsRequest.getEmergency_contact_profession());
                emergencyContacts.setEmergency_contact_email(emergencyContactsRequest.getEmergency_contact_email());
                emergencyContacts.setEmergency_contact_contact(emergencyContactsRequest.getEmergency_contact_contact());

                emergencyContactsRepository.save(emergencyContacts);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteEmergencyContacts(Long id) {
        try {
            emergencyContactsRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
