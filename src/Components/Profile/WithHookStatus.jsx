import React, { useState } from "react"

const WithHookStatus = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateStatus = () => {
    setEditMode(true)
  }
  const inactivateStatus = () => {
    setEditMode(false)
    props.updateStatusThunk(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <>
      {!editMode &&
        <div><span onDoubleClick={activateStatus}>{status ? status : 'my status'}</span></div>}
      {editMode &&
        <div><input onChange={onStatusChange} autoFocus={true} onBlur={inactivateStatus} value={status} /></div>
      }
    </>
  )

}
export default WithHookStatus