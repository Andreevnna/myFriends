import React from "react"

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateStatus = () => {
    this.setState(
      {
        editMode: true
      }
    )
  }
  inactivateStatus = () => {
    this.setState(
      {editMode: false}
    )
    this.props.updateStatusThunk(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  render() {
    return (
      <>
        {!this.state.editMode &&
          <div><span onDoubleClick={this.activateStatus}>{this.props.status ? this.props.status : 'my status'}</span></div>}
        {this.state.editMode &&
          <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.inactivateStatus} value={this.state.status} /></div>
        }
      </>
    )
  }

}
export default Status