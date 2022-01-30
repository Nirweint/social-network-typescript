import React, {useEffect, useState} from 'react';
import styles from './Paginator.module.css'
import {Button} from "../../../UI/Button/Button";

type PaginatorType = {
    count: number
    totalCount: number
    currentPage: number
    portionSize?: number
    setCurrentPage: (page: number) => void
}

export const Paginator: React.FC<PaginatorType> = ({
                                                       totalCount,
                                                       count,
                                                       portionSize = 10,
                                                       setCurrentPage,
                                                       currentPage
                                                   }) => {

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage, portionSize]);

    let pagesCount = Math.ceil(totalCount / count);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    const isPageLinkAreActive = (page: number, currentPage: number) => {
        return currentPage === page ? `${styles.selected} ${styles.page}` : `${styles.page}`
    }

    return (
        <div>
            {portionNumber > 1 &&
			<Button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</Button>
            }

            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span
                            key={page}
                            className={isPageLinkAreActive(page, currentPage)}
                            onClick={() => setCurrentPage(page)}
                        >{page}</span>
                    )
                })}
            {portionCount > portionNumber &&
			<Button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</Button>
            }
        </div>
    );
};