package com.springbootproject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="onetime_password")
public class Userotp
{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
     private long id;
	

	@Column(name="onetimepassword")
	private String otp;
	
	@Column(name="password")
	private String password;

	public Userotp()
	{
		
	}

	public Userotp( String otp, String password) {
		super();
	
		this.otp = otp;
		this.password = password;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
