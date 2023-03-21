package me.bouzri.userservice;

import lombok.AllArgsConstructor;
import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.services.interfaces.userService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;
import java.util.stream.Stream;

@SpringBootApplication
//@EnableFeignClients
@AllArgsConstructor
public class UserServiceApplication {

	private userService us;
	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start()
	{
		return (args) -> {

			Stream.of("Mohamed", "Amina", "Ali").forEach(name -> {

				AppUser user = new AppUser();
				user.setId(UUID.randomUUID().toString());
				user.setName(name);
				user.setEmail(name.toLowerCase() + "@gmail.com");
				us.saveUser(user);
			});
		};
	}

}
