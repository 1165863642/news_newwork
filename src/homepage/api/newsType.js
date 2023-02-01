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
    headers: {
      isToken: false
    },
    method: 'get',
    params
  })
}

export function getJournaList(params) {
  return request({
    url: '/system/news/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params
  })
}

export function getMessageList(params) {
  return request({
    url: '/system/message/list',
    headers: {
      isToken: false
    },
    method: 'get',
    params
  })
}

export function addMessage(data) {
  return request({
    url: '/system/message',
    headers: {
      isToken: false
    },
    method: 'post',
    data
  })
}

export function getHome() {
  return request({
    url: '/system/home',
    headers: {
      isToken: false
    },
    method: 'get'
  })
}


export function getMessageUser() {
  return request({
    url: '/system/user/messageUser',
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}


// 登录方法
export function login({ username, password, code, uuid }) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
