import React from "react";
import Search from "./Search";
import Sort from "./Sort";
//
export default class Control extends React.Component {
  render() {
    return (
      <div className="row" style={{ marginTop: 15 }}>
        {/*Search */}
        <Search />
        {/*Sort */}
        <Sort />
      </div>
    );
  }
}
