import React from "react";
import TaskListItem from "./TaskListItem";
//
export default class TaskList extends React.Component {
  render() {
    let { task } = this.props;
    let elementTask = task.map((data, index) => {
      return <TaskListItem key={index} data={data} index={index} />;
    });
    return (
      <table
        className="table table-bordered table-hover"
        style={{ marginTop: 15 }}
      >
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
              <select className="form-control">
                <option value={-1}>Tất Cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
              </select>
            </td>
            <td />
          </tr>
          {elementTask}
        </tbody>
      </table>
    );
  }
}
