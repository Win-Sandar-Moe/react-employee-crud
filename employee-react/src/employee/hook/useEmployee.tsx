import {useEffect, useState} from "react";
import type {Employee} from "../dto/Employee.ts";
import {EmployeeApi} from "../api/EmployeeApi.ts";

export default function useEmployee() {
    const [employees,setEmployees]=
        useState<Employee[]>([]);
    useEffect(() => {
        const fetchAllEmployees = async () =>{
            try {
                const emp = await  EmployeeApi.getAllEmployees();
                setEmployees(emp);
            }catch (err){
                console.log(`Fetch Employee Error ${err}`)
            }
        }
        fetchAllEmployees();
    }, []);

    return (
        {employees,setEmployees}
    );
}
