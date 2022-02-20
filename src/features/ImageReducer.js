import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    approvedImages: [],
    RejectedImageIds: []
};

export const imageSlice = createSlice({
    name: 'pictures',
    initialState,
    reducers: {
        addApprovedImage: (state, action) => {
            state.approvedImages.push(action.payload);
        },
        addRejectedImageId: (state, action) => {
            state.RejectedImageIds.push(action.payload);
        }
    },
});

export const selectRejectedImageIds = (state) => state.pictures.RejectedImageIds;
export const selectApprovedImages = (state) => state.pictures.approvedImages;

export const { addApprovedImage, addRejectedImageId } = imageSlice.actions;

export default imageSlice.reducer;