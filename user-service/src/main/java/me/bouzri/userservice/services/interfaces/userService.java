package me.bouzri.userservice.services.interfaces;

import me.bouzri.userservice.data.entities.AppUser;

import java.util.List;

public interface userService {

    AppUser getUserById(String id);
    List<AppUser> getUsers();

    AppUser saveUser(AppUser user);
}
