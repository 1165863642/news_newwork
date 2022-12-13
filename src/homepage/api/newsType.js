import request from './request'

export function getNewsTypeList(params) {
  return request({
    url: '/system/type/list',
    method: 'get',
    params
  })
}

export function getJournaList(params) {
  return request({
    url: '/system/news/list',
    method: 'get',
    params
  })
}

export function getMessageList(params) {
  return request({
    url: '/system/message/list',
    method: 'get',
    params
  })
}

