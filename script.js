// Emoji listesi
const emojis = [
    // Yüz İfadeleri ve Gülücükler
    '😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️',
    '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥',
    '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤',
    '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤠', '🥸', '🤡',

    // Fantezi Karakterler ve Yaratıklar
    '👻', '💀', '☠️', '👽', '👾', '🤖', '👹', '👺', '🎃',
    '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾',
    '🙈', '🙉', '🙊', '👀', '👁️', '🫦', '👄', '👅', '🧠',
    '🦷', '🦴', '👣', '🩻', '🫀', '🫁', '🦾', '🦿',

    // Duygular ve Kalpler
    '💋', '💌', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '💔', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', 
    '🖤', '🤍', '💯', '💢', '💥', '💫', '💦', '💨', '🕳️', '💣', '💬', '👁️‍🗨️', '🗨️', '🗯️', '💭', '💤',

    // El ve Parmak İfadeleri
    '👋', '🤚', '✋', '🖐️', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍',
    '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪',

    // İnsan ve Aktiviteler
    '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👩‍🦱', '🧑‍🦱', '👨‍🦱', '👩‍🦰', '🧑‍🦰', '👨‍🦰', '👱‍♀️', '👱',
    '👱‍♂️', '👩‍🦳', '🧑‍🦳', '👨‍🦳', '👩‍🦲', '🧑‍🦲', '👨‍🦲', '🧔‍♀️', '🧔', '🧔‍♂️', '👵', '🧓', '👴', '👲',
    '👳‍♀️', '👳', '👳‍♂️', '🧕', '👮‍♀️', '👮', '👮‍♂️', '👷‍♀️', '👷', '👷‍♂️', '💂‍♀️', '💂', '💂‍♂️', '🕵️‍♀️',
    '🕵️', '🕵️‍♂️', '👩‍⚕️', '👩‍⚕️', '👨‍⚕️', '👩‍🌾', '🧑‍🌾', '👨‍🌾', '👩‍🍳', '🧑‍🍳', '👨‍🍳', '👩‍🎓',
    '🧑‍🎓', '👨‍🎓', '👩‍🎤', '🧑‍🎤', '👨‍🎤',

    // Nesneler ve Eşyalar
    '⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸',
    '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️',
    '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🪔', '🧯', '🛢️', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎',
    '⚖️', '🧰', '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪛', '🔩', '⚙️', '🧱', '⛓️', '🧲', '🔫', '💣', '🧨', '🪓', '🔪', '🗡️',
    '⚔️', '🛡️', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳️', '💊', '💉', '🩸', '🩹', '🩺',
    '🚽', '🚰', '🚿', '🛁', '🛀', '🧴', '🧷', '🧹', '🧺', '🧻', '🧼', '🧽', '🧯', '🛒', '🚬',

    // Kırtasiye ve Ofis
    '✏️', '✒️', '🖋️', '🖊️', '🖌️', '🖍️', '📝', '💼', '📁', '📂', '🗂️', '📅', '📆', '🗒️', '🗓️', '📇', '📈', '📉',
    '📊', '📋', '📌', '📍', '📎', '🖇️', '📏', '📐', '✂️', '🗃️', '🗄️', '🗑️', '🔒', '🔓', '🔏', '🔐', '🔑', '🗝️',

    // Giyim ve Aksesuarlar
    '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '🥻', '🩱', '🩲', '🩳', '👙', '👚', '👛', '👜', '👝', '🎒',
    '👞', '👟', '🥾', '🥿', '👠', '👡', '🩰', '👢', '👑', '👒', '🎩', '🎓', '🧢', '⛑️', '📿', '💄', '💍', '💎',

    // Semboller
    '❤️', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟',
    '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⚛️', '🆔', '⚕️', '♾️', '🆚', '📳', '📴',
    '💯', '⚜️', '🔰', '⭕', '✅', '☑️', '✔️', '❌', '❎', '〽️', '✳️', '✴️', '❇️', '©️', '®️', '™️', '#️⃣', '*️⃣',
    '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔠', '🔡', '🔢', '🔣', '🔤', '🅰️',
    '🆎', '🅱️', '🆑', '🆒', '🆓', '🆕', '🆖', '🅾️', '🆗', '🅿️', '🆘', '🆙', '🆚', '🈁', '🈂️', '🈷️', '🈶', '🈯',
    '🉐', '🈹', '🈚', '🈲', '🉑', '🈸', '🈴', '🈳', '㊗️', '㊙️', '🈺', '🈵', '⚠️', '🚸', '⛔', '🚫', '🚳', '🚭',
    '🚯', '🚱', '🚷', '📵', '🔞', '☢️', '☣️', '⬆️', '↗️', '➡️', '↘️', '⬇️', '↙️', '⬅️', '↖️', '↕️', '↔️', '↩️',
    '↪️', '⤴️', '⤵️', '🔃', '🔄', '🔙', '🔚', '🔛', '🔜', '🔝',

    // Yiyecek ve İçecekler
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅',
    '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖',
    '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪',
    '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤',
    '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬',
    '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '☕', '🫖', '🍵', '🧃', '🥤', '🧋', '🍶', '🍺', '🍻',
    '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊',

    // Hayvanlar ve Doğa
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🐔',
    '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🪱', '🐛', '🦋',
    '🐌', '🐞', '🐜', '🪰', '🪲', '🪳', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🐠', '🐟', '🐡', '🐬', '🐳',
    '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦏', '🐘', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙',
    '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛', '🪶', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊️', '🐇', '🦝', '🦨',
    '🦡', '🦫', '🦦', '🦥', '🐁', '🐀', '🐿️', '🦔', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🪵', '🌱',
    '🌿', '☘️', '🍀', '🎍', '🪴', '🎋', '🍃', '🍂', '🍁', '🍄', '🐚', '🪨', '🌾', '💐', '🌷', '🌹', '🥀', '🌺',
    '🌸', '🌼', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌙', '🌎',
    '🌍', '🌏', '🪐', '💫', '⭐', '🌟', '✨', '⚡', '☄️', '💥', '🔥', '🌪️', '🌈', '☀️', '🌤️', '⛅', '🌥️', '☁️', '🌦️',
    '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '☃️', '⛄', '🌬️', '💨', '💧', '💦', '🫧', '☔', '☂️', '🌊', '🌫️',

    // Seyahat ve Yerler
    '🏠', '🏡', '🏢', '🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒', '🗼', '🗽',
    '⛪', '🕌', '🛕', '🕍', '⛩️', '🕋', '⛲', '⛺', '🌁', '🌃', '🏙️', '🌄', '🌅', '🌆', '🌇', '🌉', '♨️', '🎠',
    '🎡', '🎢', '💈', '🎪', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚍',
    '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🏎️', '🏍️', '🛵', '🦽',
    '🦼', '🛺', '🚲', '🛴', '🛹', '🛼', '🚏', '🛣️', '🛤️', '🛢️', '⛽', '🚨', '🚥', '🚦', '🛑', '🚧', '⚓', '⛵',
    '🛶', '🚤', '🛳️', '⛴️', '🛥️', '🚢', '✈️', '🛩️', '🛫', '🛬', '🪂', '💺', '🚁', '🚟', '🚠', '🚡', '🛰️', '🚀',
    '🛸', '🛎️', '🧳', '⌛', '⏳', '⌚', '⏰', '⏱️', '⏲️', '🕰️', '🗺️', '🗾', '🧭', '🏔️',
    '⛰️', '🌋', '🗻', '🏕️', '🏖️', '🏜️', '🏝️', '🏞️', '🏟️', '🏛️', '🏗️', '🧱', '🏘️', '🏚️',

    // Bayraklar
    '🇹🇷', '🇦🇿', '🇺🇸', '🇬🇧', '🇩🇪', '🇫🇷', '🇮🇹', '🇪🇸', '🇵🇹', '🇷🇺', '🇯🇵', '🇰🇷', '🇨🇳', 
    '🇧🇷', '🇦🇷', '🇲🇽', '🇨🇦', '🇦🇺', '🇳🇿', '🇿🇦', '🇮🇳', '🇵🇰', '🇸🇦', '🇦🇪', '🇪🇬', '🇲🇦', 
    '🇳🇱', '🇧🇪', '🇨🇭', '🇦🇹', '🇸🇪', '🇳🇴', '🇫🇮', '🇩🇰', '🇮🇪', '🇵🇱', '🇭🇺', '🇨🇿', '🇸🇰', 
    '🇷🇴', '🇧🇬', '🇬🇷', '🇨🇾', '🇱🇧', '🇮🇷', '🇮🇶', '🇮🇱', '🇰🇼', '🇶🇦', '🇧🇭', '🇴🇲', '🇰🇿', 
    '🇺🇿', '🇹🇲', '🇰🇬', '🇹🇯', '🇲🇳', '🇻🇳', '🇹🇭', '🇮🇩', '🇲🇾', '🇵🇭', '🇸🇬'
];

