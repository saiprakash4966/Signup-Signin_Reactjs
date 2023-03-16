package com.springbootproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.springbootproject.model.Users;
import com.springbootproject.repository.UsersRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/home")
public class UsersController {
	
	@Autowired
	private UsersRepository usersRepository;
	
	
	
	@PostMapping("/login")
	public Users createUsers( @RequestBody Users users)
	{
		return usersRepository.save(users);
	}

}
