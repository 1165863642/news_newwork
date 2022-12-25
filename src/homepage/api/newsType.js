import request from './request'

export function toJournaDetailPage(journa) {
  if (journa == null) {
    return
  }
  // 根据新闻类型进行不同的跳转
  const { isLink, link, newsId } = journa
  if (isLink === '1') {
    // 打开新闻详情页面
    window.open(`/#/news/${newsId}`, `T=${new Date().getTime()}`)
  } else {
    // 链接打开新网页
    window.open(link, 'blank')
  }
}

export function getImageUrl(url) {
  return `${process.env.VUE_APP_BASE_API}${url}`
}




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

export function addMessage(data) {
  return request({
    url: '/system/message',
    method: 'post',
    data
  })
}

export function getHome() {
  return request({
    url: '/system/home',
    method: 'get'
  })
}
