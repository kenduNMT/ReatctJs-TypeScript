
import { configureStore } from "@reduxjs/toolkit";
import { reducer as studentReducer } from "./slice/studentSlice";
import { reducer as bookReducer } from "./slice/bookSlice";
import { reducer as orderReducer } from "./slice/bookOrderSlice";

const store = configureStore({
    reducer: {
        student: studentReducer,
        book: bookReducer,
        order: orderReducer,
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
