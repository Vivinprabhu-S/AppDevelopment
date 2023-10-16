package com.homehelper.Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homehelper.Backend.Model.EmergencyContacts;

@Repository

public interface EmergencyContactsRepository extends JpaRepository<EmergencyContacts , Long> {

}
