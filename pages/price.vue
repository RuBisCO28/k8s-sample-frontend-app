<script setup lang="ts">
  const { data: hello } = await useFetch('http://localhost/api/hello', { server: false });
</script>
<template>
  <div>
    <p>{{ hello }}</p>
  </div>
</template>