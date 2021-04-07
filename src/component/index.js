import React from "react";
import TaskForm from "./TaskForm";
import Control from "./Control";
import TaskList from "./TaskList";
//
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm: false,
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log("tasj", tasks);
      this.setState({ task: tasks });
    }
  }

  genereatData = () => {
    // alert("hello");
    var task = [
      {
        id: this.genereateId(),
        name: "Học lập trình",
        status: true,
      },
      {
        id: this.genereateId(),
        name: "Chơi game",
        status: false,
      },
      {
        id: this.genereateId(),
        name: "Đá banh",
        status: true,
      },
    ];
    this.setState({
      task: task,
    });
    localStorage.setItem("tasks", JSON.stringify(task));
    console.log(task);
  };
  /**viet phuong thuc random key không trùng*/
  // create random string
  s4() {
    return Math.floor(1 + Math.random() * 0x10000)
      .toString(16)
      .substring(1);
  }
  //create id from this random string
  genereateId() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4()
    );
  }
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onSubmit = (data) => {
    let { task } = this.state;
    data.id = this.genereateId();
    task.push(data);
    this.setState({
      task: task,
    });
    // localStorage.setItem("tasks", JSON.stringify(task));
  };
  render() {
    let { task, isDisplayForm } = this.state;
    let elementTaskForm = isDisplayForm ? (
      <TaskForm onSubmit={this.onSubmit} oncloseForm={this.onCloseForm} />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {elementTaskForm}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              onClick={this.onToggleForm}
              type="button"
              className="btn btn-primary"
            >
              <span className="fa fa-plus mr-5" />
              Thêm Công Việc
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.genereatData}
            >
              Genereate Data
            </button>
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList task={task} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
