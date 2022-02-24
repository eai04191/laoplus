<h1 align="center">LAOPLUS</h1>

<p align="center">
    <a href="https://discord.gg/EGWqTuhjrE">
        <img src="https://img.shields.io/discord/913406465312690217.svg?label=&logo=discord&logoColor=ffffff&color=5865F2&labelColor=5865F2&style=flat-square" alt="Discord" />
    </a>
</p>

**LAOPLUS** は DMM GAMES / FANZA GAMES にて提供されている、ブラウザ版[ラストオリジン](https://www.last-origin.com/)のプレイを支援する Userscript です

## 機能

<details>
<summary><b>画面サイズの自動調整</b></summary>

![screenshot](https://user-images.githubusercontent.com/3516343/143431793-af3046de-d181-40ec-9293-aa8f7bbaedfe.png)

ゲームページ（[DMM](https://pc-play.games.dmm.com/play/lastorigin/) / [FANZA](https://pc-play.games.dmm.co.jp/play/lastorigin_r/)）を開くとウィンドウいっぱいにゲーム画面が広がるようになります。また、ゲームの解像度を更新するため、拡縮しても文字やキャラが潰れることがありません。

PWA としてインストールするとより便利に使えます

<details>
<summary>Microsoft Edge で PWA としてインストールする方法</summary>

1. ![2021-11-25_20-33-59_msedge](https://user-images.githubusercontent.com/3516343/143441480-1fbecedc-15c7-464a-9c9b-f26b3a83ae75.png)
2. ![2021-11-25_20-34-08_msedge](https://user-images.githubusercontent.com/3516343/143441487-360e2d9e-343b-424d-a3be-00d9223dda5e.png)
3. ![2021-11-25_20-34-17_msedge](https://user-images.githubusercontent.com/3516343/143441518-b2efd571-26e3-454f-a762-d5da9de9e199.png)

---

</details>

---

</details>

<details>
<summary><b>ドロップしたキャラクター・装備の通知</b></summary>

![image](https://user-images.githubusercontent.com/3516343/144223625-c5db7279-4756-49ae-ba08-5c755fa69c4d.png)

キャラクター・装備のドロップを検知して Discord にメッセージを送信します

キャラクターはランクに応じてドロップ通知の有無を設定できます。装備は SS ランクのドロップのみ通知されます

※ キャラクター名やアイテム名での指定は今後実装予定です

[詳細説明](https://github.com/eai04191/laoplus/wiki/features-discordNotification)

---

</details>

<details>
<summary><b>探索完了通知</b></summary>

![image](https://user-images.githubusercontent.com/3516343/144452211-876a762c-9008-4a9f-bba8-acf119f2aa57.png)

探索状態の変更を検知して終了時間に Discord にメッセージを送信します

※ 通知時に LAOPLUS を導入したブラウザが起動している必要があります

---

</details>

<details>
<summary><b>ホイールスクロール増幅</b></summary>

|                                                          デフォルト                                                          |                                                        増幅倍率 20 倍                                                        |
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| ![2021-12-06_00-11-31](https://user-images.githubusercontent.com/3516343/144752334-e6a19fe6-766c-4b19-8439-70f366f49086.gif) | ![2021-12-06_00-12-09](https://user-images.githubusercontent.com/3516343/144752331-30587eec-c235-480d-a413-8f0fd0329149.gif) |

ホイールスクロールの移動量がめちゃくちゃ小さい問題をスクロール量を増幅させて改善します

[詳細説明](https://github.com/eai04191/laoplus/wiki/features-wheelAmplify)

---

</details>

<details>
<summary><b>自動周回停止通知（仮）</b></summary>

![image](https://user-images.githubusercontent.com/3516343/145052928-74a8de77-a05f-4c20-8719-d53598929247.png)

戦闘開始を検知してタイマーを作動させます。タイマーが切れるまでに次の戦闘が開始しなければ、何らかの要因で自動周回が止まっているとみなし Disocrd にメッセージを送信します

[詳細説明](https://github.com/eai04191/laoplus/wiki/features-autorunDetection)

---

</details>

<details>
<summary><b>周回統計</b></summary>

![image](https://user-images.githubusercontent.com/3516343/155611744-407c3bc4-822a-4209-a4ef-0fa72e1da199.png)

現在の周回でドロップした戦闘員・装備の数をカウントして、それを分解した際に得られるであろう資源量を表示する機能です

[詳細説明](https://github.com/eai04191/laoplus/wiki/features-FarmingStats)

---

</details>

<details>
<summary><b>レベリング通知</b></summary>

![image](https://user-images.githubusercontent.com/3516343/155614266-b5dafa33-b254-4b0a-90e4-e2a23ccba7e9.png)

出撃中の部隊メンバーのレベル・スキルレベルを監視して、**全員が**目標を満たしたときに通知する機能です

[詳細説明](https://github.com/eai04191/laoplus/wiki/features-LevelupDetection)

---

</details>

<details>
<summary><b>Firefox対応</b></summary>

![Firefox](https://user-images.githubusercontent.com/3516343/155614433-a07787be-6fb4-41c3-9ad3-d022e43e5b15.png)

Firefox で動作するように一部処理をパッチします。ゲーム自体に干渉することはありません。

現在のところ Chromium 系列と同じく安定して動くようです。

---

</details>

<details>
<summary><b>設定画面</b></summary>

![image](https://user-images.githubusercontent.com/3516343/147496588-24763bf6-329a-4633-8f68-d2a9faef7399.png)

導入後、画面左下の ➕ をクリックすることで設定画面を開けます

下部には現在の探索状態が完了が早い順に表示され、この画面でいつでも（周回中でも！）確認できます

---

</details>

### 実装予定の機能

-   探索・製造・修復など時間がかかる挙動の完了通知
-   編成情報のエクスポート
-   アイテムや資源の所持数記録と推移
-   いつでも所持戦闘員・装備品の一覧を見れる画面
-   クリア回数やドロップ率などの統計情報を見れる画面

新しい機能に興味があったり、機能の提案などがある方は[Discord](https://discord.gg/EGWqTuhjrE)に入ることをオススメします！

## 開発ポリシー

このスクリプトは不正をするためのものではありません。

### このスクリプトがすること

-   ラストオリジンのゲームクライアントがサーバーから送受信したデータの監視
-   ゲーム関連ページの DOM やスタイルの操作

### このスクリプトがしないこと

-   自発的なラストオリジンのゲームサーバーへの通信
-   自動操作（マクロ）
-   送受信内容の改ざん（チート）

---

それでも通信を監視するツールを使うのが怖いという場合は、通信に関連する部分を削除した [LAOPLUS Lite](https://github.com/eai04191/laoplus/tree/lite) も利用できます。

## インストール

### ⚠️LAOPLUS は自己責任で利用してください

LAOPLUS を利用したことによりアカウント BAN などの被害が発生したとしても、開発者は一切の責任を負いません。

<details>
<summary><b>インストール手順</b></summary>

1. ブラウザに好きな UserScript マネージャーを導入する
    - 確認している組み合わせ:
        - Microsoft Edge と[Violentmonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)（オススメ）
        - [Mozilla Firefox](https://www.mozilla.org/ja/firefox/new/)と[Violentmonkey](https://addons.mozilla.org/ja/firefox/addon/violentmonkey/)
    - Google Chrome は動作しますがメモリ使用量の観点から非推奨です
2. [laoplus.user.js](https://github.com/eai04191/laoplus/raw/dist/laoplus.user.js) を開く
3. 画面の指示に従いインストールする
4. ゲームのページを開くと反映されているはずです

不明な場合は [Discord](https://discord.gg/EGWqTuhjrE) か[作者 Twitter](https://twitter.com/eai04191) の DM で聞いてください

---

</details>

## FAQ

<details>
<summary><b>Android版でも使えますか</b></summary>

-   1 行でいうと: 無理です
-   ラストオリジンのブラウザ版ではブラウザでゲームが動いているため、ブラウザに拡張機能を導入することで安易に通信を傍受できますが、Android アプリ版の通信を傍受するには Android の自体の通信に介入する必要があります。
-   [某お船のゲームでは既存のソリューション](https://github.com/antest1/kcanotify/blob/master/FAQ/FAQ_jp.md) がありますが、某お船のゲームの通信が HTTP であるのに対して、ラストオリジンはすべての通信が HTTPS であるため、VPN のような挙動でも通信の傍受はできないはずです。
-   （証明書をインストールさせればできるかもしれないが、それをリスクを理解していない非開発者にやらせるはあまりに危険であるためやりたくない）
-   もしできそうな知見があればぜひご連絡ください。

---

</details>

<details>
<summary><b>LAOPLUS を使うとBANされますか</b></summary>

-   少なくとも[私](https://github.com/eai04191)はされていません
-   私が BAN されたくないので BAN されるような機能を実装するつもりもありません

---

</details>

<details>
<summary><b>LAOPLUS は利用規約に違反していますか</b></summary>

以下がラストオリジン初回起動時に表示される利用規約です

https://pig.games/ja/terms.html

これを見る限りでは LAOPLUS の機能は利用規約に違反していないと考えています。

この手のツールに最も関連していそうなのは

> ・本サービスのサーバやネットワークシステムに支障を与える行為、BOT、チートツール、その他の技術的手段を利用してサービスを不正に操作する行為、本サービスの不具合を意図的に利用する行為、ルーチングやジェイルブレイク等改変を行った通信端末にて本サービスにアクセスする行為、同様の質問を必要以上に繰り返す等、当社に対し不当な問い合わせまたは要求をする行為、その他当社による本サービスの運営または他のお客様による本サービスの利用を妨害し、これらに支障を与える行為。

ですが、そもそも、LAOPLUS はラストオリジンのサーバーにデータを送信しません。そのため規約で挙げられている「サービスを不正に操作する行為」や「不正に操作する行為」、「不当な問い合わせまたは要求をする行為」とは言えません。

ただし、

> その他、当社が不適当と判断した行為。

により処罰される可能性は（LAOPLUS 使用の有無に関わらず）常にあります。

<details>
<summary><b>ぶっちゃけた話</b></summary>

LAOPLUS は挙動的には広告ブロッカーみたいなものです、広告ブロッカー入れたままゲームしても BAN されませんよね？

なんなら広告ブロッカーは通信を書き換えることもありますが LAOPLUS はそれすらしません。

---

</details>

---

</details>

<details>
<summary><b>LAOPLUS を使ったことを運営は知り得ますか</b></summary>

-   知ろうと思えば知り得ますが、今の所は知るための細工はしていないようです

---

</details>

<details>
<summary><b>使い方がわからない・エラーが出る・その他聞きたいことがある</b></summary>

-   [Discord](https://discord.gg/EGWqTuhjrE) か [作者 Twitter](https://twitter.com/eai04191) の DM で聞いてください

---

</details>

<details>
<summary><b>ヘッチュンヘプチュ。ヘッチュチュンヘッチュ。ムチチムチ?</b></summary>

-   しらん

---

</details>

## 開発

<details>
<summary><b>開発について</b></summary>

開発に協力していただけると大変助かります。

このリポジトリの Git ワークフローには GitHub Flow が採用されています

1. 開発する際は develop ブランチから feature/ ブランチを切る
2. 機能を作成したら develop ブランチへ Pull Request を送信する
3. develop ブランチでの開発が進み、リリースの準備ができたら main ブランチへ PR、merge する
4. main ブランチへマージされると自動で GitHub Actions が稼働し dist ブランチへ push される
5. 開発者ではないユーザーは dist に push されたビルドを使用する

また、開発する際は Discord にて積極的に情報を共有いただけると助かります。（作業がかぶるとつらいので）

### 開発に必要なもの

-   node.js
-   yarn
-   git, GitHub の知識

1. リポジトリをクローンする
2. `yarn install`で依存関係をインストール
3. `yarn watch`で`dist`に `laoplus.user.js` が作成される。以降 watch 中は `src` を編集するたびに自動で更新される
4. ブラウザで `laoplus.user.js` を開くと Userscript マネージャーのインストール画面が開くので入れる
5. 好きにいじる

<details>
<summary><b>Userscript マネージャーのインストール画面が開かない場合</b></summary>

デフォルトでは拡張機能はローカルのファイルを読めないので、ブラウザの設定から Userscript マネージャーがローカルのファイルにアクセスする許可を与えてください

![image](https://user-images.githubusercontent.com/3516343/143915791-717bdf1c-e512-4125-ba2c-216f979aff0f.png)

---

</details>

---

</details>

## Special Thanks

-   [@rinsuki](https://github.com/rinsuki) : Rollup と GitHub Actions を用いた userscript 開発ベースとして [rinsuki/userscripts](https://github.com/rinsuki/userscripts) を参考にさせていただきました。
-   [@WolfgangKurz](https://github.com/WolfgangKurz) : LAOPLUS にて [滅亡前の戦術教本](https://lo.swaytwig.com/) のデータを用いることをご快諾していただきました。

## License

MIT License
