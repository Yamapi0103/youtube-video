<template>
  <div class="video-page">
    <video-player :options="videoOptions" />
    <div class="mt-3 text-center">預設播放這支影片</div>
  </div>
</template>

<script>
import VideoPlayer from '../components/videoPlayer';

export default {
  name: 'VideoPage',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4',
          },
        ],
      },
    };
  },
};
</script>
