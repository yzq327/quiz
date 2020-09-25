package com.twuc.shopping.service;

import antlr.collections.List;
import com.twuc.shopping.po.ProductPo;
import com.twuc.shopping.repository.ProductRepository;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;

    }
    public List<ProductPo> find(int id){
        productRepository.findAll();
    }

    public void delete(int id){
        productRepository.deleteById(id);
    }


}
