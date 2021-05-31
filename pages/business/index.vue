<template>
  <div class="form">
    <div class="title">企业/机构信息</div>
    <div>
      <div class="label">企业名称</div>
      <van-field v-model="formState.name" placeholder="请输入企业名称" />
    </div>
    <div>
      <div class="label">统一社会信用代码/工商注册码</div>
      <van-field v-model="formState.code" placeholder="请输入查询信息" />
    </div>
    <div class="search">
      <van-button round block type="info" @click="onSearch">
        查找机构/企业
      </van-button>
    </div>
    <div class="tips">
      说明：
      <div>1.xxxxxxxxxxxxxxxx</div>
      <div>2.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BindBusiness',
})
export default class extends Vue {
  private formState = {
    name: '',
    code: '',
  }

  private onSearch() {
    this.$router.push({ name: 'business-list' })
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin: 46px 8% 0 8%;
  .title {
    margin: 20px 0 16px 0;
    font-size: 20px;
    font-weight: bold;
  }

  .van-cell.van-field {
    padding: 11px 0;
  }

  .search {
    margin: 20px auto 0 auto;
    width: 160px;
  }

  .tips {
    margin-top: 22px;
  }
}
</style>
