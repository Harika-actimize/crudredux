import { database, dbRef } from "../../firebase";
import axios from 'axios';
const Id = dbRef.key;

export const addData = (data) =>{
    database.ref('/user').update({
        [`${Id}`]: data
    })
}
export const getDataAxios = async () => {
    return await axios.get(`https://reduxcrud-de950-default-rtdb.firebaseio.com/user.json`)
}
export const getDataById = async (id) => {
    return await axios.get(`https://reduxcrud-de950-default-rtdb.firebaseio.com/user/${id}.json`)
}
export const addDataAxios = (data) => {
    axios.post(`https://reduxcrud-de950-default-rtdb.firebaseio.com/user.json`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}


export const updateDataAxios = (id, data) => {
   console.log("data id",data ,id);
    axios.put(`https://reduxcrud-de950-default-rtdb.firebaseio.com/user/${id}.json`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}

export const deleteDataAxios = (id ) => {
  console.log(id,"hdghsvhd");
  axios.delete(`https://reduxcrud-de950-default-rtdb.firebaseio.com/user/${id}.json`, {})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}




//Get
//database.ref('/data').once()