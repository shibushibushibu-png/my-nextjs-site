export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">新事業チーム診断サービス</p>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              あなたのチームの<br />新規事業構想力、<br />
              <span className="text-orange-500 italic">&ldquo;見える化&rdquo;</span><br />しませんか？
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-800 mb-4 max-w-4xl mx-auto font-light leading-relaxed">
            新事業開発に取り組むチームの能力を客観的に診断
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            成功に向けた具体的なアクションプランをご提案します
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdvJJ4jUS0E7-XDgcGHOIK-kD4Vzy9IDYhldFLtMMpclhcUSw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            7分で完了！新事業チーム診断（無料）
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">よくある課題</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              新規事業開発で<br />こんな<em className="text-orange-500 not-italic">課題</em>はありませんか？
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gray-50 rounded-xl border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-5xl mb-6">❓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">能力要件が不透明</h3>
              <p className="text-gray-700 leading-relaxed">新事業にどのような能力が必要か不透明</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-5xl mb-6">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">評価基準が不適切</h3>
              <p className="text-gray-700 leading-relaxed">能力評価基準が既存領域と同じで、適切なチームか不明</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500 text-5xl mb-6">😰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">リソース不安</h3>
              <p className="text-gray-700 leading-relaxed">社内リソースとスキルだけで走り切れるか不安</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold mb-2">
                NEWhの新事業チーム診断が、
              </p>
              <p className="text-xl md:text-2xl font-light">
                これらの課題を解決します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">簡単3ステップ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              診断サービスの<br /><em className="text-orange-500 not-italic">3ステップ</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">新規事業構想力を診断</h3>
              <p className="text-gray-700 leading-relaxed text-lg">7分の簡単な質問に答えるだけで、チームの現状を分析</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">診断結果をレポートで提供</h3>
              <p className="text-gray-700 leading-relaxed text-lg">専用レーダーチャートと詳細分析をメールで即時送信</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ワークショップ研修をご提案</h3>
              <p className="text-gray-700 leading-relaxed text-lg">結果に基づいた具体的なアクションプランをご提案</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">診断の価値</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              診断で得られる<br /><em className="text-orange-500 not-italic">メリット</em>
            </h2>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">現状把握の客観化</h3>
                <p className="text-gray-600">ASIS能力を客観的に把握し、&ldquo;強み&rdquo;と&ldquo;伸び代&rdquo;を定量化</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">戦略的アクションプラン</h3>
                <p className="text-gray-600">TOBEに向けた経営層が納得するアクションプランの整理</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">外部支援の検討</h3>
                <p className="text-gray-600">必要に応じた外部支援の検討が可能に</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">実際の声</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              お客様の<em className="text-orange-500 not-italic">声</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4 italic">
                &ldquo;新事業に必要な能力が明確になり、チームの方向性が定まりました！&rdquo;
              </p>
              <div className="text-sm text-gray-500">- 製造業A社 新事業開発部長</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4 italic">
                &ldquo;経営層と現場の認識齟齬が解消され、議論がスムーズになりました。&rdquo;
              </p>
              <div className="text-sm text-gray-500">- IT企業B社 事業企画マネージャー</div>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-6">今すぐ始める</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            まずは<em className="text-orange-500 not-italic">無料診断</em>で、<br />貴社チームの現在地を<br />把握しませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            診断は約7分で完了し、結果はすぐにメールでお送りします。
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdvJJ4jUS0E7-XDgcGHOIK-kD4Vzy9IDYhldFLtMMpclhcUSw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            無料診断を始める
          </a>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-6">私たちについて</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <em className="text-orange-400 not-italic">NEWh</em>について
          </h2>
          <p className="text-2xl text-gray-200 mb-8 font-light">
            300社以上の新規事業を支援してきた知見に基づいています。
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            株式会社NEWhは、企業の新規事業開発を専門的に支援し、<br />
            数多くの成功事例を生み出してきました。
          </p>
        </div>
      </section>
    </div>
  );
}