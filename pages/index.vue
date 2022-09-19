<template>
  <section class="container">
    <div id="#app">
      <Auth></Auth>
      <Search></Search>
    </div>
  </section>
</template>

<script>
import Search from "../components/search.vue";
import Result from "../components/result.vue";
import Auth from "../components/Auth.vue";

export default {
  components: { Search, Result, Auth },
  methods:{
      logOut() {
          this.$store.dispatch('auth/logOut')
      }
  }
}
</script>