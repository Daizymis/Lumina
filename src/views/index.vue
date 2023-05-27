<template>
  <div class="app-container home">
    <div class="dashboard-container">
      <component :is="currentRole" />
    </div>
  </div>
</template>

<script setup name="Index">
  import adminDashboard from './dashboard/admin'
const version = ref('1.0.0')
const currentRole = adminDashboard;
function goTarget(url) {
  window.open(url, '__blank')
}
</script>

<style scoped lang="scss">
.home {
}
</style>

