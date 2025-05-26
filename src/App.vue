<script setup lang="ts">
//this is where your typescript code goes
import ActionButton from './components/ActionButton.vue';
</script>

<template>
  <div class="app-root">
    <div class="chat-sidebar">
      <p>Start a new chat</p>
      <ActionButton text="Start Chat" />
    </div>
    <div class="chat-container">
      <div class="chat-window">
        <h1>This is the Chat Window</h1>
      </div>
      <div class="chat-input">
        <h2>This is the chat input</h2>
      </div>
    </div>
  </div>
</template>