package com.twuc.shopping.service;

import java.util.List;
import java.util.Optional;

import com.twuc.shopping.domain.Product;
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

    public List<ProductPo> findAll(){
        return  productRepository.findAll();
    }

    public void delete(int id){
        productRepository.deleteById(id);
    }

    public ProductPo save(Product product){
        ProductPo productPo =new ProductPo();
        productPo.setName(product.getName());
        productPo.setPrice(product.getPrice());
        productPo.setUnit(product.getUnit());
        productPo.setImg(product.getImg());
        productPo = productRepository.save(productPo);
        return productPo;
    }

    public Optional<ProductPo> findById(int productId) {
        return productRepository.findById(productId);
    }

}
