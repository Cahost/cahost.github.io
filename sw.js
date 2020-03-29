/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","b84e3218c9867026de3c0f5c8248938f"],["/2016/07/03/搭建/index.html","d472facfbe4382e650df889e76b1a696"],["/2016/07/11/工作反思/index.html","fe39795e276569d64fe7522649f55c9c"],["/2016/12/11/omz/index.html","6d1cf30d5c6aedd1dd460a542ca4192d"],["/2016/12/19/2016-12-19/index.html","7ceef20f15aa37f6265042995b57822b"],["/2017/01/21/2017-01-21/index.html","0d6c79b5408873def69b954c4f17c72f"],["/2017/04/21/2017-04-21/index.html","505b757dabd4e3cfc12c970b54484242"],["/2017/10/12/理一理思绪/index.html","6aa87f8fdeaa4a8076a846b67c8c486a"],["/2017/10/22/又上了网络营销的当/index.html","4e653e9f919f53f45f3f7c4c52868282"],["/2017/10/23/2017-10-23/index.html","6e8be8ad18795665c2713874c4dc9725"],["/2017/12/02/2017-12-02/index.html","3132efc548c2de849c96dbe620588a7a"],["/2018/02/09/2018-02-9/index.html","bd7553d08c01955e9b77436175e59ea7"],["/2018/03/18/2018-03-18/index.html","1846a104560cb3f96835b0d2df2e49fa"],["/2018/07/28/2018-07-28/index.html","2a0d331e8da45dea858a473a2105308e"],["/2018/11/05/2018-11-05/index.html","c155654f4d96ba79572108ea343f7b62"],["/2020/01/30/2020-01-31/index.html","aaf6dad38b28addacfe9f2672a41c6a7"],["/2020/02/08/2020-02-08/index.html","61078bc6bd3c0867989f19ba794cba52"],["/2020/02/19/2020-02-19-2/index.html","06250ba0c834ba2a13fd9aa7241c0b7c"],["/2020/02/19/2020-02-19/index.html","c74511223cdb4797c668f73de71da9ef"],["/2020/02/23/2020-02-23/index.html","a400a9f1ece05702a5a1de991dfab6a5"],["/2020/02/23/mail/index.html","ae9ca8916f449f2d6a9752f36c1e5492"],["/2020/02/27/alipay/index.html","1ebbefb79ed892a0841b7b30d5e5bcf3"],["/2020/03/09/iperf/index.html","c554801f68ae3ad5089023ba62075d77"],["/2020/03/26/2020-03-27/index.html","edc958c9e0fc8fe3db9c711d6222ad02"],["/2020/03/26/qiniu/index.html","029664773cd5ee415e36e5cf7a042f3a"],["/archives/2016/06/index.html","4cd0ae52a5e317c8bc001cc3b7ba0e4e"],["/archives/2016/07/index.html","23b4c42b4c48046683608864ead17186"],["/archives/2016/12/index.html","93376183ff16ab5860c5dad0eeb9488b"],["/archives/2016/index.html","fc312d4b50165551d177ff3e51572436"],["/archives/2017/01/index.html","1e9a7b260457a885cdcd9692c827886f"],["/archives/2017/04/index.html","46d6fa408751c8cb510e64dfab1beb71"],["/archives/2017/10/index.html","d5c193898157c9b2c3797cd85b15e74a"],["/archives/2017/12/index.html","2e3a6ca5b5d54b5c96bf66b3ed4adc30"],["/archives/2017/index.html","fd7701cbdbb96238a7a03c138b1ab17a"],["/archives/2018/02/index.html","e4b9c819603c083f9ec98e782ab57b12"],["/archives/2018/03/index.html","f819e87d0f10c02e3b5f40246828f39c"],["/archives/2018/07/index.html","b98202ead28eea07b1db23e2c5e334d4"],["/archives/2018/11/index.html","6111d401fc22efe3970ce093a2307e48"],["/archives/2018/index.html","f76bc1a7a4c0fcaf3fb4dabdf9d6343c"],["/archives/2020/01/index.html","a62d41345658dea466aad98afe6c8d4d"],["/archives/2020/02/index.html","3b33dd0dde9d035bc5d0790bbcdba84a"],["/archives/2020/03/index.html","15213d4675724673f1356a894fe2a95d"],["/archives/2020/index.html","943f91321578c1196e8d33181901c654"],["/archives/index.html","29725663b63c80a3121242d7eb729b61"],["/archives/page/2/index.html","6dc452ec8f318701132842c3af0cbe22"],["/archives/page/3/index.html","aa34b14d55c20e3571981381556afa03"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","a3b9967418a96d904e927a03060539ad"],["/categories/工作/index.html","d122327a0b774534111fd5b70679ad7c"],["/categories/工作/效率/index.html","a5e8705edbe166a187f36b04675d8e37"],["/categories/技术/hexo/index.html","6e51654474454a2ad048642baa3d9ab6"],["/categories/技术/index.html","3eafa12532ad9e7546b5caa7298253aa"],["/categories/技术/page/2/index.html","12ceb8749e3a830fad3260c5013517ed"],["/categories/技术/v2board/index.html","21b33e962f6148ec5b8b69d8c25ee1c3"],["/categories/技术/七牛云/index.html","d07eb3b265974dcfcd13b41d1bf9c04b"],["/categories/技术/杂/index.html","c0fbea25d129e9be59496429d021aac7"],["/categories/生活/index.html","20538a1d9f834581f8999c422f890fc3"],["/categories/生活/page/2/index.html","4d2ae3844bb8942eebe36103edb46c81"],["/categories/生活/反思/index.html","81a12c083089a09f5a69ed5807c9d26d"],["/categories/生活/感悟/index.html","7efd0f77b7abf2e9b6e997471fea20ad"],["/css/main.css","aa14922aeb01cd9fbe7f74b73e69b3ba"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","9f235c73d3019892777eb9e6ddcb54ce"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","82fa3c4b2d03b55457fd514ebd89a3a8"],["/page/3/index.html","fb85e857a8ed76049b649a2a061d02b8"],["/sw-register.js","0982ac568fe8f0da9834e0c583dec3af"],["/tags/U盘/index.html","7171e1160fea84deb090a7fb6667d235"],["/tags/alipay/index.html","9b5acf2253993c0b0aec6b679740c991"],["/tags/hexo/index.html","0b5c7f89ad3585a61efbd57cd232a883"],["/tags/https/index.html","b15e9de08c8cf6748455e97634ba3c69"],["/tags/index.html","5ee0b57e131f371be9cf8a57fab5e9f7"],["/tags/iperf/index.html","d9597c225805d085c0b152168c5c534f"],["/tags/macOS/index.html","738f17897cd1c20d2ddc342a364b20bb"],["/tags/nas/index.html","dc49e845fc274330c3d87a3b134acb23"],["/tags/poseidon/index.html","83e73e235eaf206c5e4c02fe9dddad83"],["/tags/tls/index.html","da145e197a2b887f7bfa9f2ac8907b0d"],["/tags/v2board后端/index.html","fce5cb6e1f911c72676e3285694892cd"],["/tags/v2borad/index.html","0377e6edcc3d597f852446e420ae3bee"],["/tags/v2ray/index.html","a67c669f46e928fa8867711c40be9041"],["/tags/vim/index.html","b92556dd9a0e16bad161ff5b21863b72"],["/tags/vps测速/index.html","67be60be87929be1d405281f110945d5"],["/tags/websocket/index.html","358d2e44fa61f1df56241e93566c0c02"],["/tags/ws-tls/index.html","6a7127129552fa92c9bc7c010156b63f"],["/tags/七牛云/index.html","9bc5c4b376943becae3a4b3ffd976fb1"],["/tags/反思/index.html","f4b1b768298f6e0384ae0ee8b59d2f72"],["/tags/反思/page/2/index.html","6240ff7535cdbb7903d5d00847c8d5b0"],["/tags/后端/index.html","a31d403f7bf6c6ee79dc13579bd83c64"],["/tags/图床/index.html","6a7f32b7eb0ca6c653a6ad4b56c3e998"],["/tags/工作/index.html","fc936dd92e828ce12e81abd3660d988c"],["/tags/快捷键/index.html","d417360a5ace61a417454b964ca92485"],["/tags/搭建/index.html","62d61714fb99d63f1d91eae80f113914"],["/tags/支付宝/index.html","4a64e9c813a51513fda84c5168f0b04e"],["/tags/支付对接/index.html","b5d6bc1169a5a8e3d944d297f321aee9"],["/tags/辞职/index.html","76b0386bd64399d71fa9248d8c9f3e49"],["/tags/邮箱/index.html","60920ea8081458fc8f76744f626001d7"],["/tags/阿里/index.html","95e6d7683ec74acc9e87f07f401775f6"]];
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
