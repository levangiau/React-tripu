import React from "react";
//
export default class TaskListItem extends React.Component {
  render() {
    let { data, index } = this.props;
    console.log("datalistitem", data);
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{data.name}</td>
        <td className="text-center">
          {data.status === true ? (
            <span className="label label-success">Kích hoạt</span>
          ) : (
            <span className="label label-danger">Ẩn</span>
          )}
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5" />
            Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <span className="fa fa-trash mr-5" />
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
