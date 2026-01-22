'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "0cd93913e9fd410f8ae56c2845923488",
"/": "0cd93913e9fd410f8ae56c2845923488",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "8fd927a910c4a5c09495913d3975e710",
".git/ORIG_HEAD": "dc57c0742bddd252e7f07cc99ab1e644",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/packed-refs": "275427b15baf58201c43ce2f666cce9a",
".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "1a6f9f13ae0b42a0ad2cce29b56eb002",
".git/logs/HEAD": "845fcc9f3ada79a56f04681852cf7e13",
".git/logs/refs/remotes/origin/HEAD": "5b40e3a97e1c2425491065e0509b9192",
".git/logs/refs/remotes/origin/main": "dd2579e7977849883e4da7fc9812af48",
".git/logs/refs/heads/main": "90a8b813c22d23ae034a83e99f335105",
".git/objects/82/2b871292c0ca1619a523eaf16105a201788f2b": "a5da12b82115e369bb937b4db7bed817",
".git/objects/ce/cf28a0098a43f6d3d681f07988148cdde62fe7": "15f9b7b419a0064d0923966605859b0e",
".git/objects/24/d28c6f486e56681c7a0040d07640d73d53d643": "5ed5a4b98b2aab137717436d469c9ebd",
".git/objects/60/7c667263eae26d50cb0d249c972506ac1f8b26": "38a724f44e67c672de2e69eff7a88d70",
".git/objects/0b/00c8e8132f67aac847810bd447dfd4c5f9df0c": "fdd8a3d6b5844710525c76f91abd669c",
".git/objects/ad/7d53454ef6b4879c1d70fc63809ae866946c10": "c60bd64f4d74b58f5bcfa8f75825c535",
".git/objects/e9/000d91df195e0b72e8e446f29705c6a878b527": "9be9d43989ae114ce58efc19112f4a7a",
".git/objects/bc/46817c2af573479840559ce1fe9c0d9aad1f7a": "354375e2ef166a89249f0f1805919416",
".git/objects/bc/3f296dc9fbd788010a9a74b3e98af22815b803": "0c91af8c6ac059484672e7e50c4756b3",
".git/objects/8e/800739c00763ab07dbb5c1a3f10c57e450ce08": "f3cee5004e372bb6d0d3f61ac0ea1783",
".git/objects/64/488fd0a035655c1a3858821e6b6becac0a503b": "40a0c276771a08165a41a88feef73648",
".git/objects/af/118281f0e9254658d4988a460d2be3df9ffb93": "db137edc1440387a9ac7b27556567ee2",
".git/objects/af/b47e45a0d5fa3f1ebdb6e66a460c2de98846be": "3b98546707a7b1803ba1d0f128e4e41c",
".git/objects/a3/6705e3c959e210dd82ffa6c16d8987a8f18ef5": "2b14e16a757b3bf06168182ce068c0c0",
".git/objects/8c/6021c7a92ae57b0cdfae004e67e909ca9ac7fd": "559760750555f7e9e630263bb441ae07",
".git/objects/8c/551cd9d0dc368aa981fc9afcfd5018371f1cab": "917607a5648a919e2d3e5a48573cc0b2",
".git/objects/a7/817154c48f491a102882f4f29f37d2e953b54c": "43f96f8183a9806db982bf9adae3c167",
".git/objects/a7/164dfa9762df74990a06ef022b3e5a91a18aca": "8b2f9e51f6e5deeb813e9684ff4754cc",
".git/objects/f5/8a0ddcbda2d6080cf5e6a02c80dcb1269c8765": "90252a285a1fd4e9604bf9c3f158724f",
".git/objects/4f/35764afd47aab7798abd5547c9ecef5674f598": "26cada8e024c51a2edb62732605cf97b",
".git/objects/ab/6f73ec6a6a756e4d5731750cdfa46e988f3faa": "8f360ecc5bf9e068b253e667469edc69",
".git/objects/ae/1cdfe1beba2f5be905a065a21b15e7f8d84c36": "23022566006be91fc073936a8d94889d",
".git/objects/ae/bced86196bda4c44865ac5627ce796d203183c": "ce804f23921276cd7a66b4081edd9e3c",
".git/objects/f8/0f9a3392176ffc260084f139e8dc5dc9303b7b": "14c1d1bc2f9c5a58f086042193bc5c39",
".git/objects/f8/637697ff8e95343a77f328c062602a6bb9f726": "7ed6198c3df7acebd52a85e4a31418c8",
".git/objects/f8/2ab227ad0033e3629d522b4c318515eac62ab4": "47be5245173f9dbdcf4cbf39d463ea1a",
".git/objects/c7/8a2a1825d1eabce9d823dca233b44cc137fd8c": "92dada9ffd94d4effb349823977a173e",
".git/objects/c7/6f217f772bcca962e7b9fa8bd1bf68a4ea6b2e": "81a40abeb352f7ede0c827eb4078486f",
".git/objects/07/02d801c947255f6e5902bb22eb273955812cc0": "2c9bb09d9ad058b61dc6c843dbeb1bfc",
".git/objects/e1/e9c47914bc59166660992d93025df90f829f84": "d30729b690390c249b020cfc8c774e58",
".git/objects/76/7b34b2f680aa06c5584d2af2e2998886e8cee8": "21fe04dd2cb1affdeaf9c3d945812ada",
".git/objects/93/021818ad0c9427305a9d082e3eb9740fd98cfb": "3463cdcff8b5df0920f3cc6aaee37d68",
".git/objects/e0/5666e45d2a182557b8959686f345fe7fdf6070": "c5a74f283861c1bab95698c5daaa5f76",
".git/objects/7e/2c4e643a888ee88618bb712c9a5ba3cf1422eb": "44cece246502ab81c2efd7352888b000",
".git/objects/c2/9b3443bd1d62e87bc7d9854747b30582c12d5a": "4b6657fa0043caa8df132807ded81492",
".git/objects/e8/dafa658702052a90b46460ed5474f9af56010a": "15cb82dda9cc7c9d0c98786f0fb5586f",
".git/objects/a9/a09c1575bbc92582e5d667fe4ee336fb2dda58": "ba3562a67309cb49f95bb53120c34b44",
".git/objects/34/0c594a71ea153b89ea028be042050754ef2b90": "211be6e69837027f06299499b447f7c8",
".git/objects/be/e5e6207bbda00175ea543beb848fc1b30b9792": "f4fc8a702291decd03d4beaca9d8c956",
".git/objects/e2/55c5c738921d50b7ffb827c27ecfe1cddd9d6e": "0909849db02e2f1adea407dea4abb365",
".git/objects/42/c6abb1d3e1d5d4d816d47d9b1ab405cfb6ca6c": "cc1aa480755d7105f3a237a8752ce228",
".git/objects/75/156c087548aaa858548f008953cf74165fed6c": "2d71aed2cb5e0a4374bf28ef44f171bb",
".git/objects/4e/cfce3ad90673dcdefdd090766c73729b486407": "9f1ee1d27b3e6c71cb20a13c28ae1deb",
".git/objects/pack/pack-855ae4cb18aad474492f03a767b0af3e31de998a.idx": "597ba5f6cecdd36011de6001d57b5b30",
".git/objects/pack/pack-855ae4cb18aad474492f03a767b0af3e31de998a.pack": "e35818d028e07c1c97394f896554a2ce",
".git/objects/pack/pack-855ae4cb18aad474492f03a767b0af3e31de998a.rev": "bd62c2938e00ee0a5c4f8df52e8d490b",
".git/objects/19/89d247de4b534118ee63a1c6b43efe72a69ba5": "dcb130e17b4d5f95f493dea4dbabcef3",
".git/objects/7c/fd146c2b815daaf7a29ce36a4b0826957d7464": "20464f9f4015d2ffccfbbd27f460273b",
".git/objects/cb/a27fd93e4dddaef5d1e5ad55557e2e8ed47beb": "53f07fc901f4260135317e6a3756f56b",
".git/objects/e3/583982363807d135418bb31b3514fc4ee5353d": "f535ed2bff0ea392d63e74f9875a9d04",
".git/objects/78/582f8b3fcc54ce23c823ea7e9af6e0a97d630b": "b80befa098e4f419dafe5a36f778a06a",
".git/objects/6a/8ba5a733feeecf82b3e89aa9e080ac4a4129da": "a02f83c5cb9354631cc2faf8716274f1",
".git/objects/72/1baf28dc2b0b79a43e8889752752225c635c99": "8b1a4ae9459513743ec5148b003c3c93",
".git/objects/ca/56ed8fd961ea589347101a42b5597a47683f89": "6a6571a95ea38301e11eba6496127de3",
".git/objects/1b/8fda4ab43f480b8f3562f3c0eafbcdce73fa08": "48f6242bba5cc0e06b87d934c153714a",
".git/objects/aa/19c2ad70f5e20a2bd6ab901267672eb12aa720": "a5d58ae9c8dd5862bbf4fd2f336e2eb8",
".git/objects/6c/841fd76f78aeec5d82e4a9d005b7a1e9b9e9cf": "e991f5adf15d101830b396aec5e0f935",
".git/objects/3d/2b21621721a4c10f58ad7f5ca3c53647a6f44e": "c6f07369e4076f87096bffda48e1c3c0",
".git/objects/4d/274a77c8dd517bcc1af4d6c1623cd140f06f46": "22f2bdb8d4ede13f177a43a043bcb6f3",
".git/objects/4d/da1dfd857b905e2314e321e3a7fbc44f36b9e3": "e0ef4f92935a55ca69e7e1a921f9f712",
".git/objects/56/d649187ec389daba1df0b132840824aa4d6d68": "168641a0c8b0fa65b27c65e44f5b99d3",
".git/objects/56/9601a97f204d876f90b2c4af71c9b37b676bfe": "4b5d40910305e2f1d0c52364696aa878",
".git/objects/59/2f740d400ad8c3292c6ea3d7d56f094ea2fa9f": "8314dbc556f82bc3e3204b20016d77c6",
".git/objects/59/c6ae4805755a7ce5918e1a3e30363f0986f589": "ab4d17e57e1431935f8abbc235055044",
".git/objects/d9/6ded912f397718031a8c1f5e8ffd2092c3680a": "7d10781b4437e7d106bafc82046ebb18",
".git/objects/68/2803e74406efc70ef4d8730376c6f4530046b4": "6dc9cb6ce4e1ce52fb4abbc3e4dac566",
".git/objects/b4/f5f2c2d8fc29f95ed89a659ca8b02bd4ac245b": "adb1f8978aef7f7cb8c2b2b9ef31323c",
".git/objects/37/416fd047d9da051971f80e6e2050bff6353271": "313d0d85c8ed5976d572a6dab9011e88",
".git/objects/37/be8a863e52ea6f12a677483ddcee8ddc55495d": "807b3a6f262664462ebfcfc7560a5977",
".git/objects/0d/4e8347732140a50e8dc2d229b5cce659f63700": "0e2e5d86b99f42c3d6f3dc806121849b",
".git/objects/04/f0749348ac5e3509a66e99cc23668b70ce6544": "65d469fe53207e12a415eed727fce88b",
".git/objects/4a/02fe17c2980f2baa412e5d8428040ac29f546f": "8329eea2a7693aa625344fea4572556f",
".git/objects/73/eeb994475b81c95b121503933eec09d595510f": "f83b5ddd9d25371f8902f5cccf30fadc",
".git/objects/00/23337317a33a8bebaa9f4b38d569e93ec40f85": "4e90969a89b25f04953031929b5bc45a",
".git/objects/0f/2c3f6bb4308bce09d63adae32733ac147a73a1": "33cfd69e871e4feb204265d19bb854f7",
".git/objects/b2/6666e720f07c25a94296a49eb15c7e93ba646a": "504259ddf9daad6b0db7be79f8c96000",
".git/objects/b2/c0329654b9aef78aacc6d0454436dc7433fd67": "672831399ffa7f3c7f38660bebc0f687",
".git/objects/61/c03c1788f09a83966386962ec4e2673e4f28e8": "49ab2b1b1fbca5e3e5891a6e8a88d861",
".git/objects/62/f510b2a40e81806da47269d1a0d7fb10704d69": "53db0d0a6a92d27e77ad559290e5b0b7",
".git/objects/23/92a7f45ebef931e89cac50b6c4e6190179bc5a": "0f945342648d406c10aebd1aa10004a9",
".git/objects/49/c61778685643f29b57ac69bd04e72e4fc9280c": "ba6d183301e4a8204d084660874df2ad",
".git/objects/31/40bd5f55bce0e8f79161cd2c727be6f4d91e1c": "ec24a1abddc9442b80ff3a6138919d65",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5cfbe70e11cba0168ed4b2d4f1e12d29",
".git/refs/heads/main": "5cfbe70e11cba0168ed4b2d4f1e12d29",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"manifest.json": "7cafdd3f5319a8be369451d302bd33af",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed",
"zmm.png": "68f7db12f9f31c98e231a03e059da2a4",
"main.dart.js": "b30bc691e3d054f1a3e17e98febf349f",
"flutter_bootstrap.js": "d568119490eb06816af36e112922239e",
"assets/NOTICES": "e848b81cdb19f01007e15173af45e58e",
"assets/AssetManifest.bin": "cff4091dff7c2e4d249e4c0407bab6d7",
"assets/web/index.html": "cb11689acea9d6c37f8e2a306b7a408a",
"assets/web/manifest.json": "7cafdd3f5319a8be369451d302bd33af",
"assets/web/zmm.png": "68f7db12f9f31c98e231a03e059da2a4",
"assets/AssetManifest.bin.json": "7959b65c61b4dc8d5ae173c4aec47c0c",
"assets/fonts/MaterialIcons-Regular.otf": "ff8f589e4c551086095c37d596f72d91",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/ml/ml_food.jpg": "925f1a8cf5a430c1071be463853cb92c",
"assets/assets/images/ml/ml_login.jpg": "f2c0a8936457b1629520d70247ed05b0",
"assets/assets/images/ml/ml_flash_sale_product.jpg": "3098526dd9d48ddb7a8d70ecda94c7ee",
"assets/assets/images/ml/ml_order_first.jpg": "c91d4bd1ada52678a7f023e51c43a6e1",
"assets/assets/images/ml/ml_order_sec.jpg": "7773b27097d5601512b9e2ec18462534",
"assets/assets/images/ml/ml_home.jpg": "e52bf3f5830537a3fbe3e8df35678ebe",
"assets/assets/images/ui_only/ui_only_home.jpg": "a1fc1494a73295f4f902736fff6269e6",
"assets/assets/images/ui_only/ui_only_setting.jpg": "0c10c37eb54193d341a7cba19146f304",
"assets/assets/images/ui_only/ui_only_all_chat.jpg": "d2589dc57f144413993594407c1d8dc3",
"assets/assets/images/ui_only/ui_only_chat.jpg": "21dbcd04787f67c5a7deec141fd27dc6",
"assets/assets/images/ui_only/ui_only_my_account.jpg": "db0a31c9f97adaca0a5a011d6597eab4",
"assets/assets/images/sas/sas_grade_list.jpg": "8f8f7b674e8f8b1431f29ea9145805b2",
"assets/assets/images/sas/sas_student_list.jpg": "5567a35bc6df938ff9aa14c2af6b9f2b",
"assets/assets/images/sas/sas_student_academic_history.jpg": "12a74d546516c5eec143a46e26dce3db",
"assets/assets/images/sas/sas_student_academic_history_dialog.jpg": "f1b1023e149f1b95ffe7e7107d49f392",
"assets/assets/images/sas/sas_create_class.jpg": "dcf991ef8b7fc2819e9343a60b18b0c1",
"assets/assets/images/sas/sas_update_student_registration.jpg": "8676abaa767fe9f03ae42fc001cf5d64",
"assets/assets/images/sas/sas_create_grade.jpg": "b821315832e9aa9b09cc5c3f09b0e30f",
"assets/assets/images/sas/sas_class_list.jpg": "039802c6e50f029ca2d6dbf450f60b21",
"assets/assets/images/sas/sas_login.jpg": "05b1cff476030935b7ba489365552089",
"assets/assets/images/sas/sas_create_student_registration.jpg": "f4744880d3a45ca9956c5e389db54620",
"assets/assets/images/sas/sas_search_student.jpg": "f8e2365d5fc131ed2606b5b5cd582512",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "8d0acfbf774979914d3c0d736f4be13e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "3e6b1fd85b2f5954c2802a0587403155",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "8ff80e9d785a642a145f0a6d7d2428c6",
"assets/FontManifest.json": "efa9c1706c54a1533b7292b2b8f4d3e0"};
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
