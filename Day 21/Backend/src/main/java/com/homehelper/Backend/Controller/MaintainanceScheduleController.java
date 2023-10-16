package com.homehelper.Backend.Controller;

import com.homehelper.Backend.Dto.Request.MaintainanceScheduleRequest;
import com.homehelper.Backend.Model.MaintainanceSchedule;
import com.homehelper.Backend.Service.MaintainanceScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/maintenanceschedules")

@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")

public class MaintainanceScheduleController {
    private final MaintainanceScheduleService maintainanceScheduleService;

    @Autowired
    public MaintainanceScheduleController(MaintainanceScheduleService maintainanceScheduleService) {
        this.maintainanceScheduleService = maintainanceScheduleService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<MaintainanceSchedule>> getAllMaintainanceSchedules() {
        List<MaintainanceSchedule> maintainanceSchedules = maintainanceScheduleService.getAllMaintainanceSchedules();
        return ResponseEntity.ok(maintainanceSchedules);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<MaintainanceSchedule> getMaintainanceScheduleById(@PathVariable Long id) {
        MaintainanceSchedule maintainanceSchedule = maintainanceScheduleService.getMaintainanceScheduleById(id);
        if (maintainanceSchedule != null) {
            return ResponseEntity.ok(maintainanceSchedule);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
    public ResponseEntity<String> createMaintainanceSchedule(@RequestBody MaintainanceScheduleRequest maintainanceScheduleRequest) {
        boolean isDataSaved = maintainanceScheduleService.createMaintainanceSchedule(maintainanceScheduleRequest);
        if (isDataSaved) {
            return ResponseEntity.status(201).body("Maintainance Schedule added successfully");
        } else {
            return ResponseEntity.status(500).body("Failed to add");
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> updateMaintainanceSchedule(@PathVariable Long id, @RequestBody MaintainanceScheduleRequest maintainanceScheduleRequest) {
        boolean isUpdated = maintainanceScheduleService.updateMaintainanceSchedule(id, maintainanceScheduleRequest);
        return isUpdated ? ResponseEntity.ok("Updated successfully") : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMaintainanceSchedule(@PathVariable Long id) {
        boolean isDeleted = maintainanceScheduleService.deleteMaintainanceSchedule(id);
        return isDeleted ? ResponseEntity.ok("Deleted successfully") : ResponseEntity.notFound().build();
    }
}
