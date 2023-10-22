import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudent } from '../Slice/Studentslice';
function Student() {
  let dispatch = useDispatch();
let StudentData = useSelector((state)=> state.Student);




  return (
    <>
      <div className="flex">
        <h1>Student Details</h1>
        <Link to="/student-desc" className='addNew'>Add New Student</Link>
      </div>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
           
          </tr>
        </thead>
        <tbody>
        {
            StudentData.map((details, index) => {
              return <tr key={index}>
                {details ? <td>{details?.studentName}</td> : null}
                {details ? <td>{details?.studentAge}</td> : null}
                {details ? <td>{details?.studentCourse}</td> : null}
                {details ? <td>{details?.studentBatch}</td> : null}
                {details ? <td><Link to={`/student-desc/${index}`} >Edit</Link></td> : null}
        
              </tr>
            })
          }
        </tbody>
      </table>
      </>
    
  )
}

export default Student