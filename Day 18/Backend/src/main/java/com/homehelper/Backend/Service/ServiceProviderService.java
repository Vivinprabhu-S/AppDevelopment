package com.homehelper.Backend.Service;

import com.homehelper.Backend.Dto.Request.ServiceProviderRequest;
import com.homehelper.Backend.Model.ServiceProvider;

import java.util.List;

public interface ServiceProviderService {
    List<ServiceProvider> getAllServiceProviders();
    ServiceProvider getServiceProviderById(long id);
    boolean createServiceProvider(ServiceProviderRequest serviceProviderRequest);
    boolean updateServiceProvider(long id, ServiceProviderRequest serviceProviderRequest);
    boolean deleteServiceProvider(long id);
}
