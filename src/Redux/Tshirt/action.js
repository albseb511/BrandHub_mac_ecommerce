import axios from "axios";


export const GET_TSHIRTDATA = "GET_TSHIRTDATA";

export const TshirtData = (payload) => {
    console.log("action" , payload)
    return{ 

        type : GET_TSHIRTDATA,
        payload : payload
    }
    
}

export const getTshirtData = () => (dispatch) => {

  
     axios.get("https://avinashtshirt.herokuapp.com/product").then((res)=>{
         console.log(res.data.product)
        dispatch(TshirtData(res.data.product))
    })
}