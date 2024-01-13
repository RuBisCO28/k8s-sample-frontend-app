<script setup lang="ts">
  const { data: hello } = await useFetch('api/hello', { server: false });
</script>
<template>
  <div>
    <p>{{ hello }}</p>
  </div>
</template>