package com.example.demo.util;

import org.springframework.beans.BeanUtils;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.entity.Employee;

public class EmployeeUtil {
	public static EmployeeDto toDto(Employee employee) {
		EmployeeDto dto=new EmployeeDto();
		BeanUtils.copyProperties(employee, dto);
		return dto;
	}
	public static Employee toEntity(EmployeeDto employeeDto) {
		Employee employee=new Employee();
		BeanUtils.copyProperties(employeeDto, employee);
		return employee;
	}
}
