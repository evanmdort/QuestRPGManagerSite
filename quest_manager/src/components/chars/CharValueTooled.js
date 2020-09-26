import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {connect} from 'react-redux'
import {removeCharInf} from '../../store/actions/removeCharInf'

class CharValueTooled extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
  }

  handleItemDel = (e) =>{
    this.props.removeCharInf(this.props)
  }

  render(){

    var descPresent = (this.props.item.Description) ? "tooltipped" : ""

    if(this.props.editMode){
      return(
        <div className="attributeVals row center-align">
          <div className={descPresent+" center-align"} data-position="right" data-tooltip={this.props.item.Description}>
            {this.props.item.Name}
            <i style={{color:'red'}} className=" pointed tiny material-icons col valign-wrapper center-align" onClick={this.handleItemDel}>cancel</i>
          </div>
        </div>
    )
    }
    else if(!this.props.editMode){
      return(
        <div className="attributeVals row withoutShadow">
          <span className={descPresent+" center-align grey darken-3 itemCards"}  data-position="right" data-tooltip={this.props.item.Description}>{this.props.item.Name}</span>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeCharInf: (state) => dispatch(removeCharInf(state))
  }
}

export default connect(null, mapDispatchToProps)(CharValueTooled);