import axios from "axios";


export const GET_SHIRTDATA = "GET_SHIRTDATA";

export const ShirtData = (payload) => ({

    type : GET_SHIRTDATA,
    payload : payload
})

export const getShirtData = () => (dispatch) => {


        
    axios.get("https://avinashshirt.herokuapp.com/shirt").then((res)=>{
        dispatch(ShirtData(res.data.product))
    })
}