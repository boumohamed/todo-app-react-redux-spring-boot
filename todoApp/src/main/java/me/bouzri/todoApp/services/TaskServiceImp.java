package me.bouzri.todoApp.services;

import lombok.AllArgsConstructor;

import me.bouzri.todoApp.entities.Task;
import me.bouzri.todoApp.feign.userRestClient;
import me.bouzri.todoApp.models.AppUser;
import me.bouzri.todoApp.repositories.TaskRepository;
import org.springframework.stereotype.Service;


import java.util.List;

@AllArgsConstructor
@Service
public class TaskServiceImp implements TaskService {
    private TaskRepository tr;
    private userRestClient urc;


    @Override
    public Task creatTask(Task task) {
        Task taskFound = tr.findByName(task.getName());
        if (taskFound != null) return taskFound;
        return tr.save(task);
    }

    @Override
    public List<Task> getTasks() {
        List<Task> allTasks = tr.findAll();
        return allTasks;
    }

    @Override
    public List<Task> gatTasksByuser(String id) {
        AppUser appUser = urc.getUserByID(id);
        if(appUser != null)
        {
            List<Task> tasks = tr.findByUserid(appUser.getId());
            return tasks;
        }
        return  null;
    }

    @Override
    public Task getTaskById(String id) {
        Task task = tr.findById(id).orElseThrow(() -> new RuntimeException("no task Found"));
        return task;
    }

    @Override
    public Task updateTask(String id, Task task) {
        Task taskFound = tr.findById(id).orElseThrow(() -> new RuntimeException("no Task Found"));
        Task save = tr.save(task);
        return save;
    }
}
