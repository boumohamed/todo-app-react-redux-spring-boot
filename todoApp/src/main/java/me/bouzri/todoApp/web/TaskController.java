package me.bouzri.todoApp.web;

import lombok.AllArgsConstructor;
import me.bouzri.todoApp.entities.Task;
import me.bouzri.todoApp.services.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class TaskController {

    private TaskService ts;
    @GetMapping("/tasks")
    public List<Task> getTask(){
        return ts.getTasks();
    }

    @GetMapping("/tasks/user/{id}")
    public List<Task> getTaskByUserId(@PathVariable String id){
        System.out.println(id);
        return ts.gatTasksByuser(id);
    }
    @GetMapping("/tasks/{id}")
    public Task getTask(@PathVariable String id){
        return ts.getTaskById(id);
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task)
    {
        return ts.creatTask(task);
    }
    @PutMapping("/tasks/{id}")
    public Task updateTask(@RequestBody Task task, @PathVariable String id) throws InterruptedException {
        //Thread.sleep(10000L);
        return ts.updateTask(id, task);
    }
}
