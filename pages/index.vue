<!--
 * @Author: cen
 * @Date: 2021-05-26 09:55:37
 * @LastEditTime: 2021-05-26 18:34:30
 * @LastEditors: cenchengwei@foreverht.com
 * @Description: 
 * @FilePath: /szient-hybrid-h5/pages/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="container">
    <div>
      <logo />
      <div class="title">Welcome to the Vant + Nuxt.js template</div>
      <div class="links">
        <nuxt-link to="/authorization">授权</nuxt-link>
        <nuxt-link to="/complain/complainList">投诉</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
@Component({
  name: 'Index',
  components: {
    Logo,
  },
})
export default class extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
