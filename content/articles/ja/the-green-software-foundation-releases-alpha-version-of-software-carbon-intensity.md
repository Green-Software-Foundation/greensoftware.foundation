---
title: "グリーンソフトウェア財団は、Software Carbon Intensityの仕様のα版を公開。コメントを募集中。"
date: "2022-02-01"
summary: "グリーンソフトウェア財団のSoftware Carbon Intensity（SCI）の仕様のα版へのコメントを歓迎。世界を変えたい人材を募集。"
teaserText: "グリーンソフトウェア財団のSoftware Carbon Intensity（SCI）の仕様のα版へのコ���ントを歓迎。世界を変えたい人材を募集。"
mainImage: "../images/the-green-software-foundation-releases-alpha-version-of-software-carbon-intensity/main.png"
authors:
  - fullName: "Green Software Foundation"
    role: "Staff"
    company: "Green Software Foundation"
    companyWebsite: "https://greensoftware.foundation/"
    photo: "../images/authors/green-software-foundation.png"
translators:
  - fullName: "Yusuke Kobayashi"
    role: "Manager, Green Innovation Office"
    company: "NTT DATA"
    companyWebsite: "http://nttdata.com/"
    photo: "../images/authors/yusuke-kobayashi.jpeg"
    socialMedia:
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/yusuke-kobayashi-069139121/"
  - fullName: "Taichi Imura"
    role: "Assistant Manager, Green Innovation Office"
    company: "NTT DATA"
    companyWebsite: "http://nttdata.com/"
    photo: "../images/authors/taichi-imura.png"
    socialMedia:
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/taichi-imura-960292230/"
---

ソフトウェアは、個人の生産性から組織の変革まで、現代の世界の多くの動力となっています。ソフトウェアはまた、アクセシビリティや気候変動など世界的な課題に取り組む上で重要な役割を果たすことができます。しかし、アクセシビリティから学んだように、インクルージョンを実現するために、ソフトウェアはまずインクルーシブに設計される必要があります。気候変動にも同じことが言えます。開発者は、ソフトウェアを書いたり選んだりするときに、その炭素排出量について考え、すぐに行動に移す必要があります。つまり、炭素強度が最も低いソフトウェアソリューションをコードレベルまで遡って測定する方法が必要です。

ソフトウェア業界がより持続可能な未来に貢献することを支援するというミッションの一環として、グリーンソフトウェア財団は、炭素排出量に基づいたソフトウェアシステムの**スコア算出**方法であるSoftware Carbon Intensity（SCI）の仕様のα版を公開できることを誇りに思います。SCIは、開発者がコスト、性能、セキュリティ、アクセシビリティ、およびその他今日の懸念事項を考慮するのと同じ方法で、日常業務におけるソフトウェアの炭素強度を容易に説明できるようにするためのツールです。

SCIは、非営利団体、学界、業界リーダーの国際的な同盟であるグリーンソフトウェア財団の標準化ワーキンググループを通じて策定されました。

より幅広いパブリックコメントや情報提供を求めて、SCIのα版が本日公開されます。コメントなどはGitHubから、または[sci_feedback@greensoftware.foundation](mailto:sci_feedback@greensoftware.foundation)宛に電子メールで提出してください。この新たな仕様の公式バージョン1.0公開に向けて、すべてのコメントが考慮されます。

## **SCIとは？カーボンフットプリントとの違い**

SCIは、ソフトウェアの二酸化炭素の総排出量を削減するためのコンパスとしての役割を果たします。SCIは、ソフトウェアシステムの二酸化炭素の総排出量を計算する従来型の年次のサステナビリティレポートの方法よりもむしろ、ソフトウェアソリューション自体の開発中に削減方法に関する情報を提供することに重点を置いています。

SCIは二酸化炭素の総排出量ではなく、1分あたりやユーザーデバイスあたりなどのソフトウェアの炭素排出量のレートであり、ソフトウェアシステムが更改されるときの炭素強度の比較や、メッセージアプリやビデオ会議ソリューションなどの同じような種類のソフトウェアシステム間の炭素強度の比較をするための重要なベンチマークとして役立ちます。

ソフトウェアの炭素排出量を削減するためには、次の3つの重要な方法があります。

1.   **ハードウェアの使用を減らす：**たとえば、アップグレードのサイズを減らし、ユーザーが古いデバイスをより長く使用できるようにしたり、クラウドアプリケーションを設計し、マシンの使用を減らしたりします。

2.   **エネルギーの使用を減らす：**たとえば、ユーザータスクの完了速度やサーバーのパフォーマンスを向上することにより、ソフトウェアをより効率良く実行し、リソースの消費を減らします。

3.   または、よりクリーンなエネルギーが供給されているときにより多くのことを行い、より汚れたエネルギーが供給されているときには少なくします。これは**Carbon awareness**と呼ばれます。例として、定期的なバックアップの太陽エネルギー供給のピーク時へのスケジューリングがあります。

SCIスコアを下げる唯一の方法は、これらのうちのひとつ以上を実行することです。SCIスコアが低いほど、高いスコアよりも優れていることになりますが、ゼロに到達することは不可能です。

## **SCIスコアの算出方法**

SCIスコアは、炭素排出量の合計ではなく、レートです。この方程式は、その背景にある非常に複雑な問題に対する単純で明確なソリューションです。

***SCI = ((E * I) + M) / R***

E = ソフトウェアが消費するエネルギー（kWh）

I = エネルギー1kWhあたりに排出される炭素（gCO2/kWh）

