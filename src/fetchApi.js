const token = '8qlOkxz4wq';
const getMethod = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}
const getMovies = (callback, data) => {
    fetch(`http://localhost:8000/movies/search`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(callback);
}

const getMoviesTrending = (callback, page, page_number) => {
    fetch(`http://localhost:8000/movies/trending/page/${page}/page_number/${page_number}`,getMethod)
        .then(res => res.json())
        .then(callback);
}

const getMoviesTopRating = (callback, page, page_number) => {
    fetch(`http://localhost:8000/movies/top-rating/page/${page}/page_number/${page_number}`,getMethod)
        .then(res => res.json())
        .then(callback);
}

const getMoviesGenre = (callback,id_genre, page, page_number) => {
    fetch(`http://localhost:8000/movies/discover/genre/${id_genre}/page/${page}/page_number/${page_number}`,getMethod)
        .then(res => res.json())
        .then(callback);
}

const getMedia = (callback, page, page_number) => {
    fetch(`http://localhost:8000/media/page/${page}/page_number/${page_number}`,getMethod)
        .then(res => res.json())
        .then(callback);
}

const getUser = (callback, page, page_number) => {
    fetch(`http://localhost:8000/user/page/${page}/page_number/${page_number}`,getMethod)
        .then(res => res.json())
        .then(callback);
}

const getGenre = (callback) => {
    fetch(`http://localhost:8000/genre/genre-list`,getMethod)
        .then(res => res.json())
        .then(callback);
}

const getVideos = (callback, id) => {
    fetch(`http://localhost:8000/video/${id}`,getMethod)
        .then(res => res.json())
        .then(callback);
}


export {
    getMovies,
    getMoviesTrending,
    getMoviesTopRating,
    getMoviesGenre,
    getMedia,
    getUser,
    getGenre,
    getVideos,
}