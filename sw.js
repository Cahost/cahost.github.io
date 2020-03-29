/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","3cdb9f816599b3e77ae098701d417c4b"],["/2016/07/03/搭建/index.html","4557864f976fad8ca05d05f37b557b88"],["/2016/07/11/工作反思/index.html","d07c06d2c04be9b79604d251badba837"],["/2016/12/11/omz/index.html","24b6c2cf2e2046212c1e452ae6ebb01e"],["/2016/12/19/2016-12-19/index.html","2d37ba2a8d267f5b92013803d4593695"],["/2017/01/21/2017-01-21/index.html","dd97293b59ad82c1f3d2f6483113d46e"],["/2017/04/21/2017-04-21/index.html","c7f61b649cff8a49b1f9965924843a07"],["/2017/10/12/理一理思绪/index.html","bc0bde3a26453da9d79c1664792010e6"],["/2017/10/22/又上了网络营销的当/index.html","dc724120d9f37af418362536ed4ec293"],["/2017/10/23/2017-10-23/index.html","8d93d9adfe4c0a216d0f1b5d4b4359a7"],["/2017/12/02/2017-12-02/index.html","a93530c00e6a3454dc85cd88e3939c60"],["/2018/02/09/2018-02-9/index.html","c9fb3730bed25998630b5fc1b9573a1a"],["/2018/03/18/2018-03-18/index.html","c496705fc321380d8dd074687c24b9f7"],["/2018/07/28/2018-07-28/index.html","e8524f5418a82fe6fbc46119a6703b85"],["/2018/11/05/2018-11-05/index.html","6753a75efde8f12e4c1d507246ac8a4e"],["/2020/01/30/2020-01-31/index.html","37ff81be47bf25a872657ecd9111dd4d"],["/2020/02/08/2020-02-08/index.html","d6ad5631af07344cd052fa248410d13e"],["/2020/02/19/2020-02-19-2/index.html","8992f2c029788284f761accd52db6d08"],["/2020/02/19/2020-02-19/index.html","38d726582ff1ed8851b4796d96132c95"],["/2020/02/23/2020-02-23/index.html","aa566f286ca606dd783bf6a980047c45"],["/2020/02/27/alipay/index.html","fc2d7429f6ed624fa1d3d69ee8aaed75"],["/2020/03/09/iperf/index.html","42285d12e683e51dbc60b3713b47f506"],["/2020/03/26/2020-03-27/index.html","9a53345f5fff73d46921d0202d7a73f4"],["/2020/03/26/qiniu/index.html","cedbed22df3d7fc33356b1d4281e3e67"],["/archives/2016/06/index.html","f193eb17f9536dc71d95f51b9d8fdf46"],["/archives/2016/07/index.html","b28ab18c2670c9d2697bd5202879655f"],["/archives/2016/12/index.html","2e2a03308c50bbe97903bb555f3614f5"],["/archives/2016/index.html","2ae28b5520317be4dad0b7884dd59b83"],["/archives/2017/01/index.html","9a3eeffca10a97199d7b9cae3f678d12"],["/archives/2017/04/index.html","d3d7e946fe66be41a5e3c984a3183089"],["/archives/2017/10/index.html","4759f4ef625fee72e55af8fd58c115d3"],["/archives/2017/12/index.html","d29e01f970763a97677e2742a6c868fd"],["/archives/2017/index.html","301146fda28f1c8f92573bfcda494147"],["/archives/2018/02/index.html","305df88da57383967131008f8f48bcae"],["/archives/2018/03/index.html","5497c1b37dc65ee6599427576b51f034"],["/archives/2018/07/index.html","e87ee3bfde60b2a2bb55ffded4eb12a6"],["/archives/2018/11/index.html","24fffaa54b5edf71a0906beae2574877"],["/archives/2018/index.html","1d8771f752142aeb6d4aac8a1c48bd68"],["/archives/2020/01/index.html","5b5fb184b37c603fa19b7ec9bfa81b3b"],["/archives/2020/02/index.html","c43a4b1e95c6608368c73d28bb1f13d7"],["/archives/2020/03/index.html","68845e3a7d8dee204922623064ddbb47"],["/archives/2020/index.html","b1b1a281927d3b555ffa188158b79380"],["/archives/index.html","ddf9aae474e4f6764e79a26678007304"],["/archives/page/2/index.html","e32e9fc981b4f4528ad7c58147f73d9d"],["/archives/page/3/index.html","69e6c0c1527e53b290161051819a8274"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","629c7abc5465d5c3d1b2acfc5f4fc70b"],["/categories/工作/index.html","8d5f33f3f259ae30ae0b5d82b6b8c836"],["/categories/工作/效率/index.html","29315352b837c632bd23e18495f5abe3"],["/categories/技术/hexo/index.html","aacb85a18824ff00e0ba10d845f4310b"],["/categories/技术/index.html","6c68ccddc28ada3d9df191068187a22d"],["/categories/技术/page/2/index.html","d517724fedb814467f54eefb5bf9cc5c"],["/categories/技术/v2board/index.html","68db4da31e47dfd65ebfb53ff1be970e"],["/categories/技术/七牛云/index.html","0464486e8f343e0cb0b84f2bbe4b7523"],["/categories/技术/杂/index.html","7e1650601a307931113a12ed54e83766"],["/categories/生活/index.html","ebfefeac2a03383a394efe0408855ab5"],["/categories/生活/page/2/index.html","999a30cdd5f8a1f3da966e3707fc9151"],["/categories/生活/反思/index.html","1036837b4ebaa5f0dd86d2c0892199b9"],["/categories/生活/感悟/index.html","3279bcc78dffe9bce525d213ff416812"],["/css/main.css","aa14922aeb01cd9fbe7f74b73e69b3ba"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","ecf22710c6793884621c13422a8aad1b"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","467528dc3269582137d47614a9a44e58"],["/page/3/index.html","031126b7ee7c402a9d7edcffc1b8d776"],["/sw-register.js","3a470b44a6ad9b62ebdfa0effc4c9ff9"],["/tags/U盘/index.html","302e7dd00cadcdcd22b3194ddb2907db"],["/tags/alipay/index.html","cf3ae137ccfc4d11114c42ade842ca79"],["/tags/hexo/index.html","b288878124b0dc09db14bdb8e9ffff5a"],["/tags/https/index.html","602acae8e5f495850e6fb7ca5167fb3e"],["/tags/index.html","2675622a92c8a52db3de3f443d0a76b7"],["/tags/iperf/index.html","d8b854d1736a6f5f6a037c580ef58877"],["/tags/macOS/index.html","ccbd5b408aed483240ebef603149c3ba"],["/tags/nas/index.html","eb2dab3ae10fb56385cafcb0953067c5"],["/tags/poseidon/index.html","c63a744d1aeee440ac70f6fde465f33a"],["/tags/tls/index.html","c6c0c0ed1ad078a2e03da147108a5250"],["/tags/v2board后端/index.html","db4ca357d11ba26955ba859795783635"],["/tags/v2borad/index.html","56dad8c34e76bfa68ea5a60166039e3e"],["/tags/v2ray/index.html","b63e939b674a9441d4904c3a7af7b472"],["/tags/vim/index.html","3ceff8b1cb9806acd790424a62c65af6"],["/tags/vps测速/index.html","d2987d00a82d097d4377d8bee9a70f8a"],["/tags/websocket/index.html","bfeb3488c79793cc9795370c369446bb"],["/tags/ws-tls/index.html","b6eac3cd77ba6f247eb8eff1d8654be3"],["/tags/七牛云/index.html","be4a6c1b1f475341ac0adac362171de1"],["/tags/反思/index.html","ec8ac6c162a0761faec58a2af9772924"],["/tags/反思/page/2/index.html","ef9dc317e3f8ca4bd1f792edd943d084"],["/tags/后端/index.html","cbc4be393ab0966982debd405c12432b"],["/tags/图床/index.html","16522ca1c8d3af478cd1793cf3913776"],["/tags/工作/index.html","f9d93999496dd02513b037a1f4f58df9"],["/tags/快捷键/index.html","b507cb8a63a16bfc088559ba0a7f8291"],["/tags/搭建/index.html","514fd8cf86e2f24fce2733afcd11649a"],["/tags/支付宝/index.html","7bbb8afc1c1a59ed0612a549ed36cfd4"],["/tags/支付对接/index.html","91f97596b5c905a73cb6cd101c5ab9ce"],["/tags/辞职/index.html","2587aa6b85daace787f5fd223fe90db9"],["/tags/阿里/index.html","cf98131f764a6f11e858488847b5959d"]];
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
