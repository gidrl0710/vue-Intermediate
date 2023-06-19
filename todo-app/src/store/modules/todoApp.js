const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0 ){
      for(let i = 0; i < localStorage.length; i++){
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); // todoItems배열에 localStorage데이터를 집어넣음
      }
    }
    return arr;
  },
}

const state = {
    todoItems: storage.fetch(),
    header : 'Todo List Project'
}

const getters = {
  storedTodoItems(state) {
  return state.todoItems
}
}

const mutations = {
  addOneItem(state, oneItem) {
    const obj = { complete: false, item: oneItem };
    localStorage.setItem(oneItem, JSON.stringify(obj)); // (key,value)
    state.todoItems.push(obj);
  },
  removeOneItem(state, obj) {
    localStorage.removeItem(obj.todoItem.item); // localStorage의 key를 지우면 value도 지워짐
    state.todoItems.splice(obj.index, 1); // index부터1개 지움 새로운배열로 반환해줌
  },
  toggelOneComplete(state, obj) {
    state.todoItems[obj.index].complete = !state.todoItems[obj.index].complete; 
    localStorage.removeItem(obj.todoItem.item);
    localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
}

export default { state, getters, mutations }