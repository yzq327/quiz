package com.twuc.shopping.service;

import com.twuc.shopping.repository.ProductRepository;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;

    }
    public void find(int id){
        productRepository.findById(id);
    }

    public void delete(int id){
        productRepository.deleteById(id);
    }

}
