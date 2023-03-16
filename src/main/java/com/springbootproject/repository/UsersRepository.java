package com.springbootproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springbootproject.model.User;
import com.springbootproject.model.Users;


@Repository
public interface UsersRepository extends JpaRepository < Users, Long>  {

	Users save(Users users);

}
