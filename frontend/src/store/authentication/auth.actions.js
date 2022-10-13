
import * as types from "./auth.types"

const userdata = JSON.parse(localStorage.getItem("userlogin"))||[]

export const  getOTP  =(payload)=>(dispatch)=>{
    dispatch({type:types.GET_OTP,payload:payload})
    let x= JSON.parse(localStorage.getItem("userlogin"))||[]
    let flag = false;

    for(let i=0;i<x.length;i++){
        if(payload.mobile==x[i].mobile){
            localStorage.setItem("currentLogin", JSON.stringify(x[i]));
            flag = true;
          
        }
    }
    if (flag) {
        localStorage.setItem("flag",true)
       
      }

    }
      export const Userlogout = (payload) => (dispatch) => {
        dispatch({ type: types.LOGOUT, payload });
      };

   export const saveDetails = (payload)=>(dispatch)=>{
  userdata.push(payload)
  localStorage.setItem("userlogin",JSON.stringify(userdata))
  localStorage.setItem("currentLogin", JSON.stringify(payload));
  console.log("data:", payload);
  dispatch({ type: types.GET_LOGIN });
      }