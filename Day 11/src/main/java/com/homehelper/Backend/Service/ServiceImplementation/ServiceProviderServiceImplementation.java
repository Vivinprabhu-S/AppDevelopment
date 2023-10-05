package com.homehelper.Backend.Service.ServiceImplementation;

import com.homehelper.Backend.Dto.Request.ServiceProviderRequest;
import com.homehelper.Backend.Model.ServiceProvider;
import com.homehelper.Backend.Repository.ServiceProviderRepository;
import com.homehelper.Backend.Service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ServiceProviderServiceImplementation implements ServiceProviderService {

    private final ServiceProviderRepository serviceProviderRepository;

    @Autowired
    public ServiceProviderServiceImplementation(ServiceProviderRepository serviceProviderRepository) {
        this.serviceProviderRepository = serviceProviderRepository;
    }

    @Override
    public List<ServiceProvider> getAllServiceProviders() {
        return serviceProviderRepository.findAll();
    }	

    @Override
    public ServiceProvider getServiceProviderById(long id) {
        Optional<ServiceProvider> serviceProviderOptional = serviceProviderRepository.findById(id);
        return serviceProviderOptional.orElse(null);
    }

    @Override
    public boolean createServiceProvider(ServiceProviderRequest serviceProviderRequest) {
        ServiceProvider serviceProvider = ServiceProvider.builder()
                .serviceprovider_name(serviceProviderRequest.getServiceprovider_name())
                .serviceprovider_email(serviceProviderRequest.getServiceprovider_email())
                .serviceprovider_phonenumber(serviceProviderRequest.getServiceprovider_phonenumber())
                .serviceprovider_profession(serviceProviderRequest.getServiceprovider_profession())
                .serviceprovider_company(serviceProviderRequest.getServiceprovider_company())
                .build();

        serviceProviderRepository.save(serviceProvider);
        return true;
    }

    @Override
    public boolean updateServiceProvider(long id, ServiceProviderRequest serviceProviderRequest) {
        Optional<ServiceProvider> serviceProviderOptional = serviceProviderRepository.findById(id);
        if (serviceProviderOptional.isPresent()) {
            ServiceProvider serviceProvider = serviceProviderOptional.get();
            serviceProvider.setServiceprovider_name(serviceProviderRequest.getServiceprovider_name());
            serviceProvider.setServiceprovider_email(serviceProviderRequest.getServiceprovider_email());
            serviceProvider.setServiceprovider_phonenumber(serviceProviderRequest.getServiceprovider_phonenumber());
            serviceProvider.setServiceprovider_profession(serviceProviderRequest.getServiceprovider_profession());
            serviceProvider.setServiceprovider_company(serviceProviderRequest.getServiceprovider_company());

            serviceProviderRepository.save(serviceProvider);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteServiceProvider(long id) {
        Optional<ServiceProvider> serviceProviderOptional = serviceProviderRepository.findById(id);
        if (serviceProviderOptional.isPresent()) {
            serviceProviderRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
