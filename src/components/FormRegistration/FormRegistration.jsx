import { Component } from 'react';

export default class FormRegistration extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
    gender: 'male',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser({
      // значення забираємо зі стейту
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    });
    this.setState({
      email: '',
      password: '',
    });
    this.props.onClose();
  };

  handleCheck = ({ target: { checked } }) => {
    this.setState({ isChecked: checked });
  };

  handleRadio = ({ target: { value } }) => {
    this.setState({ gender: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            {/* Дописати для реєстрації ім'я та прізвище */}
          {/* <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value="Mark"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div> */}
          {/* <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value="Otto"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div> */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              // name повинно співпадати зі стейтом:
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={this.state.isChecked}
              onChange={this.handleCheck}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={this.state.gender === 'male'}
              onChange={this.handleRadio}
              value="male"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked={this.state.gender === 'female'}
              onChange={this.handleRadio}
              value="female"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
          <button
            disabled={!this.state.isChecked}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
