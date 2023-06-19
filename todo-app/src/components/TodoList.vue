<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="( todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
      <!-- <li v-for="( todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow"> -->
      <!-- <li v-for="( todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow"> -->
        <span v-bind:class="{ textCompleted: todoItem.complete }" v-on:click="toggelComplete({ todoItem, index })">
          <i class="checkBtn fa-solid fa-check" ></i>
        </span>
        <span v-bind:class="{ textCompleted: todoItem.complete }">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  //props: ['propsdata'],
  methods: {
    ...mapMutations({
      removeTodo:'removeOneItem',
      toggelComplete : 'toggelOneComplete'
    }),
    // removeTodo(todoItem, index) {
    //   //this.$emit('removeItem', todoItem, index);

    //   // const obj = {
    //   //   todoItem,
    //   //   index,
    //   // }
    //   this.$store.commit('removeOneItem', { todoItem, index }); // obj객체 간결식=> { todoItem, index }

    //   // localStorage.removeItem(todoItem); // localStorage의 key를 지우면 value도 지워짐
    //   // this.todoItems.splice(index, 1); // index부터1개 지움 새로운배열로 반환해줌
    // },
    // toggelComplete(todoItem, index) {
      
    //   //this.$emit('toggleItem', todoItem, index);

    //   this.$store.commit('toggelOneComplete', { todoItem, index });

    //   // // localstorage에 데이터 갱신(todoItem.complete 값 바뀐거 다시 넣어준다)
    //   // localStorage.removeItem(todoItem.item);
    //   // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // }
  },
  computed: {
    ...mapGetters(['storedTodoItems'])
  }

}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acdb;
    margin-top: 15px;
    margin-right: 10px;
  }
  .checkBtnCompleted {
    color: #b3adad
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: red
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>