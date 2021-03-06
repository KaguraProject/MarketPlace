import React from "react";
import { DrizzleContext, DrizzleProvider } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import "./App.css";
import store from './middleware'
import CountHouses from "./marketplace/countHouses";
import SellHouse from "./marketplace/SellHouse";
import ShowHouses from "./marketplace/showHouses";

const drizzle = new Drizzle(drizzleOptions);
console.log(drizzle)
//<DrizzleProvider store={store} options={drizzleOptions}></DrizzleProvider>
const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }

          return (
            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
