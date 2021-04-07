import React from "react";
//
export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false,
    };
  }
  onCloseForm = () => {
    this.props.oncloseForm();
  };
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //
    this.onClear();
    this.onCloseForm();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
    this.onCloseForm();
  };
  render() {
    return (
      <div className="panel panel-warning">
        <div
          className="panel-heading"
          style={{ display: "flex", position: "relative" }}
        >
          <h3 className="panel-title">Thêm Công Việc</h3>
          <span
            style={{ position: "absolute", right: 15, cursor: "pointer" }}
            onClick={this.onCloseForm}
          >
            x
          </span>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button
                type="reset"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
