import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Student } from "../../interface";

// Tạo các action call API : createAsyncThunk
export const getAllStudents = createAsyncThunk<Student[]>(
    "students/getAllStudents",
    async () => {
        const res = await axios.get("http://localhost:9999/students");
        return res.data;
    }
);

// Action thêm mới
export const createStudent = createAsyncThunk<Student, Student>(
    "students/createStudent",
    async (data) => {
        const res = await axios.post("http://localhost:9999/students", data);
        return res.data;
    }
);

// Action cập nhật sinh viên
export const updateStudent = createAsyncThunk<Student, Student>(
    "students/updateStudent",
    async (data) => {
        const res = await axios.put(
            `http://localhost:9999/students/${data.id}`,
            data
        );
        return res.data;
    }
);

// Action xóa sinh viên
export const deleteStudent = createAsyncThunk<string, string>(
    "students/deleteStudent",
    async (id) => {
        await axios.delete(`http://localhost:9999/students/${id}`);
        return id;
    }
);

const studentSlice = createSlice({
    name: "students",
    initialState: {
        data: [] as Student[],
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllStudents.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getAllStudents.fulfilled,
                (state, action: PayloadAction<Student[]>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(getAllStudents.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(createStudent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                createStudent.fulfilled,
                (state, action: PayloadAction<Student>) => {
                    state.isLoading = false;
                    state.data.push(action.payload);
                }
            )
            .addCase(createStudent.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(updateStudent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                updateStudent.fulfilled,
                (state, action: PayloadAction<Student>) => {
                    state.isLoading = false;
                    const updatedStudent = action.payload;
                    const index = state.data.findIndex(
                        (student) => student.id === updatedStudent.id
                    );
                    if (index !== -1) {
                        state.data[index] = updatedStudent; // Cập nhật đối tượng sinh viên trong state
                    }
                }
            )
            .addCase(updateStudent.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteStudent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                deleteStudent.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    const id = parseInt(action.payload, 10); // Chuyển đổi chuỗi thành số
                    state.data = state.data.filter((student) => student.id !== id);
                }
            )

            .addCase(deleteStudent.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { reducer } = studentSlice;
export default reducer;
