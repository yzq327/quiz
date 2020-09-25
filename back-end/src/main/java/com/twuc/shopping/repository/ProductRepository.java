package com.twuc.shopping.repository;

import antlr.collections.List;
import com.twuc.shopping.po.ProductPo;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository <ProductPo,Integer> {
    @Override
    List<ProductPo> findAll();
}
