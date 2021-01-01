<template>
  <div class="video-wrap m-3 d-flex flex-wrap" v-if="videos">
    <div class="video p-2 mb-4" v-for="(item, index) in videos" :key="index">
      <div class="h-100">
        <router-link to="/video" tag="figure">
          <img :src="item.snippet.thumbnails.medium.url" />
          <span class="time m-1 p-1 fs-xxs">{{
            durationParser(item.contentDetails.duration)
          }}</span>
        </router-link>
        <div class="d-flex p-1 ai-center">
          <div class="title ellipsis two-line flex-1">
            {{ item.snippet.title }}
          </div>
          <span
            class="iconfont pl-2 icon-heart"
            :class="{ 'icon-heart1': IsFav(item.id) }"
            @click="toggleFavorite(item.id)"
          ></span>
        </div>
        <div class="channel-title p-1">{{ item.snippet.channelTitle }}</div>
        <div class="d-flex p-1 flex-wrap">
          <!-- <div class="updateTime">上傳日期:{{item.snippet.publishedAt | date}}</div> -->
          <div class="updateTime">
            上傳日期: {{ publishedByNow(item.snippet.publishedAt) }}
          </div>
          <div>觀看次數: {{ views(item.statistics.viewCount) }}</div>
        </div>
        <span
          class="iconfont icon-youtube d-iflex ai-center"
          @click="toYoutube(item.id)"
        >
          <span class="pl-2 text-info">前往youtube</span>
        </span>
        <!-- <div class="ellipsis five-line">
            {{item.snippet.description}}
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  // import dayjs from "dayjs";

  export default {
    data() {
      return {
        ids: JSON.parse(localStorage.getItem("id")) || [],
      };
    },
    // filters: {
    //   date(val) {
    //     return dayjs(val).format("YYYY/MM/DD");
    //   }
    // },
    props: {
      videos: { type: Array, required: true },
    },
    computed: {},
    methods: {
      toYoutube(id) {
        window.open("https://www.youtube.com/watch?v=" + id, "_blank");
      },
      publishedByNow(timeStr) {
        let published = new Date(timeStr);
        let now = new Date();
        let diffSec = parseInt((now - published) / 1000);
        let diffMin = parseInt(diffSec / 60);
        let diffHour = parseInt(diffMin / 60);
        let diffDay = parseInt(diffHour / 24);
        let diffMonth = parseInt(diffDay/30);
        let diffYear = parseInt(diffDay / 365);
        if (diffSec < 60) {
          return diffSec + "秒前";
        } else if (diffMin < 60) {
          return diffMin + "分鐘前";
        } else if (diffHour < 24) {
          return diffHour + "小時前";
        } else if (diffDay < 30) {
          return diffDay < 7 ? diffDay + "天前" : parseInt(diffDay / 7) + "週前";
        } else if(diffMonth<12){
          return diffMonth+"個月前"
        } else {
          return diffYear +"年前"
        }
      },
      durationParser(str) {
        let hour = /\d*H/.exec(str);
        let min = /\d*M/.exec(str);
        let sec = /\d*S/.exec(str);
        let secondLayerParser = function (h, m, s) {
          let hour = "",
            min = "",
            sec = "";
          /*解析小時*/
          /*parsing hour*/
          if (h) {
            hour = /\d*/.exec(h)[0] + ":";
          } else {
            hour = "";
          }
          /*解析分鐘*/
          /*parsing minute*/
          if (m) {
            min = /\d*/.exec(m)[0];
            if (min.length === 1) {
              min = "0" + min;
            }
          } else {
            min = "00";
          }
          /*解析秒*/
          /*parsing second*/
          if (s) {
            sec = /\d*/.exec(s)[0];
            if (sec.length === 1) {
              sec = "0" + sec;
            }
          } else {
            sec = "00";
          }
          /*回傳完成的影片時間格式*/
          /*return digit time-code*/
          return hour + min + ":" + sec;
        };
        return secondLayerParser(hour, min, sec);
      },
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
        if (digit < 4) {
          return val + "次";
        }
        if (digit === 4) {
          // 一萬~十萬以內 顯示小數點後一位 eg: 5.2萬
          return (val / Math.pow(10, 4)).toFixed(1) + "萬次";
        } else if (digit >= 8) {
          if (digit > 8) {
            return Math.floor(val / Math.pow(10, 8)) + "億次";
          }
          // // 一億~十億以內 顯示小數點後一位 eg: 5.2億
          return parseFloat((val / Math.pow(10, 8)).toFixed(1)) + "億次";
        } else if (digit > 4) {
          return Math.floor(val / Math.pow(10, 4)) + "萬次";
        }
      },
      getDigit(integer) {
        let digit = -1;
        while (integer >= 1) {
          digit++;
          integer = integer / 10;
        }
        return digit;
      },
    },
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
  &:before {
    font-size: 1.8rem;
  }
  transition: 0.2s;
  &.icon-heart1,
  &.icon-youtube {
    color: red;
  }
  &.icon-youtube {
    cursor: pointer;
  }
  &.icon-heart:hover {
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
    figure {
      cursor: pointer;
      width: 100%;
      position: relative;
      img {
        width: 100%;
        // height: auto;
        object-fit: cover;
      }
      span.time {
        position: absolute;
        bottom: 0%;
        right: 0%;
        background: map-get($colors, "dark");
        color: map-get($colors, "white");
        // border-radius: 0.3846rem;
      }
    }
    .updateTime {
      flex: 1 0 auto;
    }
    div {
      &.title {
        font-weight: bold;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .video-wrap {
    .video {
      width: 33.3%;
    }
  }
}
@media screen and (max-width: 768px) {
  .video-wrap {
    .video {
      width: 50%;
    }
  }
}
</style>
