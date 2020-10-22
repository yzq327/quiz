package com.twuc.shopping.po;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "products")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductPo {
    @Id
    @GeneratedValue
    private  int id;

    private String name;

    private int price;

    private String unit;

    private String Img;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "productPO")
    private List<OrderPo> orderPOs;
}
