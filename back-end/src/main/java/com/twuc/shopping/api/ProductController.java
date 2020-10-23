package com.twuc.shopping.api;


import com.twuc.shopping.domain.Product;
import com.twuc.shopping.po.ProductPo;
import com.twuc.shopping.repository.ProductRepository;
import com.twuc.shopping.service.ProductService;
import com.twuc.shopping.vo.ProductVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    ProductService productService;
    @PostMapping("/product")
    public  ResponseEntity addProducts(@RequestBody  @Valid Product product){
        ProductPo productPo = productService.save(product);
        return ResponseEntity.ok(getProductVo(productPo));
    }
    private ProductVo getProductVo(ProductPo productPo){
        return ProductVo.builder().id(productPo.getId())
                .name(productPo.getName())
                .price(productPo.getPrice())
                .unit(productPo.getUnit())
                .Img(productPo.getImg())
                .build();
    }

//    @GetMapping("/products")
//    public List<ProductVo> getProducts(){
//        List<ProductPo> productPos = productService.findAll();
//        List<ProductVo> productVos = productPos.stream().map(this::getProductVo).collect(Collectors.toList());
//        return productVos;
//    }
    @GetMapping("/products")
    public List<ProductVo> getProducts(){
        List<ProductPo> productPos = productService.findAll();
        List<ProductVo> productVos = productPos.stream().map(this::getProductVo).collect(Collectors.toList());
        ProductVo productVo = ProductVo.builder().id(1).name("te").price(12).Img("ds").unit("kg").build();
        List<ProductVo> productVos1 = new ArrayList<>();
        productVos1.add(productVo);
        return productVos1;
    }

}
