
import {type ChangeEvent, useState} from "react";
import type {Employee} from "../dto/Employee.ts";

export default function EmployeeForm() {
    const [employee,setEmployee] = useState<Employee>({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        hiredDate:'',
        salary:0
    });
    const firstNameHandler = (e:ChangeEvent<HTMLInputElement>) =>
        setEmployee({...employee,firstName:e.target.value});
    const lastNameHandler = (e:ChangeEvent<HTMLInputElement>) =>
        setEmployee({...employee,lastName:e.target.value});
    const emailHandler = (e:ChangeEvent<HTMLInputElement>) =>
        setEmployee({...employee,email:e.target.value});
    const phoneNumberHandler = (e:ChangeEvent<HTMLInputElement>) =>
        setEmployee({...employee,phoneNumber:e.target.value});
    const hiredDateHandler = (e:ChangeEvent<HTMLInputElement>) =>
        setEmployee({...employee,hiredDate:e.target.value});
    const salaryHandler = (e:ChangeEvent<HTMLInputElement>) =>
        setEmployee({...employee,salary:parseInt(e.target.value)});


    const submitHandler =  (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(employee);
    }
    return (
        <>
            <div className="container mt-5">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control"
                               value={employee.firstName}
                               onChange={firstNameHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control"
                               value={employee.lastName}
                               onChange={lastNameHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control"
                               value={employee.email}
                               onChange={emailHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PhoneNumber</label>
                        <input type="text" className="form-control"
                               value={employee.phoneNumber}
                               onChange={phoneNumberHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">HiredDate</label>
                        <input type="date" className="form-control"
                               value={employee.hiredDate}
                               onChange={hiredDateHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input type="text" step="any" className="form-control"
                               value={employee.salary}
                               onChange={salaryHandler}
                        />
                    </div>

                    <button type="submit"

                            className="btn btn-primary w-100">Create Employee
                    </button>
                </form>
           </div>
        </>
    );
}
