<template>
  <div class="collect">
    <VideoCard :videos="videoByPage" v-if="videoByPage"></VideoCard>
    <div class="text-center">
      <paginate
        :page-count="pageCount"
        :click-handler="jumpTo"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      ></paginate>
    </div>
  </div>
</template>

<script>
  import VideoCard from "../components/videoCard";
  export default {
    name: "collect",
    components: {
      VideoCard
    },
    data() {
      return {
        videos: null, // 全部的喜歡影片
        pageCount: 0, // 總共幾頁
        count: 12, // 一頁幾個
        // pageTokenPerPage: {}
        videoByPage: null // 每頁的喜歡影片
      };
    },
    async created() {
      let favId = JSON.parse(localStorage.id);
      if (favId.length <= 0) return;
      let res = await this.fetchFavVideo({ id: favId.join(",") }); // 撈count筆
      this.videos = res.data.items;
      this.pageCount = Math.ceil(res.data.pageInfo.totalResults / this.count);
      this.videoByPage = this.videos.slice(0, this.count);
    },
    methods: {
      jumpTo(pageNum) {
        this.videoByPage = this.videos.slice(
          (pageNum - 1) * this.count,
          pageNum * this.count
        );
      },
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
