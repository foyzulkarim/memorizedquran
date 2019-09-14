import React, { Component } from "react";
import surahService from "../services/surah";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class QuranMemorizationTable extends Component {
  state = {
    surahList: []
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
      Header: "Memorized Ayahs" // Required because our accessor is not a string
    }
  ];

  constructor() {
    super();
    surahService.listSurah().then(s => {
      this.setState({
        surahList: s
      });
    });
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.state.surahList}
          columns={this.columns}
          showPagination={false}
          defaultPageSize={114}
        />
      </div>
    );
  }
}
