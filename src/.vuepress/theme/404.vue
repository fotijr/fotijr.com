<template>
  <div>
    <site-header></site-header>
    <h1>Page Not Found</h1>
    <p>Sorry, I'm not sure what you're looking for.</p>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default {
  data() {
    return { menuVisible: false };
  },
  components: {
    "site-header": SiteHeader,
    "site-footer": SiteFooter
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
