
import useEmployee from "../hook/useEmployee.tsx";
import {Link} from "react-router-dom";
import {EmployeeApi} from "../api/EmployeeApi.ts";


export default function EmployeeList() {

    const {employees,setEmployees}=useEmployee();

    const deleteHandler =async (id:number)=>{
        await EmployeeApi.deleteEmployee(id);
        const updatedEmployees = employees
            .filter(employee => employee.id !== id);
        setEmployees(updatedEmployees);
    }

    return (
        <>
            <div className="container mt-5">
                <Link to="/create-employee" className="btn btn-primary my-3" >
                    New Employee
                </Link>
                <table className="table table-striped table-bordered table-hover rounded">
                    <thead>
                     <tr>
                         <th>Id</th>
                         <th>FirtName</th>
                         <th>LastName</th>
                         <th>Email</th>
                         <th>PhoneNumber</th>
                         <th>HiredDate</th>
                         <th>Salary</th>
                         <th>Action</th>
                     </tr>
                    </thead>
                    <tbody>
                    {
                        employees && employees.length > 0 && employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.hiredDate}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <button className="btn btn-outline-success me-2">Update</button>
                                    <button className="btn btn-outline-danger"
                                    onClick={() => deleteHandler(employee.id!)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
