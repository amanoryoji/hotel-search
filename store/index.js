const axios = require('axios');

export const state = function(e) {
    return {
        url: process.env.baseUrl,
        pref: [
            {"no":"hokkaido","name":"\u5317\u6d77\u9053"},
            {"no":"aomori","name":"\u9752\u68ee\u770c"},
            {"no":"iwate","name":"\u5ca9\u624b\u770c"},
            {"no":"miyagi","name":"\u5bae\u57ce\u770c"},
            {"no":"akita","name":"\u79cb\u7530\u770c"},
            {"no":"yamagata","name":"\u5c71\u5f62\u770c"},
            {"no":"hukushima","name":"\u798f\u5cf6\u770c"}
        ],
        city: [
            {"no":"sapporo","name":"札幌","pref":"hokkaido"},
            {"no":"jozankei","name":"定山渓","pref":"hokkaido"},
            {"no":"wakkanai","name":"稚内・留萌・利尻・礼文","pref":"hokkaido"},
            {"no":"abashiri","name":"網走・紋別・北見・知床","pref":"hokkaido"},
            {"no":"kushiro","name":"釧路・阿寒・川湯・根室","pref":"hokkaido"},
            {"no":"obihiro","name":"帯広・十勝","pref":"hokkaido"},
            {"no":"hidaka","name":"日高・えりも","pref":"hokkaido"},
            {"no":"furano","name":"富良野・美瑛・トマム","pref":"hokkaido"},
            {"no":"asahikawa","name":"旭川・層雲峡・旭岳","pref":"hokkaido"},
            {"no":"chitose","name":"千歳・支笏・苫小牧・滝川・夕張・空知","pref":"hokkaido"},
            {"no":"otaru","name":"小樽・キロロ・積丹・余市","pref":"hokkaido"},
            {"no":"niseko","name":"ルスツ・ニセコ・倶知安","pref":"hokkaido"},
            {"no":"hakodate","name":"函館・湯の川・大沼・奥尻","pref":"hokkaido"},
            {"no":"noboribetsu","name":"洞爺・室蘭・登別","pref":"hokkaido"},

            {"no":"aomori","name":"青森・浅虫温泉","pref":"aomori"},
            {"no":"tsugaru","name":"津軽半島・五所川原","pref":"aomori"},
            {"no":"ntsugaru","name":"白神山地・西津軽","pref":"aomori"},
            {"no":"hirosaki","name":"弘前・黒石","pref":"aomori"},
            {"no":"towadako","name":"八甲田・十和田湖・奥入瀬","pref":"aomori"},
            {"no":"hachinohe","name":"八戸・三沢・七戸十和田","pref":"aomori"},
            {"no":"shimokita","name":"下北・大間・むつ","pref":"aomori"},

            {"no":"morioka","name":"盛岡","pref":"iwate"},
            {"no":"shizukuishi","name":"雫石","pref":"iwate"},
            {"no":"appi","name":"安比高原・八幡平・二戸","pref":"iwate"},
            {"no":"kuji","name":"宮古・久慈・岩泉","pref":"iwate"},
            {"no":"ofunato","name":"釜石・大船渡・陸前高田","pref":"iwate"},
            {"no":"kitakami","name":"北上・花巻・遠野","pref":"iwate"},
            {"no":"ichinoseki","name":"奥州・平泉・一関","pref":"iwate"},  

            {"no":"sendai","name":"仙台・多賀城・名取","pref":"miyagi"},
            {"no":"akiu","name":"秋保・作並","pref":"miyagi"},
            {"no":"naruko","name":"鳴子・古川・くりこま高原","pref":"miyagi"},
            {"no":"matsushima","name":"松島・塩釜・石巻・南三陸・気仙沼","pref":"miyagi"},
            {"no":"shiroishi","name":"白石・宮城蔵王","pref":"miyagi"},
            
            {"no":"akita","name":"秋田","pref":"akita"},
            {"no":"noshiro","name":"能代・男鹿・白神","pref":"akita"},
            {"no":"odate","name":"大館・鹿角・十和田大湯・八幡平","pref":"akita"},
            {"no":"tazawa","name":"角館・大曲・田沢湖","pref":"akita"},
            {"no":"yuzawa","name":"湯沢・横手","pref":"akita"},
            {"no":"honjo","name":"由利本荘・鳥海山","pref":"akita"},
            
            {"no":"yamagata","name":"山形・蔵王・天童・上山","pref":"yamagata"},
            {"no":"yonezawa","name":"米沢・赤湯・高畠・長井","pref":"yamagata"},
            {"no":"sagae","name":"寒河江・月山","pref":"yamagata"},
            {"no":"mogami","name":"尾花沢・新庄・村山","pref":"yamagata"},
            {"no":"shonai","name":"酒田・鶴岡・湯野浜・温海","pref":"yamagata"},
          
            {"no":"fukushima","name":"福島・二本松","pref":"hukushima"},
            {"no":"aizu","name":"会津若松・喜多方","pref":"hukushima"},
            {"no":"bandai","name":"猪苗代・表磐梯","pref":"hukushima"},
            {"no":"urabandai","name":"磐梯高原・裏磐梯","pref":"hukushima"},
            {"no":"koriyama","name":"郡山・磐梯熱海","pref":"hukushima"},
            {"no":"minami","name":"南会津・下郷・只見・檜枝岐","pref":"hukushima"},
            {"no":"nakadori","name":"白河・須賀川","pref":"hukushima"},
            {"no":"hamadori","name":"いわき・南相馬・相馬","pref":"hukushima"},
        ],
        detail: [
            {"no":"A","name":"札幌・新札幌・琴似","city":"sapporo",},
            {"no":"B","name":"大通公園・時計台・狸小路","city":"sapporo"},
            {"no":"C","name":"すすきの・中島公園","city":"sapporo"}
        ],
    }
}

export const mutations = {
    getData() {
        
    }
}

export const actions = {
    
}