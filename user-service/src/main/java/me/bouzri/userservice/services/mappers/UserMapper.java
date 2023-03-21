package me.bouzri.userservice.services.mappers;

import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.services.dtos.UserDto;
import me.bouzri.userservice.services.dtos.UserRequestDto;
import org.mapstruct.Mapper;


import java.util.List;


// componentModel = "spring" => this was necessary to create a bean
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto fromUserToUserDto(AppUser user);
    List<UserDto> fromUserListToUserDtoList(List<AppUser> users);

    //UserDto fromUserRequestDtoToUserDto(UserRequestDto requestDto);

    AppUser fromUserRequestDtoToUserEntity(UserRequestDto requestDto);

}
