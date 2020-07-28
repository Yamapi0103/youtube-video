import * as types from './type'
import { getVideos, getRegions, searchVideos } from '../api'
export const actions = {
    // [types.GET_VIDEOS_PAGE_TOKEN]: ({ commit }, param = {}) =>
    // new Promise((resolve, reject) => {
    //   getVideos({ , ...param })
    //     .then((res) => {
    //       commit('setVideos', res.data.items)
    //       commit('setPageInfo', res.data.pageInfo)
    //       resolve(res)
    //     })
    //     .catch((err) => {
    //       reject(err)
    //     })
    // }),
  [types.GET_POPULAR_VIDEOS]: ({ commit }, param = {}) =>
    new Promise((resolve, reject) => {
      getVideos({ chart: 'mostPopular', ...param })
        .then((res) => {
          commit('setVideos', res.data.items)
          commit('setPageInfo', res.data.pageInfo)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    }),
  [types.GET_REGIONS]: ({ commit }) =>
    new Promise((resolve, reject) => {
      getRegions()
        .then((res) => {
          commit('setRegions', res.data.items)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    }),
  [types.SEARCH_VIDEOS]: ({ commit }, { searchText = '', ...param }) =>
    new Promise((resolve, reject) => {
      searchVideos(searchText, param)
        .then((res) => {
          commit('setPageInfo', res.data.pageInfo)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    }),
    [types.GET_VIDEOS_BY_ID]: ({ commit }, {id='',...param}) =>
    new Promise((resolve, reject) => {
      getVideos({id,...param})
        .then((res) => {
          commit('setVideos',res.data.items)
          commit('setPageInfo', res.data.pageInfo)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    }),
}
