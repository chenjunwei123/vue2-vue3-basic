<template>
  <div>
    <div class="todo-footer" v-show="total">
      <label>
        <input type="checkbox" :checked="isAll" @change="checkAll" />
      </label>
      <span>
        <span>已完成{{ todoDone }}</span> / 全部{{ total }}
      </span>
      <button class="btn btn-danger">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AffairsFooter',
  props: ['todos', 'checkAllTodo'],
  computed: {
    todoDone: {
      get() {
        return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
      }
    },
    total: {
      get() {
        return this.todos.length
      }
    },
    isAll() {
      return this.todoDone === this.total && this.total > 0
    }
  },
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked)
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
