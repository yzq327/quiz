package com.twuc.shopping;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.twuc.shopping.domain.Order;
import com.twuc.shopping.domain.Product;
import com.twuc.shopping.po.OrderPo;
import com.twuc.shopping.po.ProductPo;
import com.twuc.shopping.repository.OrderRepository;
import com.twuc.shopping.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import org.springframework.http.MediaType;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest
@AutoConfigureMockMvc
class ShoppingApplicationTests {
	@Autowired
	MockMvc mockMvc;
	ObjectMapper objectMapper;

	@Autowired
	ProductRepository productRepository;
	OrderRepository orderRepository;

	@BeforeEach
	public void setUp(){
		productRepository.deleteAll();
		objectMapper=new ObjectMapper();
		ProductPo productPo=ProductPo.builder().name("可乐1").price(1).unit("瓶")
				.Img("照片1").build();
		productRepository.save(productPo);
		ProductPo product=ProductPo.builder().name("可乐2").price(1).unit("瓶")
				.Img("照片2").build();
		productRepository.save(product);

		OrderPo orderPo1 = OrderPo.builder().name("可乐1").price(1).amount(2).unit("瓶").build();
		orderRepository.save(orderPo1);
		OrderPo orderPo2 = OrderPo.builder().name("可乐2").price(1).amount(1).unit("瓶").build();
		orderRepository.save(orderPo2);
		OrderPo orderPo3 = OrderPo.builder().name("可乐3").price(1).amount(5).unit("瓶").build();
		orderRepository.save(orderPo3);
	}

//	@Test
//	public void shoule_add_products() throws Exception {
//		Product product =new Product("可乐3", 18,"瓶","照片3");
//		ObjectMapper objectMapper = new ObjectMapper();
//		String jsonString = objectMapper.writeValueAsString(product);
//		mockMvc.perform(post("/products").content(jsonString).contentType(MediaType.APPLICATION_JSON))
//				.andExpect((status().isBadRequest()));
//	}
//
//	@Test
//	public void shoule_get_products() throws Exception {
//		Product product =new Product("可乐3", 18,"瓶","照片3");
//		ObjectMapper objectMapper = new ObjectMapper();
//		String jsonString = objectMapper.writeValueAsString(product);
//		mockMvc.perform(post("/products").content(jsonString).contentType(MediaType.APPLICATION_JSON))
//				.andExpect((status().isBadRequest()));
//	}
//
//	@Test
//	public void should_delete_one_product() throws Exception{
//		mockMvc.perform(get("/products"))
//				.andExpect(jsonPath("$", hasSize(2)))
//				.andExpect(jsonPath("$[0].name",is("可乐1")))
//				.andExpect(jsonPath("$[0].price",is(1)))
//				.andExpect(jsonPath("$[1].unit",is("瓶")))
//				.andExpect(jsonPath("$[1].Img",is("照片2")))
//				.andExpect(status().isOk());
//	}

//	@Test
//	public void shoule_get_orders() throws Exception {
//		Order order = new Order("可乐4", 1, 44, "瓶");
//		ObjectMapper objectMapper = new ObjectMapper();
//		String jsonString = objectMapper.writeValueAsString(order);
//		mockMvc.perform(post("/orders").content(jsonString).contentType(MediaType.APPLICATION_JSON))
//				.andExpect((status().isCreated()));
//	}

//	@Test
//	public void should_delete_one_order() throws Exception{
////		mockMvc.perform(delete("/orders/1"))
////				.andExpect(jsonPath("$", hasSize(3)))
////				.andExpect(status().isOk());
//	}


}
