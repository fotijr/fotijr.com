<template>
  <div>
    <site-header></site-header>
    <div class="content__default">
      <h1>Page Not Found</h1>
      <p>Sorry, I'm not sure what you're looking for.</p>
      <div class="¯\_(ツ)_/¯">
        <span class="shoulders">¯\_</span>
        <span class="head">(ツ)</span>
        <span class="shoulders">_/¯</span>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<style lang="scss">
@keyframes shrug {
  from,
  to {
    margin-bottom: 0;
  }
  28% {
    margin-bottom: 0;
  }
  40% {
    margin-bottom: 30px;
  }
  45% {
    margin-bottom: 0;
  }
  100% {
    margin-bottom: 0;
  }
}

@keyframes tilt {
  from,
  to {
    transform: rotate(0);
  }
  28% {
    transform: rotate(0);
  }
  40% {
    transform: rotate(-14deg);
  }
  45% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}

.¯\\_\(ツ\)_\/¯ {
  margin: auto;
  font-size: 3em;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  min-height: 20vh;
  align-items: center;

  .shoulders {
    animation: shrug 8s 2;
  }

  .head {
    transform: rotate(0);
    animation: tilt 8s 2;
  }
}
</style>
