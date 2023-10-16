package com.homehelper.Backend.Dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor


public class ManageExpensesRequest {
    private String manage_expenses_total_amount;
    private String manage_expenses_type;
    private String manage_expenses_note;
}
