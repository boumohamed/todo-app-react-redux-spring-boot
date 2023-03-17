package me.bouzri.todoApp.services;


import me.bouzri.todoApp.entities.Task;


import java.util.List;


public interface TaskService {
    Task creatTask(Task taskRequestDto);
    List<Task> getTasks();

    List<Task> gatTasksByuser(String id);
    Task getTaskById(String id);

    Task updateTask(String id, Task task);

}
