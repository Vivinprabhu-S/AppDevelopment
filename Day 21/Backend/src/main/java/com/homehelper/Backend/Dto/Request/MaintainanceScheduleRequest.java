package com.homehelper.Backend.Dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MaintainanceScheduleRequest {
    private String maintainance_schedule_added_date;
    private String maintainance_schedule_title;
    private String maintainance_schedule_message;
    private String maintainance_schedule_ended_date;
    private String maintainance_schedule_status;
}
