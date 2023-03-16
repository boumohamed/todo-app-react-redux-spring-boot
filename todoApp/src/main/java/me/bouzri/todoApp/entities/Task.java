package me.bouzri.todoApp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.bouzri.todoApp.enums.Status;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Task {

    @Id
    private String id;
    private String name;
    private String desc;
    private Date date;
    private Status status;
}
