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
      <div class="row layout">
        <div class="col content">
          <Content />
        </div>
        <div class="col about">
          <h3>About Me</h3>Hi, I'm Dominic. I'm a software developer working mostly with .NET and other web technologies.
          Check out some of my projects, or get in touch with me.
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<style lang="scss">
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

      .content__default {
        margin-top: 0;
      }
    }

    .about {
      max-width: 265px;
    }

    @media (max-width: 1100px) {
      .about {
        display: none;
      }
    }
  }
}
</style>
