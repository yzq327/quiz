package com.twuc.shopping.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductVo {
    private  int id;

    private String name;

    private int price;

    private String unit;

    private String Img;
}
