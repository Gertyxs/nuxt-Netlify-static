<!--
 * @Author: cen
 * @Date: 2021-05-26 10:53:57
 * @LastEditTime: 2021-05-26 10:57:07
 * @LastEditors: cenchengwei@foreverht.com
 * @Description: 
 * @FilePath: /szient-hybrid-h5/layouts/error.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // 你可以为错误页面指定自定义的布局
}
</script>
