"use client";

import { useSearch } from "@/contexts/SearchContext";

import {JSX} from 'react'

const OpenSearchFormBtn = (): JSX.Element => {
  const { openSearchForm } = useSearch();

  return (
    <div role="button" onClick={openSearchForm} className="bg-gray-100 border rounded-lg px-4 py-3 mt-6 font-semibold cursor-pointer dark:bg-[#292a2d] dark:border-gray-700 dark:text-white">
      Start searching for your dream job...
    </div>
  )
}

export default OpenSearchFormBtn
