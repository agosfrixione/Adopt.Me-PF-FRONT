import React from 'react';
import stl from "../Pagination/Pagination.module.css"


export default function Paging({mascotasPerPage, alldogs, actualPage}) {

    const pageNumbers = []
    const maxpage = Math.ceil(alldogs/mascotasPerPage)

    for (let i = 0; i < maxpage; i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav>
            <div className={stl.pagination}>
                {pageNumbers && pageNumbers.map(num => {
                    return (
                
                        <div className={stl.pagenr} key={num}>
                         
                            <button className={stl.buttonpaging} onClick={() => actualPage(num)}>{num}</button>
                            
                        </div>

                    )
                })}
            </div>  

        </nav>        
    )
}