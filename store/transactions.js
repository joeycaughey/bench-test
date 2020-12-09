import axios from 'axios';

export const strict = false

export const state = () => ({
	list: []
})

export const getters = {
	list(state) {
		return state.list
	},
	total(state) {
		return state.list.map(o => parseFloat(o.Amount)).reduce((prev, next) => prev + next);
	}
}

export const mutations = {
	APPEND(state, transactions) {
		_.each(transactions, (transaction)=>{
			state.list.push(transaction)
		}) 
	}
}

export const actions = {
	async init({ commit, dispatch, error }) {
		console.log("Initialize Transactions")

		var page = 0;
		var limit = 2;

		while (++page < limit) {
			await axios.get(`https://resttest.bench.co/transactions/${page}.json`).then((response)=>{
				if (response) {
					commit('APPEND', response.data.transactions)
				}
				limit++
			}).catch((e)=>{ 
				console.error(`No page for ${page}.`)
			})
		}
	}
}