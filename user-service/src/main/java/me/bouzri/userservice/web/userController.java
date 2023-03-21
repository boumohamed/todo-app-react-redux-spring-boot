package me.bouzri.userservice.web;

import lombok.AllArgsConstructor;
import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.services.dtos.UserDto;
import me.bouzri.userservice.services.dtos.UserRequestDto;
import me.bouzri.userservice.services.interfaces.userService;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/users")
    public UserDto saveUser(@RequestBody UserRequestDto userRequestDto)
    {
        return us.saveUser(userRequestDto);
    }

    @GetMapping("/users/{id}")
    public UserDto getUserById(@PathVariable String id)
    {
        return us.getUserById(id);
    }



}
