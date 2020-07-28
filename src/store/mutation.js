export const state = {
  videos: [],
  pageInfo: {
    resultsPerPage: null,
    totalResults: null,
  },
  // pageCount:0,
  regions: [],
}

export const mutations = {
  setVideos(state, data) {
    state.videos = data
  },
  setPageInfo(state, data) {
    state.pageInfo.resultsPerPage = data.resultsPerPage
    state.pageInfo.totalResults = data.totalResults
  },
  setRegions(state, data) {
    state.regions = data.map((a) => ({ id: a.id, name: a.snippet.name }))
     if(!localStorage.regions){
      localStorage.regions = JSON.stringify(state.regions)
    }
  },
}
