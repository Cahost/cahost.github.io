/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","153398286596ac85969db0c4363749db"],["/2016/07/03/搭建/index.html","e1f7a26b5d7b5512a14a7338d655c058"],["/2016/07/11/工作反思/index.html","c8d5be753cbeb6c7719094734ae80477"],["/2016/12/11/omz/index.html","30d5d4be195a2999b98295c0d9a76afc"],["/2016/12/19/2016-12-19/index.html","23ef4f80f004b14f801ebab6bda5535d"],["/2017/01/21/2017-01-21/index.html","74145efac1550891139bb3d4e69b5343"],["/2017/04/21/2017-04-21/index.html","64030aa8569b7a4ad5e3c68b8f56037d"],["/2017/10/12/理一理思绪/index.html","158c6577865ac9c7840037683b45b7ed"],["/2017/10/22/又上了网络营销的当/index.html","66cc29b41352cc6db3ec2dab7e196023"],["/2017/10/23/2017-10-23/index.html","9ae16e1a2aa53c455ea297680d7248e4"],["/2017/12/02/2017-12-02/index.html","16ab41f13a8f121f2915cfc10929864b"],["/2018/02/09/2018-02-9/index.html","cf3ea82fa273716b62dc66c37807ae4b"],["/2018/03/18/2018-03-18/index.html","05757e4c78bde26102503d398a84b725"],["/2018/07/28/2018-07-28/index.html","3b6cb2735506dc76f94faa1464f9b5f3"],["/2018/11/05/2018-11-05/index.html","9d1b427a93795ee741576042dbb8a73e"],["/2020/01/30/2020-01-31/index.html","c209faabbe3e3544a68bd6e564aa13be"],["/2020/02/08/2020-02-08/index.html","b5aa6d24c84a735f84f7bd1f2515c96d"],["/2020/02/19/2020-02-19-2/index.html","d56cb21949f8bbbee3b880785381cf83"],["/2020/02/19/2020-02-19/index.html","4b13acc0a51e8d1b7dd572b911b0a4e9"],["/2020/02/23/2020-02-23/index.html","e478d3beb527089fa43707bf20e17157"],["/2020/02/27/alipay/index.html","5ca4d812f4fcfc595da9829d85c476e9"],["/2020/03/09/iperf/index.html","206d430a3bbe664a6e0709213a99d87d"],["/2020/03/26/2020-03-27/index.html","6942e061372d69696c1e7d40f3a65192"],["/2020/03/26/qiniu/index.html","73400d604580467e1b7f0c2fec8e60c8"],["/archives/2016/06/index.html","bc3057b8d67225cfbe137f81d4edee40"],["/archives/2016/07/index.html","d44d4f3786d0db3888565376ad32b939"],["/archives/2016/12/index.html","2fed09c93c16408883cc15d852d9a14d"],["/archives/2016/index.html","f3fa62d9b2b684a652035157fd4613d0"],["/archives/2017/01/index.html","a0011ba1ef5e946ee8fb2bd2bf0e772a"],["/archives/2017/04/index.html","cab26d9bc650337fc4d856f19a2b94c5"],["/archives/2017/10/index.html","f0ca9bf4261666a07ddc6ad5c5d3b355"],["/archives/2017/12/index.html","c02b344ebf5b6a9f3f08dd045ee55176"],["/archives/2017/index.html","4bac863ad92d6540e697d012191f4386"],["/archives/2018/02/index.html","44a853b8142ab7b441435fb3a0859d55"],["/archives/2018/03/index.html","6e22e80c561ded2300de09cad04270db"],["/archives/2018/07/index.html","f78750e59c7bde1d3f75200e1a8bc245"],["/archives/2018/11/index.html","9839de9b5c1205fb1190d88306320e45"],["/archives/2018/index.html","271f5a151de5237c2bb93321780e7c86"],["/archives/2020/01/index.html","115234ae8cc7b66e9083702f6346d762"],["/archives/2020/02/index.html","e7a2955542df3e12ca8898dc7433afcc"],["/archives/2020/03/index.html","8aaf2206a78811989e12350b1673a0ea"],["/archives/2020/index.html","1bef53d940cc91f4c678ce095a4c22c0"],["/archives/index.html","333e20e5c299b1d531c08947464ab9cb"],["/archives/page/2/index.html","0240f6ffc7b475de0084eef7cdb14613"],["/archives/page/3/index.html","2a6048cbf43c1971e57f718c26f2dd0b"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","032e770562e2fff62a1cbc89a21f1858"],["/categories/工作/index.html","7221635f77be61ac4b5c770ecb27af53"],["/categories/工作/效率/index.html","460695b060f8524fc704b280d8fe3ff4"],["/categories/技术/hexo/index.html","22bbf257e46dca930c32bd178d710e52"],["/categories/技术/index.html","709e1893f4b5fed0d45949994519f2f9"],["/categories/技术/page/2/index.html","dddef23befd08e429a9edcd3b06efd6f"],["/categories/技术/v2board/index.html","f40747c1a45732210535fa9bc2ad1317"],["/categories/技术/七牛云/index.html","8fd24325a85894b5b57a6c610464006d"],["/categories/技术/杂/index.html","6552f58df5f3cb7434eff0f0cbc65187"],["/categories/生活/index.html","3e44779a28309599c029b72d33e1245e"],["/categories/生活/page/2/index.html","a93df305d33bcfd876577da021bc72fd"],["/categories/生活/反思/index.html","f65afbb6d6db7873d62401e8a5b3c2f5"],["/categories/生活/感悟/index.html","6d6467dbc40892966702e3bd9d1be3a7"],["/css/main.css","aa14922aeb01cd9fbe7f74b73e69b3ba"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","8c8c23709d547b88d223250dadd14fbc"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3b04537d768b775eaff74ccbe1274f19"],["/page/3/index.html","744bf81a2a70c2e16fd187e5da2a5569"],["/sw-register.js","bc44834641b7826cf3d7b4709997ad0b"],["/tags/U盘/index.html","15e9b4a757ffaff2f15ca58e96f2a55b"],["/tags/alipay/index.html","7de4e3541b62c502914aeb23aa83fdc3"],["/tags/hexo/index.html","cc509bc4da0e18fc9de98b899bf4db45"],["/tags/https/index.html","653c8e0d4d7dfc7c2ae51bdf83e8dce7"],["/tags/index.html","b5b7c6d14de30e8a4da038d4e538f376"],["/tags/iperf/index.html","049417dd99d896d990559b399006b1db"],["/tags/macOS/index.html","fe2fca9fd1af9aae7ba4c730343d8723"],["/tags/nas/index.html","e1d81d7145520d63a895a1ae20e152da"],["/tags/poseidon/index.html","b0025371a7d20739a6c5dbf26a22b4eb"],["/tags/tls/index.html","92be3fddf24690ef0d86f5c13783d2df"],["/tags/v2board后端/index.html","e5b83d21ae9206295fc3d88bf42e27f9"],["/tags/v2borad/index.html","6e7b47913b823f2331e81b1bfa0b97ee"],["/tags/v2ray/index.html","e2fb41f2764b424b3439441ac43b7a22"],["/tags/vim/index.html","f98cd5192fede8ecebec4b229a569a4c"],["/tags/vps测速/index.html","c03de5fbe519bc13a7cb4ebb8c1a34d8"],["/tags/websocket/index.html","f11b662357102a4d2a038fc055a0f266"],["/tags/ws-tls/index.html","816febc8b4a6146b3dad5b719fe8f0e4"],["/tags/七牛云/index.html","e0647597c3ff11c72201d18a09c77f2e"],["/tags/反思/index.html","c183e8b9d763b056366735fc8f01f94d"],["/tags/反思/page/2/index.html","5d45bbd97fbf8411d49ee7611b5bc212"],["/tags/后端/index.html","84bb85ab9d9ba90b5cccd4acb0329634"],["/tags/图床/index.html","aefab61d0e7858800d2045a39b396b6f"],["/tags/工作/index.html","51c0db0c6b00b8fb27cfe12e28626347"],["/tags/快捷键/index.html","19cc3997eb591864ee5255be056d937f"],["/tags/搭建/index.html","8a4dd8cb90f1b7fffae7d176a0a16354"],["/tags/支付宝/index.html","5826bce4841e373008b4d6def6ad9918"],["/tags/支付对接/index.html","ec813389c3ade6bf21d3aad40024e794"],["/tags/辞职/index.html","736d50bfd16619cedabb4a6b07dbb78c"],["/tags/阿里/index.html","4858012e7c225ebc97949a684b5f054b"]];
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
