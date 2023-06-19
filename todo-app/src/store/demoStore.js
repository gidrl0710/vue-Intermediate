import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // vue플러그인 사용
               // vue를 사용하는 모든영역에 vue사용한다.

// Vuex등록
export const store = new Vuex.Store({
  state: {
    price: 100
  },
  getters: {
    originPrice(state){
      return state.price;
    },
    doublePrice(state){
      return state.price * 2;
    },
    triplePrice(state){
      return state.price * 3;
    }
  },
});