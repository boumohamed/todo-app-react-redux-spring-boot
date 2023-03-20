package me.bouzri.todoApp.services;


import me.bouzri.todoApp.entities.Task;
import me.bouzri.todoApp.enums.Status;
import org.springframework.boot.autoconfigure.mail.MailProperties;


import java.util.List;
import java.util.Map;


public interface TaskService {
    Task creatTask(Task taskRequestDto);
    List<Task> getTasks();

    List<Task> gatTasksByuser(String id);
    Task getTaskById(String id);

    Task updateTask(String id, Task task);
    Map<Status, Long> groupByStatus();

}
