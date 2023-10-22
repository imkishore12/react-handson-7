import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateStudent } from '../Slice/Studentslice';
function EditCompo() {
  let Navigatestu = useNavigate();
  let StudentData = useSelector((state) => state.Student)
  let ParamIndex = useParams().ID;
  let dispatch = useDispatch();

  const [tempObj, setTempObj] = useState({
    studentName: StudentData[ParamIndex].stuName,
    studentAge: StudentData[ParamIndex].stuAge,
    studentCourse: StudentData[ParamIndex].stuCourse,
    studentBatch: StudentData[ParamIndex].stuBatch,
  });
  

  const changeHandler = (e) => {
    setTempObj({...tempObj, [e.target.name]: e.target.value });
  }

  const updateHandler = (e) => {
    e.preventDefault()
    dispatch(updateStudent({tempObj, ParamIndex }))
    Navigatestu('/student');
  }

  return (
    <section>
      <form className='flex'>

        <div className="feilds">
        <label>Name:</label>
          <input type="text" name='studentName' placeholder={StudentData[ParamIndex].studentName} onChange={changeHandler}   />
        </div>

        <div className="feilds">
        <label>Age:</label>
          <input type="number" name='studentAge' placeholder={StudentData[ParamIndex].studentAge} onChange={changeHandler}   />
        </div>

        <div className="feilds">
        <label>Course:</label>
          <input type="text" name='studentCourse' placeholder={StudentData[ParamIndex].studentCourse} onChange={changeHandler}  />
        </div>

        <div className="feilds">
            <label>Batch:</label>
          <input type="text" name='studentBatch' placeholder={StudentData[ParamIndex].studentBatch} onChange={changeHandler}   />
        </div>

        <div className="feilds">
          <button type="button" onClick={(e) => Navigatestu('/student')} >Cancel</button>
          <button className='updateButton commonButton' onClick={updateHandler}>Update</button>
        </div>

      </form>
    </section>
  )
}

export default EditCompo