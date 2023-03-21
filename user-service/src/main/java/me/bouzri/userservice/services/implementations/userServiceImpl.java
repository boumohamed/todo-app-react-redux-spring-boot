package me.bouzri.userservice.services.implementations;

import lombok.AllArgsConstructor;
import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.data.repositories.UserRepository;
import me.bouzri.userservice.services.interfaces.userService;
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
