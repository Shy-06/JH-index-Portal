// 产品介绍内容
export const productsContent = {
  wechat: {
    title: "微信公众号",
    description: "浙江工业大学精弘网络微信公众号,提供结合精弘网络产品的实用功能,推出微精弘板块等系列服务,是工大学子学习生活的好帮手。",
    accounts: [
      {
        name: "浙江工业大学精弘网络",
        qrCode: `${useRuntimeConfig().public.cubeBaseURL}common/wechat_jhwl_qr.webp`
      },
      {
        name: "精小弘在线",
        qrCode: `${useRuntimeConfig().public.cubeBaseURL}common/wechat_jxhzx_qr.webp`
      }
    ]
  },

  wejh: {
    title: "微精弘",
    description: "微精弘是专属于zjuter的微信小程序,集课表、成绩查询、考试安排、空教室查询、一卡通、借阅、校车查询等功能于一身，是工大学子必不可少的一体化校园移动门户。",
    icon: `${useRuntimeConfig().public.cubeBaseURL}common/wejh_icon.webp`
  },

  visual: {
    title: "视觉影像",
    description: "校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑,致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!",
    follow: "欢迎关注!\nb站:浙工大精弘网络\n微信视频号:精小弘在线",
    icon: `${useRuntimeConfig().public.cubeBaseURL}common/bilibili_shipinhao.webp`
  },

  email: {
    title: "学生邮箱",
    description: "学校为每一位学生提供邮箱,由精弘网络提供运营服务,是你参与学校工作、学习、生活等各类活动的官方邮箱,伴随你的大学四年乃至一生,毕业后仍可享受校方的服务。",
    url: "mail.zjut.edu.cn",
    icon: `${useRuntimeConfig().public.cubeBaseURL}common/mailSystem.webp`
  }
};

export const productIcons = {
  wechat: `${useRuntimeConfig().public.cubeBaseURL}common/logo_red.webp`,//?
  wejh: `${useRuntimeConfig().public.cubeBaseURL}common/wejh_icon.webp`,
  visual: `${useRuntimeConfig().public.cubeBaseURL}common/visual.webp`,
  email: `${useRuntimeConfig().public.cubeBaseURL}common/mailSystem.webp`
};
