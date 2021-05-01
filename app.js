const quiz = [
  {
    question: 'Q1. ゲーム市場、最も売れたゲーム機はどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS',
    ],
    correct: 'ニンテンドーDS',
  },
  {
    question: 'Q2. Androidを搭載している機種はどれ？',
    answers: [
      'F502i',
      'iPhone',
      'Macbook Pro',
      'Zenfone7',
    ],
    correct: 'Zenfone7',
  },
  {
    question: 'Q3. ノースフェイスのモデルの内、2020年に最も売れたものははどれ？',
    answers: [
      'ヌプシジャケット',
      'バルトロライトジャケット',
      'デナリジャケット',
      'マウンテンガイドジャケット',
    ],
    correct: 'バルトロライトジャケット',
  },
]

let quizIndex = 0;
let correctCount = 0;
const $question = document.getElementById('js-question');
const $answers = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  $question.textContent = quiz[quizIndex].question;
  let index = 0;
  while(index < $answers.length) {
    $answers[index].textContent = quiz[quizIndex].answers[index];
    index++;
  }
}
setupQuiz();

// 回答時の結果判定処理
const clickHandler = e => {
  if(e.target.textContent === quiz[quizIndex].correct){
    window.alert('正解');
    correctCount++;
  } else {
    window.alert('不正解');
  }
  quizIndex++;
  if(quizIndex < quiz.length) {
    setupQuiz();
  } else {
    window.alert(`クイズ終了！あなたの正解数は${correctCount}/${quiz.length}です`);
    quizIndex = 0;
    correctCount = 0;
    setupQuiz();
  }
};

let handlerIndex = 0;
while(handlerIndex < $answers.length) {
  $answers[handlerIndex].addEventListener('click', e => {
    clickHandler(e);
  })
  handlerIndex++;
}