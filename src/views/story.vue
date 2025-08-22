<script lang="ts" setup>
import JHLabel from "../components/JHLabel.vue";
import JHCard from "../components/JHCard.vue";
import Footer from "../components/Footer.vue";
import { usePageStore } from "../stores/pages";
import CarouselPictures from "../components/CarouselPicturesBig.vue";
// import { Picture } from '../components/CarouselPictures.vue';
import CarouselCards from "../components/CarouselCards.vue";
import JHButton from "../components/JHButton.vue";
import { useRouter } from "vue-router";
import PageTop from "../components/PageTop.vue";
const router = useRouter();
const pageStore = usePageStore();
const yixingImgs = [
  "https://img.lonesome.cn/jhwl/home/photo/yixing/1.webp",
  "https://img.lonesome.cn/jhwl/home/photo/yixing/2.webp",
  "https://img.lonesome.cn/jhwl/home/photo/yixing/3.webp",
];
const yurenImgs = [
  "https://img.lonesome.cn/jhwl/home/photo/yuren/1.webp",
  "https://img.lonesome.cn/jhwl/home/photo/yuren/2.webp",
  "https://img.lonesome.cn/jhwl/home/photo/yuren/3.webp",
  "https://img.lonesome.cn/jhwl/home/photo/yuren/4.webp",
  "https://img.lonesome.cn/jhwl/home/photo/yuren/5.webp",
];
const persons = [
  {
    img: "/25img/people/paidaxin.webp",
    introduction:
      "派大星\n\n第21届精弘会长兼技术总监\n2025年毕业于浙工大\n现工作于阿里巴巴-钉钉",
    content:
      "从大一加入精弘成为开发部的一员, 第一次学到解算法题和高中技术以外的开发能力, 找到了自己一生都热爱的工作; 到大二成为开发部的部长, 以精弘开发的中流砥柱身份主导微精弘2.0的重构和上线工作，积累自己人生第一次实战；最后在大三成为精弘的会长兼技术总监，将被疫情按下暂停的精弘毅行重新拾起来。我陪着精弘走过了人生最美好的岁月，也见证了精弘最美妙的故事，感谢精弘赋予我人生最大的方向，也希望它可以为大家带来自己的方向。",
  },
  {
    img: "/25img/people/haohao.webp",
    introduction:
      "昊昊\n\n第21届精弘网络常务总监\n2025年毕业于浙工大\n现工作于新众志检测技术",
    content:
      "精弘网络，是工大校园里一个独特而温暖的家。它“取精用弘”的核心理念，不仅书于纸上，更刻在每一位精弘人的行动里。在这里，技术不只是冰冷的代码，更是连接你我、服务校园的桥梁；常务工作也不仅是琐碎的协调，而是维系这个技术大家庭高效运转、传递温暖的纽带。办公室的灯光下，记录着无数个为活动保障、为同学答疑而共同努力的日夜，那是责任，更是热爱。我由衷地希望你们能珍惜在精弘的时光。常务的每一份文档、每一次沟通，都是锻炼耐心、细心和责任心的熔炉。更重要的，是融入这个集体，感受那份“家文化”的包容与互助。 精弘是一片沃土，只要你愿意扎根、付出，就一定能汲取养分，破土成长。期待你们在这里，不仅锤炼技能，更能找到志同道合的伙伴，收获快乐，书写属于你们自己的、闪闪发光的精弘故事。",
  },
  {
    img: "/25img/people/shark.webp",
    introduction:
      "鲨鱼\n\n第21届精弘网络设计总监\n2025年毕业于浙工大\n现就读于浙江工业大学(直博)",
    content:
      "大学还是过成自己想要的样子就好，要考研前两年就好好玩, 要保研就好好卷绩点进实验室发paper, 要就业就早点实习，要出国就早点考雅思托福，要考公大学前面也好好玩。当然上面那些精弘本身是给不了你出路的(大概)，不过这里有人，不管哪条路都能找到对应参考的路线，而且这里凝聚力还可以，上下不怎么会断代～总之是祝精弘越来越好。",
  },
  {
    img: "/25img/people/sisi.webp",
    introduction:
      "思思\n\n第21届精弘网络新媒体总监\n2025年毕业于浙工大\n现就读于中国科学院大学宁波材料所",
    content:
      "在精弘的三年，是我在大学期间除了课堂，能获取到最多养分的地方。在这里，我提升、拓展了许多新媒体技能，积累了许多学生工作经验。当然同时也在这里结交到一批非常不错的高质量朋友。希望大家能在接过精弘的接力棒之后，通过这个平台让自己变得更优秀，同时也能让精弘蒸蒸日上。",
  },
  {
    img: "/25img/people/sika.webp",
    introduction:
      "斯卡\n\n前精弘网络编辑部副部\n2024年毕业于浙工大\n现就读于复旦大学",
    content:
      "在精弘这个温暖的大家庭里，我不仅收获了宝贵的友谊，提升了多方面的能力，还收获了许多美好的回忆。在这里，我勇敢跃出舒适圈，探索未知的新技能与新领域；与伙伴们沟通、磨合，让思想的碰撞擦出创新的火花；更在学业与工作的天平上找到那个宝贵的平衡点……愿精弘也能为你“解锁”一段全新的旅程！投入你的热爱，与精弘并肩，共同成长，收获属于你的闪耀篇章吧！",
  },
  {
    img: "/25img/people/qijie.webp",
    introduction:
      "琦姐\n\n第20届精弘网络产品部部长\n2025年毕业于浙工大\n现任FastGPT产品负责人",
    content:
      "我们不知道自己会去往何方，于是拼命地朝四面八方播撒种子。幸运的是，精弘的这颗种子不仅生根发芽，成为大学时代的绿荫，结出的果子也成了我继续奔赴远方的食粮。精弘诞生了许多改变我人生轨迹的契机，带来无数的机会和可能，也让我认识了很多很多重要的朋友。愿你也能在精弘找到自己真正想做的事，并以精弘为起点，踏出第一步。",
  },
  {
    img: "https://img.lonesome.cn/jhwl/home/photo/story/jiyu/小树.webp",
    introduction:
      "小树\n\n前精弘设计总监\n2022年毕业于浙工大\n现就读于浙江工业大学",
    content:
      "大三的时候加入精弘，是我纠结了很久做的一个决定，现在想想倒觉得很庆幸。光是能够遇见你们，就已经很美好 了。\n       没有当客服的经验，从新生群同意每一个新生宝宝的入群验证到后来与他们的见面，对我来说都是新奇的体验。在很多新生的身上，我都能看到刚收到录取通知书时我的样子。不耐烦的回答一个个问题，也是希望她们能少走弯路。\n       深入接触后，发现精弘网络其实是一个很温暖的组织，可以说很多人都是“为爱发电”，有着很强的责任心。\n        希望大家在精弘的日子里可以收获到属于自己的美好。",
  },
  {
    img: "https://img.lonesome.cn/jhwl/home/photo/story/jiyu/小花仙.webp",
    introduction:
      "小花仙\n\n前精弘技术部副部\n2021年毕业于浙工大\n现工作于腾讯(深圳)IEG技术运营部",
    content:
      "在技术部，我认识了许多好朋友，和自己喜欢的男孩子在一起，并且找到了自己理想的工作。希望大家能记得自己进入精弘的初心，并且为之努力，每个人都有自己的理想，进入精弘可能是你实现理想中的某一个很小的步骤，但是也⼗分的重要，在精弘希望大家都可以好好提升自己，并且能够对精弘做出一些贡献~",
  },
  {
    img: "https://img.lonesome.cn/jhwl/home/photo/story/jiyu/周依佳.webp",
    introduction:
      "大可爱\n\n前精弘屏峰校区副会长兼常务总监\n2020年毕业于浙工大\n现就读于中国人民大学",
    content:
      "在精弘的两年半时光里，是我大学里最珍贵和幸福的回忆。在这里，我提升了各方面的能力，并收获了美好的友谊，真的很值得怀念。这里有温暖的人，温暖的事，希望大家都能在这里有所成长，有所收获，和精弘一起越来越好！",
  },
  {
    img: "https://img.lonesome.cn/jhwl/home/photo/product/3.webp",
    introduction:
      "寒假\n\n2017届新媒体总监\n2019年毕业于浙工大\n现工作于华安证券",
    content:
      "转眼已经从精弘“毕业”好多年，从大一的办公室干事，到大二的活动部部长，再到大三的新媒体总监，在精弘，你会遇见一群最青春可爱的人，拥有最深刻独特的集体归属感，也会发掘自己无限的可能性。精弘大家庭欢迎你的到来！",
  }
];
function toProduct() {
  router.push("/product");
}
</script>
<style scoped lang="scss">
.shiming-base.normal {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  grid-column-gap: 10%;
  align-items: center;
}

