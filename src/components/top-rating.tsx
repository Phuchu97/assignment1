import React, { useEffect, useState } from 'react';
import { getMoviesTopRating } from 'src/fetchApi';
import Pagination from 'src/pagination';

function TopRatingComponent() {
    let page_size = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [topRating, setTopRating] = useState([])
    const pagesCount = 5;
    const getTrendingCallback = (rs: any) => {
      setTopRating(rs.data)
    }

    const handlePageChange = (page: any) => {
        getMoviesTopRating(getTrendingCallback, page, page_size)
        setCurrentPage(page);
    };
    
    useEffect(() => {
        getMoviesTopRating(getTrendingCallback, currentPage, page_size)
    }, [])

    
  return (
    <div className="movie">
      <ul className='row' style={{padding: '0', margin: '0'}}>
        {
          topRating.map((obj: any, index) => {
            return (
              <li key={index} className="col-2 mt-4 film" style={{listStyle: 'none'}} >
                <img style={{width: '100%', height: 'auto'}} src={`https://davistheater.com/wp-content/uploads/2022/08/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`} alt="title-image" />
                <div className='title-film'>
                  <h6 style={{textAlign: 'center', padding: '10px 0'}} >{obj.title? obj.title : obj.name}</h6>
                </div>
              </li>
            )
          })
        }
      </ul>
      <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default TopRatingComponent;