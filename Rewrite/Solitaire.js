[rewrite_local]
# 强制让 AppLovin 和 Fyber 广告请求返回空数据，直接跳过弹窗判定
^https?:\/\/.*\.applovin\.com\/.*$ url response-body ""
^https?:\/\/.*\.applvn\.com\/.*$ url response-body ""
^https?:\/\/.*\.fyber\.com\/.*$ url response-body ""

[mitm]
hostname = *.applovin.com, *.applvn.com, *.fyber.com
