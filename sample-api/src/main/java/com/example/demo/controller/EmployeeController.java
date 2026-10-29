package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {
	private final EmployeeService employeeService;
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable long id){
		employeeService.deleteEmployee(id);
		return ResponseEntity.ok().build();
	}

	@PostMapping
	public EmployeeDto createEmployee(@RequestBody EmployeeDto employeeDto){
		return employeeService.saveEmployee(employeeDto);
	}
	
	@GetMapping
	public List<EmployeeDto> listEmployees(){
		return employeeService.listEmployees();
	}
}




