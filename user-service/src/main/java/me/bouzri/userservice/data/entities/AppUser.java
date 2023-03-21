package me.bouzri.userservice.data.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.*;
import me.bouzri.userservice.models.Task;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class AppUser {
    @Id
    private String id;
    private String name;
    private  String email;

    @Transient
    private List<Task> tasks;


}
