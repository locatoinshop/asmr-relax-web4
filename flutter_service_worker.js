'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "73dbf6a4ec5ea7cea89f8044021e0e2c",
".git/config": "17ed6222c144996c3b775a773ef3d069",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ce7f4a7609923b8e3f23ea019332abe9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-checkout": "ef678df1e004da305e21cdeead47876f",
".git/hooks/post-commit": "4d58bc5ca88e7330533771a694429974",
".git/hooks/post-merge": "675fe1c500a971841ba2e5abc1aeb579",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push": "a9399d70a31d576f0435e776cae4934e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15b793a84718fb5ef6d367b918f7fabe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/lfs/cache/locks/refs/heads/main/verifiable": "91188ef767ae3a3a42e92f1706f161d0",
".git/lfs/objects/00/af/00af55ad3d6f21898fe77e0ff092d1a1cda52c941b6860e9928d45c8af8c095d": "693635b5258fe5f1cda720cf224f158c",
".git/lfs/objects/27/21/27219af95f65000f56146d004f1cd4c61854269eed845a028e58878fe8b39a9f": "f71ea822b09394fd86b7d2762e4d5190",
".git/lfs/objects/33/4d/334df7798fccbeb8d3a750704a531dbda9b8529a6b32b9824a631e5e67ebc79a": "3a4d071122b8538dfec676b2567a62a0",
".git/lfs/objects/3d/90/3d90c370aa4cf00dc57ee2b902f6652147c0f81e03e483df584a9c08b1687c9d": "33b7d9392238c04c131b6ce224e13711",
".git/lfs/objects/41/d6/41d69e801412b860cf8b715d1c25f5e8be86dbe0483cd6c0085773f823358e36": "c8a7b54baceeb1e4c1ddaec69322a122",
".git/lfs/objects/48/3b/483beef4e11b7e3c392eff81bd2341dbc3162508345d775365d6775790107d77": "d7ca555dee708f57196661e89da3678d",
".git/lfs/objects/5b/96/5b96deff653e229163d08bb51e5f17f0831397fd17d4ddbb3d872642738ef9ab": "8331fe38e66b3a898c4f37648aaf7ee2",
".git/lfs/objects/84/60/8460b5f4299ca1ed677c5a54c8038ae9cf1f26f6e91966b1b767ca6cb6d2e5d2": "69a99f98c8b1fb8111c5fb961769fcd8",
".git/lfs/objects/90/bb/90bb36ae059243ff6e6bb49f9f275b37a47503e1bcbbfefe227d48a4c6f1841d": "f84dcbc74e78717caa66dc0d7fdd97c4",
".git/lfs/objects/ca/8a/ca8a64f5a38c60a4632de39763da568abdf5f29c708d723dc559adb06522dc3d": "8060d46e9a4901ca9991edd3a26be4f0",
".git/lfs/objects/cd/7e/cd7e03645bc44b2dd47b7cb626f51c4ecbf55a197ab77241628b47ac165fbe21": "dc3d03800ccca4601324923c0b1d6d57",
".git/lfs/objects/cf/4e/cf4eafcf3e13d0eef2b4ebf91fd23932ac57c5b1366e09d63ddfdae2237f5584": "d6d25c5b2f150b9ed85834f1041fe52d",
".git/lfs/objects/e0/1b/e01b61b394cf66a641bea87e3b4fe3787d372f636c8bc8a2a67438cdc29da6f6": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
".git/lfs/objects/e3/03/e3039d0a604a5e2ef146e49c837dd93e01d90f292d4969a73beb3000b63dbe8b": "740d43a6b8240ef9e23eed8c48840da4",
".git/lfs/objects/e9/7a/e97a3ac057e9d8c9e80b024f2d72c005d21a1f8d98e3e33f439f3744d544f88a": "a80c765aaa8af8645c9fb1aae53f9abf",
".git/lfs/objects/ed/5d/ed5d5920a9868a8b93d790a9aae4165a62962728d4abbec5a14f600d73c53bd3": "24bc71911b75b5f8135c949e27a2984e",
".git/lfs/objects/f0/61/f06162cfd8b1a64dc66d50c07b8cb5c54c64f4a46529f5347f748046057beca8": "3264e69b5e7d3c8896925759850723f8",
".git/lfs/objects/fa/9c/fa9ccf8e429631a461c7a7c644daba811a53463f78aa2ad023e0e9c81b815b4a": "40d68efbbf360632f614c731219e95f0",
".git/logs/HEAD": "8c02e6f9986aa56e72c6a667fc32c4f5",
".git/logs/refs/heads/main": "8c02e6f9986aa56e72c6a667fc32c4f5",
".git/logs/refs/remotes/origin/main": "301d0edde37a21b0a02d3a05d83f8c1a",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/eaa164bb1096c7ce1d986721df7dba581c5548": "0a2d14bb5f033665c79fc8f564f59e7f",
".git/objects/0a/83c70b73e5818387781f625c2b55ae78c891c6": "1d2f05956e7ed483a098df474293c157",
".git/objects/0c/3cf29a3114c405be3549177d267cbd9810b324": "b211d48baa4d7a009a67bfb8613c63c1",
".git/objects/0d/52f048bf4dbfbebfcfc82629e80e8ac4d0d7d4": "dc5c6b29fc1c35ed640311faeb745cc9",
".git/objects/18/11cbdd65eaf822a27ec3cb6c1f26a069e55a89": "41c97d834455b455c03193c04e434739",
".git/objects/1e/69bb4ff87543d4217d99cabac8aa5d245d0fa1": "81dd7f11feb119988e4c63d52ea437f5",
".git/objects/20/5d814e9e718c25cf895dddfcc9fe149e5c3962": "1888c205401361b2cea3c62fc9d50a1e",
".git/objects/21/a3d04f1bbda4a11ba10febf0ea57d235b5e8ff": "149f8fac2156e24024a5d913d1a00770",
".git/objects/2c/291b63c07373fc4d4947adb4690db40d9611ea": "9bce41d4a9ca5c9f527bf1c0b49ebd75",
".git/objects/38/2648ce5d9ee9db92f514640bd3e3ec5ed8af0e": "c54e0edcf19d4feeddd71f204d120539",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/b2b7e83a8c2d055ed1581df65092e0dcda2d33": "c4537be862b9b2fd059eeb667aaa079b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/e80fc71c0cb42ce8802d0a09240482b4aeb6b3": "fbbe214db9b16ca6d938a967da0c081e",
".git/objects/56/8b62b7baecb405bb00537a5a241fc43eba4295": "be124045708c485fd52f0397a8bcd934",
".git/objects/5a/ce3d9dc19348e07f7a882d6e1ecc372e16983e": "be8a466d676e296937120e10d0d20cd7",
".git/objects/5a/e3ea39402ee70d6f7bec24f726b7e56ea4ccb7": "48f06bc26b417463fd152e9fb0670693",
".git/objects/62/836aac93dd7f55d88706213b8ab45addaffc1e": "2e5f51673a0d3686430e9469fe381b0d",
".git/objects/63/2180f079c6cf454f7bd6a33a6e010d721d477c": "a028c16a83b13d86d5ccbc4c0a814ef5",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/7195cd5dadf2da9fc301dfdbc621b4bcacadd5": "d199023e1eb7677e7bc583b8e150082e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/77/c0909facc95fe328cc1f7268bbffe3ceb57787": "f04d78a30da8906e958c3077c1815f4b",
".git/objects/78/7dd7522fae8be791fe6202a12a0143732e61a0": "6f15b709706df4d9f45cc9add1f5eeb3",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/e1eca4df6ed9df9cc3c5fbebd17bceeded328a": "313671eb87cc1b40334e60f039f6b29d",
".git/objects/7f/4543e335b688c2643ed4276c6ede9fd7091ac4": "2e14ab8e9de3faaa2d3eec3cbca8141d",
".git/objects/80/b9100413640b6b3b94a8612f45a03dcac8fe28": "c28002aa32c7b646793c82f302f991d2",
".git/objects/85/4b602448740db39ac3439a5b27901342d6a9a6": "50e5c169c540833235b79cdbe42283e5",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e87ad0e7a4ffd73ae0c08bc4d3af0fe95162f3": "04abb249384079dc7f824d22e448331f",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/6615b052bfdcab03e278d3925990e27abb9758": "8c5c94cfa47b81538acb52d41b8d9a7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/42aaabef62e43714b90126387c3a0aed0762b8": "675a74ecdd6c622ff39bfa8b6a95f145",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/97/4e2b1629fb8cb648a9eeb6fb85189fd9345c1a": "9144c64825910fff040035e7ab567a18",
".git/objects/9e/0f3721153acc114f8f4453ca36b9fd565a7b63": "db47f689a382a8f6487fc2ec92b30365",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/d230188cfdd2584747f8f324b9983726fbafcd": "112fb581e996ba8df354970099c4a5ff",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/f7f4d6536b504df48f02c6c9abd0ff64882af9": "09e06d5c74251dd1084de4ff157e1d90",
".git/objects/b1/bbfa2352d26a8479aec51f287a5879b2d93339": "ff0c31a509a079b4235014e56ebae7c6",
".git/objects/b6/e5805511402f56ca64f29e095e96fa92562331": "9adb8060176096e8903fe8fae622badc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bf/9b32e8a804a2f58e40d70d6ffe6cb8da5ffc3f": "a85485daff8bb450408752d17a988cf0",
".git/objects/c2/0b81ab21b52ead8a6cc9b3870d5d105e32f946": "ea520bf990eacede8663d988b8092bfb",
".git/objects/c7/1a91347656d88cbdbbdd63961d2777c78b897e": "45258aa75ae5f787c5f8259a61935130",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d0/8987de798a07f48a8504ecfd1c5ab7e2c9d981": "13e15582065c4e4b870b950068379624",
".git/objects/d1/6e722656db39b13d4815d0c590cf9aa9370cca": "2950bc407cc92748a105a6bcbde89550",
".git/objects/d3/a60602a90f7885e777700a0729d905e7f5177c": "79940eb01ea812f20ab53a09bb475237",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/5c4d70cf06d0b68707241e69ee71e22279188a": "4ae8f98f76c4d0623662ec5944f0ac68",
".git/objects/e1/86cf50d1d2a8be7c93f4ba662a1e48d72a77d4": "c920b44c9599fc16490dbd15e82eab97",
".git/objects/e2/3994c75baec8323f56d5cc71989d4ed9a5e331": "5b7350f8c31213cd7704bc8d139cc583",
".git/objects/e5/c7b3ecb879df3b77161a0517344588c0c85c70": "2d9ff2c070bb3db26da15d21b646cfe0",
".git/objects/e7/f07a0487955be06de460fc1ca28624d0f90606": "eb7043851d4ed294bfc8c6b14b4f2ada",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f4f29d28993c34ba8de1791c3b655cc5e71256": "20e2b8a7e880666c60c43aa802f4b0ae",
".git/objects/f2/55be1cdb17a95dd55cad35d82d5d40962dbb5e": "bbec87ab845185a74b5a87a2cb9c47a4",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/bf41708a5ab7525d7d19df97b5ee08e0a865bd": "b3454ca6147875015c90603aa287eeef",
".git/objects/f9/16a433bd40dbd99d8f1817d475a0a56b9ce871": "0df1cef158721c29c37ec6d3a3c0bbc2",
".git/objects/fc/d9619fe7489d4d349e8b8c0dbff898a500c954": "aa17582e956265945056012e0f65603e",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "d1629c10f748ea3bf51eb00d881aa0e2",
".git/refs/heads/main": "ddf85661e66aff4d121db464652c4c32",
".git/refs/remotes/origin/main": "ddf85661e66aff4d121db464652c4c32",
"ads.txt": "5e8eb818ac514ea3037fdc755a32e814",
"ads.txt.txt": "0d20dee7c819fa08354877f99590eb33",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d7ca555dee708f57196661e89da3678d",
"assets/NOTICES": "f71ea822b09394fd86b7d2762e4d5190",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d9f9e591c7616c9bd333ad2f9c6300dd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "66e04a2e02958cdc00074cd1a9f54559",
"/": "66e04a2e02958cdc00074cd1a9f54559",
"main.dart.js": "d6d25c5b2f150b9ed85834f1041fe52d",
"manifest.json": "fd90ee5bff36fc585a6c8f29425ff1c3",
"version.json": "bc50ca14f6579ef967f7bcb7bb92b306"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
