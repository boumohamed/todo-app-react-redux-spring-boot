package me.bouzri.userservice.services;

import lombok.AllArgsConstructor;
import me.bouzri.userservice.entities.AppUser;
import me.bouzri.userservice.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class userServiceImpl implements userService {

    private UserRepository ur;


    @Override
    public AppUser getUserById(String id) {
        return ur.findById(id).orElseThrow(() -> new RuntimeException("No User Found"));
    }

    @Override
    public List<AppUser> getUsers() {
        return ur.findAll();
    }

    @Override
    public AppUser saveUser(AppUser user) {
        return ur.save(user);
    }
}
