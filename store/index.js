export const strict = false

export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {
  nuxtServerInit ({ commit, dispatch }, {res, req, redirect}) {
     console.log("RUNNING GLOBAL SERVER INIT.")
  },
  async nuxtClientInit ({ commit, dispatch }, {redirect}) {
    console.log("RUNNING GLOBAL CLIENT INIT.");
    await dispatch('transactions/init')
  }
}