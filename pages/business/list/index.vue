<template>
  <div class="business-list">
    <form action="/" class="search">
      <van-search
        v-model="kw"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="title">企业/机构列表</div>

    <div class="list">
      <van-list v-model="loading" @load="onLoad">
        <van-cell v-for="item in list" :key="item.name">
          <van-checkbox v-model="item.checked">
            <div class="name">{{ item.name }}</div>
            <div class="code">统一社会信用代码: {{ item.code }}</div>
            <div class="tags">
              <van-tag
                v-for="tag in item.tags"
                :key="tag.key"
                plain
                type="primary"
                size="medium"
                >{{ tag.name }}</van-tag
              >
            </div>
          </van-checkbox>
          <div class="info">
            <div>
              <div>法定代表人</div>
              <div>{{ item.belong }}</div>
            </div>
            <div>
              <div>注册资本</div>
              <div>{{ item.moneny }}</div>
            </div>
            <div>
              <div>成立日期</div>
              <div>{{ item.date }}</div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>

    <div class="action">
      <van-button type="info" @click="bindBusiness">绑定该企业</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BusinessList',
})
export default class extends Vue {
  private kw = ''

  private list: Array<any> = []

  private loading = false

  onLoad() {
    this.list.push({
      name: '深圳市云端科技发展有限公司',
      code: '91440300MA5EF4338N',
      tags: [{ name: '批发业' }],
      belong: '杨晓',
      moneny: '50万元',
      date: '2017-01-09',
    })
    this.loading = false
  }

  bindBusiness() {
    this.$router.push({ name: 'business-bind-success' })
  }

  onSearch() {
    console.log('search')
  }

  onCancel() {
    console.log('cancel')
  }
}
</script>

<style scoped lang="scss">
.business-list {
  .search {
    height: 60px;
  }
  .title {
    margin-left: 14px;
    margin-bottom: 16px;
    font-size: 16px;
  }

  .list {
    height: calc(100vh - 160px);
    overflow-y: scroll;

    & /deep/ .van-checkbox__label {
      margin-left: 16px;
    }

    .name {
      font-size: 16px;
      color: rgb(35, 96, 221);
    }

    .code {
      margin: 6px 0;
    }

    .info {
      margin-top: 8px;
      padding: 6px;
      border-top: 1px solid #c0c4cc;
      display: flex;
      justify-content: space-around;
    }
  }

  .action {
    height: 100px;
    text-align: center;
    margin-top: 8px;
  }
}
</style>
