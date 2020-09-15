import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/web/api'
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU',
  }
})

export function getVideos(param) {
  return service.get('videos', {
    params: {
      ...param,
      // key: 'AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU',
    },
  })
}
export function getRegions() {
  return service.get('i18nRegions', {
    params: {
      part: "snippet",
      hl: "zh_TW", // 以中文回傳
      // key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
    }
  })
}
export function searchVideos(searchText, param) {
  return service.get("search", {
    params: {
      type: "video",
      q: searchText,
      // maxResults: this.count,
      ...param,
      // key: "AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"
    }
  });
}