.shiming-base.middle {
  width: 80%;
  display: grid;
  grid-template-rows: 10% 1fr;
  margin: auto;
  grid-row-gap: 50px;
}

.shiming-base.mini {
  width: 80%;
  display: grid;
  grid-template-rows: 10% 1fr;
  margin: auto;
  grid-row-gap: 5px;
  align-items: center;
  padding: 10px;
}

.shiming-imgs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10%;
}

.shiming-imgs-img {
  width: 100%;
  /* min-width: 64px; */
}

.shiming-base .shiming-img {
  width: 80%;
  min-width: 200px;
  margin-bottom: 10%;
}

.shiming {
  text-align: start;
  align-items: center;
  padding-left: 10%;
  border-left: 5px solid #d20001;
  height: fit-content;
}

.shiming.mini {
  border-left: none;
  padding-left: 0;
  font-size: small;
}

.shiming h2 {
  border-bottom: 3px solid #d20001;
}

.jiyu {
  margin-top: 20px;
}

.yixing-content {
  text-align: start;
  text-decoration: none;
  font-size: 24px;
  text-indent: 48px;
  width: 80%;
  margin: auto;
}

.yixing-content.mini {
  font-size: 15px;
  text-indent: 30px;
}

.shenghuo {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;

  #img1,
  #img2,
  #img3 {
    // height: 300px;
    width: 60%;
    margin: auto;
  }
  .shenghuo-imgs {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: auto;
    width: 80%;
    img {
      width: 50%;
    }
  }
  .content {
    font-size: 20px;
  }
  &.mini .content {
    font-size: 15px;
  }
}