// Emoji açıklamaları
const emojiDescriptions = {
    // Yüz İfadeleri
    '😀': 'gülen yüz gülümseme mutlu neşeli',
    '😃': 'gülen yüz gülümseme mutlu neşeli büyük gözler',
    '😄': 'gülen yüz gülümseme mutlu neşeli gözler',
    '😁': 'sırıtan yüz gülümseme diş',
    '😅': 'terli gülen yüz gülümseme ter utanmış',
    '😂': 'sevinç gözyaşları gülen yüz ağlama mutlu',
    '🤣': 'yerde yuvarlanarak gülme kahkaha komik',
    '😊': 'mutlu gülümseme utangaç sevimli',
    '😇': 'melek hale gülümseme masum',
    '🙂': 'hafif gülümseme yüz',
    '😉': 'göz kırpma yüz muzip şakacı',
    '😌': 'rahatlamış yüz huzurlu sakin',
    '😍': 'aşık olmuş kalp gözler sevgi',
    '🥰': 'kalpler ile gülümseyen yüz aşk sevgi',
    '😘': 'öpücük atan yüz kalp sevgi aşk',
    '😋': 'lezzetli yemek yiyecek dil',
    
    // Hayvanlar
    '🐶': 'köpek yavru sevimli',
    '🐱': 'kedi yavru sevimli',
    '🐭': 'fare sıçan kemirgen',
    '🐹': 'hamster kemirgen sevimli',
    '🐰': 'tavşan sevimli',
    '🦊': 'tilki kızıl orman',
    '🐻': 'ayı kahverengi orman',
    '🐼': 'panda ayı bambu',
    '🐻‍❄️': 'kutup ayısı beyaz',
    '🐨': 'koala avustralya',
    '🐯': 'kaplan yavru sevimli',
    '🦁': 'aslan kral orman',
    '🐮': 'inek süt çiftlik',
    '🐷': 'domuz çiftlik',
    '🐽': 'domuz burnu',
    '🐸': 'kurbağa yeşil',
    '🐵': 'maymun yüz',
    '🐔': 'tavuk çiftlik',
    '🐧': 'penguen kutup buz',
    '🐦': 'kuş uçan',
    '🐤': 'civciv sarı yavru',
    '🐣': 'yumurtadan çıkan civciv',
    '🐥': 'önden civciv',
    '🦆': 'ördek göl su',
    '🦅': 'kartal yırtıcı kuş',
    '🦉': 'baykuş gece kuş',
    '🦇': 'yarasa gece uçan',
    '🐺': 'kurt orman yırtıcı',
    '🐗': 'yaban domuzu orman',
    '🐴': 'at çiftlik',
    '🦄': 'unicorn tek boynuzlu at',
    '🐝': 'arı bal böcek',
    '🪱': 'solucan toprak',
    '🐛': 'tırtıl böcek',
    '🦋': 'kelebek uçan böcek',
    '🐌': 'salyangoz yavaş',
    '🐞': 'uğur böceği kırmızı',
    '🐜': 'karınca böcek',
    '🪰': 'sinek böcek',
    '🪲': 'böcek yeşil',
    '🪳': 'hamam böceği',
    '🦟': 'sivrisinek böcek',
    '🦗': 'cırcır böceği',
    '🕷️': 'örümcek ağ',
    '🦂': 'akrep zehirli',
    '🐢': 'kaplumbağa yavaş',
    '🐍': 'yılan zehirli',
    '🦎': 'kertenkele sürüngen',
    '🐠': 'tropikal balık renkli',
    '🐟': 'balık deniz',
    '🐡': 'balon balığı deniz',
    '🐬': 'yunus deniz memeli',
    '🐳': 'balina deniz memeli',
    '🦈': 'köpek balığı yırtıcı',
    '🐊': 'timsah sürüngen',
    '🐅': 'kaplan yırtıcı',
    '🐆': 'leopar yırtıcı benekli',
    '🦓': 'zebra çizgili afrika',
    '🦍': 'goril maymun',
    '🦏': 'gergedan afrika',
    '🐘': 'fil afrika',
    '🦒': 'zürafa uzun boyun',

    // Doğa ve Hava Durumu
    '🌵': 'kaktüs çöl bitki',
    '🎄': 'noel ağacı çam',
    '🌲': 'çam ağacı orman',
    '🌳': 'yapraklı ağaç orman',
    '🌴': 'palmiye ağacı plaj',
    '🪵': 'odun kütük ağaç',
    '🌱': 'fide yeni büyüyen',
    '🌿': 'bitki yaprak yeşil',
    '☘️': 'yonca şans',
    '🍀': 'dört yapraklı yonca şans',
    '🎍': 'bambu bitki',
    '🪴': 'saksı bitkisi ev',
    '🎋': 'dilek ağacı bambu',
    '🍃': 'rüzgarda yapraklar',
    '🍂': 'sonbahar yaprakları',
    '🍁': 'akçaağaç yaprağı sonbahar',
    '🍄': 'mantar orman',
    '🐚': 'deniz kabuğu plaj',
    '🪨': 'kaya taş',
    '🌾': 'pirinç başağı',
    '💐': 'çiçek buketi',
    '🌷': 'lale çiçek',
    '🌹': 'gül çiçek kırmızı',
    '🥀': 'solmuş çiçek',
    '🌺': 'hibiskus çiçek',
    '🌸': 'kiraz çiçeği',
    '🌼': 'papatya çiçek',
    '🌻': 'ayçiçeği',
    '🌞': 'güneş yüz',
    '🌝': 'dolunay yüz',
    '🌛': 'hilal ay yüz',
    '🌜': 'son hilal ay yüz',
    '🌚': 'yeni ay yüz',
    '🌕': 'dolunay',
    '🌖': 'küçülen ay',
    '🌗': 'son dördün',
    '🌘': 'hilal',
    '🌑': 'yeni ay',
    '🌒': 'büyüyen hilal',
    '🌓': 'ilk dördün',
    '🌔': 'büyüyen ay',
    '🌙': 'hilal ay',
    '🌎': 'dünya amerika',
    '🌍': 'dünya afrika avrupa',
    '🌏': 'dünya asya',
    '🪐': 'satürn gezegen',
    '💫': 'baş dönmesi yıldız',
    '⭐': 'yıldız',
    '🌟': 'parlayan yıldız',
    '✨': 'kıvılcımlar parıltı',
    '⚡': 'yıldırım şimşek',
    '☄️': 'kuyruklu yıldız',
    '💥': 'patlama çarpışma',
    '🔥': 'ateş alev yanmak',
    '🌪️': 'kasırga hortum',
    '🌈': 'gökkuşağı renk',
    '☀️': 'güneş parlak',
    '🌤️': 'bulutlu güneş',
    '⛅': 'parçalı bulutlu',
    '🌥️': 'büyük bulut güneş',
    '☁️': 'bulut',
    '🌦️': 'yağmurlu güneş',
    '🌧️': 'yağmur bulut',
    '⛈️': 'şimşek yağmur',
    '🌩️': 'şimşek bulut',
    '🌨️': 'karlı bulut',
    '❄️': 'kar tanesi',
    '☃️': 'kardan adam kar',
    '⛄': 'kardan adam',
    '🌬️': 'rüzgar üfleme',
    '💨': 'rüzgar hız',
    '💧': 'su damlası',
    '💦': 'ter damlaları',
    '🫧': 'kabarcıklar',
    '☔': 'şemsiye yağmur',
    '☂️': 'şemsiye',
    '🌊': 'dalga su deniz',
    '🌫️': 'sis pus'
};

