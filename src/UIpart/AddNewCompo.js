import React from 'react'
import { useNavigate } from 'react-router-dom'

import { addStudent } from '../Slice/Studentslice';
import { useDispatch } from 'react-redux';

function AddNewCompo() {
    let dispatch = useDispatch();
    let Navigatestu = useNavigate();

    let newObj = {
        studentName: "",
        studentAge: "",
        studentCourse: "",
        studentBatch: "",
    }

    let handleChange = (e) =>{
        newObj[e.target.name] = e.target.value;
    }

    let submitHandler = (e) => {
        e.preventDefault();
        dispatch(addStudent(newObj))
        Navigatestu('/student');
    }

    return (
        <section>
        <form className='flex'>

            <div className="feilds">
                <label>Name:</label>
                <input type="text" name='studentName'  placeholder='Enter Name' onChange={handleChange} />
                <label>Age:</label>
                <input type="number" name='studentAge' placeholder='Enter Age' onChange={handleChange} />
            </div>

            
            <div className="feilds">
                <label>Course:</label>
                <input type="text" name='studentCourse'  placeholder="Enter the  Course" onChange={handleChange}/>
                <label>Batch:</label>
                <input type="text" name='studentBatch'  placeholder="Enter the Batch" onChange={handleChange}/>
            </div>

            

            <div className="feilds">
                <button onClick={() => Navigatestu('/student')} type='button'>Cancel</button>
                <button onClick={submitHandler} >Submit</button>
            </div>

        </form>

    </section>
    )
}

export default AddNewCompo