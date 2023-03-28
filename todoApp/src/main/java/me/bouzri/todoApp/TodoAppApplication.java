package me.bouzri.todoApp;

import lombok.AllArgsConstructor;
import me.bouzri.todoApp.data.entities.Task;
import me.bouzri.todoApp.enums.Status;
import me.bouzri.todoApp.services.interfaces.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.UUID;
import java.util.stream.Stream;

@SpringBootApplication
@AllArgsConstructor
@EnableFeignClients
public class TodoAppApplication {

	private TaskService ts;
	public static void main(String[] args) {
		SpringApplication.run(TodoAppApplication.class, args);
	}
	//@Bean
	CommandLineRunner start()
	{
		return (args) -> {

			Stream.of("Sport", "Bearkfast", "Work", "Lunch", "Afternoon Coffee", "Commit", "Home").forEach(t -> {
				Task task = new Task();
				task.setId(UUID.randomUUID().toString());
				task.setDesc("Do/Make/Go/Drink " + t);
				task.setName(t);
				task.setStatus(Status.CREATED);
				task.setDate(new Date());
				ts.creatTask(task);
			});
	};
	}

}
