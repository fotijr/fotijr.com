<template>
  <div>
    <site-header></site-header>
    <div class="post">
      <div class="blog-title">
        <h1>{{ this.$page.title }}</h1>
        <time
          :datetime="this.$page.frontmatter.published"
        >{{ new Date(this.$page.frontmatter.published).setUTCHours(12) | toDate }}</time>
      </div>
      <div class="row layout">
        <div class="col content">
          <Content />
        </div>
        <div class="col about">
          <h3>About Me</h3>
          <p>
            Hi, I'm Dominic. I'm a software engineer working mostly with .NET Core and web technologies.
            Check out some of my
            <a
              href="/projects"
            >projects</a>, or
            <a href="/contact">get in touch</a>.
          </p>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<style lang="scss" scoped>
.post {
  padding: 1em;

  .blog-title {
    margin: 1.5em auto 0.5em auto;
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;

    h1 {
      font-family: "Inconsolata", monospace;
      margin-bottom: 0.2em;
    }
  }

  .row.layout {
    justify-content: center;

    .content {
      max-width: 850px;
      padding: 0;

      .content__default {
        margin-top: 0;
      }
    }

    .about {
      max-width: 265px;

      p {
        margin: 0;
      }
    }

    @media (max-width: 1100px) {
      .about {
        display: none;
      }
    }
  }
}
</style>
