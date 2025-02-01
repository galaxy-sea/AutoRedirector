// 配置对象：每个 hostname 对应一个跳转规则
const redirectMap = {
  // 常规操作
  "link.juejin.cn": { testHref: "https://link.juejin.cn/?target=https://github.com/galaxy-sea" },
  "link.csdn.net": { testHref: "https://link.csdn.net/?target=https://github.com/galaxy-sea" },
  "link.zhihu.com": { testHref: "https://link.zhihu.com/?target=https://github.com/galaxy-sea" },
  "c.pc.qq.com": { testHref: "https://c.pc.qq.com/pc.html?url=https://github.com/galaxy-sea" },
  "hd.nowcoder.com": { testHref: "https://hd.nowcoder.com/link.html?target=https://github.com/galaxy-sea" },
  "link.uisdc.com": { testHref: "https://link.uisdc.com/?redirect=https://github.com/galaxy-sea" },

  // 需要判断域名和路径
  "www.jianshu.com": { path: "/go-wild", testHref: "https://www.jianshu.com/go-wild?ac=2&url=https://github.com/galaxy-sea" },
  "www.douban.com": { path: "/link2", testHref: "https://www.douban.com/link2/?url=https://github.com/galaxy-sea" },
  "steamcommunity.com": { path: "/linkfilter", testHref: "https://steamcommunity.com/linkfilter/?url=https://github.com/galaxy-sea" },
  "www.tianyancha.com": { path: "/security", testHref: "https://www.tianyancha.com/security?target=http://github.com/galaxy-sea" },
  "game.bilibili.com": { path: "/linkfilter", testHref: "https://game.bilibili.com/linkfilter/?url=https://github.com/galaxy-sea" },
  "www.chinaz.com": { path: "/go.shtml", testHref: "https://www.chinaz.com/go.shtml?url=https://github.com/galaxy-sea" },
  "www.youtube.com": { path: "/redirect", testHref: "https://www.youtube.com/redirect?q=https://github.com/galaxy-sea" },
  "mail.qq.com": { path: "/cgi-bin/readtemplate", testHref: "https://mail.qq.com/cgi-bin/readtemplate?t=safety&check=false&gourl=https://github.com/galaxy-sea&subtemplate=gray&evil=0" },
  "weibo.cn": { path: "/sinaurl", testHref: "https://weibo.cn/sinaurl?u=https://github.com/galaxy-sea" },
  "afdian.com": { path: "/link", testHref: "https://afdian.com/link?target=https://github.com/galaxy-sea" },
  "ask.latexstudio.net": { path: "/go/index", testHref: "https://ask.latexstudio.net/go/index?url=https://github.com/galaxy-sea" },
  "blzxteam.com": { path: "/gowild", testHref: "https://blzxteam.com/gowild.htm?url=https://github.com/galaxy-sea" },
  "cloud.tencent.com": { path: "/developer/tools/blog-entry", testHref: "https://cloud.tencent.com/developer/tools/blog-entry?target=http%3A%2F%2Fgithub.com%2Foctokit&objectId=1434763&objectType=1&isNewArticle=undefined" },
  "docs.qq.com": { path: "/scenario/link.html", testHref: "https://docs.qq.com/scenario/link.html?url=https://github.com/galaxy-sea" },
  "gitee.com": { path: "/link", testHref: "https://gitee.com/link?target=https://github.com/galaxy-sea" },
  "leetcode.cn": { path: "/link", testHref: "https://leetcode.cn/link/?target=https://github.com/galaxy-sea" },
  "sspai.com": { path: "/link", testHref: "https://sspai.com/link?target=https://github.com/galaxy-sea" },
  "t.me": { path: "/iv", testHref: "https://t.me/iv?url=https://github.com/galaxy-sea" },
  "tieba.baidu.com": { path: "/mo/q/checkurl", testHref: "https://tieba.baidu.com/mo/q/checkurl?url=https://github.com/galaxy-sea" },
  "www.gcores.com": { path: "/link", testHref: "https://www.gcores.com/link?target=https://github.com/galaxy-sea" },
  "www.kookapp.cn": { path: "/go-wild", testHref: "https://www.kookapp.cn/go-wild.html?url=https://github.com/galaxy-sea" },
  "www.oschina.net": { path: "/action/GoToLink", testHref: "https://www.oschina.net/action/GoToLink?url=https://github.com/galaxy-sea" },
  "www.qcc.com": { path: "/web/transfer-link", testHref: "https://www.qcc.com/web/transfer-link?link=https://github.com/galaxy-sea" },
  "www.yuque.com": { path: "/r/goto", testHref: "https://www.yuque.com/r/goto?url=https://github.com/galaxy-sea" },
  "xie.infoq.cn": { path: "/link", testHref: "https://xie.infoq.cn/link?target=https://github.com/galaxy-sea" },
  "www.baike.com": { path: "/redirect_link", testHref: "https://www.baike.com/redirect_link?url=https://github.com/galaxy-sea" },
  "developers.weixin.qq.com": { path: "/community/middlepage/href", testHref: "https://developers.weixin.qq.com/community/middlepage/href?href=https://github.com/galaxy-sea" },
  "developer.aliyun.com": { path: "/redirect", testHref: "https://developer.aliyun.com/redirect?target=https://github.com/galaxy-sea" },
  // "1111111": { path: "/111111", testHref: "" },


  // 需要从html中解析出来
  // manifest.json 文件添加一下白名单哦。
  "weixin110.qq.com": {
    method: redirectByDocQuerySelector,
    param: "body > div > div.weui-msg__text-area > p",
    testHref: "https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?click=94e70da48e938d0145086c1c99a2ad71&bankey=1b60392a82c1f670f6c089ddc17234ba&midpagecode=e2faa0ee03e19e6efecf869b7f9ca0522c68d4854df6fbfa04376e4e5a76fb68051eaf8948fea39790a1cd7df4a64a26&bancode=2399cb39b79374a740f5d35881d294a89c5943a7ad8c941bad626d61c0fcf52d"
  },
  "t.cn": {
    method: redirectByDocQuerySelector,
    param: "#textline",
    testHref: "https://t.cn/A6uN06Qy"
  },
  "jump.bdimg.com": {
    method: redirectByDocQuerySelector,
    param: "body > div > div.warning_info > p.link",
    testHref: "https://jump.bdimg.com/safecheck/index?url=rN3wPs8te/r8jfr8YhogjfUWFoMgIRa8GuuBEpJ4eXO8AVsA2UkOV3OnAP38RLqgULlfrX2wNBE1ktsrhFGRdsUnCWH/dTBt0QiPKJTx1xte4mm563atJ0xgEMHDBR4XX1D3A8ieh9f3k7PccYSctkS252zuL3Y0uEoxzfbVtSg="
  },

  // 特殊的url
  "blog.51cto.com": {
    method: function (tabId, url, rule) {
      debugger
      if (rule.path && !new URL(url).pathname.startsWith(rule.path)) {
        return;
      }
      chrome.tabs.update(tabId, { url: decodeURIComponent(url.replace("https://blog.51cto.com/transfer?", "")) });
    },
    path: "/transfer",
    testHref: "https://blog.51cto.com/transfer?https://github.com/galaxy-sea"
  },
};

