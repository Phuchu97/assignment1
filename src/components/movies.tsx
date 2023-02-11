import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesTrending, getMovies } from 'src/fetchApi';
import Pagination from 'src/pagination';
import '../css/movies.css'

function MoviesComponent() {
  let page_size = 20;
  const pagesCount = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [films, setFilm] = useState([]);
    const [keyword, setKeyword] = useState('')

    const getListMovie = (rs: any) => {
      setFilm(rs.data)
    }

    const handlePageChange = (page: any) => {
      setCurrentPage(page);
    };

    const handleChangeMovieName = (e: any) => {
      setKeyword(e.target.value)
      if (e.keyCode === 13) {
        let data = {
          keyword: keyword,
          page: currentPage,
          page_size: page_size
        }
        getMovies(getListMovie, data)
      }
    }
    
    useEffect(() => {
      let data = {
        keyword: keyword,
        page: currentPage,
        page_size: page_size
      }
      getMovies(getListMovie, data)
    }, [])

    
  return (
    <div className="movie">
      <div className='mt-2 mb-2 search' style={{display: "flex", justifyContent: "end"}}>
        <label className='search-title' htmlFor="search-input">Tìm kiếm</label>
        <input id='search-input' className='mr-2' type="text" value={keyword} onChange={(e) => {handleChangeMovieName(e)}} onKeyUp={(e) => {handleChangeMovieName(e)}}   />
      </div>
      <ul className='row' style={{padding: '0', margin: '0'}}>
        {
          films.map((obj: any, index) => {
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

export default MoviesComponent;