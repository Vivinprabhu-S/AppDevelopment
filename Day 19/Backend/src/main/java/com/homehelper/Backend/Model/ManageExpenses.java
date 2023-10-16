package com.homehelper.Backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@Entity
@Table(name = "manage_expenses")
public class ManageExpenses {

    @Id
    @GeneratedValue
    private Long id;
    private String manage_expenses_total_amount;
    private String manage_expenses_type;
    private String manage_expenses_note;

    @CreationTimestamp
    private Date manage_expenses_added_date;

    public ManageExpenses() {
    }

    public ManageExpenses(String manage_expenses_total_amount, String manage_expenses_type,
                          String manage_expenses_note) {
        this.manage_expenses_total_amount = manage_expenses_total_amount;
        this.manage_expenses_type = manage_expenses_type;
        this.manage_expenses_note = manage_expenses_note;
    }
}