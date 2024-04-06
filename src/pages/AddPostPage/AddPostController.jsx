import { useState } from "react"
import AddPostView from "./AddPostView"
import AddPostModel from "./AddPostModal";
import axiosInstance from "../../constants";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const formModel = new AddPostModel();
  const[form,setForm] = useState(formModel.state);
  // console.log(form)
const navigate = useNavigate();
// key:hangi inputa yazıldığı bilgisi
// e:inputun için aldık
  const onInputChange = (key,e) => {
    // console.log(key, e)
    setForm({...form,[key]:e.target.value});
  }

const handleSubmit = (e) => {
  e.preventDefault();
  if(!form.user || !form.title || !form.text){
    alert("Tüm alanları doldurunuz")
  }
  axiosInstance.post("posts",form).then((response)=> navigate("/"));
 };
 
  return (
    <AddPostView 
    handleSubmit={handleSubmit} onInputChange={onInputChange}
    />  
  )
}

export default AddPostController
