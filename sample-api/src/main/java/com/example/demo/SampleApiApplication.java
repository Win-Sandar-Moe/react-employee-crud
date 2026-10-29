package com.example.demo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.dao.EmployeeDao;
import com.example.demo.entity.Employee;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
public class SampleApiApplication {
	private final EmployeeDao employeeDao;
	
	@Bean
	public ApplicationRunner runner() {
		return r ->{
			List<Employee> employees=
					List.of(
							new Employee("John", "Doe", "john@mail.com","123456", LocalDate.now(),2000),
							new Employee("William", "James", "william@mail.com", "55-555-55", LocalDate.now(), 2500),
							new Employee("Mary","Shlley","mary@mail.com","123456",LocalDate.now(),3000));
			employeeDao.saveAll(employees);
					
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(SampleApiApplication.class, args);
	}

}
