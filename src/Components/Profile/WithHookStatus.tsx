import React, { useState } from "react"

type MapStateToPropsType = {
  status: string,
}
type MapDispatchToPropsType = {
  updateStatusThunk: (status: string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const WithHookStatus: React.FC<PropsType>= (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateStatus = () => {
    setEditMode(true)
  }
  const inactivateStatus = () => {
    setEditMode(false)
    props.updateStatusThunk(status)
  }
  const onStatusChange = (e: { currentTarget: { value: React.SetStateAction<string> } }) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <>
      {!editMode && 
        <div>
        <span onDoubleClick={activateStatus}>{status ? status : 'my status'}</span>
        </div>}
      {editMode &&
        <div><input onChange={onStatusChange} autoFocus={true} onBlur={inactivateStatus} value={status} /></div>
      }
    </>
  )

}
export default WithHookStatus