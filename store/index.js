const axios = require('axios');

export const state = function(e) {
    return {
        url: process.env.baseUrl,
        pref: [
            {"no":"hokkaido","name":"北海道"},

            {"no":"aomori","name":"青森県"},
            {"no":"iwate","name":"岩手県"},
            {"no":"miyagi","name":"宮城県"},
            {"no":"akita","name":"秋田県"},
            {"no":"yamagata","name":"山形県"},
            {"no":"hukushima","name":"福島県"},

            {"no":"ibaragi","name":"茨城県"},
            {"no":"tochigi","name":"栃木県"},
            {"no":"gunma","name":"群馬県"},
            {"no":"saitama","name":"埼玉県"},
            {"no":"tiba","name":"千葉県"},
            {"no":"tokyo","name":"東京都"},
            {"no":"kanagawa","name":"神奈川県"},
            
            {"no":"niigata","name":"新潟県"},
            {"no":"yamanasi","name":"山梨県"},
            {"no":"nagano","name":"長野県"},
            
            {"no":"toyama","name":"富山県"},
            {"no":"ishikawa","name":"石川県"},
            {"no":"hukui","name":"福井県"},

            {"no":"gihu","name":"岐阜県"},
            {"no":"shizuoka","name":"静岡県"},
            {"no":"aichi","name":"愛知県"},
            {"no":"mie","name":"三重県"},

            {"no":"shiga","name":"滋賀県"},
            {"no":"kyoto","name":"京都府"},
            {"no":"osaka","name":"大阪府"},
            {"no":"hyogo","name":"兵庫県"},
            {"no":"nara","name":"奈良県"},
            {"no":"wakayama","name":"和歌山県"},

            {"no":"tottori","name":"鳥取県"},
            {"no":"simane","name":"島根県"},
            {"no":"okayama","name":"岡山県"},
            {"no":"hiroshima","name":"広島県"},
            {"no":"yamaguchi","name":"山口県"},

            {"no":"tokushima","name":"徳島県"},
            {"no":"kagawa","name":"香川県"},
            {"no":"ehime","name":"愛媛県"},
            {"no":"kouchi","name":"高知県"},

            {"no":"hukuoka","name":"福岡県"},
            {"no":"saga","name":"佐賀県"},
            {"no":"nagasaki","name":"長崎県"},
            {"no":"kumamoto","name":"熊本県"},
            {"no":"ooita","name":"大分県"},
            {"no":"miyazaki","name":"宮崎県"},
            {"no":"kagoshima","name":"鹿児島県"},
            
            {"no":"okinawa","name":"沖縄県"},
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

            {"no":"mito","name":"水戸・笠間","pref":"ibaragi"},
            {"no":"oarai","name":"大洗・ひたちなか","pref":"ibaragi"},
            {"no":"hitachi","name":"日立・北茨城・奥久慈","pref":"ibaragi"},
            {"no":"tsukuba","name":"つくば・土浦・取手","pref":"ibaragi"},
            {"no":"yuki","name":"古河・結城・筑西・常総","pref":"ibaragi"},
            {"no":"kashima","name":"鹿嶋・神栖・潮来・北浦","pref":"ibaragi"},
            
            {"no":"utsunomiya","name":"宇都宮・さくら","pref":"tochigi"},
            {"no":"nikko","name":"日光・中禅寺湖・奥日光・今市","pref":"tochigi"},
            {"no":"kinugawa","name":"鬼怒川・川治・湯西川・川俣","pref":"tochigi"},
            {"no":"nasu","name":"那須・板室・黒磯","pref":"tochigi"},
            {"no":"shiobara","name":"塩原・矢板・大田原・西那須野","pref":"tochigi"},
            {"no":"mashiko","name":"真岡・益子・茂木","pref":"tochigi"},
            {"no":"koyama","name":"小山・足利・佐野・栃木","pref":"tochigi"},

            {"no":"maebashi","name":"前橋・赤城","pref":"gunma"},
            {"no":"ikaho","name":"伊香保温泉・渋川","pref":"gunma"},
            {"no":"manza","name":"万座･嬬恋･北軽井沢","pref":"gunma"},
            {"no":"kusatsu","name":"草津温泉・白根","pref":"gunma"},
            {"no":"shimaonsen","name":"四万温泉","pref":"gunma"},
            {"no":"numata","name":"水上・猿ヶ京・沼田","pref":"gunma"},
            {"no":"oze","name":"尾瀬・丸沼","pref":"gunma"},
            {"no":"kiryu","name":"伊勢崎・太田・館林・桐生","pref":"gunma"},
            {"no":"takasaki","name":"高崎","pref":"gunma"},
            {"no":"fujioka","name":"富岡・藤岡・安中・磯部温泉","pref":"gunma"},

            {"no":"saitama","name":"大宮・浦和・川口・上尾","pref":"saitama"},
            {"no":"kasukabe","name":"草加・越谷・春日部・羽生","pref":"saitama"},
            {"no":"kumagaya","name":"熊谷・深谷・本庄","pref":"saitama"},
            {"no":"kawagoe","name":"川越・東松山・志木・和光","pref":"saitama"},
            {"no":"tokorozawa","name":"所沢・狭山・飯能","pref":"saitama"},
            {"no":"chichibu","name":"秩父・長瀞","pref":"saitama"},

            {"no":"chiba","name":"千葉","pref":"tiba"},
            {"no":"keiyo","name":"舞浜・浦安・船橋・幕張","pref":"tiba"},
            {"no":"kashiwa","name":"松戸・柏","pref":"tiba"},
            {"no":"narita","name":"成田空港・佐倉","pref":"tiba"},
            {"no":"choshi","name":"銚子・旭・九十九里・東金・茂原","pref":"tiba"},
            {"no":"sotobo","name":"鴨川・勝浦・御宿・養老渓谷","pref":"tiba"},
            {"no":"tateyama","name":"南房総・館山・白浜・千倉","pref":"tiba"},
            {"no":"uchibo","name":"市原・木更津・君津・富津・鋸南","pref":"tiba"},
            
            {"no":"tokyo","name":"東京２３区内","pref":"tokyo"},
            {"no":"nishi","name":"立川・八王子・町田・府中・吉祥寺","pref":"tokyo"},
            {"no":"okutama","name":"奥多摩・青梅・羽村","pref":"tokyo"},
            {"no":"ritou","name":"八丈島","pref":"tokyo"},
            {"no":"oshima","name":"大島","pref":"tokyo"},
            {"no":"kouzu","name":"神津島・新島・式根島","pref":"tokyo"},
            {"no":"miyake","name":"三宅島","pref":"tokyo"},
            {"no":"Ogasawara","name":"小笠原諸島","pref":"tokyo"},

            {"no":"yokohama","name":"横浜","pref":"kanagawa"},
            {"no":"kawasaki","name":"川崎","pref":"kanagawa"},
            {"no":"hakone","name":"箱根","pref":"kanagawa"},
            {"no":"odawara","name":"小田原","pref":"kanagawa"},
            {"no":"yugawara","name":"湯河原・真鶴","pref":"kanagawa"},
            {"no":"sagamiko","name":"相模湖・丹沢","pref":"kanagawa"},
            {"no":"sagamihara","name":"大和・相模原・町田西部","pref":"kanagawa"},
            {"no":"ebina","name":"厚木・海老名・伊勢原","pref":"kanagawa"},
            {"no":"shonan","name":"湘南・鎌倉・江ノ島・藤沢・平塚","pref":"kanagawa"},
            {"no":"miura","name":"横須賀・三浦","pref":"kanagawa"},
            
            {"no":"niigata","name":"新潟","pref":"niigata"},
            {"no":"kaetsu","name":"月岡・瀬波・咲花","pref":"niigata"},
            {"no":"kita","name":"長岡・燕三条・柏崎・弥彦・岩室・寺泊","pref":"niigata"},
            {"no":"minami","name":"魚沼・十日町・津南・六日町・大湯","pref":"niigata"},
            {"no":"yuzawa","name":"越後湯沢・苗場","pref":"niigata"},
            {"no":"joetsu","name":"上越・糸魚川・妙高","pref":"niigata"},
            {"no":"sado","name":"佐渡","pref":"niigata"},

            {"no":"kofu","name":"甲府・湯村・昇仙峡","pref":"yamanasi"},
            {"no":"yamanashi","name":"山梨・石和・勝沼・塩山","pref":"yamanasi"},
            {"no":"otsuki","name":"大月・都留・道志渓谷","pref":"yamanasi"},
            {"no":"yamanakako","name":"山中湖・忍野","pref":"yamanasi"},
            {"no":"kawaguchiko","name":"河口湖・富士吉田・本栖湖・西湖・精進湖","pref":"yamanasi"},
            {"no":"minobu","name":"下部・身延・早川","pref":"yamanasi"},
            {"no":"nirasaki","name":"韮崎・南アルプス","pref":"yamanasi"},
            {"no":"kiyosato","name":"八ヶ岳・小淵沢・清里・大泉","pref":"yamanasi"},

            {"no":"nagano","name":"長野・小布施・信州高山・戸隠・飯綱","pref":"nagano"},
            {"no":"madara","name":"斑尾・飯山・信濃町・野尻湖・黒姫","pref":"nagano"},
            {"no":"nozawa","name":"野沢温泉・木島平・秋山郷","pref":"nagano"},
            {"no":"shiga","name":"志賀高原･湯田中･渋","pref":"nagano"},
            {"no":"ueda","name":"上田・別所・鹿教湯","pref":"nagano"},
            {"no":"chikuma","name":"戸倉上山田・千曲","pref":"nagano"},
            {"no":"sugadaira","name":"菅平・峰の原","pref":"nagano"},
            {"no":"karui","name":"軽井沢・佐久･小諸","pref":"nagano"},
            {"no":"","name":"八ヶ岳・野辺山・富士見・原村","pref":"nagano"},
            {"no":"kirigamine","name":"蓼科・白樺湖・霧ヶ峰・車山","pref":"nagano"},
            {"no":"suwa","name":"諏訪湖","pref":"nagano"},
            {"no":"ina","name":"伊那・駒ヶ根・飯田・昼神","pref":"nagano"},
            {"no":"kiso","name":"木曽","pref":"nagano"},
            {"no":"matsumo","name":"松本・塩尻・浅間温泉・美ヶ原温泉","pref":"nagano"},
            {"no":"kamiko","name":"上高地・乗鞍・白骨","pref":"nagano"},
            {"no":"hotaka","name":"安曇野・穂高・大町・豊科","pref":"nagano"},
            {"no":"hakuba","name":"白馬・八方尾根・栂池高原・小谷","pref":"nagano"},

            {"no":"toyama","name":"富山・八尾・立山","pref":"toyama"},
            {"no":"goto","name":"滑川・魚津・朝日・黒部・宇奈月","pref":"toyama"},
            {"no":"gosei","name":"高岡・氷見・砺波","pref":"toyama"},

            {"no":"kanazawa","name":"金沢","pref":"ishikawa"},
            {"no":"kaga","name":"加賀・小松・辰口","pref":"ishikawa"},
            {"no":"noto","name":"能登・輪島・珠洲","pref":"ishikawa"},
            {"no":"nanao","name":"七尾・和倉・羽咋","pref":"ishikawa"},

            {"no":"hukui","name":"福井","pref":"hukui"},
            {"no":"awara","name":"あわら・三国","pref":"hukui"},
            {"no":"katsuyama","name":"永平寺・勝山・大野","pref":"hukui"},
            {"no":"echizen","name":"越前・鯖江・武生","pref":"hukui"},
            {"no":"tsuruga","name":"敦賀・美浜","pref":"hukui"},
            {"no":"obama","name":"若狭・小浜・高浜","pref":"hukui"},

            {"no":"gifu","name":"岐阜・各務原","pref":"gifu"},
            {"no":"kamitakara","name":"奥飛騨・新穂高","pref":"gifu"},
            {"no":"takayama","name":"高山・飛騨","pref":"gifu"},
            {"no":"gero","name":"下呂温泉・濁河温泉","pref":"gifu"},
            {"no":"tajimi","name":"中津川・多治見・恵那・美濃加茂","pref":"gifu"},
            {"no":"gujo","name":"郡上八幡・関・美濃","pref":"gifu"},
            {"no":"shirakawago","name":"白川郷","pref":"gifu"},
            {"no":"ogaki","name":"大垣・岐阜羽島","pref":"gifu"},

            {"no":"shizuoka","name":"静岡・清水","pref":"shizuoka"},
            {"no":"atami","name":"熱海","pref":"shizuoka"},
            {"no":"ito","name":"伊東","pref":"shizuoka"},
            {"no":"izukogen","name":"伊豆高原","pref":"shizuoka"},
            {"no":"higashi","name":"東伊豆・河津","pref":"shizuoka"},
            {"no":"shimoda","name":"下田・南伊豆","pref":"shizuoka"},
            {"no":"nishi","name":"西伊豆・戸田・土肥・堂ヶ島","pref":"shizuoka"},
            {"no":"naka","name":"伊豆長岡・修善寺・天城湯ヶ島","pref":"shizuoka"},
            {"no":"fuji","name":"富士・富士宮","pref":"shizuoka"},
            {"no":"numazu","name":"御殿場・沼津・三島","pref":"shizuoka"},
            {"no":"yaizu","name":"焼津・藤枝・御前崎・寸又峡","pref":"shizuoka"},
            {"no":"hamamatsu","name":"浜松・浜名湖・天竜","pref":"shizuoka"},
            {"no":"kikugawa","name":"掛川・袋井・磐田","pref":"shizuoka"},

            {"no":"nagoyashi","name":"名古屋","pref":"aichi"},
            {"no":"mikawawan","name":"豊橋・豊川・蒲郡・伊良湖","pref":"aichi"},
            {"no":"okumikawa","name":"奥三河・新城・湯谷温泉","pref":"aichi"},
            {"no":"mikawa","name":"豊田・刈谷・知立・安城・岡崎","pref":"aichi"},
            {"no":"owari","name":"一宮・犬山・小牧・瀬戸・春日井","pref":"aichi"},
            {"no":"chita","name":"セントレア・東海・半田・知多","pref":"aichi"},
            {"no":"minamichita","name":"南知多・日間賀島・篠島","pref":"aichi"},
            
            {"no":"tsu","name":"津･鈴鹿･亀山","pref":"mie"},
            {"no":"yunoyama","name":"四日市・桑名・湯の山・長島温泉","pref":"mie"},
            {"no":"iga","name":"伊賀・名張","pref":"mie"},
            {"no":"matsusaka","name":"松阪","pref":"mie"},
            {"no":"ise","name":"伊勢・二見","pref":"mie"},
            {"no":"toba","name":"鳥羽","pref":"mie"},
            {"no":"shima","name":"志摩・賢島","pref":"mie"},
            {"no":"kumano","name":"熊野・尾鷲・紀北","pref":"mie"},

            {"no":"ootsu","name":"大津・雄琴・草津・栗東","pref":"shiga"},
            {"no":"kosei","name":"湖西・高島・マキノ","pref":"shiga"},
            {"no":"kohoku","name":"長浜・米原","pref":"shiga"},
            {"no":"kotou","name":"彦根・近江八幡・守山・東近江","pref":"shiga"},
            {"no":"shigaraki","name":"信楽・甲賀","pref":"shiga"},

            {"no":"shi","name":"京都","pref":"kyoto"},
            {"no":"nannbu","name":"宇治・長岡京","pref":"kyoto"},
            {"no":"yunohana","name":"亀岡・湯の花・美山・京丹波","pref":"kyoto"},
            {"no":"fukuchiyama","name":"福知山・綾部","pref":"kyoto"},
            {"no":"hokubu","name":"丹後・久美浜","pref":"kyoto"},
            {"no":"miyazu","name":"天橋立・宮津・舞鶴","pref":"kyoto"},

            {"no":"shi","name":"大阪","pref":"osaka"},
            {"no":"hokubu","name":"高槻・茨木・箕面・伊丹空港","pref":"osaka"},
            {"no":"toubu","name":"枚方・守口・東大阪","pref":"osaka"},
            {"no":"nantou","name":"八尾・藤井寺・河内長野","pref":"osaka"},
            {"no":"nanbu","name":"堺・岸和田・関空・泉佐野","pref":"osaka"},

            {"no":"kobe","name":"神戸・有馬温泉・六甲山","pref":"hyogo"},
            {"no":"nantou","name":"宝塚・西宮・甲子園・三田・篠山","pref":"hyogo"},
            {"no":"minamichu","name":"明石・加古川・三木","pref":"hyogo"},
            {"no":"nannansei","name":"姫路・相生・赤穂","pref":"hyogo"},
            {"no":"chubu","name":"和田山・竹田城・ハチ高原","pref":"hyogo"},
            {"no":"kita","name":"城崎温泉・豊岡・出石・神鍋","pref":"hyogo"},
            {"no":"kasumi","name":"香住・浜坂・湯村","pref":"hyogo"},
            {"no":"awaji","name":"淡路島","pref":"hyogo"},

            {"no":"nara","name":"奈良・大和高原","pref":"nara"},
            {"no":"hokubu","name":"橿原・大和郡山・天理・生駒","pref":"nara"},
            {"no":"nanbu","name":"吉野・十津川・天川・五條","pref":"nara"},

            {"no":"wakayama","name":"和歌山・加太・和歌浦","pref":"wakayama"},
            {"no":"Kihoku","name":"高野山・橋本","pref":"wakayama"},
            {"no":"gobo","name":"御坊・有田・海南・日高","pref":"wakayama"},
            {"no":"shirahama","name":"南紀白浜・紀伊田辺・龍神","pref":"wakayama"},
            {"no":"Katsuura","name":"勝浦・串本・すさみ","pref":"wakayama"},
            {"no":"hongu","name":"熊野古道・新宮・本宮・中辺路","pref":"wakayama"},

            {"no":"tottori","name":"鳥取・岩美・浜村","pref":"tottori"},
            {"no":"chubu","name":"倉吉・三朝温泉","pref":"tottori"},
            {"no":"seibu","name":"米子・皆生温泉・大山","pref":"tottori"},

            {"no":"matsue","name":"松江・玉造・安来・奥出雲","pref":"simane"},
            {"no":"toubu","name":"出雲・大田・石見銀山","pref":"simane"},
            {"no":"masuda","name":"津和野・益田・浜田・江津","pref":"simane"},
            {"no":"ritou","name":"隠岐諸島","pref":"simane"},

            {"no":"okayama","name":"岡山","pref":"okayama"},
            {"no":"bizen","name":"牛窓・瀬戸内・備前","pref":"okayama"},
            {"no":"tsuyama","name":"津山・湯郷・美作・奥津","pref":"okayama"},
            {"no":"niimi","name":"湯原・蒜山・新見・高梁","pref":"okayama"},
            {"no":"kurashiki","name":"倉敷・総社・玉野・笠岡","pref":"okayama"},

            {"no":"hiroshima","name":"広島","pref":"hiroshima"},
            {"no":"higashihiroshima","name":"東広島・竹原・三原・広島空港","pref":"hiroshima"},
            {"no":"fukuyama","name":"福山・尾道・しまなみ海道","pref":"hiroshima"},
            {"no":"kure","name":"呉・江田島","pref":"hiroshima"},
            {"no":"shohara","name":"三次・庄原・帝釈峡","pref":"hiroshima"},
            {"no":"sandankyo","name":"三段峡・芸北・北広島","pref":"hiroshima"},
            {"no":"miyajima","name":"宮島・宮浜温泉・廿日市","pref":"hiroshima"},

            {"no":"yamaguchi","name":"山口・湯田温泉・防府","pref":"yamaguchi"},
            {"no":"shimonoseki","name":"下関・宇部","pref":"yamaguchi"},
            {"no":"iwakuni","name":"岩国・周南・柳井","pref":"yamaguchi"},
            {"no":"hagi","name":"萩・長門・秋吉台","pref":"yamaguchi"},
            
            {"no":"tokushima","name":"徳島・鳴門","pref":"tokushima"},
            {"no":"hokubu","name":"大歩危・祖谷・剣山・吉野川","pref":"tokushima"},
            {"no":"nanbu","name":"阿南・日和佐・宍喰","pref":"tokushima"},
            
            {"no":"takamatsu","name":"高松・さぬき・東かがわ","pref":"kagawa"},
            {"no":"sakaide","name":"坂出・宇多津・丸亀","pref":"kagawa"},
            {"no":"kotohira","name":"琴平・観音寺","pref":"kagawa"},
            {"no":"ritou","name":"小豆島・直島","pref":"kagawa"},

            {"no":"chuuyo","name":"松山・道後","pref":"ehime"},
            {"no":"touyo","name":"今治・しまなみ海道","pref":"ehime"},
            {"no":"saijo","name":"西条・新居浜・四国中央","pref":"ehime"},
            {"no":"nanyo","name":"宇和島・八幡浜","pref":"ehime"},

            {"no":"kouchi","name":"高知・南国・香南・伊野","pref":"kouchi"},
            {"no":"toubu","name":"安芸・室戸","pref":"kouchi"},
            {"no":"seibu","name":"足摺・四万十・宿毛・須崎","pref":"kouchi"},

            {"no":"fukuoka","name":"博多・キャナルシティ・海の中道・太宰府・二日市","pref":"hukuoka"},
            {"no":"seibu","name":"天神・中洲・薬院・福岡ドーム・糸島","pref":"hukuoka"},
            {"no":"kitakyusyu","name":"北九州","pref":"hukuoka"},
            {"no":"chikuzen","name":"宗像・宮若・飯塚","pref":"hukuoka"},
            {"no":"kurume","name":"久留米・甘木・原鶴温泉・筑後川温泉","pref":"hukuoka"},
            {"no":"buzen","name":"北九州空港・苅田・行橋・豊前","pref":"hukuoka"},
            {"no":"chikugo","name":"大牟田・柳川・八女・筑後","pref":"hukuoka"},

            {"no":"saga","name":"佐賀・古湯温泉","pref":"saga"},
            {"no":"tosu","name":"鳥栖","pref":"saga"},
            {"no":"ureshino","name":"嬉野・武雄・伊万里・有田・太良","pref":"saga"},
            {"no":"karatsu","name":"唐津・呼子","pref":"saga"},

            {"no":"nagasaki","name":"長崎","pref":"nagasaki"},
            {"no":"unzen","name":"雲仙・島原・小浜","pref":"nagasaki"},
            {"no":"airport","name":"諫早・大村・長崎空港","pref":"nagasaki"},
            {"no":"sasebo","name":"ハウステンボス・佐世保・平戸","pref":"nagasaki"},
            {"no":"ritou","name":"五島列島","pref":"nagasaki"},
            {"no":"tsushima","name":"対馬","pref":"nagasaki"},
            {"no":"iki","name":"壱岐島","pref":"nagasaki"},

            {"no":"kumamoto","name":"熊本","pref":"kumamoto"},
            {"no":"kikuchi","name":"大津・玉名・山鹿・荒尾・菊池","pref":"kumamoto"},
            {"no":"aso","name":"阿蘇","pref":"kumamoto"},
            {"no":"yatsushiro","name":"宇土・八代・水俣","pref":"kumamoto"},
            {"no":"kuma","name":"人吉・球磨","pref":"kumamoto"},
            {"no":"amakusa","name":"天草･本渡","pref":"kumamoto"},
            {"no":"kurokawa","name":"黒川温泉・杖立","pref":"kumamoto"},

            {"no":"oita","name":"大分","pref":"ooita"},
            {"no":"beppu","name":"別府・日出","pref":"ooita"},
            {"no":"usuki","name":"佐伯・臼杵・豊後大野","pref":"ooita"},
            {"no":"yufuin","name":"湯布院・湯平","pref":"ooita"},
            {"no":"taketa","name":"久住・竹田","pref":"ooita"},
            {"no":"hita","name":"九重・日田・天瀬","pref":"ooita"},
            {"no":"kunisaki","name":"国東・中津・宇佐・耶馬渓","pref":"ooita"},

            {"no":"miyazaki","name":"宮崎","pref":"miyazaki"},
            {"no":"hokubu","name":"高千穂・延岡・日向・高鍋","pref":"miyazaki"},
            {"no":"nanbu","name":"都城・えびの・日南・綾","pref":"miyazaki"},

            {"no":"kagoshima","name":"鹿児島・桜島","pref":"kagoshima"},
            {"no":"oosumi","name":"霧島・国分・鹿児島空港","pref":"kagoshima"},
            {"no":"kanoya","name":"鹿屋・垂水・志布志","pref":"kagoshima"},
            {"no":"hokusatsu","name":"川内・出水","pref":"kagoshima"},
            {"no":"nansatsu","name":"指宿・枕崎・南さつま","pref":"kagoshima"},
            {"no":"yakushima","name":"屋久島","pref":"kagoshima"},
            {"no":"ritou","name":"種子島","pref":"kagoshima"},
            {"no":"amami","name":"奄美大島･喜界島・徳之島","pref":"kagoshima"},
            {"no":"okinoerabu","name":"沖永良部島・与論島","pref":"kagoshima"},

            {"no":"nahashi","name":"那覇","pref":"okinawa"},
            {"no":"hokubu","name":"恩納・名護・本部・今帰仁","pref":"okinawa"},
            {"no":"chubu","name":"宜野湾・北谷・読谷・沖縄市・うるま","pref":"okinawa"},
            {"no":"nanbu","name":"糸満・豊見城・南城","pref":"okinawa"},
            {"no":"kerama","name":"慶良間・渡嘉敷・座間味・阿嘉","pref":"okinawa"},
            {"no":"kumejima","name":"久米島","pref":"okinawa"},
            {"no":"Miyako","name":"宮古島・伊良部島","pref":"okinawa"},
            {"no":"ritou","name":"石垣・西表・小浜島","pref":"okinawa"},
            {"no":"yonaguni ","name":"与那国島","pref":"okinawa"},
            {"no":"daito","name":"大東島","pref":"okinawa"},
        ],
        detail: [
            {"no":"A","name":"札幌・新札幌・琴似","city":"sapporo",'pref':'hokkaido'},
            {"no":"B","name":"大通公園・時計台・狸小路","city":"sapporo",'pref':'hokkaido'},
            {"no":"C","name":"すすきの・中島公園","city":"sapporo",'pref':'hokkaido'},
            
            {"no":"A","name":"東京駅・銀座・秋葉原・東陽町・葛西","city":"tokyo",'pref':'tokyo'},
            {"no":"B","name":"新橋・汐留・浜松町・お台場","city":"tokyo",'pref':'tokyo'},
            {"no":"C","name":"赤坂・六本木・霞ヶ関・永田町","city":"tokyo",'pref':'tokyo'},
            {"no":"D","name":"渋谷・恵比寿・目黒・二子玉川","city":"tokyo",'pref':'tokyo'},
            {"no":"E","name":"品川・大井町・蒲田・羽田空港","city":"tokyo",'pref':'tokyo'},
            {"no":"F","name":"新宿・中野・荻窪・四谷","city":"tokyo",'pref':'tokyo'},
            {"no":"G","name":"池袋・赤羽・巣鴨・大塚","city":"tokyo",'pref':'tokyo'},
            {"no":"H","name":"東京ドーム・飯田橋・御茶ノ水","city":"tokyo",'pref':'tokyo'},
            {"no":"I","name":"上野・浅草・錦糸町・新小岩・北千住","city":"tokyo",'pref':'tokyo'},

            {"no":"A","name":"名古屋駅・伏見・丸の内","city":"nagoyashi",'pref':'aichi'},
            {"no":"B","name":"栄・錦・名古屋城","city":"nagoyashi",'pref':'aichi'},
            {"no":"C","name":"金山・熱田・千種・ナゴヤドーム","city":"nagoyashi",'pref':'aichi'},

            {"no":"D","name":"京都駅","city":"shi",'pref':'kyoto'},
            {"no":"A","name":"嵐山・嵯峨野・太秦・高雄","city":"shi",'pref':'kyoto'},
            {"no":"B","name":"河原町・四条烏丸・二条城・御所","city":"shi",'pref':'kyoto'},
            {"no":"C","name":"祇園・東山・北白川","city":"shi",'pref':'kyoto'},
            {"no":"E","name":"大原・鞍馬・貴船","city":"shi",'pref':'kyoto'},

            {"no":"A","name":"新大阪・江坂","city":"shi",'pref':'osaka'},
            {"no":"B","name":"大阪駅・梅田・ユニバーサルシティ・尼崎","city":"shi",'pref':'osaka'},
            {"no":"C","name":"京橋・淀屋橋・本町・ベイエリア・弁天町","city":"shi",'pref':'osaka'},
            {"no":"D","name":"なんば・心斎橋・天王寺・阿倍野・長居","city":"shi",'pref':'osaka'},
            
        ],
        user: {
            email: "",
            password: "",
            login: false
        }
    }
}

export const mutations = {
    signOut(state) {
        state.user.email = "";
        state.user.password = "";
        state.user.login = false;
    },
    getData(state, payload) {
        state.user.email = payload.email;
        state.user.password = payload.password;
    },
    yesLogin(state) {
        state.user.login = true;
    },
    noLogin(state) {
        state.user.login = false;
    },
    signOut(state) {
        state.user.email = "";
        state.user.password = "";
        state.user.login = false;
    }
}

export const actions = {
    confirmLogin({ commit }) {
        this.$auth.onAuthStateChanged(function (user) {
            if (user) {
                commit("getData", { email: user.email, password: user.password });
                commit("yesLogin");
            } else {
                commit("noLogin");
            }
        });
    }
}