package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dao.EmployeeDao;
import com.example.demo.dto.EmployeeDto;
import com.example.demo.util.EmployeeUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
	private final EmployeeDao employeeDao;

	public void deleteEmployee(long id){
		employeeDao.deleteById(id);
	}
	
	public List<EmployeeDto> listEmployees(){
		return employeeDao.findAll()
				.stream()
				.map(EmployeeUtil::toDto)
				.toList();
	}
	public EmployeeDto saveEmployee(EmployeeDto employeeDto){
		return EmployeeUtil
				.toDto(employeeDao
						.save(EmployeeUtil
								.toEntity(employeeDto)));
	}
}





