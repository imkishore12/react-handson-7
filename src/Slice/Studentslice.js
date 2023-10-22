import { createSlice } from "@reduxjs/toolkit";

let studentData = [
    {
        studentName: "saikishore",
        studentAge: 22,
        studentCourse: 'MERN',
        studentBatch: "March",
      },
      {
        studentName: "manasa",
        studentAge: 23,
        studentCourse: 'Fullstack',
        studentBatch: "March",
      },
      {
        studentName: "prasad",
        studentAge: 22,
        studentCourse: 'MERN',
        studentBatch: "June",
      },
      {
        studentName: "teja",
        studentAge: 22,
        studentCourse: 'editor',
        studentBatch: "June",
      },
      {
        studentName: "rahul",
        studentAge: 22,
        studentCourse: 'python Dev',
        studentBatch: "May",
      }
  ]

const StudentSlice = createSlice({
    name : "StudentDetails",
    initialState : studentData,
    reducers : {
        updateStudent : (state, action)=>{
            state[action.payload.ParamIndex] = action.payload.tempObj
        },

        addStudent : (state, action)=>{
        state.push(action.payload)
        },

        deleteStudent : (state, action)=>{
          return state.filter((student, index) =>index !== action.payload);
        }
    }
});

export const {updateStudent, addStudent, deleteStudent} = StudentSlice.actions;
export default StudentSlice.reducer