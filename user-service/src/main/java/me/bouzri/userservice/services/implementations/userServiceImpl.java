package me.bouzri.userservice.services.implementations;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import me.bouzri.userservice.data.entities.AppUser;
import me.bouzri.userservice.data.repositories.UserRepository;
import me.bouzri.userservice.services.dtos.UserDto;
import me.bouzri.userservice.services.dtos.UserRequestDto;
import me.bouzri.userservice.services.interfaces.userService;
import me.bouzri.userservice.services.mappers.UserMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class userServiceImpl implements userService {

    private final UserRepository ur;
    private final UserMapper mapper;




    @Override
    public UserDto getUserById(String id) {
        AppUser user = ur.findById(id).orElseThrow(() -> new RuntimeException("No User Found"));
        UserDto userDto = mapper.fromUserToUserDto(user);
        return userDto;
    }

    @Override
    public List<UserDto> getUsers() {

        List<AppUser> allUsers = ur.findAll();
        List<UserDto> userDtos = mapper.fromUserListToUserDtoList(allUsers);

        return userDtos;
    }

    @Override
    public UserDto saveUser(UserRequestDto requestDto) {
        AppUser userToSave = mapper.fromUserRequestDtoToUserEntity(requestDto);
        AppUser saved = ur.save(userToSave);
        UserDto userDto = mapper.fromUserToUserDto(saved);
        return userDto;
    }
}
