const addOneItem = (state, oneItem) => {
  const obj = { complete: false, item: oneItem };
  localStorage.setItem(oneItem, JSON.stringify(obj)); // (key,value)
  state.todoItems.push(obj);
};

const removeOneItem = (state, obj) => {
  localStorage.removeItem(obj.todoItem.item); // localStorage의 key를 지우면 value도 지워짐
  state.todoItems.splice(obj.index, 1); // index부터1개 지움 새로운배열로 반환해줌
}

const toggelOneComplete = (state, obj) => {
  state.todoItems[obj.index].complete = !state.todoItems[obj.index].complete; 
  localStorage.removeItem(obj.todoItem.item);
  localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggelOneComplete, clearAllItems }