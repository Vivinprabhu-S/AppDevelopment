package com.homehelper.Backend.Service.ServiceImplementation;

import com.homehelper.Backend.Dto.Request.MaintainanceScheduleRequest;
import com.homehelper.Backend.Model.MaintainanceSchedule;
import com.homehelper.Backend.Repository.MaintainanceScheduleRepository;
import com.homehelper.Backend.Service.MaintainanceScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaintainanceScheduleServiceImplementation implements MaintainanceScheduleService {
    private final MaintainanceScheduleRepository maintainanceScheduleRepository;

    @Autowired
    public MaintainanceScheduleServiceImplementation(MaintainanceScheduleRepository maintainanceScheduleRepository) {
        this.maintainanceScheduleRepository = maintainanceScheduleRepository;
    }

    @Override
    public List<MaintainanceSchedule> getAllMaintainanceSchedules() {
        return maintainanceScheduleRepository.findAll();
    }

    @Override
    public MaintainanceSchedule getMaintainanceScheduleById(long id) {
        Optional<MaintainanceSchedule> optionalMaintainanceSchedule = maintainanceScheduleRepository.findById(id);
        return optionalMaintainanceSchedule.orElse(null);
    }

    @Override
    public boolean createMaintainanceSchedule(MaintainanceScheduleRequest maintainanceScheduleRequest) {
        try {
            MaintainanceSchedule maintainanceSchedule = new MaintainanceSchedule();
            maintainanceSchedule.setMaintainance_schedule_added_date(maintainanceScheduleRequest.getMaintainance_schedule_added_date());
            maintainanceSchedule.setMaintainance_schedule_title(maintainanceScheduleRequest.getMaintainance_schedule_title());
            maintainanceSchedule.setMaintainance_schedule_message(maintainanceScheduleRequest.getMaintainance_schedule_message());
            maintainanceSchedule.setMaintainance_schedule_ended_date(maintainanceScheduleRequest.getMaintainance_schedule_ended_date());
            maintainanceSchedule.setMaintainance_schedule_status(maintainanceScheduleRequest.getMaintainance_schedule_status());

            maintainanceScheduleRepository.save(maintainanceSchedule);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateMaintainanceSchedule(long id, MaintainanceScheduleRequest maintainanceScheduleRequest) {
        try {
            Optional<MaintainanceSchedule> optionalMaintainanceSchedule = maintainanceScheduleRepository.findById(id);
            if (optionalMaintainanceSchedule.isPresent()) {
                MaintainanceSchedule maintainanceSchedule = optionalMaintainanceSchedule.get();
                maintainanceSchedule.setMaintainance_schedule_added_date(maintainanceScheduleRequest.getMaintainance_schedule_added_date());
                maintainanceSchedule.setMaintainance_schedule_title(maintainanceScheduleRequest.getMaintainance_schedule_title());
                maintainanceSchedule.setMaintainance_schedule_message(maintainanceScheduleRequest.getMaintainance_schedule_message());
                maintainanceSchedule.setMaintainance_schedule_ended_date(maintainanceScheduleRequest.getMaintainance_schedule_ended_date());
                maintainanceSchedule.setMaintainance_schedule_status(maintainanceScheduleRequest.getMaintainance_schedule_status());

                maintainanceScheduleRepository.save(maintainanceSchedule);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteMaintainanceSchedule(long id) {
        try {
            maintainanceScheduleRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}