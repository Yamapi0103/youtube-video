<template>
  <div>
    <video-player :options="videoOptions"/>
  </div>
</template>

<script>
  import VideoPlayer from "../components/video";

  export default {
    name: "VideoExample",
    components: {
      VideoPlayer
    },
    data() {
      return {
        videoOptions: {
          autoplay: true,
          controls: true,
          sources: [
            {
              src: "http://vjs.zencdn.net/v/oceans.mp4",
              type: "video/mp4"
            }
          ]
        }
      };
    }
  };
