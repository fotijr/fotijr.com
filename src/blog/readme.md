<h1>Blog</h1>

<div class="posts">
  <div class="post" v-for="post in posts">
    <h2><a :href="post.url">{{ post.title }}</a></h2>
    <p>{{ post.description }}</p>
    <a :href="post.url">Read more</a>
  </div>
</div>

<script>
import posts from './posts';
export default {
  mounted() {
    console.log(posts);
  },
  data() {
    return {
      posts
    }
  }
};
</script>

<style lang="scss">
.post{
  margin-bottom: 2em;

  p{
    margin-bottom: 0.2em;
  }
}
</style>