package com.farouk.bengharssallah.spring.docker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AController {

	@GetMapping(value = "/home")
	public String home() {
		      return "isWorking";
	}
	
 }
