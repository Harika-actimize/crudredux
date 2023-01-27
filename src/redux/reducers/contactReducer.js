import { addDataAxios,updateDataAxios,deleteDataAxios,getDataAxios } from "./data";
 const initialState = [];
function withoutProperty(obj, property) {
  const { [property]: unused, ...rest } = obj

  return rest
};
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
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
        let data = withoutProperty(action.payload,'id');
        console.log(">>>>>>>>>>",data)
            updateDataAxios(action.payload.id, data)
            return state;
  }
};
