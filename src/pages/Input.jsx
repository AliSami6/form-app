import React, { Component } from "react";

export default class Input extends Component {
  state = {
    ChannelName: "",
    Subscriber: "",
    category: "",
    CreationDate: "",
    About: "",
    gender: "",
    checkbox: true,
  };

  FormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  CheckboxHandler = (event) => {
    this.setState({
      checkbox: event.target.checked, // corrected to "checkbox"
    });
  };

  render() {
    const { ChannelName, Subscriber, CreationDate, category, About, checkbox } =
      this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <input
              type="text"
              name="ChannelName"
              placeholder="Channel Name"
              className="form-control"
              value={ChannelName}
              onChange={this.FormChange}
            />
            <input
              type="text"
              name="Subscriber"
              placeholder="Subscriber Name"
              className="form-control"
              value={Subscriber}
              onChange={this.FormChange}
            />
            <select
              name="category"
              value={category}
              className="form-select"
              onChange={this.FormChange}>
              <option value="">Select Category</option>
              <option value="Programming">Programming</option>
              <option value="Funny">Funny</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
            </select>
            <input
              type="date"
              name="CreationDate"
              value={CreationDate}
              className="form-control"
              onChange={this.FormChange}
            />
            <textarea
              name="About"
              value={About}
              className="form-control"
              onChange={this.FormChange}></textarea>

            <div>
              <input
                type="radio"
                name="gender"
                onChange={this.FormChange}
                value="male"
              />
              <label htmlFor="gender">Male</label>
              <input
                type="radio"
                name="gender"
                onChange={this.FormChange}
                value="female"
              />
              <label htmlFor="gender">Female</label>
            </div>

            <input
              type="checkbox"
              name="checkbox"
              checked={checkbox}
              onChange={this.CheckboxHandler}
            />
            <label htmlFor="checkbox">I agree and continue</label>

            <button
              className="btn btn-sm btn-primary"
              onClick={() => console.log(this.state)}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
