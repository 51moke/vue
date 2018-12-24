<template>
  <div class="box">
    <div>
      <slot name="demo1"></slot>
    </div>
    <div>
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
