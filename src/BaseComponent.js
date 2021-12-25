import React, { Component } from "react";
import SearchBarComponent from "./SearchBarComponent";
import TeacherRow from "./TeacherRow";
import axios from "axios";

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    console.log("inside Constructor");
  }
  render() {
    return (
      <div>
        <SearchBarComponent />
        <div>
          {this.state.data.map((row) => {
            return <TeacherRow teacher_row={row}></TeacherRow>;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    // write code to fetch data from server
    axios({
      url: "http://localhost:3001/getJobs",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
    /*axios({
      url: "http://localhost:3001/postJob",
      method: "POST",
      params: { ID: 3, title: "Networks Course" },
    });*/
  }
}

export default BaseComponent;
