<template>
  <header>
    <!-- <h1>{{ this.header }}</h1> -->
    <h1>Todo List Project</h1>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['header'])
  }
}
</script>

<style scoped>
  h1 {
    color: #130b6a;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>
