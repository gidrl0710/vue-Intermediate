import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex); // vue플러그인 사용
               // vue를 사용하는 모든영역에 vue사용한다.

// const storage = {
//   fetch() {
//     const arr = [];
//     if(localStorage.length > 0 ){
//       for(let i = 0; i < localStorage.length; i++){
//         arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); // todoItems배열에 localStorage데이터를 집어넣음
//       }
//     }
//     return arr;
//   },
// }

// Vuex등록
export const store = new Vuex.Store({
  // state: {
  //   todoItems: storage.fetch(),
  //   header : 'Todo List Project'
  // },
  // getters: getters,
  // mutations,
  modules: {
    todoApp //todoApp: todoApp
  }

});