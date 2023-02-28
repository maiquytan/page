import React from 'react';
import classnames from 'classnames';
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
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item_dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
      <style>
        {`
        .pagination-container {
            display: flex;
            list-style-type: none;
        }
        .pagination-item,.pagination-item_dots {
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
            content: '';  
            display: inline-block;
            width: 0.4em;
            height: 0.4em;
            border-right: 0.12em solid rgba(0, 0, 0, 0.87);
            border-top: 0.12em solid rgba(0, 0, 0, 0.87);
        }
          
        .left {
            transform: rotate(-135deg) translate(-50%);
        }
          
        .right {
            transform: rotate(45deg);
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
