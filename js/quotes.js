const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: '성공하는 것보다 가치 있는 것은 더 많은 시도를 하는 것이다.',
    author: '알베르트 아인슈타인',
  },
  {
    quote: '언제나 현재에 집중할 수 있다면 행복할 것이다.',
    author: '파울로 코엘료',
  },
  {
    quote: '성공적인 삶을 살기 위해 가장 필요한 것은 인내와 열정이다.',
    author: '조셉 애디슨',
  },
  {
    quote: '인간은 자신이 믿는 대로 된다.',
    author: '노만 빈센트 필',
  },
  {
    quote: '가장 어두운 밤이 지나면 해가 떠오른다.',
    author: '헬렌 켈러',
  },
  {
    quote: '언제나 자신감을 가지고 행동하라. 그러면 성공할 것이다.',
    author: '바네사 허진스',
  },
  {
    quote: '지금까지의 인생은 지금 이 순간까지의 선택들의 총합이다.',
    author: '에이브러햄 링컨',
  },
  {
    quote: '매일매일 해야 할 일을 하면서 인생을 살아야 한다.',
    author: '윌리엄 셰익스피어',
  },
  {
    quote: '성공은 준비된 사람의 기회에 불과하다.',
    author: '디즈니 CEO, 로버트 아이거',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.textContent = todaysQuote.quote;
author.textContent = todaysQuote.author;
