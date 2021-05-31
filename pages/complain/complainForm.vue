<template>
  <div class="complain-form">
    <div class="complain-form-content">
      <van-form class="ctrl-list" ref="form">
        <van-cell class="ctrl-item" is-link title="聊天证据" value="7条聊天证据" />
        <van-field
          class="ctrl-item"
          v-model="complainType"
          label="投诉类型"
          placeholder="请输投诉类型"
          input-align="right"
        ></van-field>
        <van-field
          class="ctrl-item"
          v-model="complainConteent"
          type="textarea"
          label=""
          rows="2"
          maxlength="200"
          placeholder="投诉内容（选填）"
          :show-word-limit="true"
        ></van-field>
        <van-field class="ctrl-item ctrl-image-item">
          <template #input>
            <div class="ctrl-title">
              <h4>图片证据（选填）</h4>
              <span class="count-number">{{ imageList.length }}张/9</span>
            </div>
            <div class="image-block">
              <van-uploader v-model="imageList" :max-count="9">
                <div class="add-image-btn">
                  <i class="iconfont icon-jiahao"></i>
                </div>
                <template #preview-cover></template>
              </van-uploader>
            </div>
          </template>
        </van-field>
      </van-form>
      <div class="submit-btn">
        <van-button round block type="info">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'ComplainForm',
})
export default class extends Vue {
  $refs!: {
    form: any
  }
  private complainType: string = '' // 投诉类型
  private complainConteent: string = '' // 投诉内容
  private imageList: any = [] // 上传的图片
}
</script>
<style lang="scss">
.complain-form {
  position: relative;
  height: 100vh;
  overflow: auto;
  background: #eee;
  .complain-form-content {
    position: relative;
  }
  .ctrl-list {
    position: relative;
    background: #fff;
    padding: 10px;
    .ctrl-item {
      padding: 10px 0;
      .van-field__word-limit {
        font-size: 14px;
        color: #999;
      }
      .ctrl-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h4 {
          font-size: 16px;
          color: #333;
        }
        .count-number {
          font-size: 14px;
          color: #999;
        }
      }
      .van-cell__title, .van-cell__title {
        font-size: 16px;
        color: #333;
      }
      .van-cell__value {
        color: #999;
        font-size: 14px;
      }
      &::after {
        left: 0;
        right: 0;
      }
    }
    .ctrl-image-item {
      .van-field__control--custom {
        display: block;
      }
      .image-block {
        margin-top: 10px;
      }
      .van-uploader__preview-image {
        height: 76px;
        width: 76px;
      }
      .add-image-btn {
        height: 76px;
        width: 76px;
        background: #f7f8fa;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        i {
          font-size: 24px;
          color: #999;
        }
      }
    }
  }
  .submit-btn {
    margin-top: 30px;
    padding: 0 30px;
  }
}
</style>
