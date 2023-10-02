"use client"
import React, { useEffect, useState } from 'react'

type EpisodesPaginationProps = {
    episodesList :any;
    episodesPerPage:number;
    currentPage:number;
    handlePageChange:(e:number) => void;
    totalPages:number;
}

export default function EpisodesPagination({episodesList,episodesPerPage,currentPage,handlePageChange,totalPages} : EpisodesPaginationProps) {

    const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => i + start);


      useEffect(() => {
        // Calculate total pages whenever episodesList or isSort changes
        const totalEpisodes = episodesList?.length;
        const calculatedTotalPages = Math.ceil(totalEpisodes / episodesPerPage);
        // setTotalPages(calculatedTotalPages);
      }, [episodesList, episodesPerPage]);

      const pages = range(
        Math.max(1, currentPage - 2),
        Math.min(totalPages, currentPage + 2)
      ).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`inline-flex items-center j px-4 py-2 mx-0.5 text-sm font-semibold  hover:bg-red-600 ${
            pageNumber === currentPage ? "bg-red-700" : "bg-neutral-900"
          } `}
          onClick={() => handlePageChange(pageNumber)}
          disabled={pageNumber === currentPage}
        >
          {pageNumber}
        </button>
      ));

  return pages
  
}
