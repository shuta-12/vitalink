import { useState } from 'react'
import './App.css' 

function App() {
  const [question, setQuestion] = useState('');  // 入力された質問を管理

  const handleSubmit = (e) => {
    e.preventDefault(); // ページのリロードを防ぐ
    console.log('送信された質問:', question);
    alert('送信されました！');
    setQuestion(''); // 入力内容をリセット（必要なら）
  };

  return (
    <>
      <h1>自己紹介</h1>

      <table border="1">
        <thead>
          <tr>
            <th>名前</th>
            <th>年齢</th>
            <th>出身地</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>櫻田宗汰</td>
            <td>21</td>
            <td>山梨県</td>
          </tr>
        </tbody>
      </table>

      <h2>地域連携で取り組んだ内容</h2>
      <p style={{ textIndent: '1em' }}>
        ファナックパワトロニクスにおける電子ホワイトボードを用いたノウハウの活用
      </p>

      <h2>VitaLinkプロジェクトでやりたいこと、できるようになりたいこと</h2>
      <p style={{ textIndent: '1em' }}>
        今回のプロジェクトではシステムの開発に関わって自分が書いたソースコードがシステムの中でどう反映されているか見てみたいです。<br />
        今まで、Webコンテンツの授業では自分が書いたコードを仮想環境で動かしたり、C言語の授業ではターミナル上で行うゲームを作ったりと<br />
        自分の中で完結するものでした。そのため"VitaLink"を通して「書いたコードがシステム上でこんな風に動いてるんだ。」というような<br />
        達成感を味わいたいと思いました。
      </p>

      {/* フォームをReactで制御 */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">質問フォーム</label><br />
          <textarea
            name="question"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default App;
