<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo: function() {
      if(this.newTodoItem !== ''){
        var obj = { complete: false, item: this.newTodoItem };
        // 저장하는 로직(로컬 스토리지에)
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); // (key,value)
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = ''; // 저장 후 input초기화
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    display: flex;
    align-items: center;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    height: 100%;
    width: calc(100% - 3rem);
    border-style: none;
    font-weight: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5ps 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }


</style>