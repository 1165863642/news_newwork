import request from './request'

export function getNewsTypeList(params) {
  return request({
    url: '/system/type/list',
    method: 'get',
    params
  })
}
