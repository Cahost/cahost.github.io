/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","417d007f890a100982e066fd6d2a0dbb"],["/2016/07/03/搭建/index.html","ca6888a217e7d05e63e7856e94e387ac"],["/2016/07/11/工作反思/index.html","332483683d59d451a32d2b8b7c922031"],["/2016/12/11/omz/index.html","016981827fe4411195684cac97a8b326"],["/2016/12/19/2016-12-19/index.html","b981a70a176e8a289a6cec6a7d22742a"],["/2017/01/21/2017-01-21/index.html","3d16542799e6a7b78d997a37de230264"],["/2017/04/21/2017-04-21/index.html","00ef73a7dea4c6455b9777c4a2868812"],["/2017/10/12/理一理思绪/index.html","29993e9d38081e16cbbed7e0a3367065"],["/2017/10/22/又上了网络营销的当/index.html","718badadcbb6f7c9573a5e254d3eaaa1"],["/2017/10/23/2017-10-23/index.html","0ebe20f7d36fb58bb18a08fc226a5def"],["/2017/12/02/2017-12-02/index.html","94a1d64c4a11d8cd098858587f29bb5b"],["/2018/02/09/2018-02-9/index.html","686200fc32f6b79e4f85bee8d905699f"],["/2018/03/18/2018-03-18/index.html","55bf0751c344ed179f8731c200b6d5ab"],["/2018/07/28/2018-07-28/index.html","468e258768fb1909ca2accc8d7ba564b"],["/2018/11/05/2018-11-05/index.html","09ab4e55c0e6ede2f744af22f71b3957"],["/2020/01/30/2020-01-31/index.html","4dd1171454915743c4a735a6f0ad2ff2"],["/2020/02/08/2020-02-08/index.html","993d211f5f714fa3a1e18e27a617d83f"],["/2020/02/19/2020-02-19-2/index.html","fd10ba2b63e2e64782a284965c3a5248"],["/2020/02/19/2020-02-19/index.html","c600e0c79e100b6f7e9e0c7f2458baf2"],["/2020/02/23/2020-02-23/index.html","27772e6c2c4f367bc17bb9e23bf3eb01"],["/2020/02/27/alipay/index.html","fafbfe63c2660f9c00809cb0cbbaa5f2"],["/2020/03/09/iperf/index.html","4a7b4337576faee033a19596c698e3a6"],["/2020/03/26/2020-03-27/index.html","a1c93b2b99dee5997b0e94a10a4dac3a"],["/2020/03/26/qiniu/index.html","64b81d60ec091577072d9787c94b9a17"],["/archives/2016/06/index.html","f3c1376b1343ffc6b2a352f82b714915"],["/archives/2016/07/index.html","183f9718aea0343fbf4dd9940331d768"],["/archives/2016/12/index.html","8cf258c21525122cbc6d0635e51339c9"],["/archives/2016/index.html","83b9ac80fb2244f06c65bc01e808153d"],["/archives/2017/01/index.html","e744e3278030d04394e9cfabbdbf85e0"],["/archives/2017/04/index.html","6018a399ce1fde6e4db7f05b3e2e8c87"],["/archives/2017/10/index.html","a5fa4e242184f032460f3c9bb2468471"],["/archives/2017/12/index.html","2ac92835855dcf60934e5c3055a14bfe"],["/archives/2017/index.html","0dc9b0bd81689f64c0971a7accfe0cdf"],["/archives/2018/02/index.html","2037923149ea256f6acc8978f48c438c"],["/archives/2018/03/index.html","d533dc890956747de26c86fe334cc37b"],["/archives/2018/07/index.html","caf1f34903ef01ed7db2248e95679ece"],["/archives/2018/11/index.html","38328d5e5987d380ce83274ff9e74bef"],["/archives/2018/index.html","8c2c3818cd43174a10b46eff7860f0c1"],["/archives/2020/01/index.html","de860da9f9365ec4535363734f55d1ae"],["/archives/2020/02/index.html","d054ede322546fd0d21a41c45de40f0a"],["/archives/2020/03/index.html","1007b63cc9f348e525c2b53a3171783d"],["/archives/2020/index.html","8359e2c7acfd854516cc74a5ddea7642"],["/archives/index.html","d00943aa1d1ccc28dfdea38d0964826a"],["/archives/page/2/index.html","1ab0a397ea8cc5f02b07655dd7ae2481"],["/archives/page/3/index.html","b9986ddd3bd6de7c3eebfb181c284fd5"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","168e0f63ff1a73a91a04f6b029924b5f"],["/categories/工作/index.html","a285ce42cba105da7eddecc3653b7343"],["/categories/工作/效率/index.html","bbbb7c2c3e0ad46c6c75bd42aece7674"],["/categories/技术/hexo/index.html","d487164ac75d3f309440e248770adf77"],["/categories/技术/index.html","a3889af05ffb84657dea20be69568fb9"],["/categories/技术/page/2/index.html","8084621a8b4d6be182f551951bdf254a"],["/categories/技术/v2board/index.html","eef6af1acfb8a4c6583779f09f645081"],["/categories/技术/七牛云/index.html","436aa68e160d48147d7707100c5f7bf4"],["/categories/技术/杂/index.html","0a7883907d18fc6f87c291b5188a38c1"],["/categories/生活/index.html","1bebc39b9d742f4bc9dac65489291572"],["/categories/生活/page/2/index.html","aa57696ee146a6f43cc01b7667da1136"],["/categories/生活/反思/index.html","dd5dcf1c1ae50381ac9fb7991d8d7956"],["/categories/生活/感悟/index.html","63d6f5702e7bdb92637078b400c52d6e"],["/css/main.css","ba71a51e61c0da0c7ef61ea9c7f424b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","ceead8245f25e7de874d8c135cc663b1"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","08e5383ca1a3d18cb5d8aea14f4bfcdb"],["/page/3/index.html","f0ef979b801cf38eb47f1f7b9240a29e"],["/sw-register.js","1d126e09da148a3b048f7f016ab83a12"],["/tags/U盘/index.html","8c8022d25b9abedc4a04ed04b1648d26"],["/tags/alipay/index.html","e46d18083de94a1a49bf7318bcb2b0af"],["/tags/hexo/index.html","67280976d4bf60d4e6623dd323655d39"],["/tags/https/index.html","e975e73b925a5d8eb73cdf1a3dbe240c"],["/tags/index.html","811988ca588d547631900da2eddda327"],["/tags/iperf/index.html","7d52ce8d3dcae3a1fb54b072f4fe35e1"],["/tags/macOS/index.html","e431ed3c5b244807b13a8c8e11b43652"],["/tags/nas/index.html","82922d90e90334f4d53c1e1b0a940a9e"],["/tags/poseidon/index.html","4a00b620c39b35d63d231d8cfe73354c"],["/tags/tls/index.html","2abcac514d9522e216867907db8eb37a"],["/tags/v2board后端/index.html","b3cd7c2ff27ec212c8c4d9dadc08da66"],["/tags/v2borad/index.html","44b90bed08fe030798f2473f0a60e4c6"],["/tags/v2ray/index.html","7f55ba479ecb00b94320a7feece3b8d3"],["/tags/vim/index.html","676166101f70f44e3b367be6639d3acf"],["/tags/vps测速/index.html","ec915592ccf5d580032066cfa4fc8c53"],["/tags/websocket/index.html","fe439c644785a3e6084b0b4458085fc6"],["/tags/ws-tls/index.html","edf5db3dc9eb99aab22fdb143dd24b61"],["/tags/七牛云/index.html","0fbdc007238d76f8b5c9845d16391153"],["/tags/反思/index.html","5ece01638e475d6c8dcce39e98349c18"],["/tags/反思/page/2/index.html","4dfadf35a9416129909f18a9e8b128ca"],["/tags/后端/index.html","04d5e5f1e844750be21c97cbe1b18a13"],["/tags/图床/index.html","a175150be62e8b125d3a2478afdacc60"],["/tags/工作/index.html","847207dd102a3e8e06b247ba6872d3f8"],["/tags/快捷键/index.html","a85f94801104c7cec66407f026fe0afa"],["/tags/搭建/index.html","ae391099e3aeb57fc7604b8f40a0748e"],["/tags/支付宝/index.html","637935cde9977a98222582a099b1b28d"],["/tags/支付对接/index.html","5a321784a9edc491137e29d6b34abc71"],["/tags/辞职/index.html","6c0d8ec956a2eaa9a1d2a92447874835"],["/tags/阿里/index.html","a96addc961aeef2c9cd7cfb36d50d52d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