// DOM elementlerini seçme ve sabitleri tanımlama
const emojiContainer = document.getElementById('emojiContainer');
const searchInput = document.getElementById('searchInput');
const notification = document.getElementById('notification');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const langSpan = langToggle.querySelector('span');

const NOTIFICATION_DURATION = 2000;
const LOCAL_STORAGE_KEYS = {
    THEME: 'theme',
    LANG: 'lang'
};

let searchTerm = '';
let currentLang = localStorage.getItem(LOCAL_STORAGE_KEYS.LANG) || 'tr';

// Tema yönetimi
function getCurrentTheme() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) || 'light';
}

function setTheme(theme) {
    try {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, theme);
    } catch (error) {
        console.error('Tema ayarlanırken hata oluştu:', error);
    }
}

function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Emoji filtreleme ve gösterme
function filterAndDisplayEmojis() {
    let filteredEmojis = [...emojis];
    
    if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        filteredEmojis = filteredEmojis.filter(emoji => {
            const description = emojiDescriptions[emoji] || '';
            return emoji.includes(searchLower) || description.toLowerCase().includes(searchLower);
        });
    }
    
    displayEmojis(filteredEmojis);
}

function displayEmojis(emojiList) {
    emojiContainer.innerHTML = '';
    
    if (emojiList.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'empty-message';
        noResults.textContent = translations[currentLang].noResults;
        emojiContainer.appendChild(noResults);
        return;
    }
    
    const fragment = document.createDocumentFragment();
    emojiList.forEach(emoji => {
        const div = document.createElement('div');
        div.className = 'emoji-item';
        div.textContent = emoji;
        div.addEventListener('click', () => copyEmoji(emoji));
        fragment.appendChild(div);
    });
    
    emojiContainer.appendChild(fragment);
}

