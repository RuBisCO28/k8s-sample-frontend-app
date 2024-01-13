<script setup lang="ts">
  const { data: hello } = await useFetch('http://sample-backend-app-service:8080/api/hello');
</script>
<template>
  <div>
    <p>{{ hello }}</p>
  </div>
</template>