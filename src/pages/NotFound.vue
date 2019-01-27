<template>
  <div class="col-full" :class="$style.centered">
      <h1 :class="$style.textLarge">Your page hasn't been found, sorry</h1>
      <router-link :to="{name: 'Home'}">Go to Home...</router-link>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
    .textLarge {
        color: goldenrod;
        font-size: 2em;
    }
    .centered {
        margin: 50px;
        text-align: center;
    }
</style>
