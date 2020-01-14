<h1>Blog</h1>

<div class="posts">
  <div class="post" v-for="post in posts">
    <h2><a :href="post.url">{{ post.title }}</a></h2>
    <time
          :datetime="post.date"
        >{{ post.date | toDate }}</time>
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

  h2{
    margin: 0.2em 0;
  }

  p{
    margin-bottom: 0.2em;
  }
}
</style>