package com.homehelper.Backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name="maintainance_schedule")


public class MaintainanceSchedule {
	
    @Id
    @GeneratedValue
    private long Id;
	
	private String maintainance_schedule_added_date;
	private String maintainance_schedule_title;
	private String maintainance_schedule_message;
	private String maintainance_schedule_ended_date;
	private String maintainance_schedule_status;
	
	public MaintainanceSchedule() {
		
	}

	public MaintainanceSchedule(long id, String maintainance_schedule_added_date, String maintainance_schedule_title,
			String maintainance_schedule_message, String maintainance_schedule_ended_date,
			String maintainance_schedule_status) {
		super();
		Id = id;
		this.maintainance_schedule_added_date = maintainance_schedule_added_date;
		this.maintainance_schedule_title = maintainance_schedule_title;
		this.maintainance_schedule_message = maintainance_schedule_message;
		this.maintainance_schedule_ended_date = maintainance_schedule_ended_date;
		this.maintainance_schedule_status = maintainance_schedule_status;
	}
}
