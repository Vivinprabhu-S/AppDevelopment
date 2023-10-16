package com.homehelper.Backend.Service;

import java.util.List;

import com.homehelper.Backend.Dto.Request.EmergencyContactRequest;
import com.homehelper.Backend.Model.EmergencyContacts;

public interface EmergencyContactsService {
    List<EmergencyContacts> getAllEmergencyContacts();

    EmergencyContacts getEmergencyContactsById(Long id);

    boolean createEmergencyContacts(EmergencyContactRequest emergencyContactsRequest);

    boolean updateEmergencyContacts(Long id, EmergencyContactRequest emergencyContactsRequest);

    boolean deleteEmergencyContacts(Long id);
}
