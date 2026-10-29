import  axios from "axios";
import type {Employee} from "../dto/Employee.ts";


const EMPLOYEE_API_URL = 'http://localhost:8080/api/employees';

export const listEmployeeApi = () =>
    axios.get<Employee[]>(EMPLOYEE_API_URL);
export const crateEmplyee =
    (employee:Omit<Employee, "id">) =>
        axios.post<Employee>(EMPLOYEE_API_URL, employee);

export const fetchAllEmployeeApi =
    async ():Promise<Employee[]> => {
    const response = await axios.get<Employee[]>(EMPLOYEE_API_URL);
    if(response.status !== 200)
        throw new Error(`Fetch Employee Error ${response.statusText}`);
    return response.data;
}


export const EmployeeApi ={
    getAllEmployees: async ():Promise<Employee[]> =>{
        const response = await axios.get<Employee[]>(EMPLOYEE_API_URL);
        if(response.status !== 200)
            throw new Error(`Fetch Employee Error ${response.statusText}`);
        return response.data;
    },
    getEmployeeById : async (id:number):Promise<Employee> =>{
        const response =
            await axios.get<Employee>(`${EMPLOYEE_API_URL}/${id}`);
        if(response.status !== 200)
            throw new Error(`Fetch Employee Error ${response.statusText}`);
        return response.data;
    },
    createEmployee : async (employee:Omit<Employee,"id">):Promise<Employee> =>{
        const response =
            await axios.post<Employee>(EMPLOYEE_API_URL,employee);
        if(response.status !== 200)
            throw new Error(`Error in Creating Employee`);
        return response.data;
    },
    deleteEmployee: async (id:number):Promise<void> =>{
        const response =
            await axios.delete(`${EMPLOYEE_API_URL}/${id}`);
        if(response.status !== 200)
            throw new Error(`Error in deleting Employee!`);
    }
}