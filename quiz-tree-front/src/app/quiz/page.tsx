import React from 'react'
import SearchBar from './components/SearchBar'
import SearchFilter from './components/SearchFilter'
import SearchResults from './components/SearchResult'


function QuizSearch() {
  return (
    <div className="mx-12 md:ml-28  flex flex-col  min-h-[90vh] justify-stretch my-2 mb-10 ">
      <div className='flex flex-col gap-2 mt-5'>

        <SearchBar />
        <SearchFilter />

      </div>
      <SearchResults />
    </div>
  );
}



export default QuizSearch
