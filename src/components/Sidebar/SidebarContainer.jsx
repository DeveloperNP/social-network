import React from "react";
import Sidebar from "./Sidebar";
import StoreContext from "../../StoreContext";

// const SidebarContainer = (props) => {
//   let state = props.store.getState();
  
//   return (<Sidebar pageData={state.sidebar} />);
// }

const SidebarContainer = () => { 
  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState();

          return <Sidebar pageData={state.sidebar} />
        }
      }
    </StoreContext.Consumer>
  );
}

export default SidebarContainer;