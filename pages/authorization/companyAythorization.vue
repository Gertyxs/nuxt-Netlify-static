<!--
 * @Author: cen
 * @Date: 2021-05-26 11:06:25
 * @LastEditTime: 2021-05-27 17:18:02
 * @LastEditors: cenchengwei@foreverht.com
 * @Description: 
 * @FilePath: /szient-hybrid-h5/pages/authorization/companyAythorization.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="detailContent">
    <div class="commonBoxLi boxLiColor">
      <div class="flex-align compantInfoTop">
        <div style="flex: 4" class="compantInfoDiv">
          <div class="compantInfoDiv_name">
            {{ detailInfo.name }}
          </div>
          <div class="compantInfoDiv_desc">
            统一社会信用代码：{{ detailInfo.code }}
          </div>
        </div>
        <div style="flex: 1">
          <van-button
            :type="detailInfo.isCun ? 'info' : 'danger'"
            class="compantInfoButton"
            size="small"
            >{{ detailInfo.isCun ? '存续' : '注销' }}</van-button
          >
        </div>
      </div>
      <div class="flex-between compantInfoBottom">
        <div>
          <div>法定代表</div>
          <div class="fontWeight">{{ detailInfo.userName }}</div>
        </div>
        <div>
          <div>注册资本</div>
          <div class="fontWeight">{{ detailInfo.money }}</div>
        </div>
        <div>
          <div>成立日期</div>
          <div class="fontWeight">{{ detailInfo.data }}</div>
        </div>
      </div>
    </div>
    <van-tabs type="line">
      <van-tab title="角色申请列表">
        <div>
          <div class="text-r searchTitle">+手工添加授权</div>
          <ul>
            <li
              v-for="(item, index) in applyList"
              :key="index"
              class="commonBoxLi"
            >
              <div class="boxLiTop">
                <div class="flex-between mb8">
                  <div class="boxLiTopTitle">张三</div>
                  <div
                    :class="
                      item.status === 1
                        ? 'successColor'
                        : item.status === 2
                        ? 'approvalColor'
                        : item.status === 3
                        ? 'failureColor'
                        : 'rejectedColor'
                    "
                  >
                    {{ item.status | roleApplyStatusFilter }}
                  </div>
                </div>
                <div class="mb8 role">手机号码： 123456784</div>
                <div class="mb8 role">申请角色 金融管理专员</div>
                <div class="mb8 role">
                  角色有效期： {{ item.data | formatFilter }}至{{
                    item.data | formatFilter
                  }}
                </div>
                <div class="mb8 boxLiTopTitle">角色期限：</div>
                <div class="role">代办诉求通过</div>
              </div>
              <div class="boxLiBottom">
                <van-button
                  v-if="item.status === 1"
                  type="primary"
                  class="boxLiBottomButton mr16"
                  size="small"
                  >通过</van-button
                >
                <van-button
                  v-if="item.status === 1"
                  type="info"
                  class="boxLiBottomButton"
                  size="small"
                  >驳回</van-button
                >
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="已审核角色">
        <div>
          <ul>
            <li
              v-for="(item, index) in rolesList"
              :key="index"
              class="commonBoxLi"
            >
              <div class="boxLiTop">
                <div class="flex-between mb8">
                  <div class="boxLiTopTitle">李四</div>
                  <div
                    :class="item.status === 1 ? 'successColor' : 'failureColor'"
                  >
                    {{ item.status | roleStatusFilter }}
                  </div>
                </div>
                <div class="mb8 role">手机号码： 123456784</div>
                <div class="mb8 role">申请角色 金融管理专员</div>
                <div class="mb8 role">
                  角色有效期： {{ item.data | formatFilter }}至{{
                    item.data | formatFilter
                  }}
                </div>
              </div>
              <div class="boxLiBottom textalignRight">
                <van-button
                  type="primary"
                  class="boxLiBottomButton"
                  size="small"
                  >申请延长期限</van-button
                >
                <van-button type="info" class="boxLiBottomButton" size="small"
                  >解除授权</van-button
                >
                <van-button
                  v-if="item.status === 1"
                  type="danger"
                  class="boxLiBottomButton"
                  size="small"
                  >禁用</van-button
                >
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  formatDate,
  myRoleStatusDate,
  roleApplyStatusDate,
} from '@/utils/utils'
@Component({
  name: 'Authorizaton',
  filters: {
    formatFilter: (value: Date) => formatDate('YYYY-MM-DD', value),
    roleStatusFilter: (value: Date) => myRoleStatusDate(value),
    roleApplyStatusFilter: (value: Date) => roleApplyStatusDate(value),
  },
})
export default class extends Vue {
  detailInfo = {
    name: '北京市科技有是的撒限公司深圳分公司',
    code: '123456789042',
    isCun: true,
    userName: '黄霞妹',
    money: '100万',
    data: '2021-5-20',
  }

  applyList = [
    {
      name: '企业诉求员',
      code: '123456789042',
      status: 1,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
    {
      name: '企业诉求员',
      code: '123456789042',
      status: 2,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
    {
      name: '企业诉求员',
      code: '123456789042',
      status: 3,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
    {
      name: '企业诉求员',
      code: '123456789042',
      status: 4,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
  ]

  rolesList = [
    {
      name: '企业诉求员',
      code: '123456789042',
      status: 1,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
    {
      name: '企业诉求员',
      code: '123456789042',
      status: 2,
      userName: '黄霞妹',
      money: '100万',
      data: '2021-5-20',
    },
  ]
}
</script>
<style scoped lang="scss">
.detailContent {
  //   overflow-y: auto;
  //   min-height: 100vh;
  padding-bottom: 10px;
  .boxLiColor {
    background-color: rgb(228, 226, 226);
  }
  .commonBoxLi {
    margin: 5px;
    overflow: hidden;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px #999;
    margin-top: 10px;
    .boxLiTop {
      padding: 15px;
      box-sizing: border-box;
      .boxLiTopTitle {
        color: $color-gray;
        font-weight: 600;
      }
      .role {
        font-weight: 500;
      }
    }
    .boxLiBottom {
      padding: 15px;
      text-align: center;
      .boxLiBottomButton {
        border-radius: 5px;
      }
    }
    .textalignRight {
      text-align: right;
    }
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
.successColor {
  color: $color-success;
}
.approvalColor {
  color: $color-warning;
}
.failureColor {
}
.rejectedColor {
  color: $color-danger;
}
</style>
