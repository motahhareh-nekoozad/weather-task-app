<template>
  <v-list-item>
    <v-list-item-content>{{ todo.text }}</v-list-item-content>
    <v-btn icon @click="$emit('remove', todo.id)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Todo {
  id: number;
  text: string;
}

const props = defineProps<{ todo: Todo }>();
</script>
