<template>
  <section class="container">
    <div id="#app">
      <h1>楽天トラベル検索一覧</h1>
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
