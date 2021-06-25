import {DataGrid} from '@material-ui/data-grid';
import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['']
    }
  }


  render() {
    const {classes} = this.props;
    const {data} = this.state;
    return (
      <div style={{height: 400, width: '100%'}}>
        <div style={{display: 'flex', height: '100%'}}>
          <div style={{flexGrow: 1}}>
            <DataGrid {...data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default (List)
