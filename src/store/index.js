import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let auth = {
	loggedIn(){
		const user = window.localStorage.getItem('laosiji');
		if(user!=null){
			return true
		}else{
			return false
		}
	}
}

export default new Vuex.Store({
  state: {
    authLoggedIn: auth.loggedIn()
  },
  mutations: {
    loggedIn (state) {
    	state.authLoggedIn = true;
    },
    loggedOut (state) {
      state.authLoggedIn = false;
    }
  },
  actions: {
    loggedIn (context) {
      context.commit('loggedIn')
    },
    loggedOut (context) {
      context.commit('loggedOut')
    }
  }
})