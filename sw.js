/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","00d584d43a587c6b3af12c08581f1536"],["/2016/07/03/搭建/index.html","af032ce8145ed66e5213d6fdb0b4805c"],["/2016/07/11/工作反思/index.html","b46324c87d10c84c66270f220aa5041c"],["/2016/12/11/omz/index.html","0f51ae4fbf33a5f574c445960195fba1"],["/2016/12/19/2016-12-19/index.html","4d639941d67249dec84efc9bf62b4a92"],["/2017/01/21/2017-01-21/index.html","f6a33893eb8ecfcdf6a00d745135d8d7"],["/2017/04/21/2017-04-21/index.html","d7f128cf53b557974155c2fd95b438cf"],["/2017/10/12/理一理思绪/index.html","980279cbd5cccc4e191f0d1b7462045a"],["/2017/10/22/又上了网络营销的当/index.html","4ca182bb377cd0c44ee9a84dd21afbb2"],["/2017/10/23/2017-10-23/index.html","e56e7b95e3aa59bc8ea1443891de9466"],["/2017/12/02/2017-12-02/index.html","3b5275c33f6477d7d3d6929ba0aa97b9"],["/2018/02/09/2018-02-9/index.html","b701d2711479b7b02e1aeddab027b5e5"],["/2018/03/18/2018-03-18/index.html","86edb11b405a5a81cc70777a2b2a99aa"],["/2018/07/28/2018-07-28/index.html","97ddbb738cd55716cd9c50205610acb2"],["/2018/11/05/2018-11-05/index.html","d546d97f41bd4e3bb269cba641c8ffb2"],["/2020/01/30/2020-01-31/index.html","51721bd1f05859744471f8b4393b92f3"],["/2020/02/08/2020-02-08/index.html","b6361107e7dde5ef7ccc4e8b406ba0b5"],["/2020/02/19/2020-02-19-2/index.html","fe9ef0b5b0cb89b7a1717271171e393a"],["/2020/02/19/2020-02-19/index.html","e615863e58553b41cd47b64594f15a06"],["/2020/02/23/2020-02-23/index.html","50e35db7bfb562a81c1d847cd3fcc975"],["/2020/02/27/alipay/index.html","851d630e6681a09c6d1cecd95c29e46d"],["/2020/03/09/iperf/index.html","3bf1bf7a12a0f3482c05ad94c2ca277d"],["/2020/03/26/2020-03-27/index.html","15d625b5ef8b1984b0b53e410c042a00"],["/2020/03/26/qiniu/index.html","b88b1824282ab5116f3802051cc3b0bc"],["/archives/2016/06/index.html","5593afc7d47f4f0e98612b3ff107159d"],["/archives/2016/07/index.html","ab69c7877253b966a32c0f396118761d"],["/archives/2016/12/index.html","3b0003d64ed1c3a7a8f76f4c4b6f5757"],["/archives/2016/index.html","dc75907c85bab3d6c223d41084655205"],["/archives/2017/01/index.html","271531ac35cc66aea705e8b4dfef306b"],["/archives/2017/04/index.html","b0807d7bf406a2c2bb2aa73536afdb6a"],["/archives/2017/10/index.html","020c7e77dd520a25ef904f200d976c0a"],["/archives/2017/12/index.html","e47028579f17ca740b2a9ea3b3a51f29"],["/archives/2017/index.html","d9438616727b1d506853a4dc64ef06d8"],["/archives/2018/02/index.html","76b8f13d0ef3e28a30dfa5074e692cb7"],["/archives/2018/03/index.html","6d5650eaf9f540a91e1e47b6a3932ead"],["/archives/2018/07/index.html","643b1e11f859c81a67909e42701e8ee3"],["/archives/2018/11/index.html","ed0cd163b1c9d854e48d57043812d530"],["/archives/2018/index.html","582dcf610e96238b6c24ab03faccfcfe"],["/archives/2020/01/index.html","ddfcd2f9ff522014ca9301781d087289"],["/archives/2020/02/index.html","8932c78c1f890bf6a5d00b69d2669dec"],["/archives/2020/03/index.html","3ada7500e830416c651d4132f8317b3d"],["/archives/2020/index.html","3fe12d4afe83e8db4cd11758d877fcad"],["/archives/index.html","37a2cde5e9b3ce7de9791fafdc6ed6d9"],["/archives/page/2/index.html","55d01288da4a9d8400013c9e217ffabc"],["/archives/page/3/index.html","302f4063c8cf431e63009d10d2033149"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","dc544a7389a280f050279991f8b6948e"],["/categories/工作/index.html","f5441c9bf4e83ff0d99e9f27ce224c77"],["/categories/工作/效率/index.html","3c6508732e6026127cb1fadde83beac1"],["/categories/技术/hexo/index.html","660016c27383de0eff1938ac1c29e8ae"],["/categories/技术/index.html","c89e7a6899d1b6f4e93ebaf8f527a750"],["/categories/技术/page/2/index.html","b2fbe56b5ef856993b485ba8ac31628a"],["/categories/技术/v2board/index.html","1b84cc2009481b498d65d07b3cc50b1c"],["/categories/技术/七牛云/index.html","bdec474862651c90d0f7b7d160b3e346"],["/categories/技术/杂/index.html","c71ca1159ff6ba225c4fddcc499ec504"],["/categories/生活/index.html","227fe8c1f26d2fba662f7b53e064d352"],["/categories/生活/page/2/index.html","7f5110f62a0b574124b13f30c97e9248"],["/categories/生活/反思/index.html","50f59ab8212d21cba577ca8211fbae5b"],["/categories/生活/感悟/index.html","af7b9ec84cf58aca9ee6a0a6db94eb66"],["/css/main.css","ba71a51e61c0da0c7ef61ea9c7f424b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","06efdf04698fcbff61a91c9c172b2730"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0d48e2cadd791ba105d43ebf0682108d"],["/page/3/index.html","e0da6dbb90d09d19b763f2e0a455299c"],["/sw-register.js","132b6294160f83fc7641183864eaca12"],["/tags/U盘/index.html","00f7601bae66530bbbcbe2f9caf0a048"],["/tags/alipay/index.html","4adea17e7587be256684442f52ac2bac"],["/tags/hexo/index.html","2af05de1cdf742c4642c21ee169abf7f"],["/tags/https/index.html","02c45020388b9fa574bdbb45a30d7ba2"],["/tags/index.html","6058b1c0d2c6005627e56ec4516966a8"],["/tags/iperf/index.html","7a097c4407ef654714ef098ba6e20cc2"],["/tags/macOS/index.html","f118b0593dba0947ecf4517695c0c249"],["/tags/nas/index.html","c6e73583ef45783103237e9d9e8e4903"],["/tags/poseidon/index.html","61675384c6add91cd80df3cb9f4f5d12"],["/tags/tls/index.html","6cc673980ca6448547c0f039dc8ad40c"],["/tags/v2board后端/index.html","6414b0d904766440aa4999440d3bb9e9"],["/tags/v2borad/index.html","177a079c4f92d816415c362209920de7"],["/tags/v2ray/index.html","495f8db058c52d7aca0ed6c9ce3e3df7"],["/tags/vim/index.html","6ad4ce0b9480634ee836ffcba9c517a9"],["/tags/vps测速/index.html","8a3c857dbebaeafc6b9422233ee709ed"],["/tags/websocket/index.html","732554a116f97fbb505ef4fbe1e5eb66"],["/tags/ws-tls/index.html","728278c8cff23cb1944e94e0c590de7c"],["/tags/七牛云/index.html","de80f0abf174bde197a31dd519ec15a6"],["/tags/反思/index.html","72036aea7f2d77f63a3286e0720bb941"],["/tags/反思/page/2/index.html","6c9448476a9950540109f64cb864dd67"],["/tags/后端/index.html","dffb2854806926b5368c3a48d4076358"],["/tags/图床/index.html","301cba7407bc80238379446e05ca8b6a"],["/tags/工作/index.html","694d20342fabd8aa872e6c943cca817e"],["/tags/快捷键/index.html","d9c4dd9cde50ccb90df351a21074e95f"],["/tags/搭建/index.html","4738c46c2b6f0b2047e4c9d9d521dfb4"],["/tags/支付宝/index.html","328b1ed2cca7a087bdc9d574a6ef94db"],["/tags/支付对接/index.html","8a559f3814c1f655514b27c900e204f4"],["/tags/辞职/index.html","68e711b755c315778dafbf5cfde2be88"],["/tags/阿里/index.html","1f959faf93e795975109e9410c6d9772"]];
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
