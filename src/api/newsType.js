import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/system/type/list',
    method: 'get',
    params
  })
}
