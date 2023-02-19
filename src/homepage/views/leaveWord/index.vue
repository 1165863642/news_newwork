<template>
  <div class="leave-word-content">
    <div class="header-bg">
      <div class="title">与首长对话 心系报国梦</div>
      <el-row :gutter="20">
        <el-col v-for="item in MessageUser" :key="item.userId" :span="3">
          <div :class="messageList.paging.userId === item.userId ? 'head-portrait-frame-x' : 'head-portrait-frame'"
            @click="userIdChange(item.userId)">
            <img class="head-portrait" :src="getImageUrl(item.avatar)" :title="item.remark" />
            <div class="nick-name">{{ item.nickName }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="message-class">
      <div />
      <div class="search">
        <el-input v-model="messageList.paging.uniqueCode" style="width: 300px;margin-right: 10px;"
          placeholder="请输入加密留言编码" @keyup.enter.native="init" />
        <el-button icon="el-icon-key" type="warning" circle @click="init" />
      </div>
    </div> -->
    <div v-loading="messageLoading" class="message-main">
      <!-- <el-backtop target=".message-main" :right="300" :bottom="60">
        <i class="el-icon-caret-top" style="color: #e6a23c;" />
      </el-backtop> -->
      <div class="message-box">
        <el-input v-model="addMessageFrom.content" type="textarea" :rows="4" placeholder="您想说点什么？" resize="none" />
        <div v-show="(addMessageFrom.content.length > 0)" style="margin-top: 10px;">
          <el-radio v-model="addMessageFrom.open" :label="1">公开</el-radio>
          <el-radio v-model="addMessageFrom.open" :label="0">悄悄话</el-radio>
          <el-select v-model="addMessageFrom.userId" style="margin-right: 10px;" :disabled="true">
            <el-option v-for="item in MessageUser" :key="item.userId" :label="item.nickName" :value="item.userId">
            </el-option>
          </el-select>
          <el-button @click="addMsg(true)"> 实名留言
          </el-button>
          <el-button type="warning" @click="addMsg(false)">
            匿名留言 </el-button>
        </div>

      </div>
      <div class="message-list">
        <div v-for="msg in messageList.rows" :key="msg.id" class="message-item">
          <div class="top">
            <p class="serial-number">编号 {{ padNumber(msg.id, 8, "0") }}</p>
            <p>留言人：{{ msg.name }}</p>
          </div>
          <div class="message-content">
            <p>{{ msg.content }}</p>
            <div v-if="(msg.replies && msg.replies.length > 0)" class="subitem-list">
              <div v-for="(replies, i) in msg.replies" :key="replies.id" class="subitem-item">
                <span style="color:#949494 ;">{{ getRepliesName(replies.name) }}回复: </span>
                <p class="subitem-content" style="word-wrap:break-word;word-break:break-all;">{{ replies.content }}
                </p>
                <p class="subitem-time">回复时间：{{ replies.createTime }}</p>
              </div>
            </div>
          </div>
          <div v-if="openMessagesNO === msg.id" class="message-tool">
            <el-input v-model="msg.comment" class="message-tool-input" type="textarea" :rows="2" placeholder="您想说点什么？"
              resize="none" />
            <div class="message-tool-button">
              <el-button type="success" @click="messagesSubmit(msg)">提交</el-button>
              <el-button @click="openMessagesNO = ''">取消</el-button>
            </div>
          </div>
          <div class="bottom">
            <p class="time">{{ msg.createTime }}</p>
            <el-button v-if="userInfo && userInfo.userId === msg.userId" type="text" icon="el-icon-chat-line-round"
              @click="openMsg(msg)">回复留言</el-button>
          </div>
        </div>


        <!-- 分页组件 -->
        <div class="my-pagination">
          <el-pagination background :current-page.sync="messageList.paging.pageNum"
            :page-size="messageList.paging.pageSize" layout="total, prev, pager, next,jumper"
            :total="messageList.paging.total" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMessageList, addMessage, getMessageUser, getImageUrl, addReply } from '../../api/newsType.js'
