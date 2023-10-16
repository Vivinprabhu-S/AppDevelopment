package com.homehelper.Backend.Repository;

import com.homehelper.Backend.Model.MaintainanceSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaintainanceScheduleRepository extends JpaRepository<MaintainanceSchedule, Long> {
}
