<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        warning
        <span @click="showModal = false">
          <i class="closeModalBtn fa-solid fa-xmark" ></i>
        </span>
      </h3>
      <div slot="body">입력값이 없습니다.</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/modalCom.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== ''){
        this.$emit('addTodoItem', this.newTodoItem);

        // var obj = { complete: false, item: this.newTodoItem };
        // localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); // (key,value)
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = ''; // 저장 후 input초기화
    },
  },
  components: {
    Modal
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
  .closeModalBtn {
    color: #42b983;
  }


</style>