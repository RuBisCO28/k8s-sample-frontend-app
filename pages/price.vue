<script setup lang="ts">
  const { data: hello } = await useFetch('http://127.0.0.1:8080/api/hello', { server: false });
</script>
<template>
  <div>
    <p>{{ hello }}</p>
  </div>
</template>