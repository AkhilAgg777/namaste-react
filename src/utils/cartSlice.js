import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //vanilla(older) redux=>don't mutate state,returning was mandatory
      //const newState=[...state];
      //newState.items.push(action.payload);
      //return newState;

      //Redux toolkit
      //we have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop(); 
    },
    //originalState={items:["pizza"]}
    clearCart: (state) => {
      //   console.log(state); //[pizza]
      //   console.log(current(state));
      //   state = [];
      //   console.log(state); //[]
      //RTK-either mutate the existing state or return a new state
      //state.items.length = 0; //originalState=[]

      return { items: [] }; //this new object will be replaced inside originalState={items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
