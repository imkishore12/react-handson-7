import { configureStore } from "@reduxjs/toolkit";
import StudentSliceReducer from "../Slice/Studentslice";

const Stustore = configureStore({
   reducer: {
      Student: StudentSliceReducer
   }
})

export default Stustore