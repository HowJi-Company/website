const questionBank1 = [
  "巨大 - 微小",
  "快速 - 緩慢",
  "明亮 - 昏暗",
  "富裕 - 貧窮",
  "聰明 - 愚笨",
  "堅硬 - 柔軟",
  "高貴 - 卑賤",
  "寬廣 - 狹窄",
  "健康 - 疾病",
  "成功 - 失敗",
  "幸福 - 悲傷",
  "真實 - 虛假",
  "繁榮 - 蕭條",
  "開放 - 封閉",
  "堅定 - 動搖",
  "平和 - 激烈",
  "安靜 - 喧鬧",
  "有序 - 混亂",
  "堅強 - 脆弱",
  "勇敢 - 懦弱",
  "光滑 - 粗糙",
  "溫暖 - 寒冷",
  "平坦 - 崎嶇",
  "安全 - 危險",
  "豐富 - 貧乏",
  "明確 - 含糊",
  "充實 - 空虛",
  "理性 - 感性",
  "謙虛 - 驕傲",
  "自由 - 約束",
  "興奮 - 沉悶",
  "輕盈 - 笨重",
  "柔和 - 刺激",
  "樂觀 - 悲觀",
  "熟練 - 生疏",
  "完整 - 破碎",
  "充滿 - 空蕩",
  "欣賞 - 蔑視",
  "熱情 - 冷漠",
  "謹慎 - 冒失",
  "光明 - 黑暗",
  "生動 - 枯燥",
  "堅韌 - 軟弱",
  "開朗 - 陰鬱",
  "優雅 - 粗俗",
  "勤奮 - 懶惰",
  "可靠 - 可疑",
  "真誠 - 虛偽",
  "寬容 - 嚴苛",
  "井然 - 雜亂",
  "謹嚴 - 隨便",
  "豐盛 - 貧瘠",
  "流暢 - 阻塞",
  "精緻 - 粗糙",
  "光輝 - 黯淡",
  "欣慰 - 遺憾",
  "靈活 - 呆板",
  "敏捷 - 遲鈍",
  "節約 - 浪費",
  "冷靜 - 激動",
  "簡單 - 複雜",
  "謙遜 - 自滿",
  "細膩 - 粗略",
  "博學 - 無知",
  "寂靜 - 喧囂",
  "優秀 - 平庸",
  "淡泊 - 熱衷",
  "完美 - 缺陷",
  "感動 - 冷淡",
  "乾淨 - 骯髒",
  "規律 - 隨機",
  "集中 - 分散",
  "透明 - 模糊",
  "穩定 - 動盪",
  "強壯 - 虛弱",
  "安逸 - 勞苦",
  "平凡 - 卓越",
  "寧靜 - 吵雜",
  "充裕 - 匱乏",
  "整潔 - 凌亂",
  "高超 - 拙劣",
  "熱鬧 - 冷清",
  "真理 - 謬誤",
  "適應 - 抗拒",
  "堅固 - 鬆散",
  "興盛 - 衰敗",
  "順利 - 波折",
  "滿意 - 不滿",
  "通暢 - 阻礙",
  "流行 - 過時",
  "親近 - 疏遠",
  "清晰 - 朦朧",
  "平衡 - 失衡",
  "親切 - 冷酷",
  "輕鬆 - 緊張",
  "順服 - 反抗",
  "乾燥 - 潮濕",
  "平穩 - 顛簸",
  "熟悉 - 陌生",
  "細緻 - 粗枝",
  "恬淡 - 浮躁",
];

