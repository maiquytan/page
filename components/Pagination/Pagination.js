import React, { useState } from 'react';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={'pagination-container'}>
      <li className={currentPage === 1 ? 'disabled' : 'pagination-item'} onClick={onPrevious}>
        <div className="arrow">
          <img src="arrow_left.svg" alt="arrow_left" title="arrow_left" width="9" height="12" />
        </div>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item_dots">&#8230;</li>;
        }

        return (
          <li className={pageNumber === currentPage ? 'selected' : 'pagination-item'} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}

      <li className={currentPage === lastPage ? 'disabled' : 'pagination-item'} onClick={onNext}>
        <div className="arrow">
          <img src="arrow_right.svg" alt="arrow_right" title="arrow_right" width="9" height="12" />
        </div>
      </li>

      <style>
        {`
        .pagination-container {
          display: flex;
          list-style-type: none;
        }
        .pagination-item,.pagination-item_dots,.selected,.disabled {
          display:flex;
          justify-content:center;
          align-items: center;
          height: 32px;
          width:32px;
          margin: auto 4px;
          color: rgba(0, 0, 0, 0.87);
          box-sizing: border-box;
          letter-spacing: 0.01071em;
          background: #FFFFFF;
          border: 1px solid #DFE3E8;
          border-radius: 4px;
          font-size: 13px;
          min-width: 32px;
          cursor: pointer;
        }
        .pagination-item_dots{
          padding: 0 9px;
        }
        .pagination-item_dots:hover {
          background-color: transparent;
          cursor: default;
        }
        pagination-item:hover {
          background-color: rgba(0, 0, 0, 0.04);
          cursor: pointer;
        }
        .selected {
          color:#FC721E;
          border: 1px solid #FC721E;
        }
        .arrow::before {
          position: relative;  
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 0.12em solid rgba(0, 0, 0, 0.87);
          border-top: 0.12em solid rgba(0, 0, 0, 0.87);
        }     
        .disabled {
          pointer-events: none;
          background: #919EAB;
          color: #C4CDD5;
        }
        .arrow::before {
          border-right: 0.12em solid rgba(0, 0, 0, 0.43);
          border-top: 0.12em solid rgba(0, 0, 0, 0.43);
        }
        .arrow:hover {
          background-color: transparent;
          cursor: default;
        }  
        `}
      </style>
    </ul>
  );
};

export default Pagination;
