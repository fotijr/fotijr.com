<h1>👋 Hello <span title="If not... I knew it!">Humans!</span></h1>
<p>
I'm Dominic. I'm a full stack software engineer working mostly with JavaScript/TypeScript on the front-end and .NET on the back-end. View some of my latest <a href="/projects">projects</a>, check out the <a href="/blog">blog</a> to see how infrequently I write, or <a href="/contact">contact</a> me.
</p>

<div class="row">
    <div class="col projects">
        <h2>Projects</h2>
        <p>
        I'm usually working on something. Check out some of my in-progress and completed projects.
        </p>
        <ul>
            <li>Navo</li>
            <li>Rocket Gallery</li>
            <li>Speedy Unicode</li>
            <li>Boo's Kitchen</li>
        </ul>
        <div class="all-projects">
          ⮑ <a href="/projects">View all projects</a>
        </div>
    </div>
    <div class="col">
        <h2>Blog</h2>
        <div class="posts">
            <div class="post" v-for="post in recentPosts">
                <h3><a :href="post.path">{{ post.title }}</a></h3>
                <p>{{ post.description }} <a :href="post.path">Read more</a></p>
            </div>
            <div class="after-posts">
              ⮑ <a href="/blog">View all posts</a>
            </div>
        </div>
    </div>
</div>

<script>
import { getPostsByDateDescending } from '../tools/posts';
export default {
  mounted() {
    const posts = getPostsByDateDescending(this.$site.pages);
    this.recentPosts = posts.slice(0,3);
  },
  data() {
    return {
      recentPosts: []
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .row {
    flex-direction: column;
  }
}

div.post:first-child{
  h3{
    margin-top: 0;
  }
}

.projects {
  ul {
    margin-top: 0;
  }
  .all-projects{
    margin-top: 1em;
  }
}


.link-row {
  margin-top: 2em;
}

.after-posts {
  margin-top: 2em;
}
</style>