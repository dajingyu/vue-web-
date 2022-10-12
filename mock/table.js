/*
 * @Date: 2022-07-10 10:49:12
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-12 13:29:32
 * @Description: 文件信息
 */
const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [
    {
      id: '@id',
      title: '@sentence(10, 20)',
      'status|1': ['published', 'draft', 'deleted'],
      author: '111',
      display_time: '@datetime',
      pageviews: '@integer(300, 5000)'
    }
  ]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: (config) => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
