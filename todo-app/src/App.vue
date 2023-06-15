<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggelOneComplete"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(oneItem) {
      const obj = { complete: false, item: oneItem };
      // 저장하는 로직(로컬 스토리지에)
      localStorage.setItem(oneItem, JSON.stringify(obj)); // (key,value)
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item); // localStorage의 key를 지우면 value도 지워짐
      this.todoItems.splice(index, 1); // index부터1개 지움 새로운배열로 반환해줌
    },
    toggelOneComplete(todoItem, index) {
      //todoItem.complete = !todoItem.complete;
      // todoItem=> this.todoItems[index]
      this.todoItems[index].complete = !this.todoItems[index].complete; 
      console.log(index);
      // localstorage에 데이터 갱신(todoItem.complete 값 바뀐거 다시 넣어준다)
      localStorage.removeItem(this.todoItems[index].item);
      localStorage.setItem(this.todoItems[index].item, JSON.stringify(this.todoItems[index]));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() { // instance가 생성된후 실행하는 라이프사이클
    if(localStorage.length > 0 ){
      for(let i = 0; i < localStorage.length; i++){
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); // todoItems배열에 localStorage데이터를 집어넣음
      }
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    
  },
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
