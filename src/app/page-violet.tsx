export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-slate-200 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-4">新事業チーム診断サービス</p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-relaxed">
              あなたのチームの<br />新規事業構想力、<br />
              <span className="text-indigo-800 italic">&ldquo;見える化&rdquo;</span><br />しませんか？
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mb-4 max-w-4xl mx-auto font-light leading-loose">
            新事業開発に取り組むチームの能力を客観的に診断
          </p>
          <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            成功に向けた具体的なアクションプランをご提案します
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdvJJ4jUS0E7-XDgcGHOIK-kD4Vzy9IDYhldFLtMMpclhcUSw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            7分で完了！新事業チーム診断（無料）
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-4">よくある課題</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
              新規事業開発で<br />こんな<em className="text-indigo-800 not-italic">課題</em>はありませんか？
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-50 rounded-xl border-l-4 border-indigo-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-indigo-800 text-5xl mb-6">❓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">能力要件が不透明</h3>
              <p className="text-sm text-gray-700 leading-loose">新事業にどのような能力が必要か不透明</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-50 rounded-xl border-l-4 border-indigo-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-indigo-800 text-5xl mb-6">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">評価基準が不適切</h3>
              <p className="text-sm text-gray-700 leading-loose">能力評価基準が既存領域と同じで、適切なチームか不明</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-50 rounded-xl border-l-4 border-indigo-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-indigo-800 text-5xl mb-6">😰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">リソース不安</h3>
              <p className="text-sm text-gray-700 leading-loose">社内リソースとスキルだけで走り切れるか不安</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-4">簡単3ステップ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
              診断サービスの<br /><em className="text-indigo-800 not-italic">3ステップ</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-800 to-indigo-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">新規事業構想力を診断</h3>
              <p className="text-base text-gray-700 leading-loose">7分の簡単な質問に答えるだけで、チームの現状を分析</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-800 to-indigo-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">診断結果をレポートで提供</h3>
              <p className="text-base text-gray-700 leading-loose">専用レーダーチャートと詳細分析をメールで即時送信</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-800 to-indigo-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">ワークショップ研修をご提案</h3>
              <p className="text-base text-gray-700 leading-loose">結果に基づいた具体的なアクションプランをご提案</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-4">診断の価値</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
              診断で得られる<br /><em className="text-indigo-800 not-italic">メリット</em>
            </h2>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-indigo-50 transition-colors">
              <div className="w-8 h-8 bg-indigo-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">現状把握の客観化</h3>
                <p className="text-sm text-gray-600 leading-relaxed">ASIS能力を客観的に把握し、&ldquo;強み&rdquo;と&ldquo;伸び代&rdquo;を定量化</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-indigo-50 transition-colors">
              <div className="w-8 h-8 bg-indigo-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">戦略的アクションプラン</h3>
                <p className="text-sm text-gray-600 leading-relaxed">TOBEに向けた経営層が納得するアクションプランの整理</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-indigo-50 transition-colors">
              <div className="w-8 h-8 bg-indigo-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">外部支援の検討</h3>
                <p className="text-sm text-gray-600 leading-relaxed">必要に応じた外部支援の検討が可能に</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-4">実際の声</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
              お客様の<em className="text-indigo-800 not-italic">声</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-800">
              <p className="text-base text-gray-700 mb-6 italic leading-loose">
                &ldquo;新事業に必要な能力が明確になり、チームの方向性が定まりました！&rdquo;
              </p>
              <div className="text-sm text-indigo-800 font-semibold">- 製造業A社 新事業開発部長</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-800">
              <p className="text-base text-gray-700 mb-6 italic leading-loose">
                &ldquo;経営層と現場の認識齟齬が解消され、議論がスムーズになりました。&rdquo;
              </p>
              <div className="text-sm text-indigo-800 font-semibold">- IT企業B社 事業企画マネージャー</div>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-6">今すぐ始める</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-relaxed">
            まずは<em className="text-indigo-800 not-italic">無料診断</em>で、<br />貴社チームの現在地を<br />把握しませんか？
          </h2>
          <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            診断は約7分で完了し、結果はすぐにメールでお送りします。
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdvJJ4jUS0E7-XDgcGHOIK-kD4Vzy9IDYhldFLtMMpclhcUSw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            無料診断を始める
          </a>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6">私たちについて</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <em className="text-indigo-400 not-italic">NEWh</em>について
          </h2>
          <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed">
            300社以上の新規事業を支援してきた知見に基づいています。
          </p>
          <p className="text-base text-gray-400 max-w-3xl mx-auto leading-loose">
            株式会社NEWhは、企業の新規事業開発を専門的に支援し、<br />
            数多くの成功事例を生み出してきました。
          </p>
        </div>
      </section>
    </div>
  );
}