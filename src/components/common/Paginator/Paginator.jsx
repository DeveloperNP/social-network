import React from "react";
import s from "./Paginator.module.css"
import { useState } from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [currentPortion, setCurrentPortion] = useState(Math.ceil(currentPage / portionSize));
  let currentPortionLeftBorder = ((currentPortion - 1) * portionSize) + 1;
  let currentPortionRightBorder = currentPortion * portionSize;

  return (
    <div className={s.pagesBlock}>
      {currentPortion > 1 &&
        <div className={s.arrow} onClick={() => { setCurrentPortion(currentPortion-1) }}>← PREV</div>
      }
      
      {
        pages
          .filter(p => p >= currentPortionLeftBorder && p <= currentPortionRightBorder)
          .map(p => {
            return <div className={currentPage === p ? s.selectedPage : s.usualPage}
              key={p} onClick={(e) => { onPageChanged(p) }}>{p}</div>
          })
      }

      {portionCount > currentPortion &&
        <div className={s.arrow} onClick={() => { setCurrentPortion(currentPortion+1) }}>NEXT →</div>
      }
    </div>
  )
}

export default Paginator;