import { mapState } from 'vuex';
const padNumber = (n, targetLen, placeholder) => {
  const arr = ('' + n).split('')
  const diff = arr.length - targetLen
  if (diff < 0) {
    return Array(0 - diff)
      .fill(placeholder, 0, 0 - diff + 1)
      .concat(arr)
      .join('')
  } else {
    return arr.join('')
  }
}
// const messages = [
//   {
//     serialNumber: '123123',
//     content: '内容1',
//     time: '2022-10-26 20:16:12',
//     subitem: [
//       {
//         serialNumber: '123123',
//         content: '回复内容1',
//         time: '2022-10-26 20:16:12'
//       }
//     ],
//     comment: ''
//   },
//   {
//     serialNumber: '123124',
//     content: '内容2',
//     time: '2022-10-26 20:16:12',
//     subitem: [
//       {
//         serialNumber: '123123',
//         content: '回复内容2',
//         time: '2022-10-26 20:16:12'
//       }
//     ],
//     comment: ''
//   },
//   {
//     serialNumber: '123125',
//     content: '内容3',
//     time: '2022-10-26 20:16:12',
//     subitem: [
//       {
//         serialNumber: '123123',
//         content: '回复内容3',
//         time: '2022-10-26 20:16:12'
//       }
//     ],
//     comment: ''
//   },
//   {
//     serialNumber: '123126',
//     content: '内容4',
//     time: '2022-10-26 20:16:12',
//     subitem: [
//       {
//         serialNumber: '123123',
//         content: '回复内容4',
//         time: '2022-10-26 20:16:12'
//       }
//     ],
//     comment: ''
//   }
// ]
export default {
  name: 'LeaveWord',
  data() {
    return {
      messageList: {
        rows: [],
        paging: {
          pageSize: 10,
          pageNum: 1,
          total: 0,
          uniqueCode: '',
          userId: null
        }
      },
      openMessagesNO: '',
      messageContent: '',
      messageClass: 'messageClass1',
      messageLoading: false,
      noMore: false,
      MessageUser: [],
      addMessageFrom: {
        content: '',
        open: 1,
        user_id: '',
        name: '',
        type: '0'
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    this.init()
  },
  methods: {
    getImageUrl,
    padNumber,
    userIdChange(userId) {
      this.messageList.paging.userId = userId
      this.addMessageFrom.userId = userId
      this.messageList.paging.pageNum = 1
      this.getMessageData()
    },
    handleCurrentChange(val) {
      this.getMessageData()
    },
    getRepliesName(user_id) {
      for (let i = 0; i < this.MessageUser.length; i++) {
        const { userId, nickName } = this.MessageUser[i];
        if (userId == user_id) {
          return nickName;
        }
      }
      if (user_id == 1) {
        return '超级管理员'
      }
      return user_id;
    },
    async init() {
      const { code, data = [] } = await getMessageUser();
      if (code === 200) {
        this.MessageUser = data;
        if (this.MessageUser.length > 0) {
          this.messageList.paging.userId = this.MessageUser[0].userId
          this.addMessageFrom.userId = this.MessageUser[0].userId
        }

      } else {
        this.MessageUser = [];
      }
      this.messageList.paging.pageNum = 1
      this.getMessageData()
    },
    async getMessageData() {
      this.messageLoading = true
      const { code, msg, rows, total } = await getMessageList(this.messageList.paging)
      this.messageLoading = false
      if (code === 200) {
        // 处理隐私条目
        const newrows = rows.map((item) => {
          item.comment = ""
          if (!item.replies) {
            item.replies = []
          }
          if (item.open === 0) {
            // 隐私
            console.log()
            if (this.userInfo && this.userInfo.userId === item.userId) {
              return item
            }
            item.content = "***系统提示：此留言为悄悄话，只有首长可以看见哦！***"
            return item
          } else {
            return item
          }
        })
        // 不是第一页面叠加列表
        this.messageList.rows = newrows
        this.messageList.paging.total = total
      } else {
        this.$message.error(msg)
      }
    },
    load() {
      const { pageSize, pageNum, total } = this.messageList.paging
      if (pageSize * pageNum < total) {
        this.messageList.paging.pageNum++
        this.getMessageData()
      } else {
        this.noMore = true
      }
    },
    openMsg(msg) {
      msg.comment = ''
      this.openMessagesNO = msg.id
    },
    async messagesSubmit(leaveWord) {
      const comment = leaveWord.comment
      // 添加评论请求
      const { code, msg, data } = await addReply({ content: comment, id: null, leaveWord: leaveWord, messageId: leaveWord.id, name: "" })
      if (code === 200) {
        // 成功后
        leaveWord.replies.push({
          name: leaveWord.userId,
          id: crypto.randomUUID(),
          content: comment,
          createTime: '刚刚'
        })
      }
      leaveWord.comment = ""
      this.openMessagesNO = ''
    },
    async addMsgByName(name) {
      const { code, msg, data } = await addMessage({ ...this.addMessageFrom, name })
      if (code === 200) {
        this.addMessageFrom.content = ''
        this.$message.success('留言成功');
        this.userIdChange(this.addMessageFrom.userId);
        // this.$confirm(`加密留言号码：${data}`, '提示', {
        //   confirmButtonText: '复制',
        //   cancelButtonText: '关闭',
        // }).then(() => {
        //   // text是复制文本
        //   // 创建input元素
        //   const el = document.createElement('input')
        //   // 给input元素赋值需要复制的文本
        //   el.setAttribute('value', data)
        //   // 将input元素插入页面
        //   document.body.appendChild(el)
        //   // 选中input元素的文本
        //   el.select()
        //   // 复制内容到剪贴板
        //   document.execCommand('copy')
        //   // 删除input元素
        //   document.body.removeChild(el)
        //   this.$message.success('复制成功');
        // })
      } else {
        this.$message.error(msg)
      }
    },
    addMsg(isActive) {
      if (!this.addMessageFrom.userId) {
        this.$message.error("请选择留言人")
        return
      }
      if (isActive) {
        this.$prompt('请输入真实姓名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\S/,
          inputErrorMessage: '姓名不能为空！'
        }).then(({ value }) => {
          this.addMsgByName(value)
        })
      } else {
        this.addMsgByName('匿名')
      }
    }
  }
}
</script>

<style lang="scss">
$sideSistance: 160px;
$main-color: #3a523d;

.leave-word-content {
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .header-bg {
    background-color: #fff;

    .title {
      text-align: center;
      padding-top: 20px;
      font-size: 25px;
    }
  }

  .message-class {
    padding: 10px $sideSistance 0px $sideSistance;
    display: flex;
    justify-content: space-between;
    height: 55px;

    .el-tabs__item.is-active {
      color: $main-color !important;
    }

    .el-tabs__active-bar {
      background-color: $main-color !important;
    }

    .search {}
  }

  .message-main {
    flex: 1;
    overflow-y: auto;
    padding: 10px $sideSistance 0px $sideSistance;
    background-color: #f4f4f4;

    .message-box {
      text-align: right;
    }

    .message-list {
      padding: 10px 0 0 0;

      .message-item {
        background-color: #fff;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px 20px;

        .top {
          display: flex;
          padding-bottom: 7px;
          border-bottom: #f4f4f4 2px solid;

          .serial-number {
            font-weight: 600;
            width: 200px;
          }
        }

        .message-content {
          padding: 10px 30px;

          .subitem-list {
            padding: 20px 30px 0 30px;

            .subitem-item {
              display: flex;
              justify-content: space-between;

              .subitem-content {
                flex: 1;
              }

              .subitem-time {
                text-align: right;
                color: #949494;
                width: 200px;
                font-size: 12px;
              }
            }
          }
        }

        .message-tool {
          padding: 0 30px 0 60px;
          display: flex;
          align-items: flex-end;

          .message-tool-input {
            flex: 1;
          }

          .message-tool-button {
            width: 200px;
            padding: 0 10px;
          }
        }

        .bottom {
          display: flex;
          align-items: center;

          .time {
            color: #949494;
            width: 300px;
            font-size: 12px;
          }

        }

      }

    }

    .msg-p {
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: $main-color;
    }
  }
}

.el-radio__input.is-checked .el-radio__inner {
  border-color: $main-color;
  background: $main-color;
}

.el-radio__input.is-checked+.el-radio__label {
  color: $main-color;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: $main-color;
}

.el-select-dropdown__item.selected {
  color: $main-color;
}



.el-select .el-input__inner:focus {
  border-color: $main-color;
}


.head-portrait-frame-x {
  text-align: center;
  border: $main-color 3px solid;
  padding: 10px 0;
  border-radius: 10px;
}

.head-portrait-frame {
  text-align: center;
  padding: 10px 0;
}

.head-portrait {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
}

.nick-name {}

.my-pagination {
  text-align: center;
}

.el-pagination.is-background .el-pager li {
  color: $main-color;
  background-color: #fff;
  border: 1px $main-color solid;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: $main-color;
  color: #FFF;
}

.el-pagination.is-background .btn-next {
  background-color: #fff;
  color: $main-color;
  border: 1px $main-color solid;
}
</style>
