import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesTrending, getMovies } from 'src/fetchApi';
import Pagination from 'src/pagination';

function MoviesTrendingComponent() {
  let page_size = 20;
  const pagesCount = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [trending, setTrending] = useState([]);
    const getTrendingCallback = (rs: any) => {
      setTrending(rs.data)
    } 

    const handlePageChange = (page: any) => {
      getMoviesTrending(getTrendingCallback, page, page_size)
      setCurrentPage(page);
    };
    
    useEffect(() => {
        getMoviesTrending(getTrendingCallback, currentPage, page_size)
    }, [])

    
  return (
    <div className="movie">
      <ul className='row' style={{padding: '0', margin: '0'}}>
        {
          trending.map((obj: any, index) => {
            return (
              <Link key={index} className="col-2 mt-4 film" style={{listStyle: 'none'}} to={`/video/${obj.id}`}>
                <img style={{width: '100%', height: 'auto'}} src={`https://davistheater.com/wp-content/uploads/2022/08/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`} alt="title-image" />
                <div className='title-film'>
                  <h6 style={{textAlign: 'center', padding: '10px 0'}} >{obj.title? obj.title : obj.name}</h6>
                </div>
              </Link>
            )
          })
        }
      </ul>
      <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default MoviesTrendingComponent;