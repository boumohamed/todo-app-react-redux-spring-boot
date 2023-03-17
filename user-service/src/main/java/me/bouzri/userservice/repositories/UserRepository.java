package me.bouzri.userservice.repositories;

import me.bouzri.userservice.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AppUser, String> {
}
