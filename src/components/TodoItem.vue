<template>
  <v-list-item class="bg-primary  rounded-lg px-4 py-2">
    <div class="d-flex items-center justify-space-between w-full">
      <div class="flex-1 mr-4">
        <!-- Edit mode -->
        <v-text-field
          v-if="isEditing"
          v-model="editText"
          dense
          hide-details
          @keyup.enter="saveEdit"
          @blur="cancelEdit"
        />
        <!-- Normal display mode -->
        <span v-else>{{ todo.text }}</span>
      </div>

      <div class="d-flex gap-2">
        <!-- Edit button -->
        <v-btn icon @click="startEdit" v-if="!isEditing">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <!-- Save button -->
        <v-btn  icon @click="saveEdit" v-if="isEditing">
          <v-icon>mdi-check</v-icon>
        </v-btn>

        <!-- Delete button -->
        <v-btn icon @click="$emit('remove', todo.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </div>
  </v-list-item>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

interface Todo {
  id: number;
  text: string;
}

const props = defineProps<{ todo: Todo }>();
const emit = defineEmits<{ (e: 'update', updatedTodo: Todo): void; (e: 'remove', id: number): void }>();

const isEditing = ref(false);
const editText = ref(props.todo.text);

// Watch for changes in parent todo text
watch(
  () => props.todo.text,
  (newText) => {
    if (!isEditing.value) {
      editText.value = newText;
    }
  }
);

const startEdit = () => {
  isEditing.value = true;
  editText.value = props.todo.text;
};

const saveEdit = () => {
  const trimmed = editText.value.trim();
  if (!trimmed) return; // Prevent empty string
  emit('update', { ...props.todo, text: trimmed });
  isEditing.value = false;
};

const cancelEdit = () => {
  isEditing.value = false;
  editText.value = props.todo.text;
};
</script>
