import {type ChangeEvent, type FormEvent, useState} from "react";
import type {Employee} from "../dto/Employee.ts";

export default function EmployeeFormV2() {
    const [employee,setEmployee] = useState<Employee>({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        hiredDate:"",
        salary:0
    });
    const onChangeHandler =
            (e:ChangeEvent<HTMLInputElement>)  =>{
        const name =e.target.name;
        const value = e.target.value;
        setEmployee({...employee, [name]: value});
    }
    const submitHandler =
        (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(employee);
    }
    return (
        <>
            <div className="container mt-5">
                <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">FirstName</label>
                    <input type="text" className="form-control"
                    name="firstName" value={employee.firstName}
                    onChange={onChangeHandler}/>
                </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control"
                               name="lastName"
                               value={employee.lastName}
                               onChange={onChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control"
                               name="email"
                               value={employee.email}
                               onChange={onChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PhoneNumber</label>
                        <input type="text" className="form-control"
                               name="phoneNumber"
                               value={employee.phoneNumber}
                               onChange={onChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">HiredDate</label>
                        <input type="date" className="form-control"
                               name={"hiredDate"}
                               value={employee.hiredDate}
                               onChange={onChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input type="number" step="any" className="form-control"
                               name="salary"
                               value={employee.salary}
                               onChange={onChangeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Employee</button>

                </form>
            </div>
        </>
    );
}
