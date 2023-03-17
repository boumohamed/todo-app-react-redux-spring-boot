package me.bouzri.userservice.services;

import me.bouzri.userservice.entities.AppUser;

import java.util.List;

public interface userService {

    AppUser getUserById(String id);
    List<AppUser> getUsers();

    AppUser saveUser(AppUser user);
}
