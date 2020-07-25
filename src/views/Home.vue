<template>
  <div class="home">
    <div id="condition" class="d-flex jc-center ai-center">
      國家:
      <select class="ml-2 p-1" v-model="selectRegion">
        <option
          v-for="region in regionList"
          :key="region.id"
          :value="region.id"
        >{{region.snippet.name}}</option>
      </select>
    </div>
    <videoCard :videos="videos" v-if="videos"></videoCard>

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
    name: "home",
    components: {
      VideoCard
    },
    data() {
      return {
        videos: null,
        pageCount: 0, // 總共幾頁
        count: 12, // 一頁幾個
        pageTokenPerPage: {},
        regionList: [],
        selectRegion: "TW" // 預設選台灣
      };
    },
    async created() {
      let res = await this.fetchVideos({
        part: "snippet,statistics,contentDetails",
        regionCode:this.selectRegion,
        maxResults: this.count
      }); // 撈count筆
      this.videos = res.data.items;
      this.pageCount = Math.ceil(res.data.pageInfo.totalResults / this.count);
      if (!localStorage.getItem("pageTokenPerPage")) {
        this.queryPageToken();
      }
      let resRegion = await this.fetchRegions();
      this.regionList = resRegion.data.items;
    },
    computed: {
      width() {
        return window.innerWidth;
      }
    },
    watch: {
      async selectRegion(n) {
        console.log("in selectRegion", n);
        let res = await this.fetchVideos({
          part: "snippet,statistics,contentDetails",
          regionCode: n,
          maxResults: this.count
        }); // 撈count筆
        this.videos = res.data.items;
        this.pageCount = Math.ceil(res.data.pageInfo.totalResults / this.count);
      }
    },
    methods: {
      async jumpTo(pageNum) {
        this.pageTokenPerPage = JSON.parse(localStorage.pageTokenPerPage);
        let res = await this.fetchVideos({
          part: "snippet,statistics,contentDetails",
          regionCode:this.selectRegion,
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
        let res = await this.fetchVideos({ maxResults: this.count });
        this.pageTokenPerPage[i++] = { nextPageToken: res.data.nextPageToken }; // 第一筆沒有 prevPageToken
        while (res.data.nextPageToken) {
          // 還有下一頁就繼續撈
          res = await this.fetchVideos({
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
      fetchVideos(param = {}) {
        return this.$http.get("videos", {
          params: {
            // part: "snippet,statistics",
            // maxResults: "50",
            chart: "mostPopular",
            // regionCode: "TW",
            ...param,
            key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
          }
        });
      },
      fetchRegions() {
        return this.$http.get("i18nRegions", {
          params: {
            part: "snippet",
            hl: "zh_TW", // 以中文回傳
            key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
          }
        });
      }
    }
  };
</script>
<style lang="scss">
#condition {
  select {
  }
}
</style>