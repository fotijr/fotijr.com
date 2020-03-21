<template>
  <footer class="row">
    <div class="col links">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects/">Projects</a>
        </li>
        <li>
          <a href="/blog/">Blog</a>
        </li>
        <li>
          <a href="/contact/">Contact</a>
        </li>
      </ul>
    </div>
    <div class="source">
      View or fork this site on
      <a
        href="https://github.com/fotijr/fotijr.com"
        target="_blank"
      >GitHub</a>.
    </div>
  </footer>
</template>

<script>
export default {
  name: "site-footer"
};
</script>

<style lang="scss">
@media (max-width: 500px) {
  footer {
    flex-direction: column !important;

    ul {
      display: inline-flex;

      li {
        margin: auto;
      }
    }
  }
}

footer {
  display: flex;
  margin-top: 3em;
  background-color: #000;
  color: #fff;

  ul {
    list-style-type: none;
    margin: 0.5em;

    a {
      color: #fff;
    }
  }

  .links {
    flex-grow: 1;
  }

  .source {
    color: #000;
    background-color: #fff;
    border: 5px solid #000;
    display: flex;
    align-items: center;
    padding: 1em 2em;

    a {
      padding-left: 0.4em;
      position: relative;

      &:hover {
        &:after {
          content: "🐙";
          position: absolute;

          pointer-events: none;
          animation: float 6s step-end infinite;
          // color: transparent;
          // text-shadow: 0 0 0 rgba(0,0,0,1);
        }
      }
    }
  }

  @keyframes float {
    from,
    to {
      bottom: 14px;
    }
    10% {
      bottom: 27px;
      left: 30px;
    }
    25% {
      left: -18px;
      bottom: 15px;
      opacity: 0.9;
    }
    50% {
      left: -29px;
      top: 14px;
      bottom: inherit;
      opacity: 0.75;
    }
    66% {
      left: 10px;
      top: 28px;
      bottom: inherit;
      opacity: 0.8;
    }
    75% {
      left: inherit;
      top: 16px;
      bottom: inherit;
      opacity: 0.85;
    }
  }
}
</style>
