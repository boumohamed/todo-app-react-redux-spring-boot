package me.bouzri.userservice.services.interfaces;

import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.services.dtos.UserDto;
import me.bouzri.userservice.services.dtos.UserRequestDto;

import java.util.List;

public interface userService {

    UserDto getUserById(String id);
    List<UserDto> getUsers();

    UserDto saveUser(UserRequestDto user);
}
