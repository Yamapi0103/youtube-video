<template>
        <video ref="videoPlayer" class="video-js"></video>
</template>

<script>
import videojs from 'video.js';

export default {
    // name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    created(){
        console.log('in video', this.options);
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
<style lang="scss">
.video-js {
  margin: 0 auto;
}
</style>