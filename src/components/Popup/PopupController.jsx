import { useEffect, useState } from "react";
import PopupView from "./PopupView"
import axiosInstance from "../../constants";

const PopupController = ({ setShowPopup, userName }) => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        axiosInstance.get(`posts?user=${userName}`)
        .then((response) => setData(response.data));
    },[userName]);
   
  return (
    <PopupView setShowPopup={setShowPopup} userName={userName} data={data}/>
  )
}

export default PopupController;