.shenghuo .content {
  font-size: 20px;
}
</style>
<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的故事</JHLabel>
  <JHCard type="large" title="我们的使命" :isTitle="true">
    <div class="shiming-base" :class="pageStore.pageType">
      <img
        class="shiming-img"
        src="https://img.lonesome.cn/jhwl/home/photo/index/shiming.webp"
        v-if="pageStore.pageType == 'normal'"
      />
      <div
        class="shiming-imgs"
        v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
      >
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming1.webp" />
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming2.webp" />
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming3.webp" />
        <img class="shiming-imgs-img" src="https://img.lonesome.cn/jhwl/home/photo/index/shiming4.webp" />
      </div>
      <div class="shiming" :class="pageStore.pageType">
        <h2>相关平台 | Related Platform</h2>
        精弘网络采用朝晖、屏峰、莫干山三个校区共同建制
        <br />目前运营和维护的平台包括但不仅限
        <br />浙江工业大学精弘网络微信服务号、
        <br />精小弘在线微信服务号、微精弘微信小程序、
        <br />邮件系统(https://mail.zjut.edu.cn/)、
        <br />浙工大精弘网络b站账号、精弘直播等。
      </div>
    </div>
  </JHCard>
  <JHCard type="large" title="精弘毅行" :isTitle="true">
    <CarouselPictures :imgs="yixingImgs"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageType">
      毅行，顾名思义，就是考验毅力的徒步活动。参与毅行活动并走完全程对很多人来讲都是一种挑战，但是有很多人也正是因为毅行的体验，才发觉自己也会有无限可能。
    </div>
    <div class="yixing-content" :class="pageStore.pageType">
      每年一度的"精弘毅行"始于2012年，是浙江工业大学的一次盛会，超过8000位师生校友从学校出发，徒步行走十公里或以上的路程后回到学校。“精弘毅行"鼓励工大学子暂离网络，走出宿舍，以最原始的徒步行走的方式亲近自然，感受青春的活力和朝气。因此，精弘毅行也是每届精弘人必要经历的一次挑战。
    </div>
  </JHCard>
  <JHCard type="large" title="网络育人" :isTitle="true">
    <CarouselPictures :imgs="yurenImgs"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageType">
      为深入贯彻落实习近平总书记在全国网络安全和信息化工作会议上的重要讲话精神、增强广大师生安全意识和网络素质、营造安全健康文明的网络环境，积极响应国家网络安全的号召，结合我校实际情况，于全校开展“网络安全宣传教育月”系列活动。由浙江工业大学精弘网络参与承办，通过技术分享会、线下游园活动，人物访谈和拍摄防范网络诈骗微电影等方式达到宣传网络安全知识的目的。
    </div>
  </JHCard>
  <JHCard type="large" title="生活社交" :isTitle="true">
    <div class="shenghuo" :class="pageStore.pageType">
      <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo1.webp" id="img1" />
      <div class="content">
        精弘还定期举行素质拓展，各种小游戏需要每一位成员的通力合作，在游戏中互相了解，感受精弘大家庭的温暖。
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo2.webp" id="img2" />
      <div class="content">
        在每年一度的年会上，精弘网络的每个部门都准备了具有特色的节目，既是对过去工作生活的总结，也是对来年生活的美好祝愿。
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo3.webp" id="img3" />
      <div class="shenghuo-imgs">
        <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo4.webp" id="img4" />
        <img src="https://img.lonesome.cn/jhwl/home/photo/story/shenghuo/shenghuo5.webp" id="img5" />
      </div>
      <div class="content">
        在各个部门内还有各式各样的轰趴活动，聚餐、唱K或是游西湖。在精弘，绝不是只有工作，还有数不清的快乐。
      </div>
    </div>
  </JHCard>

  <div class="jiyu">
    <JHLabel type="title">前辈寄语</JHLabel>
    <div class="jiyu-base" :class="pageStore.pageType">
      <CarouselCards :card="persons" :type="pageStore.pageType"></CarouselCards>
    </div>
    <div
      class="jiyu-base"
      :class="pageStore.pageType"
      v-if="pageStore.pageType != 'normal'"
    ></div>
  </div>

  <div style="height: 200px"></div>
  <JHButton type="middle" @click="toProduct">
    我们的产品
    <img
      src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
      style="width: 20px; margin-left: 20px"
    />
  </JHButton>
  <Footer />
</template>
