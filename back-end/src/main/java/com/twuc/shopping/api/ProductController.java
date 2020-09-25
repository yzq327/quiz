package com.twuc.shopping.api;

import antlr.collections.List;
import com.twuc.shopping.po.ProductPo;
import com.twuc.shopping.repository.ProductRepository;
import com.twuc.shopping.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ProductController {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ProductService productService;

    @CrossOrigin
    @GetMapping("/products")
    public ResponseEntity  <List<ProductPo>> getList{
        productService.find();
        //List<ProductPo> users =productService.findAll();
        return ResponseEntity.ok(users);
    }
    @CrossOrigin
    @DeleteMapping("/user/{id}")
    public ResponseEntity deleteUser(@PathVariable int id)  {
        productService.delete(id);
        return ResponseEntity.created(null).build();
    }


}
