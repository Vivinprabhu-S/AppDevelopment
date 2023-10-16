package com.homehelper.Backend.Repository;

import com.homehelper.Backend.Model.ManageExpenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManageExpensesRepository extends JpaRepository<ManageExpenses, Long> {
}
