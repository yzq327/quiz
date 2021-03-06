package com.twuc.shopping.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Product {
    @NotNull
    private String name;

    @NotNull
    @Min(0)
    private int price;

    @NotNull
    private String unit;

    @NotNull
    private String Img;
}
