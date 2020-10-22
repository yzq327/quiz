package com.twuc.shopping.po;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderPo {
    @Id
    @GeneratedValue
    private  int id;

    private String name;

    private int price;

    private int amount;

    private String unit;

    @ManyToOne
    private ProductPo productPO;
}
