
export const state = {
  videos:[],
  pageInfo:{
    resultsPerPage:null,
    totalResults:null
  },
  regions:[]
}

export const mutations = {
  setVideos(state,data){
    state.videos = data;
  },
  setPageInfo(state,data){
    state.pageInfo.resultsPerPage = data.resultsPerPage
    state.pageInfo.totalResults = data.totalResults
  },
  setRegions(state,data){
    state.regions = data
  }
}