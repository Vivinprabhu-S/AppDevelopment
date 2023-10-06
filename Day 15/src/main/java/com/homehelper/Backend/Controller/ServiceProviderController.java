package com.homehelper.Backend.Controller;

import com.homehelper.Backend.Dto.Request.ServiceProviderRequest;
import com.homehelper.Backend.Model.ServiceProvider;
import com.homehelper.Backend.Service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/serviceprovider")
public class ServiceProviderController {

    private final ServiceProviderService serviceProviderService;

    @Autowired
    public ServiceProviderController(ServiceProviderService serviceProviderService) {
        this.serviceProviderService = serviceProviderService;
    }

    @GetMapping("/")
    public ResponseEntity<List<ServiceProvider>> getAllServiceProviders() {
        List<ServiceProvider> serviceProviders = serviceProviderService.getAllServiceProviders();
        return ResponseEntity.ok(serviceProviders);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<ServiceProvider> getServiceProviderById(@PathVariable long id) {
        ServiceProvider serviceProvider = serviceProviderService.getServiceProviderById(id);
        if (serviceProvider != null) {
            return ResponseEntity.ok(serviceProvider);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
    public ResponseEntity<String> createServiceProvider(@RequestBody ServiceProviderRequest serviceProviderRequest) {
        boolean isDataSaved = serviceProviderService.createServiceProvider(serviceProviderRequest);
        return isDataSaved ? ResponseEntity.status(201).body("Added successfully") : ResponseEntity.status(403).body("Something went wrong");
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> updateServiceProvider(@PathVariable long id, @RequestBody ServiceProviderRequest serviceProviderRequest) {
        boolean isUpdated = serviceProviderService.updateServiceProvider(id, serviceProviderRequest);
        return isUpdated ? ResponseEntity.ok("Updated successfully") : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteServiceProvider(@PathVariable long id) {
        boolean isDeleted = serviceProviderService.deleteServiceProvider(id);
        return isDeleted ? ResponseEntity.ok("Deleted successfully") : ResponseEntity.notFound().build();
    }
}
