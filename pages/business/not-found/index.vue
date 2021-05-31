<template>
  <div class="not-found">
    <div><img src="http://www.baidu.com" /></div>
    <div class="tips">
      <div>暂无相关数据</div>
      <div>请检查您输入的信息是否有以下情况：</div>
      <div>*输入的信息有误</div>
      <div>*输入的企业已过期</div>
      <div>*输入的企业为未认证的省外企业</div>
    </div>
    <div class="back">
      <van-button round block type="info" @click="handleBack">返回</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BusinessNotFound',
})
export default class extends Vue {
  private handleBack() {
    this.$router.push({ name: 'business' })
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tips {
    margin-top: 30px;
  }

  .back {
    margin-top: 48px;
    width: 90px;
  }
}
</style>
