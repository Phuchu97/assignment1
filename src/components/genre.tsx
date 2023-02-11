import React, { useEffect, useState } from 'react';
import { getMoviesGenre } from 'src/fetchApi';
import Pagination from 'src/pagination';
import '../css/genre.css'

function GenreComponent(objId: any) {
    let page_size = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentIdGenre, setCurrentIdGenre] = useState(0);
    const [data, setData] = useState([]);
    const pagesCount = 5;
    const getGenreCallback = (rs: any) => {
        setData(rs.data);
    }

    if(currentIdGenre !== objId.genreId) {
      setCurrentIdGenre(objId.genreId)
    }

    const handlePageChange = (page: any) => {
        getMoviesGenre(getGenreCallback,currentIdGenre, page, page_size)
        setCurrentPage(page);
    };
    
    useEffect(() => {
      getMoviesGenre(getGenreCallback, currentIdGenre,currentPage, page_size)
    }, [currentIdGenre])

    
  return (
    <div className="movie">
      <ul className='row' style={{padding: '0', margin: '0'}}>
        {
          data.map((obj: any, index) => {
            return (
              <li key={index} className="col-2 mt-4 film" style={{listStyle: 'none'}} >
                <img style={{width: '100%', height: 'auto'}} src={`https://davistheater.com/wp-content/uploads/2022/08/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`} alt="title-image" />
                <div className='title-film'>
                  <h6 style={{textAlign: 'center', padding: '20px 0'}} >{obj.title? obj.title : obj.name}</h6>
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

export default GenreComponent;