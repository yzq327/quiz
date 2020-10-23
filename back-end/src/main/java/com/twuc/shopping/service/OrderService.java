package com.twuc.shopping.service;


import com.twuc.shopping.domain.Order;
import com.twuc.shopping.domain.Product;
import com.twuc.shopping.po.OrderPo;
import com.twuc.shopping.po.ProductPo;
import com.twuc.shopping.repository.OrderRepository;
import com.twuc.shopping.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }


    public List<OrderPo> findAll(){
        return  orderRepository.findAll();
    }

    public OrderPo save(Order order, ProductPo productPo){
        Optional<OrderPo> optionalOrderPo = orderRepository.findByName(order.getName());
        OrderPo orderPo;
        if(optionalOrderPo.isPresent()){
            orderPo = optionalOrderPo.get();
            orderPo.setAmount(orderPo.getAmount() + 1);
        } else {
            orderPo = OrderPo.builder().name(order.getName())
                    .price(order.getPrice())
                    .unit(order.getUnit())
                    .amount(order.getAmount())
                    .build();
        }
        orderRepository.save(orderPo);
        return orderPo;
    }

    public void deleteById(int id){
        orderRepository.deleteById(id);
    }

    public Optional<OrderPo> findById(int id){
        return  orderRepository.findById(id);
    }
}
