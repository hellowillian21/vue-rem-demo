<template>
  <div class="hello">
    <div class="rem">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.hello {
  .rem {
    width: 375px;
    height: 50px;
    background: #cccccc;
    font-size: 16px;
    border-bottom: 1px solid aqua;
  }
}
</style>
