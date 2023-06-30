<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @change="handleChecked(todo.id)" />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="hangleDelete(todo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'AffairsItem',
  props: ['todo', 'chenkTodo', 'deleteTodo'],
  methods: {
    handleChecked(id) {
      this.chenkTodo(id)
    },
    hangleDelete(id) {
      this.deleteTodo(id)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover button {
  display: block;
}
li:hover {
  background-color: rgb(138, 128, 128);
}
</style>
