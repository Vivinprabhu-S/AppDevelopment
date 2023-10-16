package com.homehelper.Backend.Service;

import com.homehelper.Backend.Dto.Request.MaintainanceScheduleRequest;
import com.homehelper.Backend.Model.MaintainanceSchedule;

import java.util.List;

public interface MaintainanceScheduleService {
    List<MaintainanceSchedule> getAllMaintainanceSchedules();

    MaintainanceSchedule getMaintainanceScheduleById(long id);

    boolean createMaintainanceSchedule(MaintainanceScheduleRequest maintainanceScheduleRequest);

    boolean updateMaintainanceSchedule(long id, MaintainanceScheduleRequest maintainanceScheduleRequest);

    boolean deleteMaintainanceSchedule(long id);
}