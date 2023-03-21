package me.bouzri.todoApp.web;

import me.bouzri.todoApp.data.entities.Task;
import me.bouzri.todoApp.enums.Status;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Date;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@SpringBootTest(webEnvironment = RANDOM_PORT)
class TaskControllerTest {

    @Autowired

    private TestRestTemplate template;
    @LocalServerPort
    private int port;
    private String URL = "http://localhost:";
    @Test
    void getTask() {
        String localUrl = URL + port + "/tasks";
        ResponseEntity<Task[]> response = template.getForEntity(localUrl, Task[].class);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
    }

    @Test
    void getTaskByUserId() {
    }

    @Test
    void groupByStatus() {
    }

    @Test
    void getTaskById() {
        String localUrl = URL + port + "/tasks";
        String id = UUID.randomUUID().toString();
        Date date = new Date();
        Task request = new Task(id, "Sleep", "slepy", date, Status.CREATED, null);
        template.postForEntity(localUrl, request, Task.class);
        localUrl = URL + port + "/tasks/" + id;
        ResponseEntity<Task> response = template.getForEntity(localUrl, Task.class);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertNotNull(response.getBody());
        assertEquals(response.getBody().getId(), id);
        assertEquals(response.getBody().getDate(), date);
    }

    @Test
    void createTask() {
        String localUrl = URL + port + "/tasks";
        Task request = new Task(UUID.randomUUID().toString(), "Sleep", "slepy", new Date(), Status.CREATED, null);
        ResponseEntity<Task> response = template.postForEntity(localUrl, request, Task.class);
        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
        assertNotNull(response.getBody());
        assertEquals(response.getBody().getStatus(), Status.CREATED);
    }
}