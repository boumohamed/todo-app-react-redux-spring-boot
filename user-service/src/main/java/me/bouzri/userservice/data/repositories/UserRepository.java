package me.bouzri.userservice.data.repositories;

import me.bouzri.userservice.data.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AppUser, String> {
}
