import {createSlice} from "@reduxjs/toolkit";
import { NotificationState } from "../../models/data/notificationState";
import { getNotificationList } from "../actions/notificationActions";



const initialState:NotificationState={
    notifications:[],
    token: null,
    pending:false
}

const notificationSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{

        setToken :(state,action) => {
            state.token=action.payload
        },

        addNewNotification :(state,action) => {
            state.notifications.push(action.payload)
        },
        readNotification:(state,action) => {
            const item= state.notifications.find(n => n.id===action.payload )
            if(item){
                item.show=true
            }
        },
    },
    
  extraReducers:(builder) => {
    builder

    .addCase(getNotificationList.pending, (state,action) => {
        state.pending = true;
      })


    .addCase(getNotificationList.fulfilled, (state,action) => {
      state.notifications = action.payload;
      state.pending =false
    })

    .addCase(getNotificationList.rejected, (state,action) => {
        state.pending = false;
      });
  },





})


export const {addNewNotification,readNotification,setToken} = notificationSlice.actions
export default notificationSlice.reducer