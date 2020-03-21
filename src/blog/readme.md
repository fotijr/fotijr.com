<h1>Blog</h1>

<div class="posts">
  <div class="post" v-for="post in posts">
    <h2><a :href="post.path">{{ post.title }}</a></h2>
    <time
          :datetime="post.date"
        >{{ post.date | toDate }}</time>
    <p>{{ post.description }}</p>
    <div class="bottom-row">
      <a :href="post.path">Read more</a>
      <div class="tags">
        <span v-for="tag in post.tags">{{ tag }}</span>
      </div>
    </div>
  </div>
</div>

<script>
import { getPostsByDateDescending } from '../../tools/posts';
export default {
  data() {
    return {
      posts: []
    }
  },
  mounted(){
    this.posts = getPostsByDateDescending(this.$site.pages);
  }
};
</script>

<style lang="scss">
.post{
  margin-bottom: 2em;

  h2 {
    margin: 0.2em 0;
  }

  p{
    margin-bottom: 0.2em;
  }

  .bottom-row {
    display: flex;
    margin-left: 1em;
    margin-top: 0.5em;
  }

  .tags{
    margin-left: 20%;
    margin-top: 0.7em;

    span{
      background-color: #000;
      color: #fff;
      padding: 0.2em 0.35em;
      margin-right: 0.4em;
      font-size: 14px;
    }
  }
}
</style>