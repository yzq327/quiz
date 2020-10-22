package com.twuc.shopping.api;

import com.twuc.shopping.domain.Order;
import com.twuc.shopping.po.OrderPo;
import com.twuc.shopping.po.ProductPo;
import com.twuc.shopping.service.OrderService;
import com.twuc.shopping.service.ProductService;
import com.twuc.shopping.vo.OrderVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    ProductService productService;

//    @DeleteMapping("/orders/{id}")
//    public ResponseEntity deleteOrder(@PathVariable int id)  {
//        orderService.delete(id);
//        return ResponseEntity.created(null).build();
//    }
    @PostMapping("/order/{id}")
    public ResponseEntity addOrder(@PathVariable int id,
                                   @RequestBody @Valid Order order) {
        Optional<ProductPo> optionalProductPo = productService.findById(id);
        if(!optionalProductPo.isPresent()){
            return ResponseEntity.badRequest().build();
        }
        OrderPo orderPo = orderService.save(order, optionalProductPo.get());
        return ResponseEntity.ok(getOrderVo(orderPo));
    }
    private OrderVo getOrderVo(OrderPo orderPo) {
        return OrderVo.builder().id(orderPo.getId())
                .name(orderPo.getName())
                .amount(orderPo.getAmount())
                .price(orderPo.getPrice())
                .unit(orderPo.getUnit())
                .build();
    }

    @GetMapping("/orders")
    public List<OrderPo>  getOrders() {
        List<OrderPo> orderPos = orderService.findAll();
        List<OrderVo> orderVos = orderPos.stream().map(this::getOrderVo).collect(Collectors.toList());
        return orderPos;

    }

    @DeleteMapping("/order/{id}")
    @Transactional
    public ResponseEntity deleteOrder(@PathVariable int id)  {
        Optional<OrderPo> optionalOrderPo = orderService.findById(id);
        if(!optionalOrderPo.isPresent()){
            return ResponseEntity.badRequest().build();
        }
        orderService.deleteById(id);
        return ResponseEntity.ok(optionalOrderPo.get());
    }



}
