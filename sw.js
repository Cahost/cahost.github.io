/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","5a9347f5e372c108e5822ccffdae08ca"],["/2016/07/03/搭建/index.html","7dcf1977149b8722d0f10d706925da47"],["/2016/07/11/工作反思/index.html","026119e7dd6bfc1615cef3cb0cad0486"],["/2016/12/11/omz/index.html","674c6ccdf39037abb4d55113bcc34a36"],["/2016/12/19/2016-12-19/index.html","cdd4196ced962137127d619abdc6f659"],["/2017/01/21/2017-01-21/index.html","886f9ad2f7996c2da5f25590c496cd80"],["/2017/04/21/2017-04-21/index.html","0e18928292c233d19286ad36a2a2fd32"],["/2017/10/12/理一理思绪/index.html","12ef210895ad6e1d862432323c5040a2"],["/2017/10/22/又上了网络营销的当/index.html","058a14619f8ba1a3298d5a8273677cda"],["/2017/10/23/2017-10-23/index.html","8245bfe79d8e654b46a7d5c2e48330db"],["/2017/12/02/2017-12-02/index.html","3006709d1f689ba362a9588fa27a453b"],["/2018/02/09/2018-02-9/index.html","d386b92ca7cbc56bd636078ad841a9e3"],["/2018/03/18/2018-03-18/index.html","7b07c38b8b91164480cfdb1cecbbd730"],["/2018/07/28/2018-07-28/index.html","8d22b232dba18568cdb5443332e37784"],["/2018/11/05/2018-11-05/index.html","026e69768b3c58798431e0acb062b9cd"],["/2020/01/30/2020-01-31/index.html","0dd6887aa99bdcaa58677e2a888f81ad"],["/2020/02/08/2020-02-08/index.html","135f2f4b3b79ed86722b764b41fd78be"],["/2020/02/19/2020-02-19-2/index.html","44c1af923437e4187596c22654ee76ef"],["/2020/02/19/2020-02-19/index.html","b8b3780f1cd0aa6f7d2dd50b303f5e34"],["/2020/02/23/2020-02-23/index.html","50bdbf0aae220c67c7d37cb75752d550"],["/2020/02/27/alipay/index.html","6048719fbc97b91c3a15b47f063a99fb"],["/2020/03/09/iperf/index.html","b82f586f6c43729e209834b95988f2a9"],["/2020/03/26/2020-03-27/index.html","e18a35be8d40500d66c22a363a31ead8"],["/2020/03/26/qiniu/index.html","97cf6ca632d12507b355bf74b731d00b"],["/archives/2016/06/index.html","842178ba112ff4a88c12669b38c8284b"],["/archives/2016/07/index.html","57c859a6e080ab94bb9d24fd80f9a0f7"],["/archives/2016/12/index.html","1258abd2831fa2f6c20aa51f4876ac53"],["/archives/2016/index.html","a3e0aad0d9e5b672a9d2ea2d222990fc"],["/archives/2017/01/index.html","571b9f196352feb3763471802abc9448"],["/archives/2017/04/index.html","5872e9a1d1c84382a311e6ed70173f74"],["/archives/2017/10/index.html","0440f46579b0c308bd618169052ba932"],["/archives/2017/12/index.html","f88527a974b5f61e815502c201912513"],["/archives/2017/index.html","5aecdaf026a2683deb741f315a5da6df"],["/archives/2018/02/index.html","8578b45230c0faaddf56450320465981"],["/archives/2018/03/index.html","6b53949d5aef792228ec119ab87bc754"],["/archives/2018/07/index.html","87a455eb2b2607ede45e444307fa208c"],["/archives/2018/11/index.html","516c7254213c9875455f2ebc410f00d5"],["/archives/2018/index.html","a21adf269e30653f9e0c9577860ca37d"],["/archives/2020/01/index.html","f3bc36f5f38f9f6f1894539b37fc133a"],["/archives/2020/02/index.html","03f0afc39578fb8ec32a3b5fb23f3528"],["/archives/2020/03/index.html","c463265fa61fcdb9e909285a010b7c78"],["/archives/2020/index.html","4805ba142d67cd181706c0c1739b3309"],["/archives/index.html","c073435e9df44de502ca96756d9c82d3"],["/archives/page/2/index.html","86e3ecdb25974aaa5d40bc0230e097dc"],["/archives/page/3/index.html","bf5c22822825c2840b82f662a3b8af57"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","95e6199a2f6d1e755ba8fdd3045d3494"],["/categories/工作/index.html","e2e5d754420f18de4d06299c50e0685b"],["/categories/工作/效率/index.html","d3bf38eabe19b591690da1f2e9203895"],["/categories/技术/hexo/index.html","ccb2ea75ac7843e8745f22f3d986ea11"],["/categories/技术/index.html","5aba9fb09b2cf3e7021f98155ff34e94"],["/categories/技术/page/2/index.html","51970774f6ec3463d1fbd4fcf94440d3"],["/categories/技术/v2board/index.html","2d0a747db7fbb9bcb2348ff3446e94c0"],["/categories/技术/七牛云/index.html","b22e6a0dc9b9e93b87459222e830a736"],["/categories/技术/杂/index.html","a50e8faac2a0d13e3e1089c7730024dd"],["/categories/生活/index.html","72a08a83f818c3d460c1ec587293a03e"],["/categories/生活/page/2/index.html","166c5ca76977b275ec2128ccd8d20208"],["/categories/生活/反思/index.html","9cff55ca9f6601df0f8fe113ec112ce6"],["/categories/生活/感悟/index.html","1343d1c9172e9bef16b4a249d71ff957"],["/css/main.css","ba71a51e61c0da0c7ef61ea9c7f424b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","b9574cf80dd835697886e98ce2c4203e"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","387ef1dc805e143b6a2a1b15d27ceb95"],["/page/3/index.html","f4e13b72d8588efa0b285033b673b755"],["/sw-register.js","2677138b7deb4d05eaf3aaa0a70c0349"],["/tags/U盘/index.html","87e90a2b0d83adb5aca6d59a258c28c0"],["/tags/alipay/index.html","feaf03c0e0dbb90474b5d82734856af2"],["/tags/hexo/index.html","2527476b4fdcc47d89c43308bb38ccf0"],["/tags/https/index.html","f3bb14fbd0d56444c127fcb7a875b618"],["/tags/index.html","cb5ea5f52450e1361cacc21954e44bc8"],["/tags/iperf/index.html","9c765d249414664c2133776117ceb676"],["/tags/macOS/index.html","4cb52a865a5f31f5e680ff25ed2dc10c"],["/tags/nas/index.html","522e374d3548c3fc5ad44184594c67e0"],["/tags/poseidon/index.html","8ef3fb894701f94c15848d5d1ef9ef87"],["/tags/tls/index.html","53ea5f02cf729991f224b6fee9377275"],["/tags/v2board后端/index.html","58ccc987a4fd66957b592da572ad2e10"],["/tags/v2borad/index.html","cd69845ebe3654216f09109762b9621b"],["/tags/v2ray/index.html","9b15d665371458a24cd94294ecb96aad"],["/tags/vim/index.html","817848c729dc6f3ff971e944d84785aa"],["/tags/vps测速/index.html","0e4ab9d8a9ae4e154b95d1dc2f4592c5"],["/tags/websocket/index.html","fc4dadfea02d7e1c5bb1d69040952ec3"],["/tags/ws-tls/index.html","c673d38dc1d11aefe815dcfeb7b2197b"],["/tags/七牛云/index.html","e4b8cf8c38be680f79ee1071c2f43882"],["/tags/反思/index.html","44c7f71728fdae8baaa8a5c574e5487c"],["/tags/反思/page/2/index.html","0ac2cd902211a67f387f6ea76c34c6c4"],["/tags/后端/index.html","6aa4d5380a9d0b96f40117a880de5487"],["/tags/图床/index.html","4c50ea33245f82e80ffe93b21a3e7998"],["/tags/工作/index.html","3367b51efb9dc005fa5c055033dd72ed"],["/tags/快捷键/index.html","50456aabbf11be274e6a7fe059545b28"],["/tags/搭建/index.html","4c1aaffdc1ec1af34bb9c63eb3f8d996"],["/tags/支付宝/index.html","0b979c356b788601590f228ceed86386"],["/tags/支付对接/index.html","6171783be0a8526231a30040c1a192f4"],["/tags/辞职/index.html","529fc5db7934516beeafed822cc82b08"],["/tags/阿里/index.html","e9862d71c29e2a7ac45c66d17b8c7aab"]];
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
