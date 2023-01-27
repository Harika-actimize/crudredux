import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
import {  useParams  } from "react-router";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDataById } from "../../redux/reducers/data";
const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  console.log('asdfghjk', id);

  const [contacts, setContacts] = useState({})
  useEffect(async() => {
    const {data} = await getDataById(id)
    console.log('dataaa',data)
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    setContacts(data);
  },[]);
  // get hash id from 
  const navigate = useNavigate();
  const dispatch= useDispatch();
  //const contacts= useSelector((state)=>state);
console.log("email phone name",email, phone, name)

const handleSubmit = (e) => {
  e.preventDefault();
// const checkEmail = contacts.find(contact=>contact.email=== email && email);
// const checkNumber = contacts.find((connect)=>connect.number=== parseInt(number));
// const  checkNumber = contacts.find(
//   (contact)=> contact.number === parseInt (number)
// );
  // if (!email || !name || !phone) {

  //      return toast.warning("Please fill in all fields!!");
  //    }
    //  if (checkEmail) {
    //         console.log(checkEmail);
    //         return toast.error("This email already exists!!");
    //       }
         //  if (checkNumber) {
         //   console.log(checkNumber);
         //   return toast.error("This email already exists!!");
         // }
         const data = {
          id,
               name,
               email,
               phone,
             };
              console.log(data,"indexedit");
              dispatch({type:"UPDATE_CONTACT",payload:data})
              toast.success("Contact update successfully!!");
              navigate("/");
     
};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const checkContactEmailExists = contacts.filter((contact) =>
  //     contact.email === email && contact.id !== currentContact.id
  //       ? contact
  //       : null
  //   );
  //   const checkContactPhoneExists = contacts.filter((contact) =>
  //     contact.phone === phone && contact.id !== currentContact.id
  //       ? contact
  //       : null
  //   );

  //   if (!email || !name || !phone) {
  //     return toast.warning("Please fill in all fields!!");
  //   }
  //   if (checkContactEmailExists.length > 0) {
  //     return toast.error("This email already exists!!");
  //   }
  //   if (checkContactPhoneExists.length > 0) {
  //     return toast.error("This phone number already exists!!");
  //   }

  //   const data = {
  //     id: currentContact.id,
  //     email,
  //     name,
  //     phone,
  //   };

  //   updateContact(data);
  //   toast.success("Contact updated successfully!!");
  //   // navigate("/");
  // };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
         <h1> edit form</h1>
            <form 
             onSubmit={handleSubmit} 
            >
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <Link to="/">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                >
                  cancel
                </button>
                </Link>
              </div>
            </form>
         
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   contacts: state,
// });
// const mapDispatchToProps = (dispatch) => ({
//   updateContact: (data) => {
//     dispatch({ type: "UPDATE_CONTACT", payload: data });
//   },
// });

export default EditContact;
