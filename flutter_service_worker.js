'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fb2affb87beb512babbbf63c7881346b",
"index.html": "e89a79577010a816303e09318105028e",
"/": "e89a79577010a816303e09318105028e",
"main.dart.js": "6552b14ed770ff5a551c8964658c0e36",
"icons/favicon-16x16.png": "25210f4bb8095faebd2cc4cd609e41b0",
"icons/favicon.ico": "f5c3d2e85be33dfe812ff3dd51bdfed6",
"icons/apple-icon.png": "913b498ea515de7cd056992e8f48e71b",
"icons/apple-icon-144x144.png": "5f0c4c72f04b28a14546a7a261f3ba7a",
"icons/android-icon-192x192.png": "2d5568f61d9b54d297edfb0411cd3390",
"icons/apple-icon-precomposed.png": "913b498ea515de7cd056992e8f48e71b",
"icons/apple-icon-114x114.png": "c73352cf16ce46c6bc62a41137fc9014",
"icons/ms-icon-310x310.png": "394f5efea6bf91461a535d0583015e4f",
"icons/Icon-192.png": "556263c90fedb3be73178caa9d7606dd",
"icons/ms-icon-144x144.png": "5f0c4c72f04b28a14546a7a261f3ba7a",
"icons/apple-icon-57x57.png": "8d83f19882f567692b44798150e92739",
"icons/apple-icon-152x152.png": "ab15a55668d7cd824c0c51f922599370",
"icons/ms-icon-150x150.png": "80bd12ccc1e3cf4633877a55ced3c7ad",
"icons/android-icon-72x72.png": "1d7f75e45b95a6bd80cb9a7352bdb2ec",
"icons/android-icon-96x96.png": "8d913409e16b983ba3ee196d00beda88",
"icons/android-icon-36x36.png": "fbd9d2371185e8e808b30ce51528c0be",
"icons/apple-icon-180x180.png": "dfafb951591cfb029d990509bad4f40d",
"icons/favicon-96x96.png": "8d913409e16b983ba3ee196d00beda88",
"icons/android-icon-48x48.png": "030042d0fecfde7c5b6b9f26c3a93d32",
"icons/apple-icon-76x76.png": "7debf06cb30b7cfa7f69389444cea9c6",
"icons/apple-icon-60x60.png": "ebed5a5aa476fac23fdeb7424219dcc9",
"icons/android-icon-144x144.png": "5f0c4c72f04b28a14546a7a261f3ba7a",
"icons/apple-icon-72x72.png": "1d7f75e45b95a6bd80cb9a7352bdb2ec",
"icons/apple-icon-120x120.png": "44aaa45691c9f75e81ad4d4df5e952c3",
"icons/Icon-512.png": "556263c90fedb3be73178caa9d7606dd",
"icons/favicon-32x32.png": "1bdee1e637a8199dd51239f4ecc32c2b",
"icons/ms-icon-70x70.png": "95f784a5443090a858f9fa3142295bc0",
"manifest.json": "75616c1d39073cfd6c2a01c94541bde4",
"assets/AssetManifest.json": "b7220d9a4ed669880029c74de9b489a0",
"assets/NOTICES": "27c06cdf72e81e88fc6c3709c6d10cca",
"assets/FontManifest.json": "d93cf57ba69ea2a384456a2c590db903",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/eLearningIntro.png": "cd16ba989eb834964b03e7b564c0dc13",
"assets/assets/images/success3.png": "7bb93050305f450aa086ba4d9cd805f4",
"assets/assets/images/guardPassIntro.png": "2e725f259d1af9699271ed76bf44ccec",
"assets/assets/images/mockIntro.png": "833ec3c42e94d2d7f7813ea5e394f4c8",
"assets/assets/images/signupbackground.png": "3e9313dfd23d3c97761497aed3179cbd",
"assets/assets/images/licenceSIABackground.png": "43ce3e7722410f556919b069c822ccb1",
"assets/assets/images/courseSignInBackground.png": "1e0a0a5842717d27ea3e22a54b1a968b",
"assets/assets/gifs/successAnimation3.json": "da4413ceec29dfcb7d3451a0e728bb87",
"assets/assets/gifs/uploadingMedia.json": "47f5cf875bf8e9513df36d61603c0622",
"assets/assets/Icons/copyLink.svg": "47988665f6ab860db9e2e351fd992576",
"assets/assets/Icons/search.svg": "34b3e2c4c3dbc062c6d6d8ce080265d4",
"assets/assets/Icons/shiftSearch.svg": "f8e46be212b83a45f23c4794cb83a8d6",
"assets/assets/Icons/filepdfIcon.svg": "42072a157c2fc8026f8fe99f187c0e71",
"assets/assets/Icons/errorIcon.svg": "45d9cc5c359bb81f34ae48b5a72b4139",
"assets/assets/Icons/playIcon.svg": "d521f631dedba50b09da6263eb7057e1",
"assets/assets/Icons/whatsappIcon.svg": "2345721d352c7423ab4d5c62630c294b",
"assets/assets/Icons/wrongAnswer.svg": "ef099d9fcf73f6df07d0020d6b1640d5",
"assets/assets/Icons/deleteForeverIcon.svg": "4005f0db9fd168b977cf09aa7007e4f5",
"assets/assets/Icons/markerIcon.png": "5c37145f4ff5f5a13274a6025b608dad",
"assets/assets/Icons/checkBoxFalse.svg": "afdfb252ffce83da2cd1ad908efc4fb4",
"assets/assets/Icons/smallScreenVideo.png": "fd1173ae8b16335dc22c7f3f9b9069db",
"assets/assets/Icons/correctAnswer.svg": "9c7c1bb83eac87ab2bbc1fb6671b3322",
"assets/assets/Icons/jobLockIcon.svg": "e266425dde447004fef2b40594c961ca",
"assets/assets/Icons/verifyLocation.svg": "ee32ca68524192e011f0b76ac0028cd6",
"assets/assets/Icons/briefcaseIcon.svg": "f6dec886b3c07142fa4ccda9717ba355",
"assets/assets/Icons/courses.svg": "7dd3373370a7ad46ac120b3f4f5aa341",
"assets/assets/Icons/shareIcon.png": "900fcf9f1f1a6b7c61e4c214da7cfbc1",
"assets/assets/Icons/nCheck.svg": "d196b78cd6236d2c1aa58b7ffa0f70f9",
"assets/assets/Icons/circleArrowRight.svg": "9f180e9031924413e29e9892b5749e18",
"assets/assets/Icons/bookPDF.svg": "d2efad81dff609c5818c9f467ad2ad85",
"assets/assets/Icons/partOfGetLicensedLogo.svg": "a62e4f7fa292f933d814fea1fbf0dc77",
"assets/assets/Icons/profilePicture.svg": "02c9e2ae6ce6d64b574054aa3a6dc03e",
"assets/assets/Icons/lock.svg": "6c5c90b4d200c10546611e57e5cd92b6",
"assets/assets/Icons/widgetIcons/nonSelectedRadio.svg": "8e5ed6793f8f422160d55ebed2d63a2b",
"assets/assets/Icons/widgetIcons/selectedRadio.svg": "0bb528117acccb85b684914cad497b29",
"assets/assets/Icons/appLogo.svg": "cf1f65b2302424a2178fb3e3b697d062",
"assets/assets/Icons/noteRevision.svg": "315c001e70eb6e237fbccec8e753177b",
"assets/assets/Icons/profileApprovedIcon.svg": "5c19b74fa0a260904b179a9353750650",
"assets/assets/Icons/shareIcon.svg": "934358d813232fd6e2964db5ce9c1130",
"assets/assets/Icons/chatLockIcon.svg": "d5f3e40618de345a388307414a4d499e",
"assets/assets/Icons/durationWatch.svg": "2a5db72a29cd9a5b3b4aae44fa6328cb",
"assets/assets/Icons/businessShirtTie.svg": "0386b5a8a717600dee955b41b0da3686",
"assets/assets/Icons/productByGetLicensed.svg": "ea406d02a8749732e6d947fe117df439",
"assets/assets/Icons/badgeLicenseNo.svg": "9b81d679f11a6754f507a9fc192c4ad1",
"assets/assets/Icons/congratsIcon.svg": "2c4591ba520e9e675b4822d1a7fd1a04",
"assets/assets/Icons/internetError.svg": "5bd44bbf108d1b766ccc6d120653299e",
"assets/assets/Icons/imageYourSelf.svg": "b9c4ae545280eb6df110b6c04df78c44",
"assets/assets/Icons/starShield.svg": "149a16082bbbf839b27915093a555ef6",
"assets/assets/Icons/refIdIcon.svg": "cf088f756252fc10a89a145e9c9c750d",
"assets/assets/Icons/timeClock.svg": "421ce92ea25879d00b2a5aeb7d50797d",
"assets/assets/Icons/smallScreenVideo.svg": "71d2ab6b61c1aeaa227a8ca48457b16f",
"assets/assets/Icons/lockCourse.svg": "955c3ba9380a0af2d8349333642697b6",
"assets/assets/Icons/unSuccess.svg": "5637499e020ef1c3304c4e74d64ab29d",
"assets/assets/Icons/chatIcon.svg": "428665fde8bd400fb76e0af9790c5751",
"assets/assets/Icons/forwardArrow.svg": "528263fab751e29cb3b4e4d09fb0e055",
"assets/assets/Icons/faceRecognition.svg": "4a3f2c3950fdfd02baeb439f9d2952dc",
"assets/assets/Icons/email.svg": "3b8c37dbd0c719b894a05cc8e6ca5607",
"assets/assets/Icons/educationIcon.svg": "5ce2465f19ab0a0e6b2f15983ba6f7b2",
"assets/assets/Icons/dairyIcon.svg": "0fbc5783b1b94e771d6bcc6f2946fd35",
"assets/assets/Icons/checkBoxTrue.svg": "ab9bfc1ea03aab7f9207ccc0c6f8ac50",
"assets/assets/Icons/siaDoc.svg": "61399563b20ff17ff048d323ebb87dda",
"assets/assets/Icons/shareMore.svg": "12d09f426b129171b90682b1dbd0370c",
"assets/assets/Icons/warningIcon.svg": "7ce125a5d04f86cd2ccc08c9d214fe49",
"assets/assets/Icons/businessShirt.svg": "21e049029124b91d9f54fb71f8dd3ab7",
"assets/assets/Icons/radioButtonTrue.svg": "2b5f11efd3fbedb54a188d3170b9e3ca",
"assets/assets/Icons/logoutProfile.svg": "7e8515db4d8c0ef9758db373095ad11e",
"assets/assets/Icons/mockTest.svg": "25b7080e56f4475eaa05025637f7e6cb",
"assets/assets/Icons/shirtNeckDark.svg": "eac3c68b7c3cba04be5b9d47b4f32c0f",
"assets/assets/Icons/licenceBadge.svg": "32a2601438434d4ccfe30ac65c9876a4",
"assets/assets/Icons/emailIcon.svg": "11e8813d98a1e7ca7642c6c273a59399",
"assets/assets/Icons/notPassCourse.svg": "330473f0dbf0de5c94adc46991ae04bd",
"assets/assets/Icons/unlocked.svg": "c6a3831ad117a659a0247420d74997b4",
"assets/assets/Icons/locationIcon.svg": "eee52849d78d48522147aab99bb46f1e",
"assets/assets/Icons/settingIcon.svg": "e0320b79147fbea26da31fea020ce765",
"assets/assets/Icons/cycle.svg": "286672a5a105151a49820be7a88ebaef",
"assets/assets/Icons/protectLogo.svg": "4d3066eddea98c1ea1cfc6175e2fda80",
"assets/assets/Icons/backArrow.svg": "e216cd579251e9e6b3b56523c92be028",
"assets/assets/Icons/lockIcon.svg": "8f92943eab3b2ba26200417df2ec7e97",
"assets/assets/Icons/courseWorkVideo.svg": "7ff10adc72c329710effde8d36b482cb",
"assets/assets/Icons/radioBoxFalse.svg": "33edbcb7261c008a44bc201dafb1138c",
"assets/assets/Icons/passportHuman.svg": "4a3f2c3950fdfd02baeb439f9d2952dc",
"assets/assets/Icons/emptyIcon.svg": "3feb0b415dabc4f38c28924352906677",
"assets/assets/Icons/fullScreenVideo.png": "4421e0c498a59275d65f35d5b224275a",
"assets/assets/Icons/passCourse.svg": "0acbad377813696b35267da28c03a063",
"assets/assets/Icons/shirtNeck.svg": "21e049029124b91d9f54fb71f8dd3ab7",
"assets/assets/Icons/penEditCircle.svg": "fa52358bbc5131a4bff93018bd0fb04f",
"assets/assets/Icons/searchLockIcon.svg": "d0c27da44d9ad7478b1d89a104c0d92d",
"assets/assets/Icons/decoration.svg": "b3767c9dc6c3d3f9a5516ef22942f084",
"assets/assets/Icons/companyLogo.svg": "05fac6771cac1750247bdd232e3d86d9",
"assets/assets/Icons/forwordButton.svg": "6798b5e18ec556668b33abe8d603f7af",
"assets/assets/Icons/success.svg": "42438ef8cd6d74f422daec51b4294d21",
"assets/assets/Icons/penToolIcon.svg": "464699757f0162780d6e8f7c0e26f35c",
"assets/assets/Icons/fullScreenVideo.svg": "8716acca823e6d746e7a6ffc74e8651d",
"assets/assets/Icons/shape_arrow.svg": "645e65d8924fdba38a72f7bed66e2757",
"assets/assets/Icons/penEditOutline.svg": "046cef90f7ba70c7a342d60e50235a4a",
"assets/assets/Icons/profile.svg": "3afcbad28d383648d2bd7ba4e5561331",
"assets/assets/Icons/logoutPower.svg": "ead1e5f188bce64eff4ed39971e508e4",
"assets/assets/Icons/checkTrue.svg": "4e3a27319cc205724d43044c001f8d1a",
"assets/assets/Icons/remove.svg": "0d35fcd9a3bda110b00918faf0d05357",
"assets/assets/Icons/addIcon.svg": "3e6b12575c011e4bfccd724cfa2b9b36",
"assets/assets/Icons/paperPlaneIcon.svg": "e2831d17ec89c1b0b25e77e2b917459a",
"assets/assets/Icons/calendar.svg": "c53c57163dcec33b5e3191589b4e6507",
"assets/assets/Icons/mock.svg": "278c53ffe1a021cc483eb96857dea3d6",
"assets/assets/Icons/courseBook.svg": "a686080f91c8987380ff01c7c9af92cb",
"assets/assets/Icons/penEdit.svg": "ac8c29dc9497baa41fe74c2bd2345140",
"assets/assets/Icons/facebookIcon.svg": "e9e6c490046ff4947562a44e252a68a7",
"assets/assets/Icons/eventConfirm.svg": "78d6e3531a2a4b48f3b0e1db639646a9",
"assets/assets/Icons/privateAcc.svg": "f18a9fbd533bf5b0835e4b562fe44d37",
"assets/assets/Icons/checkFalse.svg": "ed0e449d1a84797823e0e6abf677213a",
"assets/assets/Icons/mobileRotate.svg": "1b53f261a8725aaf37ead12c8b4e01e4",
"assets/assets/Icons/downloadIcon.svg": "4e3e54129ea6fed644ebd254c58555a5",
"assets/assets/Icons/startIdentification.svg": "e46ecd1892636f8df9d7a5a00264dd88",
"assets/assets/Icons/companyLogoDefault.svg": "348b81ed2f7fb9350a8399613571212d",
"assets/assets/Fonts/Gilroy_Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/Fonts/Gilroy_Bold.ttf": "889a4b5ce3a780faedb74390fc49a07a",
"assets/assets/Fonts/Gilroy_Regular.ttf": "22d25e11ebe6b43e5a9bc87d0a0ccb61",
"assets/assets/Fonts/SF_Regular.otf": "d4550c5e326a628ac8ef82e9f2703484",
"assets/assets/Fonts/SF_Bold.ttf": "00004807645e595b176434f1c0438591",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
