package me.bouzri.userservice.services.dtos;

import lombok.Data;

@Data
public class UserRequestDto {
    private String id;
    private String name;
    private  String email;
}
