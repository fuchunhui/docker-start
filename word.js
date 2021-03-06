/**
 * @file 数据源来自于百度输入法--颜文字
 */

const faces = [
  '(*^ω^*)',
  '(^_^)',
  '(´▽`ʃƪ)',
  '(´⌣`ʃƪ)',
  '٩(●˙▿˙●)۶…⋆ฺ',
  '٩(๑ơలơ)۶♡',
  '＼(☆o☆)／',
  '(o^^o)♪',
  '•ू(ᵒ̴̶̷ωᵒ̴̶̷*•ू) ​ )੭ु⁾',
  '(٭°̧̧̧ω°̧̧̧٭)',
  '(｡･ω･｡)',
  '(*^_^*)',
  '˚‧*♡ॢ˃̶̤̀◡˂̶̤́♡ॢ*‧˚',
  '⸜(ّᶿധّᶿ)⸝',
  '(^-^)',
  '(*ﾟ∀ﾟ*)',
  '(*^o^*)',
  '(´O｀)',
  '(*^▽^*)',
  '(o^^o)',
  '(─‿─)',
  '(￣▽+￣*)',
  '(⁎⚈᷀᷁ᴗ⚈᷀᷁⁎)',
  '(~‾⌣‾)~',
  '~(‾⌣‾~)',
  '┌(˘⌣˘)ʃ',
  'ƪ(˘⌣˘)ʃ',
  '(✌ﾟ∀ﾟ)☞',
  '(❁´‿`❁)*✲ﾟ*',
  '(ﾉ´ヮ´)ﾉ*:･ﾟ✧',
  '꒪̆౪̮꒪̆',
  '♪(๑ᴖ◡ᴖ๑)♪',
  '(•ؔʶ̷ ˡ̲̮ ؔʶ̷)✧',
  '(๑^ں^๑)',
  '*.⋆( ˘̴͈́ ॢ꒵ॢ ˘̴͈̀ )⋆.*',
  '´͈ ᵕ `͈',
  '(๑•͈ᴗ•͈)',
  '〜(￣▽￣〜)',
  '(〜￣▽￣)〜',
  '(•‿•)',
  '(❁´▽`❁)*✲ﾟ*',
  '(▰˘◡˘▰)',
  '(ღ˘⌣˘ღ)',
  '~(˘▾˘)~',
  '≖‿≖',
  '(｡◝‿◜｡)',
  '୧(﹒︠ᴗ﹒︡)୨',
  '‧⁺◟( ᵒ̴̶̷̥́ ·̫ ᵒ̴̶̷̣̥̀ )',
  '(´∇ﾉ｀*)ノ',
  '(¬‿¬)',
  '(•̀ᴗ•́)و ̑̑',
  '(◍•ᴗ•◍)❤',
  '(•ˇ‿ˇ•)-→',
  '´･ᴗ･`',
  '°˖✧◝(⁰▿⁰)◜✧˖°',
  '୧( ॑ധ ॑)୨',
  'd=(´▽｀)=b',
  'ƪ(˘⌣˘)┐',
  'ʘ‿ʘ',
  '(。≖ˇ∀ˇ≖。)',
  '(*´꒳`*)',
  '✾꒡ .̮ ꒡✾',
  '(•⚗৺⚗•)',
  '⸂⸂⸜(രᴗര๑)⸝⸃⸃',
  '(ؑᵒᵕؑ̇ᵒ)◞✧',
  '(⚈᷁‿᷇⚈᷁)',
  '٩̋(๑˃́ꇴ˂̀๑)',
  '(ﾉ･ｪ･)ﾉ',
  '٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ',
  '∗˚(* ˃̤൬˂̤ *)˚∗',
  '٩(ó｡ò۶ ♡)))♬',
  '⸍⚙̥ꇴ⚙̥⸌',
  'ヾ(。◕ฺ∀◕ฺ)ノ',
  '˚₊*(ˊॢo̶̶̷̤◡ुo̴̶̷̤ˋॢ)*₊˚⁎',
  '␟␏(ɲ˃ ˈ̫̮ ˂ɳ)␟␏ෆ',
  '⁺✧.(˃̶ ॣ⌣ ॣ˂̶∗̀)ɞ⁾',
  '(^.^)',
  '(^O^)',
  '(^0^)/',
  '!(^^)!',
  '(*´∀｀*)',
  '(*^◯^*)',
  '(#^.^#)',
  '(☆∀☆)',
  '(⌒▽⌒)',
  '(´∇｀)',
  '(*´∀｀)',
  'ヽ(´▽｀)/',
  '(・∀・)',
  '(-^〇^-)',
  'o(^o^)o',
  '(´ｰ｀)',
  '( ﾟ∀ ﾟ)',
  '!(^O^)y',
  '(｀∀´)',
  '(￣∀￣)',
  '(ﾟ∀ﾟ)',
  '(*^^*)',
  '(o・・o)/',
  '(^_^)ノ',
  '(*´・ｖ・)',
  '(^・ω・^ )',
  '(★^O^★)',
  '＼(^▽^＠)ノ',
  'ヾ(@^▽^@)ノ',
  'ლ(⌒▽⌒ლ)',
  '〜(^∇^〜）',
  '｡^‿^｡',
  '(-‿◦☀)',
  '（〜^∇^)〜',
  '(((o(*ﾟ▽ﾟ*)o)))',
  '(*‿*✿)',
  '(*⌒∇⌒*)',
  '(/^▽^)/',
  '(´ヮ`)',
  '(゜▽゜;)',
  '(●´∀｀●)',
  '(◑‿◐)',
  '(n˘v˘•)¬',
  '*(*´∀｀*)☆',
  '＼(^ω^＼)',
  '^ ͜• ^',
  '∩(︶▽︶)∩',
  '♫꒰･‿･๑꒱',
  'ヽ(;^o^ヽ)',
  'ヽ(*・ω・)ﾉ',
  '٩(^ᴗ^)۶',
  'o (^‿^✿)',
  'ｏ（Ｕ・ω・）⊃',
  'ヘ(^_^ヘ)',
  '(◕‿◕✿)',
  '(๑✧◡✧๑)',
  'ȏ.̮ȏ',
  '∩˙▿˙∩',
  '´͈ ᵕ `͈ ♡°◌̊',
  '(๑◕ฺ‿ฺ◕ฺ๑)',
  '(｡´∀｀)ﾉ',
  'o((*^▽^*))o',
  '- =͟͟͞͞ ( ꒪౪꒪)ฅ✧',
  '｡◕‿◕｡',
  '( ͡° ͜ʖ ͡°)',
  '(・◇・)',
  '(“⌒∇⌒”)',
  '((┌|o^▽^o|┘))♪',
  '（*´▽｀*）',
  '(*~▽~)',
  '(*⌒▽⌒*)θ～♪',
  '(｀・ω・´)”',
  '（＾⊆＾）',
  '(°∀°)b',
  '(≧∇≦)/',
  '(⌒▽⌒)☆',
  '(●⌒∇⌒●)',
  '(☆^ー^☆)',
  '(✿´‿`)',
  '(o^^)o',
  '~(⁰▿⁰)~',
  '(っ˘ڡ˘ς)',
  '(ノ^_^)ノ',
  '〈( ^.^)ノ',
  '＼(*T▽T*)／',
  '＼（Ｔ∇Ｔ）／',
  '°˖ ✧◝(○ ヮ ○)◜✧˖ °',
  '⊙▽⊙',
  '✖‿✖',
  'ー( ´ ▽ ` )ﾉ',
  'ヽ(；▽；)ノ',
  'ヽ(^。^)丿',
  'o(〃＾▽＾〃)o',
  'Ｏ(≧∇≦)Ｏ',
  'p(*＾-＾*)q',
  'ヘ(^o^ヘ)',
  '(◡‿◡✿)',
  '(ⓥꇳⓥ*)',
  '((ꉺꈊꉺ)ꀢ༣',
  '(ᵒ̴̶̷̤́◞౪◟ ᵒ̴̶̷̤̀ )',
  '（＾凹＾）',
  '(*＾ワ＾*)',
  '(/•ิ_•ิ)/',
  '(´ω｀★)',
  '(⊙ヮ⊙)',
  '（⌒▽⌒ゞ',
  '(◐ω◑ )',
  '(☆^O^☆)',
  '(❀◦‿◦)',
  '(๑^っ^๑)',
  '＼（＾▽＾）／',
  '∩( ・ω・)∩',
  '♪((└|o^▽^o|┐))',
  '❣◕ ‿ ◕❣',
  'ヾ(｡･ω･｡)',
  'ヾ(＾∇＾)',
  'o(^^o)',
  'o(≧∇≦o)',
  'ಥ‿ಥ',
  'ლ(๏‿๏ ◝ლ)',
  '♝ཻ༨͜♝ཻ)✩⃛',
  '(ෆ ͒•∘̬• ͒)◞',
  '(ට˓˳̮ට๑)',
  '(๑★ .̫ ★๑)',
  '(*´艸`*)',
  'ψ(｀∇´)ψ',
  '(●´艸`)',
  '(*≧▽≦)ﾉｼ))',
  '(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧',
  'ヽ(*≧ω≦)ﾉ',
  'Ｏ(≧▽≦)Ｏ',
  '\( ‘з’)/',
  'ヽ( ★ω★)ノ',
  '＼(☆o◎)／',
  'へ(゜∇、°)へ',
  'ヘ(°◇、°)ノ',
  '( p_q)',
  '(T＿T)',
  '(ToT)',
  '(┯_┯)',
  '(._.)',
  '(=ｘェｘ=)',
  '⊙︿⊙',
  '(‘A`)',
  '囧rz',
  '（ ＴДＴ）',
  '(T^T)',
  '(T_T)',
  '˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚',
  'p(´⌒｀｡q)',
  '  ू(ʚ̴̶̷́ .̠ ʚ̴̶̷̥̀ ू)',
  '( °̥̥̥̥̥̥̥̥˟°̥̥̥̥̥̥̥̥ )',
  '(.﹒︣︿﹒︣.)',
  '⁽ƈ ͡ (ुŏ̥̥̥̥םŏ̥̥̥̥) ु',
  '(๑´•  .̫ •ू`๑)',
  '(ఠ్ఠ ˓̭ ఠ్ఠ)',
  '(๑◕︵◕๑)',
  '(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)',
  '( p′︵‵。)',
  '(-̩̩̩-̩̩̩-̩̩̩-̩̩̩-̩̩̩___-̩̩̩-̩̩̩-̩̩̩-̩̩̩-̩̩̩)',
  '(ﾉД`)',
  '(▰˘︹˘▰)',
  '｡：ﾟ(｡ﾉω＼｡)ﾟ･｡',
  '(。┰ω┰。)',
  '(*´；ェ；`*)',
  '(|||❛︵❛.)',
  '(━┳━ _ ━┳━)',
  '(╥_╥)',
  '(o;TωT)o',
  '(っ˘̩╭╮˘̩)っ',
  '(个_个)',
  '(｡•́-ก̀｡)',
  '(ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू)',
  '(ू˃̣̣̣̣̣̣o˂̣̣̣̣̣̣ ू)⁼³₌₃',
  '｡゜(｀Д´)゜｡',
  '๛∙᷅῞ॄ∙᷄',
  '(T⌓T)',
  '╥﹏╥',
  '(•̩̩̩̩＿•̩̩̩̩)',
  '(๑′̥̥̥▵‵̥̥̥ ૂ๑)',
  '(๑•́₋•̩̥̀๑)',
  '｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡',
  '(⁎•̛̣̣꒶̯•̛̣̣⁎)',
  '(′︿‵｡)',
  '(´；ω；`)',
  '(づ-̩̩̩-̩̩̩_-̩̩̩-̩̩̩)づ',
  '(´＿｀。)',
  '(´Д` )',
  '(;o;)',
  '(;∀;)',
  '(´△｀)',
  '( ≧Д≦)',
  '((´д｀))',
  '(∩︵∩)',
  'ヽ(´□｀。)ﾉ',
  '゜・（／。＼）・゜',
  '。ﾟ(ﾟﾉД｀ﾟ)ﾟ｡',
  '(-̩̩-̩̩͡_-̩̩-̩̩͡)',
  '(´；д；`)',
  '(´Ａ｀。)',
  'o(；△；)o',
  '(✖╭╮✖)',
  '・(/Д`)・',
  '（；￣д￣）',
  '(︶︹︺)',
  '(´；Д；｀)',
  '(´Д｀。)',
  '(⊙︿⊙✿)',
  '(┳◇┳)',
  '(▰︶︹︺▰)',
  '（πーπ）',
  '(ノД`)・゜・。',
  'o(╥﹏╥)o',
  'ͼ(ݓ_ݓ)ͽ',
  '(≖͞_≖̥)',
  '(;*△*;)',
  '(╯︵╰,)',
  '{{p´Д｀q}}',
  '((((*｡_｡)_',
  '（Ω_Ω）',
  '꒰✘Д✘◍꒱',
  '(u_u)',
  '(º_º)',
  '╭( ✖_✖ )╮',
  '(×_×;）',
  '٩(×̯×)۶',
  '・゜・(ノД`)',
  '（；へ：）',
  '((o(;△;)o))',
  '(இ﹏இ`｡)',
  'o(TヘTo)',
  '٩꒰´·⌢•｀꒱۶⁼³₌₃',
  '(o˘д˘)o',
  '(;¬_¬)',
  '（｀Δ´）！',
  '(￣^￣)',
  '(｡•ˇ‸ˇ•｡)',
  '(*￣m￣)',
  '-`д´-',
  'ˁ⁽͑ ˚̀˙̭˚́ ⁾̉ˀ ⁼³',
  '( •̀ω•́ )σ',
  '(‡▼益▼)',
  '(๑‾᷆д‾᷇๑)',
  '٩◔̯◔۶ 哼',
  '(。≖ˇ3ˇ≖｡)',
  '(〝▼皿▼）',
  'Σ(▼□▼メ)',
  '(︶︹︺)',
  '(;｀O´)o',
  'ヽ(｀⌒´メ)ノ',
  '（▼へ▼メ）',
  '(◞≼◉ื≽◟ ;益;◞≼◉ื≽◟)',
  'ヾ(。◣∀◢。)ﾉ',
  'o(-`д´- ｡)',
  'ヽ(ｏ`皿′ｏ)ﾉ',
  '٩(╬ʘ益ʘ╬)۶',
  '٩(๑`ȏ´๑)۶',
  '(◣_◢)',
  '(*｀へ´*)',
  '(*≧m≦*)',
  '(＃｀д´)ﾉ',
  '┌П┐(►˛◄’!)',
  '╭(๑¯д¯๑)╮',
  'ヾ( ･`⌓´･)ﾉﾞ',
  'Σ(-`Д´-ﾉ；)ﾉ',
  'ฅ⁽͑ ˚̀ ˙̭ ˚́ ⁾̉ฅ',
  '(ー_ー)!!',
  '(¬_¬)',
  'ヽ(≧Д≦)ノ',
  '(-_-)',
  'ヽ(`Д´)ﾉ',
  'ヽ( ｀0´)ﾉ',
  '(,,#ﾟДﾟ)',
  '(｡･･｡)',
  '(｡-_-｡)',
  '[○･｀Д´･○]',
  '＼(◎o◎)／！',
  '(｡+･`ω･´)',
  '(¬､¬)',
  '(¬▂¬)',
  '(⋋▂⋌)',
  'ヽ(●-`Д´-)ノ',
  '(≧σ≦)',
  '(╬ﾟ◥益◤ﾟ)',
  '(╬⓪益⓪)',
  '｢(#Φ益 Φo)∩',
  '＼( ｀.∀´)／',
  'ヽ(#`Д´)ﾉ',
  'ヽ(｀◇´)/',
  'ヽ(￣д￣;)ノ',
  '凸(-0-メ)',
  '☜(:♛ฺ;益;♛ฺ;)☞',
  '凸(｀0´)凸',
  '( ꒪Д꒪)ノ',
  '(･｀ｪ´･)つ',
  '(； ｀ｪ´ ；)b三b',
  '(；¬д¬)',
  '（;≧皿≦）',
  '凸(⊙▂⊙✖ )',
  '＼(＠O＠)／',
  'щ(ºДºщ)',
  '凸(｀⌒´メ)凸',
  '((╬●∀●)',
  '(╬ Ò ‸ Ó)',
  '(╬•᷅д•᷄╬)',
  '(」゜ロ゜)」',
  '(/ﾟДﾟ)/',
  '(´･益･｀*)',
  '(¬д¬。)',
  '（≧▼≦；)',
  '＼(〇O〇)／',
  'o(≧o≦)o',
  's(・｀ヘ´・；)',
  'θ＼(；￢_￢)',
  '凸(｀△´＋）',
  '┗(•̀へ •́ ╮ )',
  '( ﾟOﾟ)',
  '(#ﾟДﾟ)',
  '(=ﾟДﾟ=)',
  '(・◇・)',
  '(　ﾟ皿ﾟ)',
  '(」゜ロ゜)」',
  ' |ﾟДﾟ)))',
  ' ( ꒪Д꒪)ノ',
  'L(・o・)」',
  'щ(゜ロ゜щ)',
  '(　°Д°)',
  '(´･д･`)',
  '(ﾉﾟ0ﾟ)ﾉ~',
  '(´⊙ω⊙`)！',
  '(○o○)',
  '∑(;°Д°)',
  '━Σ(ﾟДﾟ|||)━',
  'Σ(゜ロ゜;)',
  '⊙▂⊙',
  '(ᵒ̤̑ ₀̑ ᵒ̤̑)wow!*✰',
  '(;꒪ö꒪)',
  'ɿ(｡･ɜ･)ɾⓌⓗⓐⓣ？',
  'ɿ(｡･ɜ･)ɾⓌⓗⓨ？',
  '»ू(͒ˑ•᷄͡ꇵ͒•᷅͒)ू?!',
  '٩(͡๏̯͡๏)۶',
  '( ؕؔʘ̥̥̥̥ ه ؔؕʘ̥̥̥̥ )?',
  '( •᷄ὤ•᷅)？',
  '(⊙_◎)',
  'ఠ_ఠ',
  'Σ(-᷅_-᷄๑)',
  'δ(´д｀; )',
  '(?・・)σ',
  '(」・ω・)」',
  '(⊙_☉)',
  'c( O.O )ɔ',
  '↷( ó╻ò)',
  'σ(´し_｀〃)ゞ',
  '(￣■￣;)!?',
  '(☉_☉)',
  '﴾͡๏̯͡๏﴿',
  ' Σ(‘◉⌓◉’)',
  '( ؔ⚈͟ ◡ ؔ⚈͟ ๑)…ﾝ？',
  '(◎_◎;)',
  '( ・◇・)？',
  'o(´^｀)o',
  '(•ิ_•ิ)?',
  '(´･_･`)',
  '(ﾟωﾟ)',
  '(・o・)',
  ' (・・)',
  '(＊ﾟ◇ﾟ)',
  'w(°ｏ°)w',
  '(／。＼)',
  '(_Д_)',
  '《ﾟДﾟ》',
  '( ﾟдﾟ )',
  '(●´ω｀●)',
  '（・□・；）',
  'w(@。@;)w',
  '(((( ;°Д°))))',
  '（°o°；）',
  '⊙０⊙',
  'Σ(゜゜)',
  '((((；゜Д゜)))',
  '(屮゜Д゜)屮',
  '(╬⁽⁽ ⁰ ⁾⁾ Д ⁽⁽ ⁰ ⁾⁾)',
  '（゜◇゜）',
  '(◐ o ◑ )',
  '(⊙﹏⊙✿)',
  '(｡☉౪ ⊙｡)',
  '(ּơ̑ළּơ̑)',
  '(゜▼゜＊）',
  'ヾ(｡ꏿ﹏ꏿ)ﾉﾞ',
  '(｀_´)ゞ',
  '(◎-◎；)',
  '(￣(エ)￣)ゞ',
  '(-_-)ゞ゛',
  '(‘◇’)?',
  '【・ヘ・?】',
  '【・_・?】',
  '(゜-゜)',
  '(」ﾟヘﾟ)」',
  '(°ヘ°)',
  '(゜。゜)',
  '(●__●)',
  '⁀⊙﹏☉⁀',
  '●.◉',
  'щ(ºДºщ)',
  'ლ(ٱ٥ٱლ)',
  '(・・。)ゞ',
  '(」ﾟﾛﾟ)｣',
  '(●´ω｀●)ゞ',
  '〈(゜。゜)',
  'ヾ(´･ ･｀｡)ノ”',
  '(❀｣╹□╹)｣*･',
  '(^～^;)ゞ',
  '(⊙.☉)7',
  '(C_C)',
  '∑(O_O；)',
  '(´･_･`)',
  '╮(╯▽╰)╭',
  '（￣工￣lll）',
  'ㄟ( ▔, ▔ )ㄏ',
  '(◎_◎;)',
  '(｀_´)ゞ',
  '(◎-◎；)',
  '(・_・ヾ',
  '(￣(エ)￣)ゞ',
  '(-_-)ゞ゛',
  '(‘◇’)?',
  'ヽ(゜Q。)ノ？',
  '(´｀;) ？',
  '( ・◇・)？',
  '(゜-゜)',
  '｢(ﾟﾍﾟ)',
  'o(´^｀)o',
  '(´−｀) ﾝｰ',
  '(」ﾟヘﾟ)」',
  '(•ิ_•ิ)?',
  '「(°ヘ°)',
  '(゜。゜)',
  '(-_-) zzz',
  'Σ(￣。￣ノ)ノ',
  '(∪｡∪)｡｡｡zzz',
  '_(：3 」∠ )_',
  '⋆｡˚ (¦3ꇤ[▓▓]⋆｡˚✩',
  '_(┐「ε:)_',
  '(;´ρ`)',
  '(*´ο`*)',
  '(-ｪ-)｡o',
  'ε-(´・｀)',
  '［(－－)］zzz',
  '(。-ω-)zzz',
  '(´〜｀*) zzz',
  '（)´д`(）',
  '（´□｀川）',
  '＿ﾉ乙(､ﾝ､)_',
  'ᕙ(⇀‸↼‶)ᕗ',
  '- =͟͟͞͞ (¦3[▓▓])',
  '˓(¦:ɝ[▓▓]',
  '(¦3ꇤ[▓▓]',
  'ꏂ[▓] ृ⑆)˚º꒰꒱',
  '(¦:ɜ[▓▓]⌕⁷̩ ̊',
  '(≚ᄌ≚)ƶƵ',
  '(»:ɜ[▒▒]˚º꒰꒱',
  '(:˒[￣]',
  '[▓▓]　☍(¦3ꇤ　꒱',
  '(ː:̣̣̣̥з[▓▓]˚º꒰꒱',
  '[▒▒]ꇤꒊ¦`)ꍞ',
  '(o´Д`)',
  '＼（´Ｏ｀）／',
  '(-ι_- )))。。。',
  '(-, – )…zzzZZZ',
  '(ᴗ˳ᴗ)',
  '{zzz}°°°( -_-)',
  '＼(o￣∇￣o)/',
  'ƪ(‾￣o￣”)ʃ',
  '✾꒡ .̮ ꒡✾',
  '(  ु⁎ᴗ_ᴗ⁎)ु.｡oO',
  '(´Д｀)ﾉ',
  '(▰˘o˘▰)',
  '(ᵕ≀ ̠ᵕ )',
  '【:εω',
  '(*°∀°)=3',
  '(ღ˘⌣˘ღ)',
  '(*´∀｀*人*´∀｀*)',
  '(´∀｀)♡',
  '(づ｡◕‿◕｡)づ',
  '(づ￣ ³￣)づ',
  '٩(๑•◡-๑)۶ⒽⓤⒼ❤',
  '( ˘ ³˘)♥',
  '(´ε｀ )♡',
  '(｡･ω･｡)ﾉ♡',
  '(・_・)❤(-_-)',
  '(｡’▽’｡)♡',
  '(Ɔ ˘⌣˘)♥(˘⌣˘ C)',
  'ʚ♡⃛ɞ(ू•ᴗ•ू❁)',
  '*ଯ( ॢᵕ꒶̮ᵕ)ॢഒ*♡',
  '॰⋆(˶ॢ‾᷄﹃‾᷅˵ॢ)♡',
  '˚‧*♡ॢ˃̶̤̀◡˂̶̤́♡ॢ*‧˚',
  '´͈ ᵕ `͈ ♡°◌̊',
  '(۶•౪•)۶❤٩(•౪•٩)',
  '( ˘ ³˘)❤',
  '(TεT)',
  '～(^з^)-☆',
  '（*＾3＾）',
  '(*￣з￣)',
  'ヽ(*´з｀*)ﾉ',
  '|°з°|',
  '(´ε｀*)',
  '(っ˘зʕ•̫͡•ʔcнϋෆ*',
  '✧˖°ˈ·*ε-(๑˃́ε˂̀๑ )',
  '(ΘεΘ;)',
  '(。´✷ฺЗ✷ฺ)',
  '(๑•з•)))⋆*♡*⋆ฺ',
  '( ु ॕ ӟ ॕ)ु',
  '(/^-^(^ ^*)/',
  '(∿°○°)∿ ︵ ǝʌol',
  '(◞ꈍ∇ꈍ)◞⋆**✚⃞ྉ',
  '(♥ω♥ ) ~♪',
  '(๑・ω-)～♥”',
  '(っ˘з(˘⌣˘ )',
  '(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ♥',
  '(  ′ॢ◡̶͂‵ ॢ )♡*.',
  '♡(.◜ω◝.)♡',
  '( ⋆•ิ ᴈ-ิ(ᵕ❥ ᵕ⁎ ॢ)',
  '(◍•ᴗ•◍)❤',
  '(♥ω♥*)',
  '(๑°꒵°๑)･*♡',
  '♡(*´･ω･)(･ω･`*)♡',
  '♡´･ᴗ･`♡',
  '◟( ˊ̱˂˃ˋ̱ )◞♡⃛◟( ˊ̱˂˃ˋ̱ )◞',
  '( ๑॔˃ ॢ‧̫˂)ॢ♡̷˚๐',
  '♡ℒฺℴฺνℯฺ♡',
  '꒒ ০ ⌵ ୧ ♡',
  '(｡・‧̫・｡).*＊♡',
  'ლ(´◉❥◉｀ლ)',
  '（〃・ω・〃）',
  '(∩˃o˂∩)♡',
  '（●´∀｀）ノ♡',
  '(✿ ♥‿♥)',
  '(ʃƪ˘ﻬ˘)',
  '♡〜٩(^▿^)۶〜♡',
  '♡＾▽＾♡',
  '♥（ﾉ´∀`）',
  '✿♥‿♥✿',
  'ヾ(◍’౪`◍)ﾉﾞ♡',
  '( ᵒ̴̶̷̤̀ुωᵒ̴̶̷̤́ू )❤”',
  '٩(๑ơలơ)۶♡',
  '(♡´͈༝`͈)ฅ˒˒',
  '࿒ℓ࿆࿆࿆ෆ࿆౮࿆୧࿆♡࿆༝࿆༚࿆༝࿆༚࿆ ࿒',
  'ฅ ̳͒•ˑ̫• ̳͒ฅ♡',
  '(♡ˊ͈ ॢ꒳ ॢˋ͈)♪',
  '(*´o`*)ʖˋʖˋʖˋ～♡',
  'ღゝ◡╹)ノ♡',
  '(๑ᵉ̷͈◡ॢᵉ̷͈๑)Üfu♡',
  '(⌯˘̤ ॢᵌ ू˘̤)യෆ̈',
  '(｡・//ε//・｡)',
  '（。ˇ ⊖ˇ）♡',
  '（*´▽｀*）',
  '（´ω｀♡%）',
  '♥(ˆ⌣ˆԅ)',
  '♥～(‘▽^人)',
  'ヽ(愛´∀｀愛)ノ',
  'ƪ(♥ﻬ♥)ʃ',
  '♡ლζ(♛ε♛*ζლ♡',
  '( •ॢ◡-ॢ)-♡',
  '٩(ó｡ò۶ ♡)))♬',
  '(ღ˘⌣˘)❛ั◡❛ัღ)',
  '(๑′ڡ‵๑)۶♡॰⋆̥',
  '( ๑ ᴖ ᴈ ᴖ)ᴖ ᴑ ᴖ๑)❣',
  '(´ ▽｀).。ｏ♡',
  '(●♡∀♡)',
  '( ＾◡＾)っ❤',
  '(｡♥‿♥｡)',
  '（*＾3＾）/～♡',
  '(/∇＼*)｡o○♡',
  '～(^з^)-♡',
  '(ෆ ͒•∘̬• ͒)◞',
  '♡+* Ɗɑɫë*+♡',
  '(ෆ`꒳´ෆ) ˡºᵛᵉ❤⃛',
  '( ˭̵̵̵̵͈́◡ु͂˭̵̵̵͈̀ )ˉ̞̭♡',
  '(*´ ˘ `*).｡oO ( ♡ )',
  '(-ε- )',
  '|(￣3￣)|',
  '（￣ε￣＠）',
  '(○´3｀)ﾉ',
  '（＠ーεー＠）',
  '（*＾3＾）/～☆',
  '(╯3╰)',
  '(≡ε≡；)',
  '(ʃƪ ˘ ³˘)',
  'σ(≧ε≦ｏ)',
  '˓( ˶ ❛ ꁞ ❛  ˶ )˒˒',
  '(~￣³￣)~',
  '(ु*´З`)ू❣',
  'ヾ(❛ε❛“)ʃ',
  '⊂((・▽・))⊃',
  '＼(^o^)／',
  '(っ˘̩╭╮˘̩)っ',
  'd=(´▽｀)=b',
  'ლ(́◉◞౪◟◉‵ლ)',
  'ʕ•̀ω•́ʔ✧熊熊们',
  'Ψ(￣(ｴ)￣)Ψ',
  '(／￣(ｴ)￣)／',
  '(￣(エ)￣)',
  '(´(エ)｀)',
  '・㉨・',
  '(●｀･(ｴ)･´●)',
  '(*ノ・ω・）',
  'ʕ•̫͡•ʔ♡*:.✧',
  'ʕ•͡ω•ʔ',
  '川´･ω･`川',
  'ᶘ ᵒᴥᵒᶅ',
  'ˁ˙͠˟˙ˀ',
  'ʕ•̫͡•ʔ♬✧',
  'ʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ',
  '˞͛ʕ̡̢̡๑꒪͒ꇴ꒪͒๑ʔ̢̡̢˞͛',
  ' ʢ•ꇵ͡•ʡ✩⃛',
  '˞͛ʕ̡̢̡,,Ծ‸Ծ,, ʔ̢̡̢˞͛',
  '⁞⁝⁞ʕु•̫͡•ʔु☂⁝⁞⁝',
  '(｡･ω･｡)',
  '(●￣(ｴ)￣●)',
  '٩ʕ•͡×•ʔ۶',
  'ʔ•̫͡•ʔ',
  'ʕ·͡ˑ·ཻʔ',
  'ʕ•͡-•ʔ',
  'ʕ•̫͡•ིʔྀ',
  'ʕʘ̅͜ʘ̅ʔ',
  'ˁ˙͡˟˙ˀ',
  'ʕ·͡ˑ·ཻʔෆ⃛ʕ•̫͡•ོʔ',
  'ʕ•̼͛͡•ʕ-̺͛͡•ʔ•̮͛͡•ʔ',
  'ʕ•̫͡•ʔ❣ʕ-̼͡-ʔ',
  'ʕ⁎̯͡⁎ʔ༄',
  '˞͛ʕ̡̢̡◌･ꄃ･◌ʔ̢̡̢˞͛',
  '( (ﾐ´ω`ﾐ))',
  '✧ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོɁ̡̣̣̣̣̩̩̩̩✧',
  'ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ',
  'ʕ•͡ɛ•͡ʼʼʔ',
  'ʕ•ӫ̫͡•ʔ',
  'ʕु-̫͡-ʔु”',
  'ฅʕ•̫͡•ʔฅ',
  'ʕ•ᴥ•ʔ',
  'ʕ͙•̫͑͡•ʔͦʕͮ•̫ͤ͡•ʔ͙',
  'ʕ•̭͡•ʕ•̯ͦ͡•ʕ•̻̀•́ʔ',
  'ʕ-͏̶̶̶̯͡-ʔ',
  '( ´ิ(ꈊ) ´ิ)',
  '(￣(エ)￣)ゞ',
  '°◦=͟͟͞͞ʕ̡̢̡ु•̫͡•ʔ̡̢̡ु ☏',
  '⊂(￣(ｴ)￣)⊃',
  'ヾ(T(エ)Tヽ)',
  'v.ʕʘ‿ʘʔ.v',
  'ʕ •́؈•̀ ₎',
  'ʕʽɞʼʔ',
  'ʕु•̫͡•ʔु ✧',
  'ʕ•͡౪•ʔ',
  '(／(ｴ)＼)',
  '(^(エ)^)',
  '⊂(￣(工)￣)⊃',
  'ʕु•̫͡•ʔु☂',
  '┏((＝￣(ｴ)￣=))┛',
  '(///◔(ｪ)◔///)',
  '（ΦωΦ）猫奴快来',
  '(=ＴェＴ=)',
  '(=^･ｪ･^=)',
  '(=；ェ；=)',
  '(^・ω・^ )',
  '(=^･ω･^)y＝',
  '｡＾･ｪ･＾｡',
  '₍˄·͈༝·͈˄₎ฅ˒˒',
  'ฅ( ͒ᵕ̳◡ᵕ̳ ͒)｡o○',
  'ฅ ̳͒•ˑ̫• ̳͒ฅ♡',
  'ฅ^•ﻌ•^ฅ',
  '₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛',
  '(ะ☫ω☫ะ)',
  '(✦థ ｪ థ)',
  '(ↀДↀ)⁼³₌₃',
  'ฅ⁽͑ ˚̀ ˙̭ ˚́ ⁾̉ฅ',
  '=＾● ⋏ ●＾=',
  '(ↀДↀ)✧',
  'ฅ ̂⋒ิ ˑ̫ ⋒ิ ̂ฅ',
  '(≚ᄌ≚)ℒℴѵℯ❤',
  '(^._.^)ﾉ',
  '(=｀ω´=)',
  '(=^･^=)',
  '(*ΦωΦ*)',
  '(ФДФ)',
  '(●ↀωↀ●)✧',
  '(●ↀωↀ●)',
  'ლ(●ↀωↀ●)ლ',
  '٩(ↀДↀ)۶',
  'V(=^･ω･^=)v',
  '(*✧×✧*)',
  '₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒',
  '¶(⁄•˅̭•∖)⁋',
  '~(=^‥^)_旦~',
  '(=｀ェ´=)',
  '(=ｘェｘ=)',
  '(ΦзΦ)',
  'd(=^･ω･^=)b',
  '] ‘͇̂•̩̫’͇̂ ͒)ฅ ﾆｬ❣',
  '✩⃛( ͒ ु•·̫• ू ͒)',
  '(ꀄꀾꀄ)',
  '(=ↀωↀ=)✧',
  '(=ↀωↀ=)',
  'ლ(=ↀωↀ=)ლ',
  '(^-人-^)',
  '(=^-ω-^=)',
  'ヽ(^‥^=ゞ)',
  '=’①。①’=',
  '(^･o･^)ﾉ”',
  '（=´∇｀=）',
  '(=^‥^=)',
  '(Ф∀Ф)',
  '|ΦωΦ|',
  'ヽ(=^･ω･^=)丿',
  'o(^・x・^)o',
  '(,,◕　⋏　◕,,)',
  '(ะ`♔´ะ)',
  'Uo･ｪ･oU 狗狗来了',
  '(^・x・^)',
  '∪･ω･∪',
  'ＵＴｪＴＵ',
  '(〓￣(∵エ∵)￣〓)',
  '(^・(I)・^)',
  '(U・x・U)',
  '└@(･ｪ･)@┐',
  '▽・ω・▽',
  'U ´꓃ ` U',
  'U＾ェ＾U',
  'V●ᴥ●V',
  '▼o・ェ・o▼',
  'ヾ(●ω●)ノ',
  'U・♀・U',
  'Ｕ^皿^Ｕ',
  'Ψ(●°̥̥̥̥̥̥̥̥ ཅ °̥̥̥̥̥̥̥̥●)Ψ',
  'Ψ( ◉ཅ◉ )Ψ',
  '┌U･ｪ･U┘',
  'U=･ x ･=U',
  '／(･ × ･)＼',
  '／(=๏ x ๏=)＼',
  '｡ﾟ(ﾟ´(00)`ﾟ)ﾟ｡猪猪',
  'ヽ(*’(OO)’)ﾉﾟ',
  '(；ﾟ(OO)ﾟ)',
  '( ´(00)`)',
  '(͒⚈ै⚇༵⚈ै)͒',
  '(￣（∞）￣)',
  '(*’(OO)’*)',
  '(○｀（●●）´○)ﾉ',
  'ヽ(*’(OO)’)ﾉ',
  '(￣(▽▽)￣)',
  'q(￣(oo)￣)p',
  '(｀(●●) ´)',
  'ヾ(；ﾟ(OO)ﾟ)ﾉ',
  '(*´(00)`)’',
  '(=｀(∞)´=)',
  '(￣(oo)￣)ﾉ',
  'ヾ(＠＾(∞)＾＠)ノ',
  '((๑✧ꈊ✧๑))猴儿',
  '✧.*◌·͡˔·ོ◌*·✧',
  '(๑• .̫ •๑)',
  '⊂((・⊥・))⊃',
  '@( o･ｪ･)@',
  '@( oóꎴò)@',
  '@(/o･ｪ･o)@/',
  '@(o･ｪ･o)@',
  '⊂((*σ⊥σ*))⊃',
  '⊂((υ⊥υ))⊃',
  '@・ꈊ・@',
  '@( o･ꎴ･)@',
  '@(｡･o･)@',
  '@(o･ｪ･)@',
  '⊂((〃￣⊥￣〃))⊃',
  '⊂((≧⊥≦))⊃',
  '⊂((о∂⊥∂о))⊃',
  '((ლ(͏ ͒ • ꈊ • ͒)ლ))♡',
  '▽・ｗ・▽',
  'ｏ（Ｕ・ω・）⊃',
  'U｡･ｪ･｡U',
  'U￣ｰ￣U',
  'ｖ・。・Ｖ',
  '@( o･ω･)@',
  '@( oóωò)@',
  '@(*^ｪ^)@',
  '@(o・ェ・)@ノ',
  '⊂((δ⊥δ))⊃',
  'U・x・U兔子',
  '(๏ᆺ๏υ)',
  '／(^ x ^)＼',
  '／(=´x`=)＼',
  '／(=✪ x ✪=)＼',
  'U=๏ x ๏=U',
  '⌒(｡･.･｡)⌒',
  'U｡･.･｡U',
  '(,,๏ ⋏ ๏,,)',
  '／(^ x ^=)＼',
  '／(=∵=)＼',
  '／(≡・ x ・≡)＼',
  '／(v x v)＼',
  '⌒(=･ x ･=)⌒',
  '⁽⁽˙˟˙⁾⁾',
  'ˎ₍•ʚ•₎ˏ',
  '／(=⌒x⌒=)＼',
  '／(≧ x ≦)＼',
  '⌒(・x・)⌒',
  '⌒(=๏ x ๏=)⌒',
  '（・⊝・）小鸟',
  '（＠◇＠）',
  '◎▼◎',
  '♡(㋭ ਊ ㋲)♡',
  '（・⊝・∞）',
  '(`･⊝･´)',
  '（ﾟ∈ﾟ）',
  '(•∋•)',
  '(｀Θ´)',
  '(◉Θ◉)',
  ' ˏ₍•ɞ•₎ˎ',
  '꜀( ˊ̠˂˃ˋ̠ )꜆',
  '（・θ・）',
  '（`･⊝･´ ）',
  '(●∈∋●)'
];

const random = (num = 1) => {
  if (num <= 1) {
    num = 1;
  }

  let i = 0;
  let result = [];
  while (i < num) {
    const index = Math.floor(Math.random() * faces.length);
    if (!result.includes(index)) {
      result.push(index);
      i++;
    }
  }
  return result.map(item => faces[item]);
};

export default {
  random,
  faces
};