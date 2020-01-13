<h1>👋 Hello <span title="If not... I knew it!">Humans!</span></h1>
<p>
I'm Dominic. I'm a full stack software engineer working mostly with JavaScript/TypeScript on the front-end and .NET on the back-end. Check out the blog to see what I'm currently working on. Then contact me to criticize my blogging frequency or code quality.
</p>

<div class="row">
    <div class="col">
        <h2>Projects</h2>
        <p>
        I'm usually working on something. Check out some of my in-progress and completed projects.
        </p>
        <ul>
            <li>Navo</li>
            <li>Speedy Unicode</li>
            <li>ASCII Camera</li>
        </ul>
        <a href="/projects">View all projects</a>
    </div>
    <div class="col">
        <h2>Blog</h2>
        <div class="posts">
            <div class="post" v-for="post in recentPosts">
                <h3><a :href="post.url">{{ post.title }}</a></h3>
                <p>{{ post.description }} <a :href="post.url">Read more</a></p>
            </div>
        </div>
    </div>
</div>

<script>
import posts from './blog/posts';
export default {
  mounted() {
    console.log(posts);
  },
  data() {
    return {
      recentPosts: posts.slice(0,3)
    }
  }
};
</script>