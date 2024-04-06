import { v4 } from "uuid";
class AddPostModel {
  state = {
    id: v4(),
    date: new Date(),
    user: "",
    title: "",
    text: "",
  };
}

export default AddPostModel;