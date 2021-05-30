<template>
  <div class="bg-gray-100 w-screen h-screen">
    <div class="w-full h-full flex items-center justify-center">
      <el-card :body-style="{ padding: '0px' }" class="chat flex-none">
        <div class="flex w-full h-full">
          <div class="w-16 bg-gray-900">
<img src="">
          </div>
          <div class="w-64 bg-gray-100 flex flex-col border-r">
            <div class="flex h-12 px-3 items-center">
              <el-input
                  size="mini"
                  placeholder="搜索"
                  prefix-icon="el-icon-search"
                  v-model="keyword">
              </el-input>
              <el-button @click="onRoomAdd()" class="ml-2" size="mini" icon="el-icon-plus"></el-button>
            </div>
            <overlay-scrollbars class="flex-1">
              <div @click="clickRoomItem(index)"
                   :class="activeIndex === index ? 'bg-gray-300':''"
                   class="flex p-3"
                   v-for="(item,index) in rooms"
                   :key="index">
                <el-image fit="fit" class="w-10 h-10 mr-2" :src="item.avatarurl"></el-image>
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-1">
                    <div class="truncate">{{ item.name_note ? item.name_note : item.name }}</div>
                    <div class="text-xs text-gray-400">{{ item.last_message ? item.last_message.created_at : '' }}</div>
                  </div>
                  <div class="flex items-center justify-between text-xs text-gray-400">
                    <div class="truncate">{{ item.last_message ? item.last_message.content : '' }}</div>
                    <div>
                      <i v-if="item.unread_count > 0" class="el-icon-message-solid">{{ item.unread_count }}</i>
                    </div>
                  </div>
                </div>
              </div>
            </overlay-scrollbars>
          </div>
          <div class="flex flex-col h-full w-140">
            <div class="h-12 px-3 flex items-center justify-between bg-gray-50 border-b">
              <div>聊天</div>
              <div><i class="el-icon-more"></i></div>
            </div>
            <overlay-scrollbars class="flex-1">
              <div class="bg-gray-50 min-h-full">
                <div v-for="(item,index) in messages" :key="index">
                  <div class="flex">
                    <el-image fit="fit" class="w-10 h-10 mr-2" :src="item.avatarurl"></el-image>
                    <div>
                      <div>123123</div>
                      <div>{{item.content}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </overlay-scrollbars>
            <div class="flex-none p-3 border-t">
              <div class="mb-1 text-xl text-gray-500">
                <i class="el-icon-picture-outline mr-2"></i>
                <i class="el-icon-chat-line-round mr-2"></i>
              </div>
              <overlay-scrollbars class="h-20">
                <el-input
                    class="w-full chat-textarea"
                    type="textarea"
                    :autosize="{ minRows: 3}"
                    placeholder="请输入内容"
                    v-model="messageStr">
                </el-input>
              </overlay-scrollbars>
              <div class="text-right mt-2">
                <el-button @click="sendMessage()" size="small">发送</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {
      messages:[],
      textarea1: '',
      keyword: '',
      roomAddForm: {
        room_id: '',
        user_id: '',
      },
      rooms: [],
      activeIndex: -1,
      roomId: '',
      messageStr: '',
    }
  },
  watch: {
    roomListData: function (val) {
      this.rooms = val.data;
    },
    roomAddData: function (val) {
      console.log(val)
    },
    messageListData: function (val) {
      this.messages = val.data
    },
    messageAddData: function (val) {
      this.messages.push(val.data)
      this.messageStr = '';
    },
  },
  mounted() {
    this.roomList();
  },
  methods: {
    ...mapActions(['roomList', 'roomAdd', 'messageList', 'messageAdd']),
    onRoomAdd() {
      this.roomAdd(this.roomAddForm);
    },
    clickRoomItem(val) {
      this.activeIndex = val
      this.roomId = this.rooms[val].id
      this.messageList({room_id: this.roomId});
    },
    sendMessage() {
      this.messageAdd({room_id: this.roomId, content: this.messageStr, type: 0})
    }

  },
  computed: {
    ...mapGetters(['roomListData', 'roomAddData', 'messageListData', "messageAddData"])
  }
}
</script>

<style scoped>
.chat {
  height: 600px;
}

.w-140 {
  width: 35rem;
}
</style>