package com.homehelper.Backend.Service.ServiceImplementation;

import com.homehelper.Backend.Dto.Request.ManageExpensesRequest;
import com.homehelper.Backend.Model.ManageExpenses;
import com.homehelper.Backend.Repository.ManageExpensesRepository;
import com.homehelper.Backend.Service.ManageExpensesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManageExpensesServiceImplementation implements ManageExpensesService {

    private final ManageExpensesRepository manageExpensesRepository;

    @Autowired
    public ManageExpensesServiceImplementation(ManageExpensesRepository manageExpensesRepository) {
        this.manageExpensesRepository = manageExpensesRepository;
    }

    @Override
    public List<ManageExpenses> getAllManageExpenses() {
        return manageExpensesRepository.findAll();
    }

    @Override
    public ManageExpenses getManageExpensesById(Long id) {
        return manageExpensesRepository.findById(id).orElse(null);
    }

    @Override
    public boolean createManageExpenses(ManageExpensesRequest manageExpensesRequest) {
        try {
            ManageExpenses manageExpenses = new ManageExpenses(
                    manageExpensesRequest.getManage_expenses_total_amount(),
                    manageExpensesRequest.getManage_expenses_type(),
                    manageExpensesRequest.getManage_expenses_note()
            );

            manageExpensesRepository.save(manageExpenses);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateManageExpenses(Long id, ManageExpensesRequest manageExpensesRequest) {
        try {
            ManageExpenses existingManageExpenses = manageExpensesRepository.findById(id).orElse(null);
            if (existingManageExpenses != null) {
                existingManageExpenses.setManage_expenses_total_amount(manageExpensesRequest.getManage_expenses_total_amount());
                existingManageExpenses.setManage_expenses_type(manageExpensesRequest.getManage_expenses_type());
                existingManageExpenses.setManage_expenses_note(manageExpensesRequest.getManage_expenses_note());

                manageExpensesRepository.save(existingManageExpenses);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteManageExpenses(Long id) {
        try {
            manageExpensesRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
