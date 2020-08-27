# 作ったもの
ちょっとずつツールを作っていきたい. 見せられるほどすごいものは作れない.
* deketade command
    * `deketade "command"` と入力することでプロセス終了後に Slack に通知を送信する.
    * 研究で SAT ソルバーを用いるため, 時間のかかるプロセスが終了したことをどこにいても知りたいことがきっかけ.
    * Python3 と incoming-webhook で作成.
* Twitter Remove Checker
    * @o_peachy_o のフォローを解除したユーザーのスクリーンネームを DM で送信.
    * 人事ったーのサービス終了に伴い自分用に作成.
    * Python3 と Tweepy で作成.
* Free Turn ボタン
    * iPhone のホーム画面にあるボタンを押すと "Free Turn" が流れ, ボタンを押した回数とともにツイートを自動送信する.
    * iPhone の "ショートカット" を利用したアプリ (？).
    * ツイートの送信とカウントの保存を Raspberry Pi で行う. ルータのポート開放がやってみたかったんだ…
* オンライン実習質問待ちシステム
    * Zoom を用いたオンライン授業における質問対応の待ち表となるウェブアプリ.
    * 共同ホストがブレイクアウトルームからの「ヘルプを求める」を確認できないことを改善する.
    * フロントは HTML と JS で雑に, バックは Go で. WebSocket でリアルタイム通信.
    * Heroku で動作.
* Google Search Marathon
    * Google 検索で指定されたヒット数を目指して遊ぶ Slack App.
    * サークルの Slack App ハッカソン (？) 用に作成.
    * Python3 と Slack API, Google Custom Search API を利用.

[戻る](../..)