<template>
  <div>
  <div id="login" class="flex-column-container">
    <transition 
      appear
      appear-active-class="animated bounceInDown slow"
    >
      <img src="../../static/logo.png" class="logo" @load="loadImg" />
    </transition>

    <transition
      appear
      appear-active-class="animated lightSpeedIn delay-2s"
    >
      <div class="title-level">
        <p class="title-animate animated tada delay-3s">毕业回忆</p>
      </div>
    </transition>

    <transition
        appear
        appear-active-class="animated fadeIn delay-2s"
      >
      <div class="title-level">
        <p class="subtitle">和我一起，划船去图书馆吧！</p>
      </div>
    </transition>
    <transition
      appear
      appear-active-class="animated fadeIn delay-2s"
    >
      <div class="input-level">
        <Input v-model="cardnum" size="large" placeholder="你的一卡通号" />
        <Input v-model="name" size="large" placeholder="你的姓名" />
      </div>
    </transition>

    <transition
      appear
      appear-active-class="animated fadeIn slow delay-2s"
    >
    <div class="btn-container">
      <a class="btn" @click="login">
        开启回忆
      </a> 
    </div>
    </transition>
  </div>
</div>
</template>

<script>
  import api from '@/api'
  import moment from 'moment'
  export default {
    data () {
      return {
        cardnum: "",
        name: "",
        isLoaded: false,
      }
    },
    computed: {
      isInputFinished () {
        return this.cardnum && this.name
      }
    },
    async mounted () {
      this.$Message.loading("正在加载……")
    },
    methods: {
      loadImg () {
        this.$Message.destroy()
      },
      async login () {
        if (this.isInputFinished) {
          let now = +moment()
          let openTime = +moment('2019-06-21 11:30', 'YYYY-MM-DD HH:mm')
          if(now < openTime){
            this.$Message.info({
              content: "尚未开放～敬请期待！"
            })
            return
          }
          if (!/^[12]\d{8}$/.test(this.cardnum)) {
            this.$Message.error({
              content: "一卡通号写错啦>_<"
            })
            return
          }
          if(!(this.cardnum.startsWith('21315')||this.cardnum.startsWith('21314'))){
            this.$Message.info({
              content: "仅限14、15级本科生访问哦～"
            })
            return
          }

          this.$Message.loading({
            content: "正在提取回忆……",
            duration: 5
          })
          let res = await api.get("", {
              cardnum: this.cardnum,
              name: this.name
            })
          this.$Message.destroy()
          
          if (res.result) {
            this.$router.replace({
              name:'show',
              params: {
                data: res.data,
                cardnum: this.cardnum
              }
            })
          } else {
            this.$Message.error({
              content: "啊哦……没有找到回忆呢>_< <br/> 请确认信息填写无误哦～",
              duration: 3
            })
          }

        }
      }
    }
  }
</script>

<style scoped>
  .flex-column-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  .logo {
    width: 80%;
    margin-top: 15%;
  }
  .title-level {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title-animate {
    font-size: 4.5em;
    color: #104E8B;
    font-weight: bolder;
  }
  .title-static {
    font-size: 3em;
  }
  .input-level {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 5%;
  }

  .ivu-input-wrapper {
    padding: 0;
    margin: 10px 0;
    
  }
  .ivu-input {
    opacity: 0.8;
    font-size: 24px !important;
  }
  .btn {
    width: 100%;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 30px;
    color: #777;
    box-shadow: 5px 5px 5px #ddd;
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
    margin-top: 10%;
  }
  .btn-container{
    width: 50%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
</style>
