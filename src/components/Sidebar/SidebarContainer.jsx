import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    pageData: state.sidebar
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;