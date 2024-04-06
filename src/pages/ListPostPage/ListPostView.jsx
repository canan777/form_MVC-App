import PopupController from "../../components/Popup/PopupController";

const ListPostView = ({
  formData ,
  setShowPopup, 
  showPopup, 
  setUserName, 
  userName
}) => {
 // console.log(formData)
  return (
    <div className="container">
        {formData?.map((form)=>(
            <div key={form.id} className="post">
            <div className="info">
              <h3>{form.title}</h3>
              <p 
              onClick={()=> {
                setShowPopup(true);
                setUserName(form.user);
              }} 
              >
              {form.user}
              </p>
              </div> 
              <p className="text">{form.text}</p> 
          </div>
        ))}
        {showPopup && <PopupController userName={userName} setShowPopup={setShowPopup}/>}
    </div>
  );
};

export default ListPostView;
