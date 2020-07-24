<template>
  <div class="video-wrap m-3 d-flex flex-wrap jc-start" v-if="videos">
    <div class="video px-2 mb-4" v-for="(item ,index) in videos" :key="index">
      <div class="h-100">
        <img :src="item.snippet.thumbnails.medium.url" />
        <div class="d-flex p-1 ai-center">
          <div class="title ellipsis two-line flex-1">{{item.snippet.title}}</div>
          <span
            class="iconfont pl-2 icon-heart"
            :class="{'icon-heart1':IsFav(item.id)}"
            @click="toggleFavorite(item.id)"
          ></span>
        </div>
        <div class="channel-title p-1">{{item.snippet.channelTitle}}</div>
        <div class="d-flex p-1">
          <span class="flex-1">上傳日期:{{item.snippet.publishedAt | date}}</span>
          <span>觀看次數: {{views(item.statistics.viewCount)}}</span>
        </div>
        <!-- <div class="ellipsis five-line">
            {{item.snippet.description}}
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from "dayjs";

  export default {
    data() {
      return {
        ids: JSON.parse(localStorage.getItem("id")) || []
      };
    },
    filters: {
      date(val) {
        return dayjs(val).format("YYYY/MM/DD");
      }
    },
    props: {
      videos: { type: Array, required: true }
    },
    computed: {
    },
    methods: {
      IsFav(id) {
        return this.ids.includes(id);
      },
      toggleFavorite(id) {
        const { ids } = this;
        if (ids.indexOf(id) > -1) {
          ids.splice(ids.indexOf(id), 1); // 移除
        } else {
          ids.push(id);
        }
        localStorage.id = JSON.stringify(ids); // 更新localStorage
      },
      views(val) {
        let digit = this.getDigit(val);
        if (digit >= 4) {
          return Math.floor(val / Math.pow(10, 4)) + "萬次";
        } else if (digit >= 8) {
          return Math.floor(val / Math.pow(10, 8)) + "億次";
        } else {
          return val + "次";
        }
      },
      getDigit(integer) {
        let digit = -1;
        while (integer >= 1) {
          digit++;
          integer = integer / 10;
        }
        return digit;
      }
    }
  };
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &.two-line {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
}
.iconfont {
  font-size: 2rem !important;
  transition: 0.2s;
  &.icon-heart1 {
    color: red;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.1s;
  }
}

.video-wrap {
  padding: 0 20px;
  .video {
    width: 25%;
    > div {
      padding: 5px;
      box-shadow: 0.2308rem 0.2308rem 1.2308rem rgba(0, 0, 0, 0.03);
      border: 1px solid map-get($colors, "light-1");
      border-radius: 0.3846rem;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    div {
      &.title {
        font-weight: bold;
      }
      &.channel-title {
      }
    }
  }
}

@media (min-width: 1080px) {
  .home {
    .video {
      padding: 10px;
    }
  }
}
</style>
