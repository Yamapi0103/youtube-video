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
  import * as types from "../store/type";
  import { mapState } from "vuex";
  export default {
    name: "collect",
    components: {
      VideoCard
    },
    data() {
      return {
        // videos: null, // 全部的喜歡影片
        // pageCount: 0, // 總共幾頁
        count: 12, // 一頁幾個
        pageNum:1,
        // pageTokenPerPage: {}
        // videoByPage: [] // 每頁的喜歡影片
      };
    },
    async created() {
      let favId = JSON.parse(localStorage.id);
      if (favId.length <= 0) return;
      // let res = await this.fetchVideoById({ id: favId.join(",") }); // 撈count筆
      this.$store.dispatch(types.GET_VIDEOS_BY_ID, {
        id: favId.join(","),
        part: "snippet,statistics,contentDetails",
        // maxResults: this.count
      });
      // this.videos = res.data.items;
      // this.pageCount = Math.ceil(res.data.pageInfo.totalResults / this.count);
      // this.videoByPage = this.videos.slice(0, this.count);
      // console.log('favid',favId,this.videoByPage);
    },
    computed: {
      ...mapState({
        videos: state => state.videos,
        totalResults: state => state.pageInfo.totalResults
      }),
      videoByPage() {
        return this.videos.slice(
          (this.pageNum - 1) * this.count,
          this.pageNum * this.count
        );
      },
      pageCount() {
        let results = Math.min(this.maxTotalResults, this.totalResults); // 限制最多maxTotalResults個影片
        return Math.ceil(results / this.count);
      }
    },
    methods: {
      jumpTo(pageNum) {
        this.pageNum = pageNum
        // this.this.videoByPage = this.videos.slice(
        //   (pageNum - 1) * this.count,
        //   pageNum * this.count
        // );
      }
      // fetchVideoById(id) {
      //   return this.$http.get("videos", {
      //     params: {
      //       part: "snippet,statistics,contentDetails",
      //       ...id,
      //       key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
      //     }
      //   });
      // }
    }
  };
</script>
