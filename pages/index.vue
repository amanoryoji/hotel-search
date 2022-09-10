<template>
  <section class="container">
    <div id="#app">
      <Search></Search>
    </div>
  </section>
</template>

<script>
import Search from "../components/search.vue"
import Result from "../components/result.vue"

export default {
    components: { Search, Result },
}
</script>