/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","cf7c5c69c911b23651f83232d567f29b"],["/2016/07/03/搭建/index.html","c805490998f4d65bd42496ec36137a75"],["/2016/07/11/工作反思/index.html","7d54495b5fafa976e406bdd303c2c599"],["/2016/12/11/omz/index.html","7cfa4517aaf258b5b84bccd7ff10d572"],["/2016/12/19/2016-12-19/index.html","973443c65796d98d5bfba24a468fda18"],["/2017/01/21/2017-01-21/index.html","9260d21432c72463fab9f0702798a38d"],["/2017/04/21/2017-04-21/index.html","eb1decb2ffc46723c7a4a1ff4c5d16a7"],["/2017/10/12/理一理思绪/index.html","60b6561a1bb50448f0469eb51ed2c0d6"],["/2017/10/22/又上了网络营销的当/index.html","bf3e8457e5fac2ce3a3ef928185f3a69"],["/2017/10/23/2017-10-23/index.html","51c30b7acf6fa62b2708ac98984cfbac"],["/2017/12/02/2017-12-02/index.html","a2c9c3992707e671db3653cb921f70aa"],["/2018/02/09/2018-02-9/index.html","9b60b1a02a766b602b981ec45caf2e35"],["/2018/03/18/2018-03-18/index.html","561fd4122ac54f9f69aabae0391774d2"],["/2018/07/28/2018-07-28/index.html","9be30a3ae400c1d6a7e0af79982ef985"],["/2018/11/05/2018-11-05/index.html","9f6054a008dbb1ede13cb96f92ed7c10"],["/2020/01/30/2020-01-31/index.html","99d460fd754509f5e3deae0f3b7c386a"],["/2020/02/08/2020-02-08/index.html","4f8680ed712683ddfc69b3d2abea594f"],["/2020/02/19/2020-02-19-2/index.html","9b03b8e26204d821cb06b1ab6d61bfb6"],["/2020/02/19/2020-02-19/index.html","f77661e94ac631eb61533d4531552de6"],["/2020/02/23/2020-02-23/index.html","2980cb60f7dea46e4009f4470a2bb8d6"],["/2020/02/23/mail/index.html","a7775270b278cf8201965ee9b46249f6"],["/2020/02/27/alipay/index.html","b82df452ebb3b2e64bb2729f8fac2d33"],["/2020/03/09/iperf/index.html","d799679bc591fd5669b16727a9dedeed"],["/2020/03/26/2020-03-27/index.html","0f2b31eeb5d25d76b7905d963efc7d54"],["/2020/03/26/qiniu/index.html","599e2ffdbefcce1e8e557f37343363b1"],["/archives/2016/06/index.html","b8c278c98b2dd2f984ca07798e0a2230"],["/archives/2016/07/index.html","6ac73cdaa558a20fc316f4bb2972b77a"],["/archives/2016/12/index.html","d7379c8547033d0b44c0e92e445bc3b4"],["/archives/2016/index.html","c920375ce0510daec406147f14b01a40"],["/archives/2017/01/index.html","275f95e3c3ed78b96e0b3ed0a550a375"],["/archives/2017/04/index.html","2465cb22012efa27bd2935e882761042"],["/archives/2017/10/index.html","407ab33cfb89abe3093cd18a8f867b50"],["/archives/2017/12/index.html","a3d4b9469bd8dd3010e68d4ca5c6063c"],["/archives/2017/index.html","0b4625b65d93def052c216d1dbfb4329"],["/archives/2018/02/index.html","0830966ce3b14eed0f802e264611e8c0"],["/archives/2018/03/index.html","8be2df5a1e267ee69311b97ad544891d"],["/archives/2018/07/index.html","ba9e9f1269182ef301bfaed783c70f61"],["/archives/2018/11/index.html","6b9d5c486147d171b86dca244005f040"],["/archives/2018/index.html","7a162077e171fc26cf799200a9f6a806"],["/archives/2020/01/index.html","46657a7d2037ee8dfb3cbc049923abc4"],["/archives/2020/02/index.html","64f9f0b1e743d0e8cc82722e1a45aeab"],["/archives/2020/03/index.html","c2927304fa35f0483c2445cd4e47a818"],["/archives/2020/index.html","9e2c23db705c91455a16c4a5680f337b"],["/archives/index.html","06476c3d610f056b1239a63b408999e7"],["/archives/page/2/index.html","e57e25f9211c0858d2abd7d182440630"],["/archives/page/3/index.html","305982f4684ad72e7060831aa9f1aaec"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","9e7bf26fb77b683881a50dc4e7e7f76d"],["/categories/工作/index.html","2e714c7bb6405167ec19395583ec12bf"],["/categories/工作/效率/index.html","a0df67ea8f0f2476f6e1e4ec042a99b1"],["/categories/技术/hexo/index.html","00023f96c33b17d0d7992a0862dea0e5"],["/categories/技术/index.html","b8ddebb5126b076918739718de030b70"],["/categories/技术/page/2/index.html","508be971d69463d8ca84566591234920"],["/categories/技术/v2board/index.html","1b89dd1c7e9ce8dc32fde7d822ad62ed"],["/categories/技术/七牛云/index.html","00401c9fcd8ac5fd2a8e850e9b16a6e1"],["/categories/技术/杂/index.html","d9dcc2d1e05dad433cabe4b3bcce934d"],["/categories/生活/index.html","f11ccab3df4625e8452df155c17bb73e"],["/categories/生活/page/2/index.html","d48466c83b73f34b7f8216d13e15723c"],["/categories/生活/反思/index.html","c3ea0f0011be93c08ae37c24a26f4d64"],["/categories/生活/感悟/index.html","57d47245596051bf4f2fe200c33e1553"],["/css/main.css","aa14922aeb01cd9fbe7f74b73e69b3ba"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","3177204aad685a506480669dc81fce57"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4a199fcf8d9c3f83abdbf79994118d06"],["/page/3/index.html","9268e3fa9729dd8ce99f77c3671184c2"],["/sw-register.js","d4d341de8e5e8739d216ae4fe78d0bd1"],["/tags/U盘/index.html","471adeaabd2e9998a8bd2e83a43f7525"],["/tags/alipay/index.html","2f829181ee73ce7bc5b614df5ee0179e"],["/tags/hexo/index.html","aee6aae7a9a43e093b4cc7e9121c297a"],["/tags/https/index.html","b2690aa1d64ae0e4e9a15c7751bc125e"],["/tags/index.html","ed04f0be54bd54da51824a215cdc4bf3"],["/tags/iperf/index.html","92a1acc79949fe64ca3e919af9376d8b"],["/tags/macOS/index.html","bc4d9e76bd20db3d998a7e9962a7597a"],["/tags/nas/index.html","52920b7c965c0d3ec6a8cbd0c5a19c89"],["/tags/poseidon/index.html","1975f4408761ee1c9c9002477e9fd52a"],["/tags/tls/index.html","2f7a8bd8352b1952e510d0a149817b39"],["/tags/v2board后端/index.html","6be521b6555b3ec9aa5d595764464135"],["/tags/v2borad/index.html","9ab2c5021eb97390a6c0bbfe88fc2ad9"],["/tags/v2ray/index.html","7a167a197c0bd21faf3d97bc2eb884c5"],["/tags/vim/index.html","f498377cd5df96fdb78dd60f01f09497"],["/tags/vps测速/index.html","10ebabc62fd0104de1fbae5f3413c7f6"],["/tags/websocket/index.html","0f74d677fb65120b1a14267774af4b01"],["/tags/ws-tls/index.html","5716186b0e7687bfe2f53fc2f5ea4a25"],["/tags/七牛云/index.html","d831c73d980d9f165b392b165579d566"],["/tags/反思/index.html","05caffa4b4053e1de25fec7effb96bf0"],["/tags/反思/page/2/index.html","3a27f5a21fba15d010c82568527eb104"],["/tags/后端/index.html","eab906d627e61815b8a883ed659e8532"],["/tags/图床/index.html","e751fe781fa3be3438554b6918c39424"],["/tags/工作/index.html","701f8fa9b9d9bfa94378a3fe45950a61"],["/tags/快捷键/index.html","7696387f7117a7c7761be3e0ccee2cd2"],["/tags/搭建/index.html","bd2be00fbf1e29052940ca3a35eec304"],["/tags/支付宝/index.html","0a0cbf81fc1dfa6b517d2964733c3ab5"],["/tags/支付对接/index.html","a9c58a15417e0d3e81253a3d26d66cfd"],["/tags/辞职/index.html","120445e92c972592113e355840ad5f25"],["/tags/邮箱/index.html","9804f2b7bfd6949e533da37bb8c17a16"],["/tags/阿里/index.html","c475b5728133a99224d6ea726f79c3f3"]];
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
