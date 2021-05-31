/*
 * @Author: cen
 * @Date: 2021-05-27 11:43:44
 * @LastEditTime: 2021-05-27 16:39:09
 * @LastEditors: cenchengwei@foreverht.com
 * @Description:
 * @FilePath: /szient-hybrid-h5/utils/utils.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import moment from 'moment'

export function formatDate(fmt: string, time: Date) {
  if (!time) {
    return ''
  }
  return moment(time).format(fmt)
}

export function myApplyStatusDate(status: any) {
  if (status === 1) return '已通过'
  if (status === 2) return '审批中'
  if (status === 3) return '已失效'
  if (status === 4) return '已驳回'
}

export function myRoleStatusDate(status: any) {
  if (status === 1) return '生效中'
  if (status === 2) return '已失效'
}

export function roleApplyStatusDate(status: any) {
  if (status === 1) return '待审核'
  if (status === 2) return '已通过'
  if (status === 3) return '已驳回'
}
