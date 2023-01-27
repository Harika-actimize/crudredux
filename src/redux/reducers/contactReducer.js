import { addDataAxios,updateDataAxios,deleteDataAxios,getDataAxios } from "./data";
 const initialState = [];
// import { addData } from "./data";
function withoutProperty(obj, property) {
  // alert("hai")
  const { [property]: unused, ...rest } = obj

  return rest
};
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      // console.log(state, "state");
      // console.log(action.payload,"action.payload");
      state = [...state, action.payload];
      // console.log(state, "state222");
      addDataAxios(action.payload);
      return state;
      case "GET_CONTACT":
        const getContacts = getDataAxios();
        state = getContacts;
        return state
        case "DELETE_CONTACT":
      const filterContacts = state.filter(contact =>contact.id !== action.payload && contact);
      state = filterContacts;
      deleteDataAxios(action.payload);
      console.log(action.payload ,"action.payload");
      console.log(action .id,"action");

      return state;
          case "UPDATE_CONTACT":
            // const contactUpdate = state.filter((contact) =>
            //   contact.id === action.payload.id
            //     ? Object.assign(contact, action.payload)
            //     : contact
                
            // );
            // console.log("///////////",action.payload)
            // state = contactUpdate;
            // console.log(contactUpdate,"contactUpdate");
            // console.log(action.payload,"contactUpdate");
          //   
          
        let data = withoutProperty(action.payload,'id');
        // const { [action.payload]: unused, ...rest } = 'id'
        console.log(">>>>>>>>>>",data)
            updateDataAxios(action.payload.id, data)
            // console.log("stateee",state)
            return state;
  }
};
