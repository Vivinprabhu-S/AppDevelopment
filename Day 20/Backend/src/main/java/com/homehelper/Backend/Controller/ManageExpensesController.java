package com.homehelper.Backend.Controller;

import com.homehelper.Backend.Dto.Request.ManageExpensesRequest;
import com.homehelper.Backend.Model.ManageExpenses;
import com.homehelper.Backend.Service.ManageExpensesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/manageexpenses")

@CrossOrigin(origins = "http://localhost:3000")


public class ManageExpensesController {

    private final ManageExpensesService manageExpensesService;

    @Autowired
    public ManageExpensesController(ManageExpensesService manageExpensesService) {
        this.manageExpensesService = manageExpensesService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<ManageExpenses>> getAllManageExpenses() {
        List<ManageExpenses> manageExpenses = manageExpensesService.getAllManageExpenses();
        return ResponseEntity.ok(manageExpenses);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<ManageExpenses> getManageExpensesById(@PathVariable Long id) {
        ManageExpenses manageExpenses = manageExpensesService.getManageExpensesById(id);
        if (manageExpenses != null) {
            return ResponseEntity.ok(manageExpenses);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
    public ResponseEntity<String> createManageExpenses(@RequestBody ManageExpensesRequest manageExpensesRequest) {
        try {
            boolean isDataSaved = manageExpensesService.createManageExpenses(manageExpensesRequest);
            if (isDataSaved) {
                return ResponseEntity.status(201).body("Manage Expenses added successfully");
            } else {
                return ResponseEntity.status(403).body("Failed to add Manage Expenses");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> updateManageExpenses(@PathVariable Long id,
                                                      @RequestBody ManageExpensesRequest manageExpensesRequest) {
        boolean isUpdated = manageExpensesService.updateManageExpenses(id, manageExpensesRequest);
        return isUpdated ? ResponseEntity.ok("Manage Expenses updated successfully") : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteManageExpenses(@PathVariable Long id) {
        boolean isDeleted = manageExpensesService.deleteManageExpenses(id);
        return isDeleted ? ResponseEntity.ok("Manage Expenses deleted successfully") : ResponseEntity.notFound().build();
    }
}
