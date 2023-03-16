package com.springbootproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootproject.model.User;
import com.springbootproject.model.Userotp;
import com.springbootproject.model.Users;
import com.springbootproject.repository.UserPasswordRepository;
import com.springbootproject.repository.UsersRepository;


@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/passwordhome")
public class UserpasswordController {
	
	@Autowired
	private UserPasswordRepository userPasswordRepository;
	
	
	
	@PostMapping("/useronetimeotp")
	public Userotp createUserpasswords( @RequestBody Userotp userotp)
	{
		return userPasswordRepository.save(userotp);
	}

}
