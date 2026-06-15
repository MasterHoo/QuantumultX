# === MobilityWare 游戏去广告重写 ===
^https?:\/\/.*\.applovin\.com\/ url reject-200
^https?:\/\/.*\.applvn\.com\/ url reject-200
^https?:\/\/.*\.fyber\.com\/ url reject-200

[mitm]
hostname = *.applovin.com, *.applvn.com, *.fyber.com
