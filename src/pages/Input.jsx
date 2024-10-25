import React, { Component } from 'react'

export default class Input extends Component {
  FormChange =(event)=> {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-12 mt-3">
            <input
              type="text"
              name="ChannelName"
              placeholder="Channel Name"
              className="form-control"
              onChange={this.FormChange}
            />
            <input
              type="text"
              name="Subscriber"
              placeholder="Subscriber Name"
              className="form-control"
              onChange={this.FormChange}
            />
            <select
              name="category"
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
              className="form-control"
              onChange={this.FormChange}
            />
            <textarea name="About" className="form-control" onChange={this.FormChange}></textarea>
          </div>
        </div>
      </div>
    );
  }
}
