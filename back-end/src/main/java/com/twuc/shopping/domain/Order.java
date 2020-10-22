package com.twuc.shopping.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Order {
    @NotNull
    private String name;

    @NotNull
    private int price;

    @NotNull
    private int amount;

    @NotNull
    private String unit;
}