// Emoji kopyalama işlemi
async function copyEmoji(emoji) {
    try {
        await navigator.clipboard.writeText(emoji);
        showNotification();
    } catch (error) {
        console.error('Emoji kopyalanırken hata oluştu:', error);
        showNotification(true);
    }
}

// Bildirim gösterme
function showNotification(isError = false) {
    notification.textContent = translations[currentLang][isError ? 'copyError' : 'copied'];
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, NOTIFICATION_DURATION);
}

// Dil yönetimi
const translations = {
    tr: {
        title: 'MojiBoard',
        searchPlaceholder: 'Emoji ara...',
        copied: 'Emoji kopyalandı!',
        copyError: 'Emoji kopyalanamadı!',
        noResults: 'Sonuç bulunamadı'
    },
    en: {
        title: 'MojiBoard',
        searchPlaceholder: 'Search emoji...',
        copied: 'Emoji copied!',
        copyError: 'Could not copy emoji!',
        noResults: 'No results found'
    }
};

function setLanguage(lang) {
    try {
        currentLang = lang;
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, lang);
        langSpan.textContent = lang.toUpperCase();
        
        searchInput.placeholder = translations[lang].searchPlaceholder;
        document.title = translations[lang].title;
        
        // Mevcut içeriği güncelle
        filterAndDisplayEmojis();
    } catch (error) {
        console.error('Dil ayarlanırken hata oluştu:', error);
    }
}

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
});

searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    filterAndDisplayEmojis();
});

// Sayfa yüklendiğinde başlangıç ayarları
document.addEventListener('DOMContentLoaded', () => {
    setTheme(getCurrentTheme());
    setLanguage(currentLang);
    filterAndDisplayEmojis();
}); 