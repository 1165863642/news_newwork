<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

// *::-webkit-scrollbar-thumb {
//   /*滚动条里面深色条*/
//   border-radius: 10px;
//   box-shadow: inset 0 0 5px rgba(236, 236, 236, 0.1);
//   background: rgba($color: #000000, $alpha: 0.0);
// }

// *::-webkit-scrollbar-track {
//   /*滚动条里面轨道*/
//   // box-shadow: inset 0 0 5px rgba(236, 236, 236, 0.1);
//   border-radius: 10px;
//   background: rgba($color: #000000, $alpha: 0.0);
// }


a {
  cursor: pointer;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
