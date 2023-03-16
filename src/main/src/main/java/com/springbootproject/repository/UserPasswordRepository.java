package com.springbootproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.springbootproject.model.User;
import com.springbootproject.model.Userotp;



public interface UserPasswordRepository extends JpaRepository < Userotp, Long> {

	Userotp save(Userotp userotp);

	

	

}
