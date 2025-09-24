<template>
  <DefaultLayout>
    <v-container>
      <v-text-field v-model="newTodo" label="New Task" @keyup.enter="addTodo"></v-text-field>
      <v-btn @click="addTodo">Add</v-btn>
      <v-list>
        <TodoItem
          v-for="t in todos"
          :key="t.id"
          :todo="t"
          @remove="removeTodo"
        />
      </v-list>
    </v-container>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import TodoItem from '../components/TodoItem.vue';

interface Todo {
  id: number;
  text: string;
}

const newTodo = ref('');
const todos = ref<Todo[]>([]);

onMounted(() => {
  const saved = localStorage.getItem('todos');
  if (saved) todos.value = JSON.parse(saved);
});

const addTodo = () => {
  if (!newTodo.value) return;
  todos.value.push({ id: Date.now(), text: newTodo.value });
  localStorage.setItem('todos', JSON.stringify(todos.value));
  newTodo.value = '';
};

const removeTodo = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos.value));
};
</script>
