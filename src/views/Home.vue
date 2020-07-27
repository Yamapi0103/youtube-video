<template>
  <div class="home">
    <div class="search d-flex jc-center mb-3">
      <input type="text" v-model="searchText" @keyup.enter="clickSearch" />
      <span class="iconfont icon-search p-2 bg-light-1" @click="clickSearch"></span>
    </div>
    <div id="condition" class="d-flex jc-center ai-center">
      各國的發燒影片:
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
        ref="Pagination"
        :page-count="pageCount"
        :click-handler="jumpPage"
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
        pageNum: 1, // 目前在第幾頁
        pageTokenPerPage: {},
        regionList: [],
        selectRegion: "TW", // 預設選台灣
        searchText: "",
        isSearch: false
      };
    },
    async created() {
      let res = await this.fetchVideos({
        part: "snippet,statistics,contentDetails",
        regionCode: this.selectRegion,
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
      selectRegion() {
        this.isSearch = false;
        localStorage.removeItem("searchText");
        this.resetPageNum(1);
        this.jumpPage(this.pageNum);
      }
    },
    methods: {
      async jumpPage(pageNum) {
        this.pageNum = pageNum;
        this.pageTokenPerPage = JSON.parse(localStorage.pageTokenPerPage);
        let res;
        if (this.isSearch) {
          res = await this.searchVideos({
            pageToken:
              pageNum - 2 >= 0
                ? this.pageTokenPerPage[pageNum - 2].nextPageToken
                : null // 第一頁不須帶入pageToken});
          });
          console.log("res", res);
          let id = res.data.items.map(i => i.id.videoId);
          res = await this.fetchVideoById({ id: id.join(",") });
        } else {
          res = await this.fetchVideos({
            part: "snippet,statistics,contentDetails",
            regionCode: this.selectRegion,
            maxResults: this.count,
            pageToken:
              pageNum - 2 >= 0
                ? this.pageTokenPerPage[pageNum - 2].nextPageToken
                : null // 第一頁不須帶入pageToken
          }); // 撈count筆
        }
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
      },
      searchVideos(param = {}) {
        let searchText = localStorage.searchText;
        return this.$http.get("search", {
          params: {
            type: "video",
            q: searchText,
            maxResults: this.count,
            ...param,
            key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
          }
        });
      },
      fetchVideoById(id) {
        return this.$http.get("videos", {
          params: {
            part: "snippet,statistics,contentDetails",
            ...id,
            key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
          }
        });
      },
      resetPageNum(pageNum) {
        this.$refs.Pagination.selected = pageNum; // 搜尋預設從第一頁開始
        this.pageNum = pageNum;
      },
      async clickSearch() {
        this.resetPageNum(1);
        this.isSearch = true;
        localStorage.searchText = this.searchText;
        let res = await this.searchVideos();
        console.log("res", res);
        let id = res.data.items.map(i => i.id.videoId);
        res = await this.fetchVideoById({ id: id.join(",") });
        this.videos = res.data.items;
      }
    }
  };
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.iconfont {
  &.icon-search:before {
      font-size: 16px;
  }
}
.search {
  input,
  span {
    border-color: map-get($colors, "light-2");
    border-style: solid;
    border-width: 1px;
  }
  span {
    border-left: none;
  }
}
</style>