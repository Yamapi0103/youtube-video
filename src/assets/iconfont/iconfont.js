!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    l,
    s,
    d =
      '<svg><symbol id="icon-heart" viewBox="0 0 1024 1024"><path d="M512 896c-6.4 0-16-3.2-22.4-9.6l-304-288-51.2-51.2C89.6 502.4 64 441.6 64 374.4s25.6-128 73.6-172.8S243.2 128 310.4 128s128 25.6 172.8 73.6L512 230.4l28.8-28.8c96-96 252.8-96 348.8 0 96 96 96 252.8 0 348.8l-51.2 51.2-300.8 288C528 892.8 521.6 896 512 896zM310.4 192c-48 0-92.8 19.2-128 54.4C147.2 281.6 128 326.4 128 374.4s19.2 92.8 54.4 128l51.2 51.2 281.6 265.6 278.4-265.6 51.2-51.2c70.4-70.4 70.4-185.6 0-256-70.4-70.4-185.6-70.4-256 0l-51.2 51.2c-12.8 12.8-32 12.8-44.8 0l-51.2-51.2C403.2 211.2 358.4 192 310.4 192z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M1024 963.7L756.8 696.5c60.2-73.6 96.5-167.5 96.5-269.8C853.3 191.4 661.9 0 426.7 0S0 191.4 0 426.7s191.4 426.7 426.7 426.7c102.3 0 196.3-36.3 269.8-96.5L963.7 1024l60.3-60.3zM426.7 768C238.5 768 85.3 614.9 85.3 426.7S238.5 85.3 426.7 85.3 768 238.5 768 426.7 614.9 768 426.7 768z" fill="#333333" ></path></symbol><symbol id="icon-heart1" viewBox="0 0 1024 1024"><path d="M512 896a42.666667 42.666667 0 0 1-30.293333-12.373333l-331.52-331.946667a224.426667 224.426667 0 0 1 0-315.733333 223.573333 223.573333 0 0 1 315.733333 0L512 282.026667l46.08-46.08a223.573333 223.573333 0 0 1 315.733333 0 224.426667 224.426667 0 0 1 0 315.733333l-331.52 331.946667A42.666667 42.666667 0 0 1 512 896z"  ></path></symbol><symbol id="icon-youtube" viewBox="0 0 1024 1024"><path d="M426.666667 682.666667V384l256 149.845333L426.666667 682.666667z m587.093333-355.541334s-10.026667-71.04-40.704-102.357333c-38.954667-41.088-82.602667-41.258667-102.613333-43.648C727.168 170.666667 512.213333 170.666667 512.213333 170.666667h-0.426666s-214.954667 0-358.229334 10.453333c-20.053333 2.389333-63.658667 2.56-102.656 43.648-30.677333 31.317333-40.661333 102.4-40.661333 102.4S0 410.538667 0 493.952v78.293333c0 83.456 10.24 166.912 10.24 166.912s9.984 71.04 40.661333 102.357334c38.997333 41.088 90.154667 39.765333 112.938667 44.074666C245.76 893.568 512 896 512 896s215.168-0.341333 358.442667-10.752c20.053333-2.432 63.658667-2.602667 102.613333-43.690667 30.72-31.317333 40.704-102.4 40.704-102.4s10.24-83.413333 10.24-166.869333v-78.250667c0-83.456-10.24-166.912-10.24-166.912z" fill="#FF0000" ></path></symbol></svg>',
    a = (t = document.getElementsByTagName('script'))[
      t.length - 1
    ].getAttribute('data-injectcss');
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function r() {
    l || ((l = !0), i());
  }
  (n = function () {
    var e,
      t,
      n,
      o,
      i,
      c = document.createElement('div');
    (c.innerHTML = d),
      (d = null),
      (e = c.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (t = e),
        (n = document.body).firstChild
          ? ((o = t), (i = n.firstChild).parentNode.insertBefore(o, i))
          : n.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(n, 0)
        : ((o = function () {
            document.removeEventListener('DOMContentLoaded', o, !1), n();
          }),
          document.addEventListener('DOMContentLoaded', o, !1))
      : document.attachEvent &&
        ((i = n),
        (c = e.document),
        (l = !1),
        (s = function () {
          try {
            c.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(s, 50);
          }
          r();
        })(),
        (c.onreadystatechange = function () {
          'complete' == c.readyState && ((c.onreadystatechange = null), r());
        }));
})(window);
