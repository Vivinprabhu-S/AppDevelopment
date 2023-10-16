package com.homehelper.Backend.Service;

import com.homehelper.Backend.Dto.Request.ManageExpensesRequest;
import com.homehelper.Backend.Model.ManageExpenses;

import java.util.List;

public interface ManageExpensesService {
    List<ManageExpenses> getAllManageExpenses();

    ManageExpenses getManageExpensesById(Long id);

    boolean createManageExpenses(ManageExpensesRequest manageExpensesRequest);

    boolean updateManageExpenses(Long id, ManageExpensesRequest manageExpensesRequest);

    boolean deleteManageExpenses(Long id);
}
