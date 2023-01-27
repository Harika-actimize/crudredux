import React, { useState } from "react";
// import { contact  } from "react-redux";
// import { usenavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
const contacts= useSelector((state)=>state);
const dispatch= useDispatch();
console.log('add',contacts); 
  // const navigate = usenavigate();
  const handleSubmit = (e) => {

       e.preventDefault();
  // const checkEmail = contacts.find(contact=>contact.email=== email && email);
  // // const checkPhone = contacts.find((connect)=>connect.number=== parseInt(number));
  // const  checkPhone = contacts.find(
  //   (contact)=> contact.phone === parseInt (phone)
  // );
  //      if (!email || !name || !phone) {

  //           return toast.warning("Please fill in all fields!!");
  //         }
  //         if (checkEmail) {
  //                console.log(checkEmail);
  //                return toast.error("This email already exists!!");
  //              }
  //              if (checkPhone) {
  //               // console.log(checkphone);
  //               return toast.error("This email already exists!!");
  //             }
  //             console.log('contacts',contacts, )
             
                const data = {
                  name,
                  email,
                  phone,
                };
                 console.log(data);
                 dispatch({type:"ADD_CONTACT",payload:data})
                 toast.success("Contact added successfully!!");
                 navigate("/");

  };
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form 
          onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



export default AddPost;