const defaultConfig = {
  method: redirectByUrl,
  param: ["target", "url", "q", "gourl", "u", "redirect", "toasturl", "link", "href"]
};

function handleRedirect(tabId, url) {
  // debugger;
  const url_ = new URL(url);
  const hostname = url_.hostname;
  if (!redirectMap[hostname]) return;
  const rule = { ...defaultConfig, ...redirectMap[hostname] };

  if (typeof rule.method === "function") {
    rule.method(tabId, url, rule);
  }
}

function redirectByUrl(tabId, url, rule) {
  const url_ = new URL(url);
  const pathname = url_.pathname;
  if (rule.path && !pathname.startsWith(rule.path)) {
    return;
  }
  rule.param.forEach(param => {
    const target = url_.searchParams.get(param);
    if (target) {
      chrome.tabs.update(tabId, { url: decodeURIComponent(target) });
    }
  });
}

function redirectByDocQuerySelector(tabId, url, rule) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: extractTargetFromHtml,
    args: [rule.param]
  });
}

function extractTargetFromHtml(param) {
  // debugger;
  const targetElement = document.querySelector(param);
  if (targetElement) {
    window.location.href = targetElement.textContent.trim();
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    handleRedirect(tabId, tab.url);
  }
  // chrome.runtime.reload();
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
      chrome.tabs.create({ url: "./options.html" }); // 这里的 "welcome.html" 需要在插件的 `public` 目录下
  }
});
