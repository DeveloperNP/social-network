import React from "react";
import s from "./Paginator.module.css"

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <div className={s.pagesBlock}>
      {
        pages.map(p => {
          return <div className={currentPage === p ? s.selectedPage : s.usualPage}
            key={p} onClick={(e) => { onPageChanged(p) }}>{p}</div>
        })
      }
    </div>
  );
}

export default Paginator;