import Vuex from 'vuex'

const store = new Vuex.Store({
	state: {
		basket: [],
	},
	mutations: {
		create(state, basket) {
			state.basket = basket
		},
		addToBasket(state, beer) {
			state.basket.push(beer)
		},
	}
})
export default store

