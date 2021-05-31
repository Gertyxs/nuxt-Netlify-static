<!--
 * @Author: cen
 * @Date: 2021-05-26 11:06:25
 * @LastEditTime: 2021-05-27 10:06:43
 * @LastEditors: cenchengwei@foreverht.com
 * @Description: 
 * @FilePath: /szient-hybrid-h5/pages/authorization/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="content">
    <van-tabs type="line">
      <van-tab title="我办理的公司">
        <div>
          <div class="text-r searchTitle">+查找企业并关联</div>
          <ul>
            <li v-for="(item, index) in compantList" :key="index" class="boxLi">
              <div class="flex-align compantInfoTop">
                <div style="flex: 4" class="compantInfoDiv">
                  <div class="compantInfoDiv_name">
                    {{ item.name }}
                  </div>
                  <div class="compantInfoDiv_desc">
                    统一社会信用代码：{{ item.code }}
                  </div>
                </div>
                <div style="flex: 1">
                  <van-button
                    :type="item.isCun ? 'info' : 'danger'"
                    class="compantInfoButton"
                    size="small"
                    >{{ item.isCun ? '存续' : '注销' }}</van-button
                  >
                </div>
              </div>
              <div class="flex-between compantInfoBottom">
                <div>
                  <div>法定代表</div>
                  <div class="fontWeight">{{ item.userName }}</div>
                </div>
                <div>
                  <div>注册资本</div>
                  <div class="fontWeight">{{ item.money }}</div>
                </div>
                <div>
                  <div>成立日期</div>
                  <div class="fontWeight">{{ item.data }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="我的公司"
        ><div>
          <ul>
            <li v-for="(item, index) in compantList" :key="index" class="boxLi">
              <div class="flex-align compantInfoTop">
                <div style="flex: 4" class="compantInfoDiv">
                  <div class="compantInfoDiv_name">
                    {{ item.name }}
                  </div>
                  <div class="compantInfoDiv_desc">
                    统一社会信用代码：{{ item.code }}
                  </div>
                </div>
                <div style="flex: 1">
                  <van-button
                    :type="item.isCun ? 'info' : 'danger'"
                    class="compantInfoButton"
                    size="small"
                    >{{ item.isCun ? '存续' : '注销' }}</van-button
                  >
                </div>
              </div>
              <div class="flex-between compantInfoBottom">
                <div>
                  <div>注册资本</div>
                  <div class="fontWeight">{{ item.money }}</div>
                </div>
                <div>
                  <div>成立日期</div>
                  <div class="fontWeight">{{ item.data }}</div>
                </div>
                <van-button
                  type="primary"
                  class="compantInfoButton"
                  size="small"
                  >业务授权管理</van-button
                >
              </div>
            </li>
          </ul>
        </div></van-tab
      >
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Authorizaton',
})
export default class extends Vue {
  compantList = [
    {
      name: '北京市科技有是的撒限公司深圳分公司',
      code: '123456789042',
      isCun: true,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
    {
      name: '北京市科技有是的撒限公司深圳分公司',
      code: '123456789042',
      isCun: false,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
  ]
}
</script>
<style scoped lang="scss">
.content {
  .boxLi {
    margin: 5px;
    overflow: hidden;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px #999;
    margin-top: 10px;
    .compantInfoTop {
      border-bottom: 1px solid #999;
      margin: 15px;
      .compantInfoDiv {
        .compantInfoDiv_name {
          font-size: 18px;
          font-weight: 800;
        }
        .compantInfoDiv_desc {
          font-size: 12px;
          color: $color-gray;
          margin-bottom: 5px;
        }
      }
      .compantInfoButton {
        width: 50px;
      }
    }
    .compantInfoBottom {
      margin: 15px;
      color: $color-gray;
      text-align: center;
      .fontWeight {
        font-weight: 800;
      }
    }
  }
}
.searchTitle {
  padding: 10px 20px;
  color: rgba(13, 16, 231, 0.867);
}
</style>
