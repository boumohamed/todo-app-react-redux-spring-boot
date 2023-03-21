package me.bouzri.todoApp.services.interfaces;


import me.bouzri.todoApp.data.entities.Task;
import me.bouzri.todoApp.enums.Status;


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
