<!--
 * @Author: cen
 * @Date: 2021-05-27 15:01:37
 * @LastEditTime: 2021-05-27 18:32:14
 * @LastEditors: cenchengwei@foreverht.com
 * @Description: 
 * @FilePath: /szient-hybrid-h5/pages/authorization/applyExtension.vue
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
  <div class="applyExtensionContent">
    <div class="extensionTitle">角色有效期延期</div>
    <div>
      <div class="flex-align">
        <div>有效期延期:</div>
        <van-radio-group v-model="radioVal" direction="horizontal">
          <van-radio name="1">一个月</van-radio>
          <van-radio name="2">两个月</van-radio>
          <van-radio name="3">三个月</van-radio>
          <van-radio name="4">半年</van-radio>
          <van-radio name="5">
            <template>
              <div class="flex-align">
                <div>自定义：</div>
                <van-field
                  readonly
                  clickable
                  :value="endTimeVal"
                  placeholder="有效截止日期"
                  @click="showEndTimePicker = true"
                />
              </div>
            </template>
          </van-radio>
        </van-radio-group>
      </div>
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'ApplyExtension',
})
export default class extends Vue {
  private radioVal = 1

  private endTimeVal = null

  private showEndTimePicker = false

  endTimeConfirm(val: any) {
    console.log(val)
    this.showEndTimePicker = false
  }
}
</script>
<style scoped lang="scss">
.applyExtensionContent {
  .extensionTitle {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
