import React, { Component } from "react";
import memorizationService from './../services/memorization';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class QuranMemorizationTable extends Component {
  state = {
    memorizationInfo: []
  };

  constructor() {
    super();
    memorizationService.getMemorizationInfo().then(data => {
      this.setState({
        memorizationInfo: data
      });
    });

    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.memorizationInfo];
          const n = parseInt(e.target.innerHTML);
          data[cellInfo.index].memorizedAyah = n;
          data[cellInfo.index].percent = 100 * (n/data[cellInfo.index].surah.totalAyah);
          this.setState({
            memorizationInfo: data
          });
          
          memorizationService.saveMemorizationInfo(this.state.memorizationInfo);
          //data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          //this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.memorizationInfo[cellInfo.index].memorizedAyah
        }}
      />
    );
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.state.memorizationInfo}
          columns={[
            {
              Header: "Index",
              id: 'surah.serialNo',
              accessor: x=> x.surah.serialNo
            },
            {
              Header: "Name",
              id: 'surah.name',
              accessor: x=> x.surah.name
            },
            {
              Header: "Total Ayahs",
              id: 'surah.totalAyah',
              accessor: x=> x.surah.totalAyah
            },
            {
              Header: "Memorized Ayahs",
              accessor: "memorizedAyah",
              Cell: this.renderEditable
            },
            {
              Header: 'Profile Progress',
              accessor: 'memorizedAyah',
              Cell: row => (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#dadada',
                    borderRadius: '2px'
                  }}
                >
                  <div
                    style={{
                      width: `${row.original.percent}%`,
                      height: '100%',
                      backgroundColor: row.original.percent > 66 ? '#85cc00'
                        : row.original.percent > 33 ? '#ffbf00'
                        : '#ff2e00',
                      borderRadius: '2px',
                      transition: 'all .2s ease-out'
                    }}
                  />
                </div>
              )
            }
          ]}
          showPagination={false}
          defaultPageSize={114}
        />
      </div>
    );
  }
}
