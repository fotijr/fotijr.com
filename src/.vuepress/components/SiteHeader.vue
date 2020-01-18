<template>
  <header>
    <nav>
      <div class="section light">
        <a class="home" href="/">
          <span class="site-title">Foti Jr</span>
        </a>
      </div>
      <div class="section dark">
        <ul>
          <router-link tag="li" class="nav-item" to="/projects" active-class="active">
            <a class="nav-link">Projects</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/blog" active-class="active">
            <a class="nav-link">Blog</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/contact" active-class="active">
            <a class="nav-link">Contact</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "site-header"
};
</script>

<style lang="scss" scoped>
.home {
  // width: 300px;
  text-decoration: none;
  margin: 0 0.5em;

  &:hover {
    span {
      text-shadow: 3px -1px 1px red;
    }
  }

  .site-title {
    font-size: 48px;
    display: inline-block;
    font-family: "Major Mono Display", monospace;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 0.2em;
    border-right: 0.7em solid #000;
    margin-right: -0.6em;
    animation: typing 0.6s steps(8, end), blink-caret 0.75s 8;
    animation-fill-mode: forwards;
  }
}

/* The typing effect */
// shoutout to https://css-tricks.com/snippets/css/typewriter-effect/ 👏
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
}

@media (max-width: 500px) {
  nav {
    flex-direction: column;

    .section.dark {
      flex: 1 1;
    }

    ul {
      padding: 0;
      justify-content: center;

      li {
        margin: 1em !important;
      }
    }
  }
}

nav {
  display: flex;

  div.section {
    flex-basis: 0;
    flex-grow: 1;
    border: 5px solid #000;
    align-items: center;
    display: flex;

    &.light {
      flex: 0 1;
      padding-right: 4em;
    }

    &.dark {
      background-color: #000;
      border-width: 0;
    }
  }
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  flex-grow: 1;

  li {
    margin: 2em;
    font-family: "Major Mono Display", monospace;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
    }
  }
}
</style>
