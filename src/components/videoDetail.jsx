import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideos } from 'src/fetchApi';
import { Link } from 'react-router-dom';
import '../css/videoTrailer.css'

function VideoDetailComponent() {
    let { id } = useParams();
    const[video, setVideo] = useState({})

    function handleGetVideo(res) {
        setVideo(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        getVideos(handleGetVideo, id)
    }, [])

  return (
    <div style={{margin: '0 25px'}}>
      <div className="mt-2 mb-2">{<Link to="/">Quay lại </Link>}</div>
      <div className="member-infor-content row">
          <div className="member-infor-image col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <img src={`https://davistheater.com/wp-content/uploads/2022/08/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`} />
          </div>
          <div className="member-infor-text col-xs-12 col-sm-12 col-md-8 col-lg-9">
              <h1 className="member-infor-text-name">{video.name}</h1>
              <p>Site : {video.site}</p>
              <p>Ngày chiếu : {video.published_at}</p>
              <p>Chất lượng : {video.size}p</p>
              <p>Thể loại : {video.type}</p>
          </div>
      </div>
    </div>
  );
}

export default VideoDetailComponent;