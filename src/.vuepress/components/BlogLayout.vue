<template>
  <div>
    <site-header></site-header>
    <div class="post">
      <div class="blog-title">
        <h1>{{ this.$page.title }}</h1>
        <time
          :datetime="this.$page.frontmatter.published"
        >{{ this.$page.frontmatter.published | toDate }}</time>
      </div>
      <Content />
    </div>
    <site-footer></site-footer>
  </div>
</template>

<style lang="scss">
.post {
  padding: 1em;
}
</style>