M = ソフトウェア実行中のハードウェアから排出される炭素

R = 機能ユニット；ソフトウェアをどのように計るか、たとえばユーザーごとまたはデバイスごと

「/ R」はSCIのキーポイントです。これにより、SCIが、すべてのソフトウェアドメイン、すべてのユースケース、およびすべての人に役立つツールとなります。

上記の方程式への入力を測定するためにさまざまなツールが利用可能であり、グリーンソフトウェア財団は今後、ツールの推奨を作成する予定です。

## ソフトウェアを比較可能にするSCI

SCIはレートであり、合計ではありません。これはRあたりの炭素であり、Rは異なる種類のアプリケーションに基づき変わります。

合計では比較できませんが、レートでは比較できます。たとえば、会議のアプリケーションはユーザー数と使用量が異なるため、二酸化炭素排出量の合計を調べて比較することはできません。それらは、1分あたりの炭素を調べることにより比較する必要があります。 

## SCIが寄与するのは排出量の削減

排出量の削減は、相殺よりも桁違いに困難なことです。相殺は排出量を回避または取り除くために他の誰かに支払う一方で、全員がそれぞれの影響を少なくするために自分たちの役割を果たさない限り、世界的に排出量ネットゼロに到達することはできません。変えることは難しく、投資が必要かもしれませんが、顧客需要の変化、従業員、および新たな規制上の要件はすべて、サステナビリティをリードする人々に報いる傾向を示しています。

削減に対する投資を奨励するために、SCIはその計算の中にいかなる種類の相殺も含んでいません。SCIには近道がありません。より優れたSCIスコアへの唯一の道は、排出量削減に時間と労力を投資することです。

## すべての開発者とソフトウェアのためのSCI

SCIスコアは、コンソールゲーム、クラウドアプリケーション、モバイルアプリケーション、ウェブアプリケーション、モノのインターネット（IoT）デバイスなど、あらゆる種類のアプリケーションで計算することができます。SCIスコアは、専用チームを抱えた大規模な分散型エンタープライズアプリケーションから、一個人により維持されている共有オープンソースライブラリでも計算することができます。

SCIの計算は、分かりやすく簡単であるよう設計されています。グリーンソフトウェア財団は、ツールとデータ要件の継続的な改善に専念することにより、開発者がSCIスコアを迅速かつ無料で計算できるようにしています。

## グローバルな協力的取り組みとして開発されたSCI

グリーンソフトウェア財団は合意によって機能し、すべてのメンバーが協力し全会一致でSCIのα版を承認します。

パブリックコメントのために、本日、SCIを公開できることを誇りに思います。私たちはオープンに取り組み、これは目的地ではなく、旅の始まりです。

## 招待

財団は引き続き、SCIやその他の排出削減ツールに取り組んでいきます。しかしながら、単独で成し遂げることはできません。グリーンソフトウェア財団は、私たちの仕事に対してのコメントを歓迎し、変化を推進することに情熱を注ぐ人々は私たちのミッションに参加するよう勧めます。

また、SCIを使用したケーススタディの展開に関心があるアーリーアダプターを歓迎します。[GitHub](https://github.com/Green-Software-Foundation/software_carbon_intensity/discussions/new?category=sci-feedback)から、またはsci_feedback@greensoftware.foundation宛に電子メールでご連絡ください。

## グリーンソフトウェア財団 メンバー

### **運営メンバー**

[アクセンチュア](https://www.accenture.com/) | [GitHub](https://github.com/) | [NTTデータ](https://www.nttdata.com/) | T[hou](https://www.thoughtworks.com/)[g](https://www.thoughtworks.com/)[htworks](https://www.thoughtworks.com/) | [Globant](https://www.globant.com/) | [マイクロソフト](https://www.microsoft.com/about)

### 一般メンバー

[アバナード](https://www.avanade.com/) | [ブリストル大学](https://www.bristol.ac.uk/) | [Container Solutions](https://www.container-solutions.com/) | [ゴールドマン・サックス](https://www.goldmansachs.com/) | [インテーザ・サンパオロ](https://www.intesasanpaolo.com/)[ ](https://www.intesasanpaolo.com/)|

[Leaders For Climate Action](https://www.thegreenwebfoundation.org/)[ | ](https://www.thegreenwebfoundation.org/)[テキサス州立大学](https://www.thegreenwebfoundation.org/)[ | ](https://www.thegreenwebfoundation.org/)[The Explorers](https://www.thegreenwebfoundation.org/)[ | ](https://www.thegreenwebfoundation.org/)[Time for the Planet](https://www.thegreenwebfoundation.org/)[ | ](https://www.thegreenwebfoundation.org/)[グリーンウェブ財団](https://www.thegreenwebfoundation.org/)[ | ](https://www.thegreenwebfoundation.org/)[シェル](http://www.shell.com/)[ ](http://www.shell.com/)[|](https://www.thegreenwebfoundation.org/)[ ](https://www.virtasant.com/)[Virtasant](https://www.virtasant.com/)[ ](https://www.virtasant.com/)[|](https://www.thegreenwebfoundation.org/)[ ](https://www.vmware.com/)[VMware](https://www.vmware.com/)[ ](https://www.vmware.com/)[|](https://www.thegreenwebfoundation.org/)[ ](https://www.watttime.org/)[WattTime](https://www.watttime.org/)

この記事は<u>クリエイティブ・コモンズ</u>(（[CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/)のライセンスの下に提供されています。
