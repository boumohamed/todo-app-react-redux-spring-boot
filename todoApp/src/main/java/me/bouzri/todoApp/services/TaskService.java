package me.bouzri.todoApp.services;


import me.bouzri.todoApp.entities.Task;


import java.util.List;


public interface TaskService {
    Task creatTask(Task taskRequestDto);
    List<Task> getTasks();

    Task getTaskById(String id);

    Task updateTask(String id, Task task);

}
