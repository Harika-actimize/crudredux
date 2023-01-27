import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDataAxios} from "../../redux/reducers/data";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const [contacts, setContacts] = useState({})
  useEffect(async() => {
    const {data} = await getDataAxios()
    setContacts(data);
  },[]);

  const dispatch= useDispatch();
  const deleteContact = (id)=>{
    dispatch({type:"DELETE_CONTACT",payload:id})
    console.log("deleteContact",deleteContact)
    toast.success("Contact deleted successfully!!");
  }

  const keys = Object.keys(contacts);
  console.log('//////////////', contacts, keys)
  return (

    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-primary my-5 ml-auto ">
          +Add Contact
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
              <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">actions</th>
              </tr>
            </thead>
            <tbody>
            {
             keys&& keys.length> 0 ? keys.map((contact, id) => (
            
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{contacts[contact].name}</td>
                <td>{contacts[contact].email}</td>
                <td>{contacts[contact].phone}</td>
                <td>
                  <Link
                  
                    to={`/edit/${contact}`}
                    className="btn btn-sm btn-primary mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => deleteContact(contact)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr> 
            )) : []
}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};



export default Home;