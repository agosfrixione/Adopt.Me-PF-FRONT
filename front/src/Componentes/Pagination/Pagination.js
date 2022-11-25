import React from 'react';
import stl from "../Pagination/Pagination.module.css"


export default function Paging({mascotasPerPage, alldogs, actualPage, currentPage, currentDogs}) {

    const pageNumbers = []
    const maxpage = Math.ceil(alldogs/mascotasPerPage)

    for (let i = 0; i < maxpage; i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav>
            <div className={stl.pagination}>
            <button
                className={stl.buttonpaging}
                disabled={currentPage <= 1 ? true : false}
                onClick={() => actualPage(currentPage - 1)}
              >
                ⬅
              </button>
                {pageNumbers && pageNumbers.map(num => {
                    return (
                
                        <div className={stl.pagenr} key={num}>
                         
                            <button className={stl.buttonpaging} onClick={() => actualPage(num)}>{num}</button>
                            
                        </div>

                    )
                })}
                <button
                className={stl.buttonpaging}
                disabled={currentDogs.length < mascotasPerPage ? true : false}
                onClick={() => actualPage(currentPage + 1)}
              >
                ⮕
              </button>
            </div>  

        </nav>        
    )
}