import React from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

class VideoComponent extends React.Component {

  componentDidMount () {
    const player = new Plyr(document.getElementById('player'))
    player.source = {
      type: 'video',
      title: 'Fan',
      urls: true,
      // 视频播放源，720P，1080P   
      sources: [
        {
          src: 'http://124.203.224.153/vcloud1049.tc.qq.com/1049_M2111200001EPJlS09Kbbk1001541743.f30.mp4?vkey=9B98F72DA03D5D52777B9944634D997A4AA82ED76634E57FE46B06D3214E23C87CAEDDAE8BFB67B9E77E8207E500DB6DC038D10CDDBB157AF87AF669B2353C1DEA4B4BC5C3C2A059A4481200D34E1FA095499B10A04EA45B',
          type: 'video/mp4',
          size: 720,
        },
        {
          src: 'http://124.203.224.147/vcloud1049.tc.qq.com/1049_M2111200001EPJlS09Kbbk1001541743.f40.mp4?vkey=940E677F7A592357BF8B9593AE36570077E532FDCFF3C8B50BBC9A4976A49E0BC7A67A9BCFC87CAB15DB9F813BD357FE3BAA0ED4E4869187EA73F5AC5F137D84D6426CF1D1AE4047BA743C7C0DACEA7A20F66DF71D722909',
          type: 'video/mp4',
          size: 1080,
        },
      ],
      // 视频提前预制的图片   
      poster: 'https://y.gtimg.cn/music/photo_new/T015R640x360M101000cC2Wo1he0jb.jpg?max_age=2592000',
      tracks: [
        {
            kind: 'captions',
            label: 'English',
            srclang: 'en',
            src: 'http://124.203.224.152/vcloud1049.tc.qq.com/1049_M21152000010rTVf0HJ2GT1001545157.f40.mp4?vkey=A86FE8D73C6B51ED22E0243C160A1EF00BC0D51785FFBD2DA91100BA65CB056A4DC0CF32997A0B487A20ED2927751A1CC1A3EC0F0250CB2C71EC346BDCD13A7E3A77D4DCF9D73866B54CA9A60BC2F70C479B05D68C6D7FF6',
            default: true,
        },
        {
            kind: 'captions',
            label: 'French',
            srclang: 'fr',
            src: 'http://124.203.224.146/vcloud1049.tc.qq.com/1049_M21152000010rTVf0HJ2GT1001545157.f30.mp4?vkey=2BADBBE1374CE784502960283656C24918EBFA5288D1F508AA470DFEB239B59121655C174CCC7BF2BFFF6A8B5E026671F09B87A2FAD2D3566F9C4B76D2F90889454790D2E27592317FBDDABC7004C2427D4FEAF43E3027AC',
        },
    ],
    }
  }

  render () {
    return (
      <div>
        <video id="player" />
      </div>
    )
  }
}

export default VideoComponent