const questionBank2 = [
  "高瞻遠矚 - 鼠目寸光",
  "滄海桑田 - 白駒過隙",
  "不屈不撓 - 一蹶不振",
  "得天獨厚 - 先天不足",
  "精雕細琢 - 粗製濫造",
  "井然有序 - 雜亂無章",
  "趾高氣揚 - 垂頭喪氣",
  "不勝枚舉 - 寥寥無幾",
  "天朗氣清 - 風雨飄搖",
  "一箭雙鵰 - 徒勞無功",
  "胸有成竹 - 束手無策",
  "引人入勝 - 平淡無奇",
  "語重心長 - 漫不經心",
  "深思熟慮 - 草率行事",
  "慎終追遠 - 急功近利",
  "天花亂墜 - 實事求是",
  "滴水不漏 - 漏洞百出",
  "觸目驚心 - 司空見慣",
  "珠光寶氣 - 土里土氣",
  "一絲不苟 - 馬馬虎虎",
  "輕而易舉 - 千難萬險",
  "有口皆碑 - 劣跡斑斑",
  "近在咫尺 - 遠在天邊",
  "根深蒂固 - 淺嘗輒止",
  "生機勃勃 - 死氣沉沉",
  "不約而同 - 格格不入",
  "厚積薄發 - 急於求成",
  "正中下懷 - 適得其反",
  "神采奕奕 - 無精打采",
  "如火如荼 - 冷冷清清",
  "一脈相承 - 毫無關聯",
  "舉足輕重 - 無關緊要",
  "興高采烈 - 垂頭喪氣",
  "八面玲瓏 - 直來直往",
  "波瀾壯闊 - 死水微瀾",
  "步步為營 - 措手不及",
  "見義勇為 - 袖手旁觀",
  "游刃有餘 - 左支右絀",
  "如釋重負 - 如坐針氈",
  "錦上添花 - 雪上加霜",
  "鳳毛麟角 - 比比皆是",
  "一帆風順 - 屢遭挫折",
  "事半功倍 - 事倍功半",
  "畫龍點睛 - 畫蛇添足",
  "明察秋毫 - 粗心大意",
  "巧奪天工 - 平淡無奇",
  "微不足道 - 舉足輕重",
  "聞風喪膽 - 泰然自若",
  "甘之如飴 - 苦不堪言",
  "蒸蒸日上 - 每況愈下",
  "得心應手 - 力不從心",
  "聲名鵲起 - 默默無聞",
  "博聞強記 - 胸無點墨",
  "大刀闊斧 - 瞻前顧後",
  "一塵不染 - 烏煙瘴氣",
  "豪言壯語 - 唉聲嘆氣",
  "步履蹣跚 - 健步如飛",
  "指日可待 - 遙遙無期",
  "各抒己見 - 異口同聲",
  "異軍突起 - 一敗塗地",
  "不言而喻 - 毫無頭緒",
  "推波助瀾 - 雪上加霜",
  "臨危不懼 - 驚慌失措",
  "守口如瓶 - 滔滔不絕",
  "閉月羞花 - 奇醜無比",
  "扶搖直上 - 江河日下",
  "大有可為 - 前途渺茫",
  "耀武揚威 - 縮頭縮腦",
  "落地生根 - 無家可歸",
  "左右逢源 - 山窮水盡",
  "驚天動地 - 平淡無奇",
  "循循善誘 - 教條主義",
  "平易近人 - 盛氣凌人",
  "慷慨解囊 - 吝嗇成性",
  "循序漸進 - 急功近利",
  "孤掌難鳴 - 眾志成城",
  "事與願違 - 如願以償",
  "欲蓋彌彰 - 真相大白",
  "唾手可得 - 高不可攀",
  "兵不血刃 - 損兵折將",
  "百折不撓 - 半途而廢",
  "自強不息 - 自暴自棄",
  "甘拜下風 - 不服氣",
  "破釜沉舟 - 畏首畏尾",
  "雷厲風行 - 磨磨蹭蹭",
  "滿腹經綸 - 不學無術",
  "氣宇軒昂 - 畏首畏尾",
  "千軍萬馬 - 一盤散沙",
  "鍥而不捨 - 浮光掠影",
  "腳踏實地 - 異想天開",
  "夸父追日 - 自不量力",
  "有條不紊 - 雜亂無章",
  "大權在握 - 束手無策",
  "改過自新 - 重蹈覆轍",
  "銳不可當 - 弱不禁風",
  "旗開得勝 - 一敗塗地",
  "風馳電掣 - 慢條斯理",
  "人聲鼎沸 - 萬籟俱寂",
  "堅不可摧 - 不堪一擊",
  "百花齊放 - 枯木逢春",
  "一蹴而就 - 循序漸進",
  "白日做夢 - 實事求是",
  "忍辱負重 - 得意忘形",
  "畫餅充飢 - 豐衣足食",
  "名副其實 - 名不符實",
  "金碧輝煌 - 樸素無華",
  "苦盡甘來 - 樂極生悲",
  "臨危授命 - 退縮不前",
  "並駕齊驅 - 望塵莫及",
  "大膽創新 - 墨守成規",
  "掩耳盜鈴 - 光明正大",
  "一箭之遙 - 天差地遠",
  "天衣無縫 - 漏洞百出",
  "壯志凌雲 - 鬱鬱寡歡",
  "千載難逢 - 隨處可見",
];
