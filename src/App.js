import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    //Khởi tạo state chứa giá trị của input
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="container" style={{ paddingTop: "5%" }}>
        <form
          onSubmit={(e) => {
            this.submitForm(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="text">Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={(e) => this.changeInputValue(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              onChange={(e) => this.changeInputValue(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default App;
