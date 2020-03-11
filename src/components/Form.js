import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.state = { name: "", URL: "" };
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangeURL = event => {
    this.setState({
      URL: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);

    // * This will reset the form on submission
    this.setState({
      name: "",
      URL: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <label>URL</label>
        <input
          type="text"
          value={this.state.URL}
          onChange={this.handleChangeURL}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
