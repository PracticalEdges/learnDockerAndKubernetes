package com.github.practicalEdges.learnDockerAndKubernetes;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest(classes = MyApplication.class)
@AutoConfigureMockMvc
public class MyApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void contextLoads() throws Exception {
        assertThat(mockMvc).isNotNull();
    }

    @Test
    public void testHome() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(content().string("This is a simple Spring Boot application."));
    }

    @Test
    public void testGetJokes() throws Exception {
        mockMvc.perform(get("/jokes"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        "{\"1\":\"Why did the chicken cross the road?\",\"2\":\"What fruit do twins love? Pears!\",\"3\":\"What time is it when people are throwing pieces of bread at your head? Time to duck.\",\"4\":\"Why was the baby strawberry crying? Because their parents were in a jam.\",\"5\":\"Why don't you ever see giraffes in middle school? Because they're all in high school.\",\"6\":\"How do bees brush their hair? With honeycombs!\",\"7\":\"What do you call a bear with no teeth? A gummy bear.\",\"8\":\"Why did the tomato turn red? Because it saw the salad dressing!\",\"9\":\"What do you call a belt made out of watches? A waist of time.\",\"10\":\"Why did the math book look sad? Because it had too many problems.\"}"));
    }
}