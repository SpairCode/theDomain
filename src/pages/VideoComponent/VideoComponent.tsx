import React from 'react';
// import Plyr from 'plyr';
// import 'plyr/dist/plyr.css';
import VideoPlayer from './Video';


class VideoComponent extends React.Component {

  // componentDidMount () {
  //   const player = new Plyr(document.getElementById('player'))
  //   player.source = {
  //     type: 'video',
  //     title: 'Fan',
  //     urls: true,
  //     // 视频播放源，720P，1080P   
  //     sources: [
  //       {
  //         src: 'https://videocdn.taobao.com/oss/taobao-ugc/fc1e4571ebfd4b58b95b9b4c37eb9d29/1511096616/video.mp4',
  //         type: 'video/mp4',
  //         size: 720,
  //       },
  //       {
  //         src: 'https://videocdn.taobao.com/oss/taobao-ugc/fc1e4571ebfd4b58b95b9b4c37eb9d29/1511096616/video.mp4',
  //         type: 'video/mp4',
  //         size: 1080,
  //       },
  //     ],
  //     // 视频提前预制的图片   
  //     poster: 'https://pic.xiami.net/images/common/uploadpic/47/1511143907947.jpg',
  //   }
  // }

  render () {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
        type: 'application/x-mpegURL'
      }]
    }
    return (
      <div>
        {/* <video id="player" /> */}
        <VideoPlayer {...videoJsOptions} />
      </div>
    )
  }
}

export default VideoComponent
