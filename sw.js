/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","228f4a061931b7fb89d080e4cfa34824"],["/2016/07/03/搭建/index.html","0838447f724f5f68adee92176196a2ae"],["/2016/07/11/工作反思/index.html","d58049fdbcb7174602a21de23b1c50c1"],["/2016/12/11/omz/index.html","4eaecb035a3601cde6cd4dd05ebc53b3"],["/2016/12/19/2016-12-19/index.html","298fb25293392f4b1d71e63f7dcdde82"],["/2017/01/21/2017-01-21/index.html","5559893700888a48fae7e312d988dd9a"],["/2017/04/21/2017-04-21/index.html","30f9f187bb963d2d0f1507ae67e02505"],["/2017/10/12/理一理思绪/index.html","32ce9d404fdf1e03a016a97317c5b550"],["/2017/10/22/又上了网络营销的当/index.html","33d8eaa78218b997e83c883f22e50b84"],["/2017/10/23/2017-10-23/index.html","3b74c9143df4a7856ee3cf271c232c2e"],["/2017/12/02/2017-12-02/index.html","0d0cc48b46bc8a88d82afa53db926c30"],["/2018/02/09/2018-02-9/index.html","0fc2cd81f6734795bc293ce821e6fcd8"],["/2018/03/18/2018-03-18/index.html","8e3e2f719b78efa68903efd0aad84bd4"],["/2018/07/28/2018-07-28/index.html","f3166fd0715e282afb24a7d17be9f694"],["/2018/11/05/2018-11-05/index.html","37b6b905fdabcf38de1718eb34f89041"],["/2020/01/30/2020-01-31/index.html","c06189a574b3ce9b260a12d8aa5c70ce"],["/2020/02/08/2020-02-08/index.html","cefbbba80ad3573620af95cc93106e48"],["/2020/02/19/2020-02-19-2/index.html","16c478d1321a2c7b83eec083f042bf32"],["/2020/02/19/2020-02-19/index.html","6190c17f295e85c25c3d12f3e6e7b78f"],["/2020/02/23/2020-02-23/index.html","de5f6501057ec3662c40e140a0271a73"],["/2020/02/27/alipay/index.html","a7ecaa2f2a08497c814874fa8188dc4c"],["/2020/03/09/iperf/index.html","d63fab2d5640710f52074f6a03db8768"],["/2020/03/26/2020-03-27/index.html","31b414aaaf58dd962a90d591935326f7"],["/2020/03/26/qiniu/index.html","7fce196afd99eab71b97488e2209d546"],["/archives/2016/06/index.html","f94bfecc20e0cdcf8d33cfd4748f2820"],["/archives/2016/07/index.html","6ceb6641a22209574555802eb917c14c"],["/archives/2016/12/index.html","c2050680552b9a0cfb5933ed9ab2ac6f"],["/archives/2016/index.html","d5bbcf7aa8129d998adbf5f9368dad1d"],["/archives/2017/01/index.html","9d07f17061be61690bc351ca879334b6"],["/archives/2017/04/index.html","f312de3ff48446f0d140cd303ae111a8"],["/archives/2017/10/index.html","88380b98c1b332aa9bb79007c64c5bec"],["/archives/2017/12/index.html","799c6e036142c1f79bddae6bdcd342be"],["/archives/2017/index.html","a917d0935fa3e4ab10a512a3632e2b42"],["/archives/2018/02/index.html","986bbd1d7ef9bdeb439c00234febeff2"],["/archives/2018/03/index.html","fdff7fc38537b8b7e18eea4693df4c82"],["/archives/2018/07/index.html","b3426537a2a776d7f533881006e58df9"],["/archives/2018/11/index.html","441be940b7636d9363e6f0e8e39ef5cd"],["/archives/2018/index.html","1e96fe0cb4a173760e5bf399e1f9e8bd"],["/archives/2020/01/index.html","ec8de5e6bd07b33840f54f935b28bd5f"],["/archives/2020/02/index.html","337d61504a747ad04678ac3a6c7cac66"],["/archives/2020/03/index.html","ff9a420d047bb6746d7fde3078a7e676"],["/archives/2020/index.html","855a5a7e70a3a868b9e877b05dfc2b03"],["/archives/index.html","6f953d508bed27d142f2d38cf587e1cc"],["/archives/page/2/index.html","df803bb33ac63050fef29587466f018b"],["/archives/page/3/index.html","96997d617150dbe867d8d4349e25e3db"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","7a434654d91b1613511f8a22fb6325fe"],["/categories/工作/index.html","286f5c377f414b481cfa85291c808acf"],["/categories/工作/效率/index.html","d143490afa286335d28e37c28aeb01e3"],["/categories/技术/hexo/index.html","c871c29eb4078841275baf431e6d8134"],["/categories/技术/index.html","44935c317860c9f3f849518ee643ea33"],["/categories/技术/page/2/index.html","19f67548573dd01da6b0e93944b61bc0"],["/categories/技术/v2board/index.html","49983bbb77fe0e25c80e599ad7595d1a"],["/categories/技术/七牛云/index.html","7bab69ae3820e1b79df478e0f4c4fb73"],["/categories/技术/杂/index.html","fb959410a82b9ad22e3291707d666f99"],["/categories/生活/index.html","904c3fd83df132398e5319475e8d6f86"],["/categories/生活/page/2/index.html","f326426bbda48ff2427b7670e6c07017"],["/categories/生活/反思/index.html","651c40421301e4dd8c144d76e370456c"],["/categories/生活/感悟/index.html","23c18a39efcb1ce2c416cf622eea29e0"],["/css/main.css","ba71a51e61c0da0c7ef61ea9c7f424b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","bca0479c30802928bbe51c7e9121e30d"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f6613e44dd936567a5326ccdf991420d"],["/page/3/index.html","07805228fb867d6dfbe7e6dc8e49e832"],["/sw-register.js","0bd3f6c4c4e2fc767ee17777f638f9b8"],["/tags/U盘/index.html","8757b0b68989d43749040499f2256baf"],["/tags/alipay/index.html","de8be98860d9ea55bb55f062132d9f6b"],["/tags/hexo/index.html","84d06ab87e05731daa1315f30e3c13bb"],["/tags/https/index.html","902416fa729f1ecd7dc5e93989f6b7fc"],["/tags/index.html","2f5468369f8a49d6cb8bd01620b906ba"],["/tags/iperf/index.html","48df860b4d0a79fce3138c8c66586f37"],["/tags/macOS/index.html","056281834d969bd655ae1695b6e8abd0"],["/tags/nas/index.html","18671e04df8690fe767ffed476619c38"],["/tags/poseidon/index.html","b51a67a483ebd8dfdb400764135414a5"],["/tags/tls/index.html","b39aee91f77d8e27577a9ded5ce7136f"],["/tags/v2board后端/index.html","7a858ebb9c1c8891fc2b80db51e4c267"],["/tags/v2borad/index.html","320ac30ce07ba4dbe2e5bcae9b70817d"],["/tags/v2ray/index.html","93e43dd8a8b34d156e5dea2184007895"],["/tags/vim/index.html","2aa39876db20f46f01d353ed8de89cf7"],["/tags/vps测速/index.html","993415e688a3e353f8aa4d799dd868c9"],["/tags/websocket/index.html","e6a1481ad1a4468623782ecff09a8716"],["/tags/ws-tls/index.html","d5ce8799e4bc031e33193990cc1c8304"],["/tags/七牛云/index.html","aec60f641fa36b361f255dbea7f64fdd"],["/tags/反思/index.html","b8433132419eb00dd4dc68016248d674"],["/tags/反思/page/2/index.html","5abf52a4f73071e68c19cc3e8434caa5"],["/tags/后端/index.html","be31a2fa220d64b638cc99bd497abf63"],["/tags/图床/index.html","f836aeb27e640103fd31a76a5c959692"],["/tags/工作/index.html","f18c69eece42b5da40154220557c0daa"],["/tags/快捷键/index.html","6f400e51b01e2cdcea9b5f8bb210f98a"],["/tags/搭建/index.html","06c1076c2fe15379e21a5d6d9e1d7751"],["/tags/支付宝/index.html","3fe4f95dec99dc53ab33d1b2fda592f9"],["/tags/支付对接/index.html","ffcd52b266b329967461bc17e3e007f1"],["/tags/辞职/index.html","f569061c82358c6b09bbe45d01307991"],["/tags/阿里/index.html","58d33ec94cc2c107ffe326c33725c63e"]];
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
