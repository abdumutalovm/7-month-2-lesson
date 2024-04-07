const initialState = {
    name: "",
    age: 0
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_USER":
        return {
          ...state,
          name: action.payload.name,
          age: action.payload.age
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  