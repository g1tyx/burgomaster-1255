/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Load game': '加载游戏',
    'Export Game': '导出',
    'Import Game': '导入',
    'Autosave': '自动保存',
    'Back': '返回',
    'Building': '建筑',
    'Buy selected': '购买选择',
    'Change color mode': '改变颜色模式',
    'ChangeColorMode': '改变颜色模式',
    'City': '城市',
    'Deutsch': '德语',
    'Dismiss hero': '解雇英雄',
    '1255 Burgomaster': '市长1255',
    'Launch autocampaign!': '启动自动战役!',
    'Later': '晚些时候',
    'Knight': '骑士',
    'How to play': '玩法',
    'How To Play': '玩法',
    'Hiring troops': '雇佣军队',
    'Hiring and managing troops': '雇佣和管理部队',
    'Hiring a guard will cost you 20 gold.': '雇佣一名警卫需要20黄金。',
    'Hire turkopol': '雇佣图尔科波尔',
    'Hire sergeant': '雇佣军士',
    'Hire knight': '雇佣骑士',
    'Hire hero': '雇佣英雄',
    'Hero\'s purse': '英雄的钱包',
    'Gold history tab': '黄金历史记录选项卡',
    'Go to the adventure map': '前往冒险地图',
    'Go to exploring!': '去探索！',
    'Garrison': '驻军',
    'Français': '法语',
    'Fire': '着火',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Download game for playing off-grid (to play without Internet connection': '下载游戏离线玩(在没有互联网连接的情况下玩)',
    'Each guard requires regular payment (each tick), it also costs 10 gold.': '每个守卫需要定期付费(每个周期)，它也需要10黄金。',
    'Each lvl of Houses allows you to have more population.': '每一层的房子可以让你拥有更多的人口。',
    'Each lvl of the treasury allows you to store more gold.': '每一级的国库可以让你储存更多的黄金。',
    'Earlier': '早些时候',
    'Effects on action required events': '对行动所需的事件的影响',
    'Effects on all events': '对所有事件的影响',
    'English': '英语',
    'Esperanto': '世界语',
    'Event log size': '事件日志大小',
    'Execute somebody': '处决某人',
    'Execute smb': '处决某人',
    'Executing any townsperson will add his property as confiscated gold.': '处决任何市民都会把他的财产加为没收的黄金。',
    'Fire brigade': '消防队',
    'fire in the city!': '城市着火了!',
    'Fountains will increase happiness and speed of population growth': '喷泉将增加人口的幸福感和增长速度',
    'Gallows will decrease population, increase taxes, and allow you to execute townsfolk.': '绞刑架将减少人口，增加税收，并允许你处决城镇居民。',
    'Lore and scenery music': '传说与风景音乐',
    'Lore and script music': '传说和剧本音乐',
    'CSL means that the author doesn\'t provide any help or answers asked in the CSL,': 'CSL是指作者在CSL中不提供任何帮助或答案，',
    'Community Supported Languages(CSL): German (Deutsch), Esperanto, French (le français).': '社区支持的语言(CSL):德语(Deutsch)、世界语(Esperanto)、法语(le français)。',
    'Also, Treasury allows you to hire treasury guards.': '同时，国库允许你雇佣国库守卫。',
    'Also, any CSL translation could have mistakes or untranslated parts': '此外，任何CSL翻译都可能有错误或未翻译的部分',
    'All sound effects': '所有音效',
    'All music': '所有音乐',
    'After each clock turn your population is paying taxes to you and growing.': '每过一个赛季，你的人口都在向你交税，而且还在增长。',
    'You can build Fountain OR Gallows. You cannot change your choice after building is done.': '你可以建造喷泉或绞刑架。在建造完成后，您不能更改您的选择。',
    'You could help with translations for the game here': '你可以在这里帮助翻译游戏',
    'You need to build Homes to continue growth of your city population.': '你需要建造房屋来维持城市人口的增长。',
    'You need to build a Treasury to store your gold.': '你需要建立一个宝库来储存你的黄金。',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Build ": "建造",
    "Def.: ": "防御: ",
    "HP: ": "生命值: ",
    "Dmg: ": "伤害: ",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    " of fire extinguished": " 的火被扑灭",
    "population is increased": "人口增加了",
    "amount of money is increased": "金额数量增加了",
    "Your task is simple - manage the city as mayor of the city!": "您的任务很简单-以城市市长的身份管理城市！",
    "Hello player in this incremental game!": "你好，这个增量游戏的玩家!",
    "Citizen will pay taxes each season (30 secs) and population will grow each season": "公民将在每个赛季(30秒)纳税，人口将在每个赛季增长",
    " gold": " 黄金",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^\s*$/, //纯空格
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);