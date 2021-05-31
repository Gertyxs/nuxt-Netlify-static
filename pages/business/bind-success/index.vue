<template>
  <div class="bind-sucess">
    <div class="feedback-icon">
      <van-icon name="checked" size="160" color="#67C23A"></van-icon>
    </div>
    <div class="fail">绑定成功</div>
    <div>你已成功绑定该企业，可申请企业授权进行业务办理</div>
    <div class="action">
      <van-button block type="info" class="bind-other" @click="applyAuth"
        >申请授权</van-button
      >
      <van-button block @click="backHome">返回首页</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BindSuccess',
})
export default class extends Vue {
  private applyAuth() {
    this.$router.push({ name: 'authorization' })
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
