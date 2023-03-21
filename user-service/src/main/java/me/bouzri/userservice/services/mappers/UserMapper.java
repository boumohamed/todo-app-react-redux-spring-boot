package me.bouzri.userservice.services.mappers;

import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.services.dtos.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;


@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
    UserDto fromUserToUserDto(AppUser user);
}
