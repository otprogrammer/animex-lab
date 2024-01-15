import React from "react";

const Pagination = ({ currentPage, totalPages, handlePageChange  }:any) => {
  const pages = [];

  if (totalPages <= 5) {
    // if total pages is less than or equal to 5, show all page numbers
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
        className={`inline-flex items-center px-4 py-2 text-sm font-semibold border hover:bg-blue-700 ${i === currentPage && "bg-blue-700"} dark:border-neutral-700`}

          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
  } else {
    // if total pages is greater than 5, show current page and surrounding 4 pages
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - 4;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(

        <button
          className={`inline-flex items-center px-4 py-2 rounded-sm text-sm font-semibold border  hover:bg-blue-600 ${i === currentPage ? "bg-blue-700" : "bg-neutral-900"} dark:border-neutral-800/50`}
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
  }

  return (
    <div className="inline-flex  relative -space-x-px rounded-md shadow-sm w-full justify-end gap-1 dark:text-gray-100">
      {currentPage !== 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          title="previous"
          type="button"
          className="inline-flex items-center px-2 py-2 text-sm font-semibold  rounded-l-md  "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
		</svg>
        </button>
      )}

      {pages}

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          title="next"
          type="button"
          className="inline-flex items-center px-2 py-2 text-sm font-semibold  rounded-r-md "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
		</svg>
        </button>
      )}
    </div>
  )
};

export default Pagination;
