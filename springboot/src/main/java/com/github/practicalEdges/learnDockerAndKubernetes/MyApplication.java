package com.github.practicalEdges.learnDockerAndKubernetes;

import java.util.Map;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class, R2dbcAutoConfiguration.class,
		MongoAutoConfiguration.class })
public class MyApplication {
	private static final Map<String, String> jokes = Map.of(
			"1", "Why did the chicken cross the road?",
			"2", "What fruit do twins love? Pears!",
			"3", "What time is it when people are throwing pieces of bread at your head? Time to duck.",
			"4", "Why was the baby strawberry crying? Because their parents were in a jam.",
			"5", "Why don't you ever see giraffes in middle school? Because they're all in high school.",
			"6", "How do bees brush their hair? With honeycombs!",
			"7", "What do you call a bear with no teeth? A gummy bear.",
			"8", "Why did the tomato turn red? Because it saw the salad dressing!",
			"9", "What do you call a belt made out of watches? A waist of time.",
			"10", "Why did the math book look sad? Because it had too many problems.");

	@RequestMapping("/")
	String home() {
		return "This is a simple Spring Boot application.";
	}

	@GetMapping("/jokes")
	public Map<String, String> requestMethodName() {
		return jokes;
	}

	@GetMapping("/joke/{id}")
	public String getJokeById(@PathVariable String id) {
		return jokes.getOrDefault(id, "Joke not found");
	}

	public static void main(String[] args) {
		SpringApplication.run(MyApplication.class, args);
	}
}