import React from "react";
import "../style/NoteApp.css";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
  render() {
    return (
      <div>
        <div className="noteList">
          <NoteList items={this.state.items} />
        </div>
        <div className="formContainer">
          <div className="formPosition">
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                value={this.state.text}
                id="textField"
                type="text"
                placeholder="Enter Text"
              />
              <button id="submitButton" type="onsubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
class NoteList extends React.Component {
  render() {
    return (
      <div className="itemValue">
        <div>
          {this.props.items.map((item) => (
            <p className="itemShape" key={item.id}>
              {item.text}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default NoteApp;
