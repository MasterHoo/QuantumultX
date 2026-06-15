[rewrite_local]
# 强制让广告请求返回空数据，直接骗过游戏跳过弹窗
^https?:\/\/.*\.applovin\.com\/.*$ url reject-200
^https?:\/\/.*\.applvn\.com\/.*$ url reject-200
^https?:\/\/.*\.fyber\.com\/.*$ url reject-200

[mitm]
# 必须配置主机名解密，重写才会生效
hostname = *.applovin.com, *.applvn.com, *.fyber.com
