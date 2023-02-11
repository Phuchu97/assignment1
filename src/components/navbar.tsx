import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { getGenre, getMoviesGenre } from 'src/fetchApi';
import { Link } from 'react-router-dom'
import '../css/navbar.css'

function NavbarComponent(callback: any) {
  let page = 1;
  let page_size = 20;
  const [showNav, setShowNav] = useState(false);
  const [genreList, setGenreList] = useState([]);
  const showNavCss = useSpring({
    display: showNav? 'block' : 'none'
  })

  function handleMouseEnter() {
    setShowNav(true);
  }

  function handleMouseLeave() {
    setShowNav(false);
  }

  function handleGetListMoviesGenre(id: number) {
    callback.handleGenre(id)
  }

  useEffect(() => {
    getGenre((res: any) => {
      setGenreList(res.data)
      console.log(res.data);
    })
  }, [])

  return (
    <div className="nav list-nav">
      <nav className='nav'>
        <ul className={`list-title`}>
          <Link className='list-title-item nav-image color-nav' to="/">Tất cả</Link>
          <Link className='list-title-item nav-image color-nav' to="/trending">Phim thịnh hành</Link>
          <Link className='list-title-item' to="/top-rating">Top 20</Link>
          <Link 
            className='list-title-item show-genre' 
            to="/Discover" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Thể loại
          </Link>
        </ul>
      </nav>
      <animated.div 
        className='genre pt-2' style={showNavCss}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className='list-genre row'>
          {
            genreList.map((obj: any) => {
              return <li onClick={() => {handleGetListMoviesGenre(obj.id)}} className='list-genre-item col-2' key={obj.id}>{obj.name}</li>
            })
          }
        </ul>
      </animated.div>
    </div>
  );
}

export default NavbarComponent;