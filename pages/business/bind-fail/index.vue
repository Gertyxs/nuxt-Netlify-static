<template>
  <div class="bind-sucess">
    <div class="feedback-icon">
      <van-icon name="warning" size="160" color="#F56C6C"></van-icon>
    </div>
    <div class="fail">绑定失败</div>
    <div>该企业已注销</div>
    <div class="action">
      <van-button block type="info" class="bind-other" @click="bindOtherOne"
        >绑定其他企业</van-button
      >
      <van-button block @click="backHome">返回首页</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BindFail',
})
export default class extends Vue {
  private bindOtherOne() {
    this.$router.push({ name: 'business-list' })
  }

  private backHome() {
    this.$router.push({ name: 'business' })
  }
}
</script>

<style scoped lang="scss">
.bind-sucess {
  display: flex;
  flex-direction: column;
  align-items: center;

  .feedback-icon {
    margin-top: 10%;
  }

  .fail {
    font-weight: bold;
    font-size: 20px;
  }

  .action {
    .bind-other {
      margin: 32px 0 24px 0;
    }
  }
}
</style>
