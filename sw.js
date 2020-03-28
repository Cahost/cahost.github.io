/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","c672d5792d6a265d59583790569dcfb6"],["/2016/07/03/搭建/index.html","792c5445b60cb1b1d8d8ff355706479b"],["/2016/07/11/工作反思/index.html","414652922e635742729a674daff2f80d"],["/2016/12/11/omz/index.html","a265b101f2e44f7a215ed73921d141e1"],["/2016/12/19/2016-12-19/index.html","8d3e8d3315829cc1339f736d9874cf2b"],["/2017/01/21/2017-01-21/index.html","1381ffe22da0f53fa5f0474e9fcbee87"],["/2017/04/21/2017-04-21/index.html","ab7bd82195e5b7a6e138ffa7cb4b8e19"],["/2017/10/12/理一理思绪/index.html","8b09b36365b2784b179cbd339560ecf6"],["/2017/10/22/又上了网络营销的当/index.html","97b8dfa378bb3ee1d3349622b452e444"],["/2017/10/23/2017-10-23/index.html","80fe651b097477c5f4bbd94f7f4f9b2c"],["/2017/12/02/2017-12-02/index.html","9d57a41eb527ba3c167c1aee301b8fbe"],["/2018/02/09/2018-02-9/index.html","9636f24e37c5fda31696eb15a465d356"],["/2018/03/18/2018-03-18/index.html","ad4df9c99259a5c3b8c0abc686a25f4f"],["/2018/07/28/2018-07-28/index.html","c31b2025878d1b7ef8bc88d5e68b38d1"],["/2018/11/05/2018-11-05/index.html","a41406e807f9d61cc754597352a89aca"],["/2020/01/30/2020-01-31/index.html","dd477df146909ba6da47eaee0d38d4de"],["/2020/02/08/2020-02-08/index.html","ddab7143800c99521b55cfc7ede5f7ff"],["/2020/02/19/2020-02-19-2/index.html","11f0c6660737ca8584c489f74f696b3c"],["/2020/02/19/2020-02-19/index.html","d74703f59deb12167e1e97df3bc843bd"],["/2020/02/23/2020-02-23/index.html","dd839dcff0044b70056afb02c0e1d243"],["/2020/02/27/alipay/index.html","460c2bbd43fabed1598372342085d00b"],["/2020/03/09/iperf/index.html","845d89eb634c19df1a1c8d69840a4c38"],["/2020/03/26/2020-03-27/index.html","9a24704fc8b275e5ca92e5385a0351e5"],["/2020/03/26/qiniu/index.html","9ed5541dd4759362702f0aab5cee1ecd"],["/archives/2016/06/index.html","86cea88c184006c6838ce4b190b318fe"],["/archives/2016/07/index.html","fd3216662bfa60f09f2180c46a296818"],["/archives/2016/12/index.html","882014c407a19a2ba814a3920a073136"],["/archives/2016/index.html","a9e19e7068a196bf60cc3c9159bfddaa"],["/archives/2017/01/index.html","a54b777562a13d3fdd69e1bffec191f2"],["/archives/2017/04/index.html","a4f288c58a14e8ecfb247c94f559ab00"],["/archives/2017/10/index.html","66ec1454d51a592680e2d2eb1bad6b1c"],["/archives/2017/12/index.html","9dcfe34f9746de23ff6e6e764ee115ff"],["/archives/2017/index.html","e672d226bc0adee2035051cefd44ae92"],["/archives/2018/02/index.html","8631471ce5635fad73e002d8206cf1f5"],["/archives/2018/03/index.html","a801ac85b9deebb307f37bdea3b65092"],["/archives/2018/07/index.html","0d573bc9435953ccac76f86a7f253639"],["/archives/2018/11/index.html","3ecd99474049e5deb5ccf01ef2bcdade"],["/archives/2018/index.html","d70d693cb3aba4496f54b809a6957cad"],["/archives/2020/01/index.html","d30fbbbd1a0a584c7ddb7449e2429342"],["/archives/2020/02/index.html","5fd43b36c12e259dcf49fbc50297f22b"],["/archives/2020/03/index.html","ff670a2119b49fd5352ec6a3cfe0b5e9"],["/archives/2020/index.html","bdd76176968abf39fa85178bc6b29638"],["/archives/index.html","4baf8b4172e81a5497f333035e88c8e6"],["/archives/page/2/index.html","a84a5ed840623a45af9fab8f86d63291"],["/archives/page/3/index.html","cf7e561a69bfac46718a17df87d6dfe6"],["/bundle.js","1bcffb65cf0ae3ab1feb7f04802fea0a"],["/categories/index.html","3d1133218115d5a76a8f6435f3d15943"],["/categories/工作/index.html","b10a33ea9480b50a6dccf5246e98861b"],["/categories/工作/效率/index.html","0c50f32582b5ac8b046388f5adc02be5"],["/categories/技术/hexo/index.html","a7dfe54ce5cd3916c6c057334b91fd93"],["/categories/技术/index.html","ccb18cc3db3aa2b76bb082de2bca76af"],["/categories/技术/page/2/index.html","5e3ca7f4a9d598d741b869550b76ec6e"],["/categories/技术/v2board/index.html","a4957387f4cced278ca9305051a23710"],["/categories/技术/七牛云/index.html","a9d1a66d6c3cde75abfa485b185dea34"],["/categories/技术/杂/index.html","4ff82b7d79e762f3391c122709eb2b99"],["/categories/生活/index.html","cf77475052ccfcc12e209a0526f68e46"],["/categories/生活/page/2/index.html","65ad322c5c243933edb3f7fc4bdb3ae4"],["/categories/生活/反思/index.html","800f38eb93cfd072ed48bcb62e2b5f85"],["/categories/生活/感悟/index.html","80a4ab8bf7dcc95161687b1081849318"],["/css/main.css","ba71a51e61c0da0c7ef61ea9c7f424b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","720fd626a7d092528666954082659f3b"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d6fbffe1ca081a8c1709ad465b6a532f"],["/page/3/index.html","bc364ef21ba01e610900e2419624064d"],["/sw-register.js","7c91fafeb27be5551755d0cc6765558d"],["/tags/U盘/index.html","4f82437648db05726499bbb7d783e99b"],["/tags/alipay/index.html","171a744c2083d010e6c8fe454460e440"],["/tags/hexo/index.html","fd3965176ce2af9752c36f65b6f5f6f9"],["/tags/https/index.html","c0565602b75e40e8a799dee501862536"],["/tags/index.html","90d6cd756bb574dff04b608e7393f63b"],["/tags/iperf/index.html","c21edf5cbce999eecb9c6e88ecf5afd5"],["/tags/macOS/index.html","e7d672294ac26b8b6ce5220ee5f3f4f3"],["/tags/nas/index.html","ac35bdb88d7ddda2f5b5ce073b305848"],["/tags/poseidon/index.html","bafdec46271c61049627c84e9a48dc20"],["/tags/tls/index.html","f7daf884bc0c6e44a0b22b1e5184706e"],["/tags/v2board后端/index.html","f240213112e034d93a9877da97944278"],["/tags/v2borad/index.html","678ceb9fa22779fc102398a189ddc29e"],["/tags/v2ray/index.html","5247def1db99bfdce47ec30f1d60dc3f"],["/tags/vim/index.html","216f3c16bca908de50df9a9e1a72bb83"],["/tags/vps测速/index.html","5ad552beebe1a2c19f824d92fda6b710"],["/tags/websocket/index.html","f9c45253eaac532c7e6e779aa2177f09"],["/tags/ws-tls/index.html","ce578fedae4454cd0ae0d033d2a53455"],["/tags/七牛云/index.html","efff3411937aca543e29a7d564137707"],["/tags/反思/index.html","790f2a607ba4397dd8ef8d66aff965b0"],["/tags/反思/page/2/index.html","0c3cb875e5f7202c06d0598c0ba28e1a"],["/tags/后端/index.html","380b86a6c86047b0cd52bbc3ed99e0b0"],["/tags/图床/index.html","d53a44c2fe6a1e3ecf7f1de0efd42ea6"],["/tags/工作/index.html","e44e2055f868b50d78eaf7310151c1dd"],["/tags/快捷键/index.html","f276471b78b2a999c0a7d6104e5a2667"],["/tags/搭建/index.html","c7e67c32367ec3a1bcc5eeae85c4ee73"],["/tags/支付宝/index.html","f8594d528b7a99365d9cfa65b24257aa"],["/tags/支付对接/index.html","81a1f3f5177bcf444a074127b2f30cbb"],["/tags/辞职/index.html","09ad22d90a08a5c88ee9dd768289a4d1"],["/tags/阿里/index.html","089a30742b58c5835533009d2e75581d"]];
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
