package me.bouzri.todoApp.data.repositories;

import me.bouzri.todoApp.data.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, String> {
    Task findByName(String name);
    List<Task> findByUserid(String id);
}
