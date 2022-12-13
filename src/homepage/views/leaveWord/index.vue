<template>
  <div class="leave-word-content">
    <div class="header-bg">
      <div class="title">与首长对话，心系报国梦</div>
    </div>
    <div class="message-class">
      <div />

      <div class="search">
        <el-input v-model="messageList.paging.searchVuale" style="width: 300px;margin-right: 10px;"
          placeholder="请输入内容" />
        <el-button icon="el-icon-search" type="primary" circle @click="init" />
      </div>
    </div>
    <div class="message-main">
      <div class="message-box">
        <el-input v-model="messageContent" type="textarea" :rows="3" placeholder="您想说点什么？" resize="none" />
        <el-button v-show="(messageContent.length > 0)" type="primary" style="margin-top: 10px;"> 发表留言 </el-button>
      </div>
      <div class="message-list">
        <div v-for="msg in messageList.rows" :key="msg.id" class="message-item">
          <div class="top">
            <p class="serial-number">NO.{{ msg.id }}</p>
            <p>{{ msg.name }}</p>
          </div>
          <div class="message-content">
            <p>{{ msg.content }}</p>
            <div v-if="(msg.replies.length > 0)" class="subitem-list">
              <div v-for="(replies, i) in msg.replies" :key="replies.id" class="subitem-item">
                <span style="color:#949494 ;">{{ (i + 1) }}.{{ replies.name }}: </span>
                <p class="subitem-content">{{ replies.content
                }}
                </p>
                <p class="subitem-time">{{ replies.createTime }}</p>
              </div>
            </div>
          </div>
          <div v-if="openMessagesNO === msg.id" class="message-tool">
            <el-input v-model="msg.comment" class="message-tool-input" type="textarea" :rows="2" placeholder="您想说点什么？"
              resize="none" />
            <div class="message-tool-button">
              <el-button type="warning" @click="messagesSubmit(msg)">提交</el-button>
              <el-button @click="openMessagesNO = ''">取消</el-button>
            </div>
          </div>
          <div class="bottom">
            <p class="time">{{ msg.createTime }}</p>
            <!-- <el-button type="text" icon="el-icon-chat-line-round" @click="openMsg(msg)">评论</el-button> -->
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { getMessageList } from '../../api/newsType.js'

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
          pageSize: 20,
          pageNum: 1,
          total: 0,
          searchVuale: ''
        }
      },
      openMessagesNO: '',
      messageContent: '',
      messageClass: 'messageClass1'

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.messageList.paging.pageNum = 1
      this.getMessageData()
    },
    async getMessageData() {
      const { code, msg, rows, total } = await getMessageList(this.messageList.paging)
      this.messageList.rows = rows
    },
    openMsg(msg) {
      msg.comment = ''
      this.openMessagesNO = msg.serialNumber
    },
    messagesSubmit(msg) {
      const comment = msg.comment
      // 添加评论请求

      // 成功后
      msg.subitem.push({
        serialNumber: '123123',
        content: comment,
        time: '2022-10-26 20:16:12'
      })
      msg.comment = 0
      this.openMessagesNO = ''
    }
  }
}
</script>

<style lang="scss">
$sideSistance: 160px;

.leave-word-content {
  .header-bg {
    height: 120px;
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

    .el-tabs__item.is-active {
      color: #fcb955 !important;
    }

    .el-tabs__active-bar {
      background-color: #fcb955 !important;
    }

    .search {}
  }

  .message-main {
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
          }

        }

      }

    }
  }
}
</style>
