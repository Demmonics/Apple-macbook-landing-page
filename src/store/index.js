import { create } from "zustand";

const useMacbookStore = create((set) => ({ // we are creating a store using zustand, and we are passing a function that takes set as an argument. This function will return an object that contains the state of our store and the actions that we can use to update the state.
    color: "#2e2c2e",// setting the initial state of our store, we are setting the color to a dark grey and the scale to 0.08
    setColor: (color) => set({color}),// this line is creating an action called setColor, which takes a color as an argument and uses the set function to update the color in our store

    scale:0.08,
    setScale: (scale) => set({scale}),

    reset: () => set({ color: "#2e2c2e", scale:0.08 }),// this line is creating an action called reset, which will reset the color and scale to their initial values when called 
    // the reset function is a callback funtion
}))

export default useMacbookStore;