package com.homehelper.Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.homehelper.Backend.Model.User;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User,String> {

    Optional<User> findByEmail(String email);
    
}
