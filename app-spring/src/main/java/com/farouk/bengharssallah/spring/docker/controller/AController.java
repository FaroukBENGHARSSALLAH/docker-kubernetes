package com.farouk.bengharssallah.spring.docker.controller;

import java.io.File;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AController {

	@GetMapping(value = "/home")
	 @ResponseBody
	public String home() {
		      String returnn = "";
		      for(String n : specfications())
		    	         returnn = returnn + System.lineSeparator() + " " + n;
		      return returnn;
	}
	
	
	
	
	 public String[] specfications() {
		    File[] roots = File.listRoots();
		    String[] vars = new String[8 + roots.length];
		    /* Total number of processors or cores available to the JVM */
		    vars[0] = " Available processors (cores): " +  Runtime.getRuntime().availableProcessors(); // 1

		    /* Total amount of free memory available to the JVM */
		    vars[1] = " Free memory (bytes): " + Runtime.getRuntime().freeMemory();  //2

		    /* This will return Long.MAX_VALUE if there is no preset limit */
		    long maxMemory = Runtime.getRuntime().maxMemory();
		    /* Maximum amount of memory the JVM will attempt to use */
		    vars[2] = " Maximum memory (bytes): " + (maxMemory == Long.MAX_VALUE ? " no limit " : maxMemory) ;

		    /* Total memory currently available to the JVM */
		    vars[3] = " Total memory available to JVM (bytes): " +  Runtime.getRuntime().totalMemory();
            int j = 3;
		    for (File root : roots) {
		    	vars[++j] =  " File system root: " + root.getAbsolutePath();
		    	vars[++j] = root.getAbsolutePath() + " Total space : " + cov(root.getTotalSpace());
		    	vars[++j] = root.getAbsolutePath() + " Free space : " + cov(root.getFreeSpace());
		    	vars[++j] = root.getAbsolutePath() + " Usable space : " + cov(root.getUsableSpace());
		         }
		    return vars;
		  }
	 
	 
	 private String cov(long bytes) {
		String cnt_size;
		double size_kb = bytes /1024;
		double size_mb = size_kb / 1024;
		double size_gb = size_mb / 1024 ;

		 if (size_gb > 0){
			      cnt_size = size_gb + " GB";
	        }else if(size_mb > 0){
			      cnt_size = size_mb + " MB";
	        }else{
	    	           cnt_size = size_kb + " KB";
	        }	     
		return cnt_size;			
	}
	
 }
