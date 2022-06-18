package net.recipedex.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class SpringbootRecipedexApplication {

	public static void main(String[] args) {
		System.out.println("Hello Sammy");
		SpringApplication.run(SpringbootRecipedexApplication.class, args);
	}

}
