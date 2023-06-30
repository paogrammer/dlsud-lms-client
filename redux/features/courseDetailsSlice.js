import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { staticCourses } from './staticCourseData';


// courseDetailsData
export const courseDetailsData = createAsyncThunk(
  'courses/fetchCourses',
  async (id) => {
    const response = await fetch(`https://obscure-shelf-38503.herokuapp.com/courseDetails/${id}`)
    const data = response.json();
    return data;
  }
)

export const courseDetailsSlice = createSlice({
  name: 'courseDetails',
  initialState: {
    courseDetails: {},
    status: '',
  },
  reducers: {
    fetchCourseDetails: (state, action) => {
      const courseId = action.payload;
      state.courseDetails = staticCourses.find(course => course.id === courseId);
      state.status = 'fulfilled';
    },
  },
});

export const { fetchCourseDetails } = courseDetailsSlice.actions;

export default courseDetailsSlice.reducer;



// export const courseDetailsSlice = createSlice({
//   name: 'courses',
//   initialState: {
//     courseDetails: staticCourses[0],
//     status: '',
//     allCourses: staticCourses,
//   },
//   reducers: {

//   },

//   extraReducers: (builder) => {
//     builder.addCase(courseDetailsData.fulfilled, (state, action) => {
//       state.courseDetails = action.payload
//       state.status = 'fulfilled'
//     }),
//       builder.addCase(courseDetailsData.pending, (state, action) => {
//         state.status = 'pending'
//       })
//   },

// })

// // export const { increment } = courseDetailsSlice.actions
// export default courseDetailsSlice.reducer
