<template>
  <div id="portrait">
    <div class="mask" v-if="isShare" @click="share">
      <img src="../../static/arrow-up-curve.png" />
      <p>点击这里分享</p>
    </div>

    <div id="slide1" class="slides-level" v-if="portrait">
      <p class="animated fadeInLeftBig">经过分析，东南大学图书馆为你推荐：</p>
    </div>

    <div id="portrait-title" class="animated fadeIn delay-1s">
      <p class="animated heartBeat delay-2s">{{ portraitsData[category][code].name }}</p>
    </div>
    
    <div id="slide2" class="slides-level right-align">
      <p class="animated fadeInRightBig delay-2s">{{ portraitsData[category][code].desc[0] }}</p>
      <p class="animated fadeInRightBig delay-3s">{{ portraitsData[category][code].desc[1] }}</p>
    </div>

    <div id="btns" class="flex-column-container animated fadeInUp delay-4s">
      <a class="btn" @click="share">
        分享给朋友
      </a> 
      <a class="btn" @click="redirectToFirst">
        再次回忆
      </a> 
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        portraits: ["《神秘岛》", "《绿野仙踪》", "《解忧杂货店》", "《大学》"],
        portraitsDesc: [["虽然自己学习也很酷，", "可是咱们九龙湖已经通网了……"], ["梦会醒，梦中故事会被铭记，", "你会离开李文正，但请不要忘了读过的书！"], ["无论你来自何方，将要去向何处，", "书都愿意认真倾听你的孤绝和烦忧"], ["大学之道，在明明德，", "在亲民，在止于至善"]],
        isShare: false,
        category:0,
        code:0,
        portraitsData:[
          [{name:"《你一生的故事》",desc:["即使已经预见未来，","还是避不开与九龙湖的相遇。"]},
          {name:"《夏日终曲》",desc:["我们都知道夏天终会离去，如果可以，","还能以你的名字呼唤我吗，“东南。”"]},
          {name:"《三体》",desc:["给岁月以文明，","而不是给文明以岁月。"]},
          {name:"《计算机网络（自顶向下方法）》",desc:["我有时候你可能没有找到你想去的地址，","但没关系，你可以继续路由。"]},
          {name:"《云雀叫了一整天》",desc:["愿诸君，人在江湖身由己，","曲逢周郎弦不误。"]},
          {name:"《大学》",desc:["大学之道，在明明德，","在亲民，在止于至善。"]},
          {name:"《荒野求生》",desc:["活着的每一天都是礼物,","幸运垂青勇者。"]}
          ],[{name:"《你一生的故事》",desc:["即使已经预见未来，","还是避不开与九龙湖的相遇。"]},
          {name:"《操作系统概念》",desc:["操作系统由多个子部分组成并被不断完善，","你的人生也是。"]},
          {name:"《老人与海》 ",desc:["人之一生，何其短，","但为不可推卸之事孜孜以求者百死不悔。"]},
          {name:"《雅舍忆旧》",desc:["等你，在微风中，在晴空下，","花香弥漫，蝴蝶蹁跹。"]},
          {name:"《卖梦人》",desc:["在纷繁的社会中，","问问自己的梦想是什么？"]},
          {name:"《追风筝的人》",desc:["放风筝的人成为追风筝的人，","是选择逃避，还是选择成长？"]}
          ],[{name:"《C++大学教程》",desc:["虽然我只会教你编码，","但我希望你可以学到如何思考。"]},
          {name:"《无声告白》",desc:["我们终此一生，","就是要摆脱他人的期待，找到真正的自己。"]},
          {name:"《双城记》",desc:["对于世界而言，你是一个人；","但是对于某个人，你是他的整个世界。"]},
          {name:"《机器学习》",desc:["愿你像“西瓜书”一样，有个可爱的外表，","还有深邃的内涵。"]},
          {name:"《大学之路：陪女儿在美国选大学》",desc:["我可能没法和你一起在美国选大学，","但我希望你可以陪女儿选东南大学。"]},
          {name:"《四世同堂》",desc:["社会不是由你的服从组成的，","社会是由你的思想组成的。"]}
          ],[{name:"《蘇軾文集》",desc:["且将新火试新茶。","诗酒趁年华。"]},
          {name:"《数学分析习题集题解.第三版》",desc:["你看，每个问题都是有对应的解法的，","希望你可以耐心钻研，找到生活的答案。"]},
          {name:"《明朝那些事儿》",desc:["我们可能做不到兼济天下，","但我们一样可以胸怀天下。"]},
          {name:"《海底两万里》",desc:["我这里有万卷书，","我希望你可以带着它们行万里路。"]},
          {name:"《爱丽丝梦游仙境》",desc:["梦会醒，但梦中的故事会让人铭记；","你会离开李文正，但……但我希望你能别忘了在这里看过的书！"]},
          {name:"《阿里巴巴与四十大盗》",desc:["这些宝藏，都是你的啦！","这些知识，也都是你的啦！"]}
          ]
        ]
      }
    },
    props: {
      portrait: Object,
    },
    created(){
      this.category = this.portrait.category
      this.code = parseInt(this.portrait.cardnum) % (this.portraitsData[this.category].length)
    },
    async mounted () {
    },
    methods: {
      share () {
        this.isShare = !this.isShare
      }, 
      redirectToFirst () {
        this.$emit("to-first")
      }
    }
  }
</script>

<style scoped>
  #portrait {
    height: 100%;
    font-size: 1.2em;
  }
  #slide1 {
    position: absolute;
    top: 10%;
  }
  #portrait-title {
    width: 100%;
    font-size: 2em;
    font-weight: bold;
    color: #104E8B;
    text-align: center;
    position: absolute;
    top: 20%;
    left: 0%;
  }
  #slide2 {
    position: absolute;
    top: 35%;
    right: 0;
  }
  #btns {
    width: 100%;
    position: absolute;
    top: 70%;
  }
  .flex-column-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mask {
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    z-index: 1000;
  }
  .mask img {
    width: 15%;
    position: absolute;
    top: 5%;
    right: 10%;
  }
  .mask p {
    position: absolute;
    top: 15%;
    right: 20%;
  }
  .slides-level {
    padding: 2% 5%;
  }
  .slides-level p {
    margin: 5px;
    padding: 2px 5px;
    border-bottom: 1px solid #ddd;
    line-height: 1.8em;
  }
  .right-align p {
    text-align: right;
  }
  .btn {
    width: 50%;
    padding: 15px;
    margin-bottom: 5%;
    border: 2px solid #ddd;
    border-radius: 30px;
    color: #777;
    box-shadow: 5px 5px 5px #ddd;
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
  }
</style>
