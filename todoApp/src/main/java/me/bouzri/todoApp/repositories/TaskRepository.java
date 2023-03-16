package me.bouzri.todoApp.repositories;

import me.bouzri.todoApp.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, String> {
    Task findByName(String name);
}
