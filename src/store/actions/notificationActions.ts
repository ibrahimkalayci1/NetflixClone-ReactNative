import { createAsyncThunk } from "@reduxjs/toolkit";

import  firestore from "@react-native-firebase/firestore"
import { Collections } from "../../utils/collections";

export const addNotificationDatabase = createAsyncThunk(
    "notifications/addNotificationDatabase",
    async (values:object,  {rejectWithValue} ) => {
        console.log("values", values )
        try {
            const data = await firestore()
            .collection(Collections.NOTIFICATIONS)
            .add(values);
        } catch (error:any) {
            console.log("hata", error ); 
        }
    }
);

export const getNotificationList = createAsyncThunk(
    "notifications/getNotificationList",
    async (userId:string,  {rejectWithValue} ) => {
        console.log( "userID",userId )
        try {
            const data = await firestore()
            .collection(Collections.NOTIFICATIONS)
            .where("userId", "==", userId)
            .get();
            console.log(data.docs)
            const notificationList = data.docs.map(notification => ({
                notificationId:notification.id,
                ...notification.data(),
            }));
            return notificationList;
            
        } catch (error:any) {
            rejectWithValue("Beklenmedik bir hata oluştu"  ); 
        }
    }
);


//! notification id yi veritoruz
//!Collectıon olarak notificatıon lara gidecek
//! doc olarak notification id yi alacak 
//! show değerini true yapacak


export const updateNotification = createAsyncThunk(
    "notifications/updateNotification",
    async (notificationId:string ) => {
try {
    const data = await firestore()
    .collection(Collections.NOTIFICATIONS)
    .doc(notificationId)
    .update({show:true});
}  catch (error)  {
    console.log("Error:", error );
} 
},
)
