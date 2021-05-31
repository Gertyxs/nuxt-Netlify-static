<!--
 * @Author: cen
 * @Date: 2021-05-27 15:01:37
 * @LastEditTime: 2021-05-27 17:26:54
 * @LastEditors: cenchengwei@foreverht.com
 * @Description: 
 * @FilePath: /szient-hybrid-h5/pages/authorization/manualAuthorization.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<!--
 * @Author: cen
 * @Date: 2021-05-26 11:06:25
 * @LastEditTime: 2021-05-27 14:59:34
 * @LastEditors: cenchengwei@foreverht.com
 * @Description: 
 * @FilePath: /szient-hybrid-h5/pages/authorization/authorizationDetail.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="applyContent">
    <div class="applyBox">
      <div class="addRolesDiv">请输入经办人信息</div>
      <van-form validate-first @submit="onSubmit">
        <div class="m10">姓名</div>
        <van-field v-model="roleFrom.name" placeholder="请输入被授权人姓名" />
        <div class="m10">身份证号码</div>
        <van-field
          v-model="roleFrom.idCard"
          placeholder="请输入被授权人身份证号码"
        />
        <div class="m10">角色</div>
        <van-field
          readonly
          clickable
          :value="roleFrom.roles"
          placeholder="选择角色"
          @click="showRolePicker = true"
        />
        <div class="m10">生效开始时间</div>
        <van-field
          readonly
          clickable
          :value="roleFrom.startTime"
          placeholder="生效开始时间"
          @click="showStartTimePicker = true"
        />
        <div class="m10">有效截止日期</div>
        <van-field
          readonly
          clickable
          :value="roleFrom.endTime"
          placeholder="有效截止日期"
          @click="showEndTimePicker = true"
        />
        <div class="m10">申请理由</div>
        <van-field
          readonly
          clickable
          :value="roleFrom.reason"
          placeholder="请输入申请理由"
          @click="showEndTimePicker = true"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <van-popup v-model="showRolePicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showRolePicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <van-popup v-model="showStartTimePicker" round position="bottom">
        <van-datetime-picker
          v-model="startTimeVal"
          type="date"
          title="选择年月日"
          @cancel="showStartTimePicker = false"
          @confirm="startTimeConfirm"
        />
      </van-popup>
      <van-popup v-model="showEndTimePicker" round position="bottom">
        <van-datetime-picker
          v-model="endTimeVal"
          type="date"
          title="选择年月日"
          @cancel="showEndTimePicker = false"
          @confirm="endTimeConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { formatDate, myApplyStatusDate, myRoleStatusDate } from '@/utils/utils'
import { Dialog } from 'vant'
@Component({
  name: 'Authorizaton',
  filters: {
    formatFilter: (value: Date) => formatDate('YYYY-MM-DD', value),
    statusFilter: (value: Date) => myApplyStatusDate(value),
    roleStatusFilter: (value: Date) => myRoleStatusDate(value),
  },
})
export default class extends Vue {
  private detailInfo = {
    name: '北京市科技有是的撒限公司深圳分公司',
    code: '123456789042',
    isCun: true,
    userName: '黄霞妹',
    money: '100万',
    data: '2021-5-20',
  }

  private showRolePicker = false

  private showStartTimePicker = false

  private showEndTimePicker = false

  private startTimeVal = null

  private endTimeVal = null

  private roleFrom = {
    name: '',
    idCard: '',
    reason: '',
    roles: '',
    startTime: null,
    endTime: null,
  }

  private columns = [
    '杭州',
    '宁波',
    '温州',
    '绍兴',
    '湖州',
    '嘉兴',
    '金华',
    '衢州',
  ]

  onConfirm() {
    console.log(22)
  }

  onSubmit(values: any) {
    console.log('submit', values)
    Dialog.alert({
      message: '业务授权成功',
    }).then(() => {
      // on close
    })
  }

  endTimeConfirm(val: any) {
    this.roleFrom.endTime = val
    this.showEndTimePicker = false
  }

  startTimeConfirm(val: any) {
    console.log(val)
    this.roleFrom.startTime = val
    this.showStartTimePicker = false
  }
}
</script>
<style scoped lang="scss">
.applyContent {
  //   overflow-y: auto;
  //   min-height: 100vh;
  padding-bottom: 10px;
  .boxLiColor {
    background-color: rgb(228, 226, 226);
  }
  .roleDiv {
    height: 40px;
    margin-top: 16px;
    background-color: rgb(228, 226, 226);
    border: 1px solid rgb(197, 195, 195);
  }
  .applyBox {
    padding: 15px;
    .addRolesDiv {
      margin-top: 20px;
    }
  }
}
</style>
