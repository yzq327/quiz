package com.twuc.shopping.po;


import com.twuc.shopping.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

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

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orderPo")
    private List<ProductPo> productPos;

}
