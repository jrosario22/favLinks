import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeCharacter = this.removeCharacter.bind(this);
    this.state = {
      favLinks: [{ name: "GitHub", URL: "www.github.com/jrosario22" }]
    };
  }

  //* Removes links from table
  removeCharacter = index => {
    const favLinks = [...this.state.favLinks];
    favLinks.splice(index, 1);
    this.setState({ favLinks });
  };

  //* Adds form data to table
  handleSubmit = favLink => {
    this.setState(state => ({
      favLinks: state.favLinks.concat([favLink])
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table
          linkData={this.state.favLinks}
          removeLink={this.removeCharacter}
        />
        <br />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LinkContainer;
