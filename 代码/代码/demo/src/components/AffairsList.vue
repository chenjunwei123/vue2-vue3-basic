<template>
  <div>
    <ul class="todo-main">
      <AffairsItem v-for="todosObj in todos" :key="todosObj.id" :todo="todosObj" :chenkTodo="chenkTodo" :deleteTodo="deleteTodo"></AffairsItem>
    </ul>
  </div>
</template>

<script>
import AffairsItem from './AffairsItem.vue'
export default {
  name: 'AffairsList',
  props: ['todos', 'chenkTodo', 'deleteTodo'],
  components: {
    AffairsItem
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
