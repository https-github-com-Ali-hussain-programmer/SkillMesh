import {createSlice, current} from "@reduxjs/toolkit"
const gigcreationSlice = createSlice({
    name: "gigcreation",
    initialState: {
        title: "",
        category: "",
        subField: "",
        tags: [],
    },
    reducers:{
        setGigTitle: (state, action) => {
            state.title =action.payload;
            localStorage.setItem("gigTitle", action.payload);
        },
        setGigCategory: (state, action) => {
            state.category = action.payload;
        },
        setGigSubField: (state, action) => {
            state.subField = action.payload;
        },
        setGigTags: (state, action) =>{
            console.log(action);
            state.tags = action.payload;
        }

    },
});

export const {setGigTitle, setGigCategory, setGigSubField, setGigTags} = gigcreationSlice.actions;
export default gigcreationSlice.reducer;