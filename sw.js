/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/06/27/终于把hexo搭建好了/index.html","d575a9750e8e749d8c8e92c6903b16ac"],["/2016/07/03/搭建/index.html","b3f0192c4bc3d3ebb3a3c2afd62b8c32"],["/2016/07/11/工作反思/index.html","072e2b5a9acbed2e9ccb3e0bd639c4ec"],["/2016/12/11/omz/index.html","cad0528b59ce86f2ad4e48d57921c00d"],["/2016/12/19/2016-12-19/index.html","6de40e219ac00dddc7522d7e61e9ffbb"],["/2017/01/21/2017-01-21/index.html","43bcd5829fe72c1f24bc3ac0eca4529d"],["/2017/04/21/2017-04-21/index.html","f7c19825ec05608bcbb6acc5757ed42b"],["/2017/10/12/理一理思绪/index.html","ebd89ae3c5e05f10e28a9d27acd41fed"],["/2017/10/22/又上了网络营销的当/index.html","52b9de384f66bd8e4ccdbe135f8f1ffc"],["/2017/10/23/2017-10-23/index.html","6b1fea3d4cda40cf18dea16a5da94548"],["/2017/12/02/2017-12-02/index.html","01c14193583077d9a8c00725407665c2"],["/2018/02/09/2018-02-9/index.html","1bb3787f917506eaefc002fe98c55d34"],["/2018/03/18/2018-03-18/index.html","e43ed4e2094985124e8bf274df571ee2"],["/2018/07/28/2018-07-28/index.html","ecbc432f5b6290cd15fd8081665584cb"],["/2018/11/05/2018-11-05/index.html","74889c3e74657308b50570413de4dd11"],["/2020/01/30/2020-01-31/index.html","ee618b75c816f125e45ecc6fddce4aad"],["/2020/02/08/2020-02-08/index.html","223588d812a1a0a4412ceb11f1e7c40a"],["/2020/02/19/2020-02-19-2/index.html","fc1567d891cd307c29c54f048ca8e1bc"],["/2020/02/19/2020-02-19/index.html","f974590ce27b24a57e89791a25c8475a"],["/2020/02/23/2020-02-23/index.html","12b7ff00be47266b603d856c51261363"],["/2020/02/27/alipay/index.html","5e7c7fbc04fcc32291f17cff52e0998a"],["/2020/03/09/iperf/index.html","227b15b5d568ccc543ec45cdc2843a1e"],["/2020/03/26/2020-03-27/index.html","af3468fde11532188f6862fb15a1e554"],["/2020/03/26/qiniu/index.html","596148b5581f0080f858909d96f66781"],["/archives/2016/06/index.html","3f7b231370341dd8013c96659910a74d"],["/archives/2016/07/index.html","2c8a7ae5f860b292a2315570f4802f1e"],["/archives/2016/12/index.html","c19d90ad29874b71efd62f87bbf65548"],["/archives/2016/index.html","adf1ed0acef912925c3d7cb9bca32230"],["/archives/2017/01/index.html","adcefe4b26eb61785aa437942959be6b"],["/archives/2017/04/index.html","313feebc420bcadec38bf85453af6786"],["/archives/2017/10/index.html","d5d7ba66e62de4ed7cccb2aaab63c858"],["/archives/2017/12/index.html","dd5ad37d077c474bc6782badc7d5f7d0"],["/archives/2017/index.html","f3be9315a6f1975ad08b959dff6cf967"],["/archives/2018/02/index.html","d3dba8b79be48ba0d00b8cdf301579cd"],["/archives/2018/03/index.html","bf587a67ee88638f8c58156ce61077c4"],["/archives/2018/07/index.html","5601fbbb726cb1f979cb1186530d0415"],["/archives/2018/11/index.html","d7f06ed99060c988297aa8e2bbed1e7d"],["/archives/2018/index.html","ea24d4c7d47efe15cc3d102cacec4f10"],["/archives/2020/01/index.html","9bc6025a2e0bec5bbc95ae66888c2143"],["/archives/2020/02/index.html","99b1215b564e2079b82848fc45f07e44"],["/archives/2020/03/index.html","ffa374727138f74f75f03be95edcb26c"],["/archives/2020/index.html","88ff887189c74d72f8307e67ea1a26bf"],["/archives/index.html","1cd0e73f4e3dc0ea3bb560c15e953e54"],["/archives/page/2/index.html","b15978d5dfb3b0e34ff8bde5a9b090a7"],["/archives/page/3/index.html","b5595d4c25b8b952dacd7126d0888444"],["/bundle.js","8ab3d8459a087d60a80df6ef522d05d5"],["/categories/index.html","ec11e32e56ca6d331c9b2b1f2e96b0b4"],["/categories/工作/index.html","160699280be2b0dac79d2addd5c2ca97"],["/categories/工作/效率/index.html","43697427aacfce1e85b8d3afa1eee751"],["/categories/技术/hexo/index.html","b97b52dcd79e39f9f90ef7a49ed81930"],["/categories/技术/index.html","b9d77160e640fcb924033f165e8f211d"],["/categories/技术/page/2/index.html","905c98af0b9844bde154436c2acc295f"],["/categories/技术/v2board/index.html","0c581f3a43640410557de7be27b3eebc"],["/categories/技术/七牛云/index.html","6d8034c0008e4dc9689b119c8263ea58"],["/categories/技术/杂/index.html","24225983b9f8a92b9af6b8861d1cd574"],["/categories/生活/index.html","fa9a7ab22627386ca7dd97ed4e8b6e3a"],["/categories/生活/page/2/index.html","84e4391e92ca97b7258bed84393e87e7"],["/categories/生活/反思/index.html","556a89a0edcd78f5c7ce7603c6ab66b4"],["/categories/生活/感悟/index.html","14229fb5da5f8857809d160fc6953412"],["/css/main.css","fb2b297b1f0b1267eb7ab90228236d2c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","634e67c7a34050b80efee0beab213421"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","d16dca8400f6be64fe2d1d1162fa8ddc"],["/js/algolia-search.js","e3bdff8438e691dca5b7eb6af73772e2"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","9bdc7baa8d5a1d13325f20d0adbdd4d2"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","9a629b6a569061c852852865d6763a89"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","bde729c25f104430be79e52ab0e732b9"],["/page/3/index.html","682ed662b4b6749a3ad579c2c8d46ec7"],["/sw-register.js","7fd6b8bbcdbda01ad1328821742cd98e"],["/tags/U盘/index.html","11adf273e15f1e0a887b745e57e49ad3"],["/tags/alipay/index.html","e83dd1ebfbc8a09f038823814b077212"],["/tags/hexo/index.html","ff17ef4e71c88c3b65a87b24e7f57dfb"],["/tags/https/index.html","78ba4c7ef53683208baa515f88909354"],["/tags/index.html","f9d90454e08efe16321fdc0cf71c7f80"],["/tags/iperf/index.html","8d15bde6249e8623a5d7405cebd50339"],["/tags/macOS/index.html","e9837387dbc484af31ee470885da5d14"],["/tags/nas/index.html","c13c7127300da59c50695606992814b5"],["/tags/poseidon/index.html","cb5c264060bd72c7ab84be0f33e62167"],["/tags/tls/index.html","509d6121dcf61cdb24b39da97d4a6246"],["/tags/v2board后端/index.html","77724e80d4e4707bdf3714b8b868fb75"],["/tags/v2borad/index.html","a071ccf998a6622883b782c7a867f1a8"],["/tags/v2ray/index.html","c1a2d1335613be3d8acf9bac52f450b5"],["/tags/vim/index.html","b3e11cc6a337104a8017c7d6d9b1cb88"],["/tags/vps测速/index.html","f7bb9b29dc4e9f26e1b1015fce7e8bfa"],["/tags/websocket/index.html","308b7b91c3444a2fed4aa287ab7d6bae"],["/tags/ws-tls/index.html","d7afb7585b975dd7d0ffc0ef69c48bbe"],["/tags/七牛云/index.html","57e31f2d83287e358648fb96ed96bb29"],["/tags/反思/index.html","db6e46bfefd0a7c8a6e4fa44126ed6eb"],["/tags/反思/page/2/index.html","e5082a0f53d9b31726261f15c652e6a7"],["/tags/后端/index.html","80d6c8ed3989c3e71a03b10dae1cfae8"],["/tags/图床/index.html","493f2cf2d86d519cfc57cfef488deb2e"],["/tags/工作/index.html","0a23131b2e895d17754a3d93236bd2b3"],["/tags/快捷键/index.html","20c5b3334096a14ba2c2bfaa7750d136"],["/tags/搭建/index.html","a0baaa25ef2d61b41ca6f7b8b3d9f11c"],["/tags/支付宝/index.html","3b1f5607f5d482af35bda2a15f8008dd"],["/tags/支付对接/index.html","531a63aff332c88603f4283c4b29db62"],["/tags/辞职/index.html","10b2931bf28c0b5e40f9f2a6f2f3e1ef"],["/tags/阿里/index.html","a365792f6fc9773b17cf15de8eeede42"]];
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
