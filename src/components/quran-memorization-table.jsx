import React, { Component } from "react";
import memorizationService from './../services/memorization';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class QuranMemorizationTable extends Component {
  state = {
    memorizationInfo: []
  };

  columns = [
    {
      Header: "Index",
      accessor: "serialNo" // String-based value accessors!
    },
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Total Ayahs",
      accessor: "totalAyah"
    },
    {
      Header: "Memorized Ayahs",
      accessor: "memorizedAyah"
    }
  ];

  constructor() {
    super();
    memorizationService.getMemorizationInfo().then(data => {
      this.setState({
        memorizationInfo: data
      });
    });
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.state.memorizationInfo}
          columns={this.columns}
          showPagination={false}
          defaultPageSize={114}
        />
      </div>
    );
  }
}
