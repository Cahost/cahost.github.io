/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","5b432620019766d122525508b7a168ec"],["/2016/07/03/搭建/index.html","9d3f7e98f155eb860fbde45cdf5c8ac9"],["/2016/07/11/工作反思/index.html","c9ee8e0dc8cd3edbef0bdc74ee82ebd5"],["/2016/12/11/omz/index.html","77006a473d80f8ce2fb1d5e0b279976f"],["/2016/12/19/2016-12-19/index.html","5ef2a56f9d9d3d981f7720a3a4401b72"],["/2017/01/21/2017-01-21/index.html","b58078a5c7378b9b9deda2d3572a2ee2"],["/2017/04/21/2017-04-21/index.html","c684b7c8a627264a676c58722fa11d90"],["/2017/10/12/理一理思绪/index.html","7a3d20c0698f35e6b8ac77145d1df485"],["/2017/10/22/又上了网络营销的当/index.html","026d2b6c0bd13c3628b22c48b1c07c90"],["/2017/10/23/2017-10-23/index.html","7ba6ab3c97d11a1445668a8007defa45"],["/2017/12/02/2017-12-02/index.html","86d5fd33a02fc50451ef8dca786475f1"],["/2018/02/09/2018-02-9/index.html","77ac01fa580318abe8b829c620abea94"],["/2018/03/18/2018-03-18/index.html","33d7fa76a40a8fccf7a07b5496fb68d9"],["/2018/07/28/2018-07-28/index.html","9d902917a46a55d0b48e09120ff6dcf1"],["/2018/11/05/2018-11-05/index.html","85f4ed9b677537096bc5cf9c1b6f11c0"],["/2020/01/30/2020-01-31/index.html","02fde3a96263b3796a10eddd19880326"],["/2020/02/08/2020-02-08/index.html","818df1cbef718b9477e0d22b7c0ee614"],["/2020/02/19/2020-02-19-2/index.html","1522ceaaea74b28aa5869201351ab211"],["/2020/02/19/2020-02-19/index.html","48bdf695c6a45bd108030ed1f9d0f7f3"],["/2020/02/23/2020-02-23/index.html","1d0fcd10d1f25b61c007e013a438024f"],["/2020/02/27/alipay/index.html","a50d703e77578b3ce3817568305a32b2"],["/2020/03/09/iperf/index.html","890eca3496233cb23c684e846b7e5ce3"],["/2020/03/26/2020-03-27/index.html","6bf364393b354f7ba17aa59855a693d3"],["/2020/03/26/qiniu/index.html","286fe634faee1efbe728c6f5f8fbb460"],["/archives/2016/06/index.html","c0eb986c09ec65d947f89e9c1833b0a9"],["/archives/2016/07/index.html","3f222ae46dd83fe4291eb6a846e6b99e"],["/archives/2016/12/index.html","4300542803e23bdcf45d19ebca2fa94b"],["/archives/2016/index.html","4c3ed4fdeb673e4fc478cef9cac6beaf"],["/archives/2017/01/index.html","c2f69aae2d8ad226aeb9cf02e3e9c96b"],["/archives/2017/04/index.html","946efd348d83da54c5817cd722c8a8d1"],["/archives/2017/10/index.html","63c3c02ac4bffeba21f161e3010019a9"],["/archives/2017/12/index.html","fe600bf3b18c4e096685bf99e3ff4fe2"],["/archives/2017/index.html","7ba089532da2d9538702e75296a5d50b"],["/archives/2018/02/index.html","2c3f5eeddb6b09947427c4b2de84ff6a"],["/archives/2018/03/index.html","839ef517dc1cc08a69d3c0fe6d5df315"],["/archives/2018/07/index.html","4d92b7e6b342b331b845eaf332f406c6"],["/archives/2018/11/index.html","44fd2a4fe53062a5a3ba883d6130f977"],["/archives/2018/index.html","0537c1cb4b0e0409cf440685557b936a"],["/archives/2020/01/index.html","d78bd4b882a4dd6e4ed5b118444f0589"],["/archives/2020/02/index.html","284133e0b629663209819a5e3e3fe68a"],["/archives/2020/03/index.html","3a905a3e626c7cd55e4b0b533d2d553c"],["/archives/2020/index.html","d73e3a7b803ed66dee367d1bdc6d83bd"],["/archives/index.html","6eb7057c838e32eb1ad516c7e919a4ad"],["/archives/page/2/index.html","063a80b925cee4c16842a875661d6e4a"],["/archives/page/3/index.html","22db9a98c0fc1867c0bdc46a5948ddd0"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","e94bed18a716817a126d6209b16018f4"],["/categories/工作/index.html","2053c4005fc34319e6fe4fbc4b0fc6ba"],["/categories/工作/效率/index.html","b47510ed3c0199e8052102ebde26173e"],["/categories/技术/hexo/index.html","cfe9b1d9d899151f788a7181cb3c8468"],["/categories/技术/index.html","b3868845cd09a95a5de695c8dc08ba06"],["/categories/技术/page/2/index.html","6c09bac71a3a4e684ec3c77f660e8cd7"],["/categories/技术/v2board/index.html","5cbbd72ec20bf78522abbe6d5dd33e5b"],["/categories/技术/七牛云/index.html","3efbb837af6ab7d7a6638f2bd79d8918"],["/categories/技术/杂/index.html","15d7669b8bb89729bbf0d8d9c7f55f8c"],["/categories/生活/index.html","4114b5ac1cc141d7fdc6facd6767df96"],["/categories/生活/page/2/index.html","223e015f1f6283406e10e965920174d2"],["/categories/生活/反思/index.html","0b00e058fa12b0cad3d945353b6716f9"],["/categories/生活/感悟/index.html","dbda17451b3fb2f79132e318c0d8d8c8"],["/css/main.css","ba71a51e61c0da0c7ef61ea9c7f424b5"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","957644d1f8087ed92b6bbb753ce62e3b"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","2c9805e0deb8112d465caa84948fe163"],["/page/3/index.html","e706c24d4ea20fc3ef603b158c52f493"],["/sw-register.js","234f76275d14a30df69442184e4c9a01"],["/tags/U盘/index.html","9fa5cbd0668a64822f461472af4971b3"],["/tags/alipay/index.html","1615faaed20acdc3c12c94b200883108"],["/tags/hexo/index.html","392ccb96e04fe86bfac3bf0e5a408ae2"],["/tags/https/index.html","1943fd89624ce38ecfcf84af7a0511f2"],["/tags/index.html","f565a41b376e6dc5957ee52c9fe5b9fb"],["/tags/iperf/index.html","728accf4dd1aaa869718810b63ac00dd"],["/tags/macOS/index.html","f1cc25968fa84542aca2350a085eb843"],["/tags/nas/index.html","68c8cce8bba2f82f6618982e3c534195"],["/tags/poseidon/index.html","04662704835b80d08a63b33dad021b59"],["/tags/tls/index.html","1ff7244e3da7eedf90f12286ea03392c"],["/tags/v2board后端/index.html","770780ca877eafa6fa9f8f5d40a299f7"],["/tags/v2borad/index.html","bc229b0eb46e82d2bb8e23325aa4dac7"],["/tags/v2ray/index.html","92faf8e8332d2a207a12b6144d380e0c"],["/tags/vim/index.html","f2e7b3a5038f6f00357826058b168ca3"],["/tags/vps测速/index.html","46ec2f0a7cd1d9061480a222d27f543a"],["/tags/websocket/index.html","4b1203b1090dcff538c6f693c7966f5c"],["/tags/ws-tls/index.html","50fbacde6421ac1a8d9d23213276e99d"],["/tags/七牛云/index.html","2648cd2cb079abcf597c86c3c99de798"],["/tags/反思/index.html","ba448d1c7294fe98e07f6e33db21eff4"],["/tags/反思/page/2/index.html","258e96d406da8b5e3d3d555dd2e5b217"],["/tags/后端/index.html","bb4bf65ada223913996ff87c1cc8a935"],["/tags/图床/index.html","22bf951d82fba28cecad4dea61559353"],["/tags/工作/index.html","efdeecfd3324d4f0b62848b302f74d4a"],["/tags/快捷键/index.html","c3c7792eac539c392216cd8f3c5d4cad"],["/tags/搭建/index.html","853896f25d30710360f989de6ebd9dd2"],["/tags/支付宝/index.html","c3c2702f8ac4fbcec468e1e9f4152a22"],["/tags/支付对接/index.html","28279137a25a82c839d8a8e0ecd9389e"],["/tags/辞职/index.html","0192a60b04a7014d2c376ba3d42ff630"],["/tags/阿里/index.html","8a43ef5ced16c2c486efbb1d65bba54f"]];
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
