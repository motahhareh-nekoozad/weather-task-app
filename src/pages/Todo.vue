<template>
  <v-container>
    <v-text-field v-model="newTodo" :label="t('newTask')" @keyup.enter="addTodo"></v-text-field>
    <v-btn class="mb-4 bg-secondary" @click="addTodo">{{ t('addTask') }}</v-btn>

    <v-list v-auto-animate class="bg-transparent d-flex flex-column" style="gap: 8px;">
      <template v-if="todos.length">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" @update="updateTodo" />
      </template>
      <template v-else>
        <v-list-item>
          <v-list-item-title class="text-center">{{t('noTask')}}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'


const { t } = useI18n()

interface Todo {
  id: number;
  text: string;
}

const newTodo = ref('');
const todos = ref<Todo[]>([]);

// Load saved todos from localStorage
onMounted(() => {
  const saved = localStorage.getItem('todos');
  if (saved) todos.value = JSON.parse(saved);
});

// Add new todo
const addTodo = () => {
  const text = newTodo.value.trim();
  if (!text) return;
  todos.value.push({ id: Date.now(), text });
  localStorage.setItem('todos', JSON.stringify(todos.value));
  newTodo.value = '';
};

// Remove todo
const removeTodo = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos.value));
};

// Update todo text
const updateTodo = (updatedTodo: Todo) => {
  const index = todos.value.findIndex(t => t.id === updatedTodo.id);
  if (index !== -1) {
    // Replace item to trigger reactivity
    todos.value.splice(index, 1, updatedTodo);
    localStorage.setItem('todos', JSON.stringify(todos.value));
  }
};
</script>
