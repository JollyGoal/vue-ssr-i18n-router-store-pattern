// export const getLatestNews = ({ state, commit }, { pageSize, cb = () => { }, category, load = 1 }) => {
//     apiV2.getLatestNews((data, count) => {
//         for (let i = 1; i <= load; i++) {
//             commit('setAllnews', data.slice((i - 1) * pageSize, i * pageSize))
//             commit('incrementCurrentPage')
//         }
//         commit('setNewsCount', count)
//         cb()
//     }, state.currentPage, pageSize * load, category)
// }

// export const getNewsDetails = ({ commit }, { slug, err }) => {
//     return apiV2.getNewsDetails((data) => {
//         commit('setActiveArticle', data)
//     }, slug, err)
// }
