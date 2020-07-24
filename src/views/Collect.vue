<template>
  <div class="collect">
    <VideoCard :videos="videos" v-if="videos"></VideoCard>
  </div>
</template>

<script>
  import VideoCard from "../components/videoCard";
  export default {
    components: {
      VideoCard
    },
    data() {
      return {
        videos: null
      };
    },
    created() {
      let favId = JSON.parse(localStorage.id);
      if (favId.length <= 0) return;
      this.fetchFavVideo({ id: favId.join(",") }).then(res => {
        this.videos = res.data.items;
      });
    },
    methods: {
      fetchFavVideo(id) {
        return this.$http.get("videos", {
          params: {
            part: "snippet,statistics,contentDetails",
            ...id,
            key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
          }
        });
      }
    }
  };
</script>
