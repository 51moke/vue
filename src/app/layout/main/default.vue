<template>
  <div class="box">
    <div>
      <h1>左边</h1>
      <slot name="demo1"></slot>
    </div>
    <div>
       <h1>右边</h1>
      <slot name="demo2"></slot>
    </div>
  </div>
</template>

<style scoped>
.box{
  overflow: hidden;
}
.box>div{float: left; width: 50%}
</style>
