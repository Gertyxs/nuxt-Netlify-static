<template>
  <div class="complain-list">
    <div class="complain-title">请选择投诉的原因：</div>
    <van-cell-group class="complain-type">
      <van-cell
        class="complain-type-item"
        title="涉嫌发布违法犯罪及违禁品内容"
        is-link
        v-for="i in 10"
        :key="i"
        @click="$router.push({ path: 'complainForm' })"
      />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'ComplainList',
})
export default class extends Vue {}
</script>
<style lang="scss">
.complain-list {
  position: relative;
  height: 100vh;
  overflow: auto;
  background: #eee;
  .complain-title {
    padding: 10px;
    font-size: 14px;
    color: #333;
  }
}
</style>
