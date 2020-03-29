/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","26aaa323f801827bdc09dad204227bb8"],["/2016/07/03/搭建/index.html","1dea00050330b81b65ed93d0480eef4a"],["/2016/07/11/工作反思/index.html","e2d7abd1bc9d3c6002132a69d47fb5db"],["/2016/12/11/omz/index.html","7e8527fa0592be3e79d9f883b9c2f90a"],["/2016/12/19/2016-12-19/index.html","36f2d9d97c104d2fd8de626324d1f1bd"],["/2017/01/21/2017-01-21/index.html","6afcccb36046ae01eadea28f0cad4f08"],["/2017/04/21/2017-04-21/index.html","6e096c3f2a441e8ef3df40a825729796"],["/2017/10/12/理一理思绪/index.html","f122b3e52970bcf0d8852bf802c89f0b"],["/2017/10/22/又上了网络营销的当/index.html","36be149547cffda41031f9880c1fec67"],["/2017/10/23/2017-10-23/index.html","30aae4728f238393c637700f8e5aa217"],["/2017/12/02/2017-12-02/index.html","93055205f1820b93a6a5cb394c4b2952"],["/2018/02/09/2018-02-9/index.html","bfde7d7a2087c210ce94ab2bdd4a2bf1"],["/2018/03/18/2018-03-18/index.html","ca164b2445d0a1cc35f971e71960f083"],["/2018/07/28/2018-07-28/index.html","f8cfd13427745e1db8c43e457a5d553d"],["/2018/11/05/2018-11-05/index.html","33a5546e82b079879d3b23587e74eaae"],["/2020/01/30/2020-01-31/index.html","2144bf341f0e6ca40f8a28bac463c001"],["/2020/02/08/2020-02-08/index.html","e96f9f6ee437d1223d95d526731a4bd3"],["/2020/02/19/2020-02-19-2/index.html","ca68ee221c7f1626c9d0fbc982b641fa"],["/2020/02/19/2020-02-19/index.html","b997906f8ad8be2099eb8c3de3892367"],["/2020/02/23/2020-02-23/index.html","af9e68e8b51303be7de2aa4146147b2c"],["/2020/02/23/mail/index.html","68d6ace38690e4e9fcd9ea17f064cf03"],["/2020/02/27/alipay/index.html","a2b84685bc8d3bc3b73ad66726f64a63"],["/2020/03/09/iperf/index.html","2f219d3e1dc87959a26add9d6c937237"],["/2020/03/26/2020-03-27/index.html","3579e34df82e1b6e038e41adbc593f80"],["/2020/03/26/qiniu/index.html","f94a2476542a63e840d11079dfb8cdb7"],["/archives/2016/06/index.html","94f75274984e49f9b060d39b91671616"],["/archives/2016/07/index.html","3a274b7a21a884443a43d81f0218fea6"],["/archives/2016/12/index.html","8901ec6915723e369f2ac771bd111163"],["/archives/2016/index.html","0c2fecdf833e886a2007fb9a9e279927"],["/archives/2017/01/index.html","de5b9e46e86cc5ee396a24b982c2e5e0"],["/archives/2017/04/index.html","5f03f8814068f10b134b7c8a6558370a"],["/archives/2017/10/index.html","1c2fc80cb1fd1afb0b1f9e8d0c48d893"],["/archives/2017/12/index.html","259500ebc1db68fd1ca458a98f22bab0"],["/archives/2017/index.html","809c7ee57145be209966ed01b3c5bc2a"],["/archives/2018/02/index.html","7bb5ddca06f8f8a53100b53273d9debc"],["/archives/2018/03/index.html","9c251598f87a6331b61db380b883bd6d"],["/archives/2018/07/index.html","191d70ce1a3c0d21eefc599580a494a3"],["/archives/2018/11/index.html","715da07127f9202faca92c14501dd3dc"],["/archives/2018/index.html","d62dd85f6fde5380dc4bd62aab1fdb82"],["/archives/2020/01/index.html","3d74c07dbf46afd198e4ec5cb476d69f"],["/archives/2020/02/index.html","ddcd449f26b86634bcecad80fcd3ea18"],["/archives/2020/03/index.html","e1248f791a2c5a0af448cd6cf9736ed9"],["/archives/2020/index.html","7adf934a70f3b08de95445cc03665a52"],["/archives/index.html","37beb7aec1b5aff794bb20fb3aec62f2"],["/archives/page/2/index.html","ebc23e5d15c2f7f34e620c7dd647cde9"],["/archives/page/3/index.html","aa6b3c0ac518060920798362db6a011a"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","c809797fb2f3663e252000afdf64921c"],["/categories/工作/index.html","d6046ad43bb34fc7e8b6f9221eccbff7"],["/categories/工作/效率/index.html","c54ec0735195033a023b68327fae5298"],["/categories/技术/hexo/index.html","935d852e76feef94b3b9d67c43056d86"],["/categories/技术/index.html","92cd95d44d172bfbbe8568903ba4fa42"],["/categories/技术/page/2/index.html","cdb6124ed1dd8ba4034453c83c21d779"],["/categories/技术/v2board/index.html","a4f5fe68c34c7202ef6763b6e76674e3"],["/categories/技术/七牛云/index.html","741e68920624c48a4bb841bcf90ffb4f"],["/categories/技术/杂/index.html","c58f72a566147eac748b350879046404"],["/categories/生活/index.html","660e18dc44beb2b64728ea5706de239d"],["/categories/生活/page/2/index.html","9d2c6c04be2db6d16259bffebb277f5d"],["/categories/生活/反思/index.html","eb960ef1dece25512231b99346525262"],["/categories/生活/感悟/index.html","f904b145299eeca8320eacd014bd910f"],["/css/main.css","0f0b4b42fcdc5e47f4a281f6ab04b596"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","1fd07759999efc99a5e4c707ba13b625"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d3fd6efd281e926abc133f3648fe9411"],["/page/3/index.html","cd06d809436819ef3544476051f30cc3"],["/sw-register.js","d3c5f9d9660e04c043b07ba11c007d72"],["/tags/U盘/index.html","6325a82a89fc07e810d2816ffddf1874"],["/tags/alipay/index.html","a675f95d3570c94b14aec402e42146c6"],["/tags/hexo/index.html","14201ab9cb7dafe9e67616f1c3b3eb40"],["/tags/https/index.html","6faa434ab1ce44489bdb9b7c35c060a8"],["/tags/index.html","4ba950ac3db2f95a2924dcd83014df39"],["/tags/iperf/index.html","8f44b059541d27e01ab787ba16f34d5d"],["/tags/macOS/index.html","6f459138ab8fcc2c699d4b51c15258e4"],["/tags/nas/index.html","0c73596476d0e71cfe3c3247f31504e3"],["/tags/poseidon/index.html","60f311d298cfc1fe7500daed8e0663cf"],["/tags/tls/index.html","63175c51ad93c5a8c70b0dc2a700cd7e"],["/tags/v2board后端/index.html","b54d1a394877dc25337e9d7b766fc96b"],["/tags/v2borad/index.html","d454e82268cbc0a1fc6267398f9ade1f"],["/tags/v2ray/index.html","2c460c744987a1584dc8c8bbc2d1b7b3"],["/tags/vim/index.html","9e61aa501e9162ebc7469a11b5bc9a7e"],["/tags/vps测速/index.html","36fcd55e7824a9e99f616216ac655483"],["/tags/websocket/index.html","eec725b501225d72dd9632e7e7d51be2"],["/tags/ws-tls/index.html","435ca99b31e50a75964c6c947e7771d3"],["/tags/七牛云/index.html","e0e2a18722e106bfcdfdb375bc7c15d9"],["/tags/反思/index.html","5be38e688dcaad85f642ec86be866c18"],["/tags/反思/page/2/index.html","b900975480ad84a2cc7edcb0ef8c46c2"],["/tags/后端/index.html","d1e8cf07ac797bb7f984334e7847e9e1"],["/tags/图床/index.html","06dca3cb5661cb52370519f591cf0b2e"],["/tags/工作/index.html","786d823bf7683f180e0d5e7a6abd3c46"],["/tags/快捷键/index.html","159d62ac6c764d7a7dcd97a685089bd3"],["/tags/搭建/index.html","2f564633fdd7f888a407c44ca2f6dd65"],["/tags/支付宝/index.html","64333531c8f858b2ae9de64b43b88805"],["/tags/支付对接/index.html","5dc8f089944b4f75f1d187f8ebc3861b"],["/tags/辞职/index.html","0a2de7d8d56c19ad1cce641826ab0fbd"],["/tags/邮箱/index.html","60a038ba0c0b8d1e98722b394e7a65f2"],["/tags/阿里/index.html","74b8dd20c8cd7e6d627f240b5672ea0f"]];
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
