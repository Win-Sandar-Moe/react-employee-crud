import {type SubmitHandler, useForm} from "react-hook-form";
import type {Employee} from "../dto/Employee.ts";
import {EmployeeApi} from "../api/EmployeeApi.ts";
import {useNavigate} from "react-router-dom";

export default function EmployeeFormV3() {
    const {
        register, handleSubmit, formState: {errors,isValid},
        reset
    } = useForm<Employee>({
        mode:"onChange"
    });
    const navigator =useNavigate();
    const onSubmit: SubmitHandler<Employee> = async (data) => {
        try{
            await EmployeeApi.createEmployee(data);
            navigator('/');
        }catch (e){
            console.log(e)
        }
        reset();
    }
    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text"
                               className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                               {...register('firstName', {
                                   required: 'First Name is required',
                                   minLength: {
                                       value: 2,
                                       message: 'First Name must be at least 2 characters!'
                                   },
                                   maxLength: {
                                       value: 15,
                                       message: 'FirstName Name is too long!'
                                   },
                                   pattern: {
                                       value: /^[A-Za-z]+$/,
                                       message: 'First Name can only contain letters'
                                   }
                               })}/>
                        {
                            errors.firstName && (
                                <small className="invalid-feedback">{errors.firstName.message}</small>
                            )
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className={`form-control`}
                            {...register('lastName')}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className={`form-control`}
                               {...register('email')}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PhoneNumber</label>
                        <input type="text" className={`form-control`}
                               {...register('phoneNumber')}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">HiredDate</label>
                        <input type="date" className={`form-control`}
                               {...register('hiredDate')}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input type="number" step="any" className={`form-control`}
                               {...register('salary')}/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100"
                    disabled={!isValid}>
                        Submit Employee
                    </button>
                </form>
            </div>
        </>
    );
}
