/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","0384fb4c21396fa0beb4f21cb5f58479"],["/2016/07/03/搭建/index.html","b1a7180f169127b49e555f9204519da5"],["/2016/07/11/工作反思/index.html","ac8fd46edc8a9b135eaf775a35e144dc"],["/2016/12/11/omz/index.html","b9f16d4662a727a7f73f2c1ee303bbc1"],["/2016/12/19/2016-12-19/index.html","23633bf0519fd8b75e48b218c4a8861a"],["/2017/01/21/2017-01-21/index.html","636c9058c10aecbeaea0e281a632701f"],["/2017/04/21/2017-04-21/index.html","5fed340739069705bfe98a13fca92b0f"],["/2017/10/12/理一理思绪/index.html","47904de8be7a9931fd7888ecfe038673"],["/2017/10/22/又上了网络营销的当/index.html","91941431799812f415a702a5c03ea6ac"],["/2017/10/23/2017-10-23/index.html","055957c899cf2bde901c6f09a0450c11"],["/2017/12/02/2017-12-02/index.html","20a9aa09cca191b2821618ec8244bcc8"],["/2018/02/09/2018-02-9/index.html","7c982ff40bb8f9a176773a2ee33e0d57"],["/2018/03/18/2018-03-18/index.html","20048fdd8b7a35f0e5e7bbd8d35ca327"],["/2018/07/28/2018-07-28/index.html","f3f50105a74472cc954bbb6036d48aa7"],["/2018/11/05/2018-11-05/index.html","d5b8f18793bcb5ea5ef085b168be126c"],["/2020/01/30/2020-01-31/index.html","995c6f178f01aa10c2f408d1b71c7102"],["/2020/02/08/2020-02-08/index.html","8dacafbe1cd9c55994d5fea110e42faf"],["/2020/02/19/2020-02-19-2/index.html","b68438a6ec3a4236b307d925e882308b"],["/2020/02/19/2020-02-19/index.html","152432c8e1cd0e110b697a9d880b133e"],["/2020/02/23/2020-02-23/index.html","58adf86476bc7f5b7acf48ad9ff947d5"],["/2020/02/27/alipay/index.html","f8688ddb7fa291ac368fdc1f1adcbe70"],["/2020/03/09/iperf/index.html","70aaf6e9c9bb53dfabdb112b54f70478"],["/2020/03/26/2020-03-27/index.html","90d9c4b36086ed0f8c59c06b9e4b6f33"],["/2020/03/26/2020-03-29/index.html","5a1b3c9eb16511eba4ae4d4638bb9b29"],["/2020/03/26/qiniu/index.html","10abe253e8958d9c7c10b3cc3fae0c91"],["/archives/2016/06/index.html","e87cd2512162775891fc4bd35c609f2f"],["/archives/2016/07/index.html","8615043ccf266003e0f06bf30b8303cc"],["/archives/2016/12/index.html","38cc8b871dbca604445371242f177da7"],["/archives/2016/index.html","a1d504b10fb35ffa819a1c739d5218df"],["/archives/2017/01/index.html","366ead1b3fae96c62818c5cde1069e59"],["/archives/2017/04/index.html","00c43dd3ab57ee647d6ff3da106a9191"],["/archives/2017/10/index.html","3e379abbcc038063f8d865dc593b4e27"],["/archives/2017/12/index.html","81d0a0f028de0ee15367945de300a654"],["/archives/2017/index.html","476f77b1ca335d0a503b3260684a61fe"],["/archives/2018/02/index.html","6cd59aad070c71305b7ce48195ff2ee1"],["/archives/2018/03/index.html","c7f60bd0879317df3c9f794fb99d9890"],["/archives/2018/07/index.html","625db9cdac22ca4d6bd13b3b42be1d58"],["/archives/2018/11/index.html","161288f0f1b499feb4e94388a88dd818"],["/archives/2018/index.html","524a06a181207c860eae61cfaade8133"],["/archives/2020/01/index.html","e199ad0f868be33af6ab43c646bfc8d3"],["/archives/2020/02/index.html","b31a05b6879c97ab6a3308b982ef5cbe"],["/archives/2020/03/index.html","12b15f7999b4e4314d3d8cc573039758"],["/archives/2020/index.html","daedaccc40ff5ecd0abb0691937dac33"],["/archives/index.html","8471c96b738c8a7ebcc9074c784eb460"],["/archives/page/2/index.html","292fc2d1e72eac529a84077a2169052f"],["/archives/page/3/index.html","343b6d20deff8a7048f04741b2995ef6"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","607bb77d34ef37f1b963f4730f61431f"],["/categories/工作/index.html","f7f0a5fa3d83e88baa989636a533a721"],["/categories/工作/效率/index.html","2b3e5bc0edabed7aae49e537390ad4d2"],["/categories/技术/hexo/index.html","0cab11e0ac7021218f407a1d37dcb267"],["/categories/技术/index.html","3b1cd2b82e90edf456e9e0a5c8f75ac6"],["/categories/技术/page/2/index.html","1de1a314c9e48c262703cdf14f39dea5"],["/categories/技术/v2board/index.html","5ce6eeec67e92a3460965191a57aeb0c"],["/categories/技术/七牛云/index.html","670203f71a15443493b6f42ca8c04803"],["/categories/技术/杂/index.html","9bb151d35fc607da78d6ea22316e98c5"],["/categories/生活/index.html","ce3b661385e4db18c15ea41d5cc93f6e"],["/categories/生活/page/2/index.html","bc1da5e987a37b46993c14c3f3182a91"],["/categories/生活/反思/index.html","2c90a47e19fd63871700c3ab94e7a1d4"],["/categories/生活/感悟/index.html","b0df0d349595bc2a46180df3f4f12605"],["/css/main.css","51eaa22ea9bb9a1bb9e73f29ab5afa4b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","95b7c93de9c2982628515b2f5218fcfc"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","81447a2f202bf4742724d82006b91e4b"],["/page/3/index.html","6769e2542243abb787388be9a9a279a0"],["/sw-register.js","86fd9040732e9af0e4aa0f5268dad237"],["/tags/U盘/index.html","696587239f92a429e24e8a2c845bf53b"],["/tags/alipay/index.html","af145115bcc6a6a9e89bf2fc00b9caf6"],["/tags/hexo/index.html","ecbf15277641debc907d49786e67fc6c"],["/tags/https/index.html","320d5e08527b0dee83c11ff2b73f1893"],["/tags/index.html","6cfe100d81e0f6131885209d53c41045"],["/tags/iperf/index.html","c4c2ca0960310b1dd6dc7c6b32535ab5"],["/tags/macOS/index.html","bbb590822d3a8d50b371d4c8eb098cb3"],["/tags/nas/index.html","02bc74ebb7371fa324cfa6307c572948"],["/tags/poseidon/index.html","01bd7ee67bb898c8716a36d96b4380f3"],["/tags/tls/index.html","779c65e0392cf2f1b5a3b628cf13e242"],["/tags/v2borad/index.html","1835d791bcc3c8eac97e3a826609d201"],["/tags/v2ray/index.html","1e9230a3fa0c802680ba0d1eda8d1575"],["/tags/vim/index.html","43a8967c7712a54d59302b3991b7df7c"],["/tags/vps测速/index.html","9821a4e7d91ec44803dcaff39d0f6a0f"],["/tags/websocket/index.html","d133af5bedefed95792c4f837c1c569a"],["/tags/ws-tls/index.html","c00a1b982f5477cdb543ec8c84e30631"],["/tags/七牛云/index.html","6a7a8fad7ecdb9e9088b88834353a169"],["/tags/反思/index.html","b23524a2f921a5c8ce2266cc2120d3e8"],["/tags/反思/page/2/index.html","4df0a4843ab15d2f86abb2cd0ab67b62"],["/tags/图床/index.html","87196beaead0dcd2b447246350a5120d"],["/tags/工作/index.html","3a5fe76695b6647b74e3543817b417e6"],["/tags/快捷键/index.html","85ca32d2f3e8107192a04cbc8cfd3884"],["/tags/搭建/index.html","872e30214598fc6b09ef90311dcff2f4"],["/tags/支付宝/index.html","3328516ca8742fe6ee76bd372633ac3e"],["/tags/支付对接/index.html","c45b38238a5fce473ee4fd88e6aad8a6"],["/tags/辞职/index.html","1890fe4ad829426ce9131ce5f958d663"],["/tags/阿里/index.html","f1048effa6cae947436dd5a5a772e4f5"]];
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
