<template>
  <div class="home">
    <VideoCard :videos="videos" v-if="videos"></VideoCard>
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
  // import dayjs from "dayjs";
  import VideoCard from "../components/videoCard";

  export default {
    name: "home",
    components: {
      VideoCard
    },
    data() {
      return {
        videos: null,
        pageCount: 0, // 總共幾頁
        count: 12, // 一頁幾個
        pageTokenPerPage: {}
      };
    },
    // mounted() {
    //   console.log(window.innerWidth);
    // },
    async created() {
      let res = await this.fetchVideo({
        part: "snippet,statistics,contentDetails",
        maxResults: this.count
      }); // 撈count筆
      this.videos = res.data.items;
      this.pageCount = parseInt(res.data.pageInfo.totalResults / this.count);
      if (!localStorage.getItem("pageTokenPerPage")) {
        this.queryPageToken();
      }
    },
    computed: {
      width() {
        return window.innerWidth;
      }
    },
    methods: {
      async jumpTo(pageNum) {
        console.log("pageNum", pageNum);
        this.pageTokenPerPage = JSON.parse(localStorage.pageTokenPerPage);
        let res = await this.fetchVideo({
          part: "snippet,statistics,contentDetails",
          maxResults: this.count,
          pageToken:
            pageNum - 2 >= 0
              ? this.pageTokenPerPage[pageNum - 2].nextPageToken
              : null // 第一頁不須帶入pageToken
        }); // 撈count筆
        this.videos = res.data.items;
      },
      async queryPageToken() {
        let i = 0;
        let res = await this.fetchVideo({ maxResults: this.count });
        // let { nextPageToken } = res.data;
        this.pageTokenPerPage[i++] = { nextPageToken: res.data.nextPageToken }; // 第一筆沒有 prevPageToken
        while (res.data.nextPageToken) {
          // 還有下一頁就繼續撈
          res = await this.fetchVideo({
            maxResults: this.count,
            pageToken: this.pageTokenPerPage[i - 1].nextPageToken
          });
          this.pageTokenPerPage[i++] = {
            nextPageToken: res.data.nextPageToken,
            prevPageToken: res.data.prevPageToken
          };
        }
        localStorage.setItem(
          "pageTokenPerPage",
          JSON.stringify(this.pageTokenPerPage)
        );
      },
      fetchVideo(param = {}) {
        return this.$http.get("videos", {
          params: {
            // part: "snippet,statistics",
            // maxResults: "50",
            chart: "mostPopular",
            regionCode: "TW",
            ...param,
            key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
          }
        });
      }
    }
  };
</script>
