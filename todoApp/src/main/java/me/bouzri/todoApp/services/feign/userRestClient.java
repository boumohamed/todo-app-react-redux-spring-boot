package me.bouzri.todoApp.services.feign;

import me.bouzri.todoApp.models.AppUser;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(value = "users", url = "http://localhost:9001/")
public interface userRestClient {

    @RequestMapping(method = RequestMethod.GET, value = "/users")
    List<AppUser> getUsers();
    @RequestMapping(method = RequestMethod.GET, value = "/users/{id}")
    AppUser getUserByID(@PathVariable String id);
}

