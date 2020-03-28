/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","03982eed4211d1f092a56383dfe17ef1"],["/2016/07/03/搭建/index.html","c8bbc3267cb3f4598e35e493a82f993a"],["/2016/07/11/工作反思/index.html","9cf48dae65a3194013bcf9f830e54d04"],["/2016/12/11/omz/index.html","1aa7c06a44cd533782d054417facdd94"],["/2016/12/19/2016-12-19/index.html","c2658371d9f2bef064b61a40ff1b498c"],["/2017/01/21/2017-01-21/index.html","d80337f7747df11a4886f2576c29ec79"],["/2017/04/21/2017-04-21/index.html","851e6ee3e8b9bc0aa956aebbcd2b384e"],["/2017/10/12/理一理思绪/index.html","88059f4a419f23d8fef5c3b61db98138"],["/2017/10/22/又上了网络营销的当/index.html","0a940d6884fc90dc5e6133c20778fc08"],["/2017/10/23/2017-10-23/index.html","352b3c16f3bb094a11f9c703b9924ad9"],["/2017/12/02/2017-12-02/index.html","96f5e5340d3b78880ee9cc4b91139632"],["/2018/02/09/2018-02-9/index.html","8cc832ba83e891e505ad27262c364a32"],["/2018/03/18/2018-03-18/index.html","e80c5a2885d6c3d5482b23415e3d9c52"],["/2018/07/28/2018-07-28/index.html","1e4ce61d5bc8f4a814e97c3af6515b01"],["/2018/11/05/2018-11-05/index.html","a66a8b002ce64e03bbc0ad2761562b40"],["/2020/01/30/2020-01-31/index.html","393464e52b26421075e6e7ca2bd636b1"],["/2020/02/08/2020-02-08/index.html","0cd2f24aa5ac95179377f30782f9406b"],["/2020/02/19/2020-02-19-2/index.html","74fc1a91983362f49361d2b746d8a293"],["/2020/02/19/2020-02-19/index.html","537ba9e0b5f284daa356b84a619dd07f"],["/2020/02/23/2020-02-23/index.html","8f9ca9ad19f5e53fe9b8823a0e909ad6"],["/2020/02/27/alipay/index.html","760355a4309a4e37def7b1a9d3ba5852"],["/2020/03/09/iperf/index.html","03770925ce7ceee93b2ac6cce0af9061"],["/2020/03/26/2020-03-27/index.html","478dba7dcc1ce76a614a4a66ac1808ed"],["/2020/03/26/qiniu/index.html","55a6d36fa5cefd0142db6b1063fd39f8"],["/archives/2016/06/index.html","e6fb186c5537f28d877516f55f55b701"],["/archives/2016/07/index.html","92830cb0a6b3dc1b768805777c03c774"],["/archives/2016/12/index.html","b120dc00b89385bf74157f21b9f969a1"],["/archives/2016/index.html","bd025299b3d230d80c97fccc63e0699b"],["/archives/2017/01/index.html","ed5b32698e737d663d57ff215d3f7ddd"],["/archives/2017/04/index.html","6cce74483fba716f32ed65c49f17975f"],["/archives/2017/10/index.html","f308e5231ec1ea1152b5de4b3151d59a"],["/archives/2017/12/index.html","53486ea17b91c893449237bbaf1df0a3"],["/archives/2017/index.html","3aa0ba7be89c25d015a0650df67b1ee1"],["/archives/2018/02/index.html","78194c8b9370b3aa6b426c8366b6fb59"],["/archives/2018/03/index.html","4ac98ac2c91cff8a5b5ba9ca2c63f88f"],["/archives/2018/07/index.html","0fd8f405734e79aa362c683d1f67b4f4"],["/archives/2018/11/index.html","72beab50063f68006f38db1afb5417c1"],["/archives/2018/index.html","36abdb801c0646f30301ea58e2685290"],["/archives/2020/01/index.html","0e2f94d9b535c4a911bf5f36367517e5"],["/archives/2020/02/index.html","e55f5987285073c8e60d6bac2a721676"],["/archives/2020/03/index.html","63e944693b2bf85fe5f914e73dcb74f1"],["/archives/2020/index.html","b77f1c31cb8950c96163ba59b2b90142"],["/archives/index.html","524f3c673e75fbcf2d24be7dfba213be"],["/archives/page/2/index.html","c1fcebc63686329af722d38077d64059"],["/archives/page/3/index.html","c4cdb165c0c189cd1a31d8cecec82442"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","851be404032197e820f74aa723d54d68"],["/categories/工作/index.html","c36e7a84e69f5a3a8c110cd880e2afbd"],["/categories/工作/效率/index.html","d46130b33c4e7cd3f2fa82fb601e316c"],["/categories/技术/hexo/index.html","57c05ee9a375e205d7708117118b7e86"],["/categories/技术/index.html","b613980ca36f5f033d33530ec9e54ba0"],["/categories/技术/page/2/index.html","9878c0474e6e1b2b95b0af3e5e9dc722"],["/categories/技术/v2board/index.html","b3f02c96088e690ec3cacd2e2f4ddcac"],["/categories/技术/七牛云/index.html","c3a174bcd17f7b1a8cdf56c9a8a09b6e"],["/categories/技术/杂/index.html","d2bacbcaabe2ba37905a5247989545a6"],["/categories/生活/index.html","786be773e80cbdae910c5503017a8179"],["/categories/生活/page/2/index.html","d3c7e8aae0b8931981763f0869b10170"],["/categories/生活/反思/index.html","8af68533447b3a39eb5a1d2fab679dc8"],["/categories/生活/感悟/index.html","a405d709c10e8cfea1df6e8e858dab73"],["/css/main.css","7d941f3aaa4710c3cf134e8178dd8f3c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","db07471c75a46492d09d2289db518b20"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","24359889f5f8e1c81aa079be05c95590"],["/page/3/index.html","fc6e14a6f2281b91b530c77570c7d65e"],["/sw-register.js","62a831fcd201cac49b15a068f91081cc"],["/tags/U盘/index.html","fb1d7b8bb72704fd11a5e419e09dd263"],["/tags/alipay/index.html","f5eeff3e22f0062d10b1c26226bc7eef"],["/tags/hexo/index.html","f70afff9d7e9bbb9c8b430d8c0321953"],["/tags/https/index.html","93120205dbd4d90ad9fe7192178d9ba7"],["/tags/index.html","06d81d045e5d173f08e42f3c9034dd0d"],["/tags/iperf/index.html","efc1e87b3931adec5eef8c8cc6c993a4"],["/tags/macOS/index.html","2d7588f0753326688ca551402ec9d317"],["/tags/nas/index.html","80acbc176bacca0d5081875633d31d6d"],["/tags/poseidon/index.html","a7e912827315a02c9b73b9cf950ea99a"],["/tags/tls/index.html","edd311bc702b0818d0a161895145c7c9"],["/tags/v2board后端/index.html","e60e9b7b7c612297d0f5988fd762fffc"],["/tags/v2borad/index.html","56814015afb7cc32c66246f9a92c8a66"],["/tags/v2ray/index.html","38043611594cbb3cfa4307a1ea42f6ab"],["/tags/vim/index.html","cd52a9ae338a199db6b31b2f0833ebc0"],["/tags/vps测速/index.html","16fe31abeafa6aada40c217d001927ac"],["/tags/websocket/index.html","d0ddc4c42330a1b72a69260140fbbaa5"],["/tags/ws-tls/index.html","4fb66c1313cf6a71ebf724c3e783aa42"],["/tags/七牛云/index.html","420daffff3e35970f220e1eda5688751"],["/tags/反思/index.html","eded25c166c42e8e750aca0c211532b2"],["/tags/反思/page/2/index.html","08375d99316d6af14ad6fcc6c52ff353"],["/tags/后端/index.html","d12b0f7a5b922ad7be59ef49ce5c8d5c"],["/tags/图床/index.html","fb11780733f56787edd67433b5587047"],["/tags/工作/index.html","7f9186c6bdd2ae80b819a06d9800c5e9"],["/tags/快捷键/index.html","74fdc817c9698112ea127ea09d9fe82d"],["/tags/搭建/index.html","9325f82a16ff85c55efab7be16020e4e"],["/tags/支付宝/index.html","adf84881cda0cd28a5a57e48edf04a8c"],["/tags/支付对接/index.html","e84b89d5571aa93ccaab25965f82782c"],["/tags/辞职/index.html","7940464381419aee493155da4ddb841f"],["/tags/阿里/index.html","a7bf50bc34ce9060046b5d0961d1c57a"]];
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
