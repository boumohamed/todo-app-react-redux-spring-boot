package me.bouzri.userservice.web;

import lombok.AllArgsConstructor;
import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.services.dtos.UserDto;
import me.bouzri.userservice.services.interfaces.userService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class userController {
    private userService us;


    @GetMapping("/users")
    public List<UserDto> getUsers()
    {
        return us.getUsers();
    }

    @GetMapping("/users/{id}")
    public UserDto getUserById(@PathVariable String id)
    {
        return us.getUserById(id);
    }



}
