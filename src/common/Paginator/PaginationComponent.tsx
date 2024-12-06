import React, {FC} from 'react'
type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (page: number) => void
}
const PaginationComponent: FC<PropsType> = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index)
  }
  return (
    <div>
      {pages.map((p) => {
        return <span className={props.currentPage === p ? "selected" : ''}
          onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
  )
}
export default PaginationComponent