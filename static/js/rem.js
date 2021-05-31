/*
 * @Author: cen
 * @Date: 2021-05-26 16:36:20
 * @LastEditTime: 2021-05-26 16:41:36
 * @LastEditors: cenchengwei@foreverht.com
 * @Description:
 * @FilePath: /szient-hybrid-h5/static/js/rem.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
;(function (win) {
  let doc = win.document
  let docEl = doc.documentElement
  var tid
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width
    if (width > 750) {
      // 最大宽度
      width = 750
    }
    console.log(width, docEl)
    var rem = width / 7.5
    docEl.style.fontSize = rem + 'px'
  }
  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )
  refreshRem()
})(window)
