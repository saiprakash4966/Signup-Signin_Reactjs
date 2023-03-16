package com.springbootproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springbootproject.model.User;
import com.springbootproject.model.Users;

@Repository

public interface UserRepository extends JpaRepository < User, Long> {

	User save(User user);

}
