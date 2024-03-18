const modelSelect = document.getElementById('model');
const resultText = document.getElementById('result');

const wordCountButtons = document.querySelectorAll('.word-count-btn');
wordCountButtons.forEach(button => {
  button.addEventListener('click', () => {
    const words = button.getAttribute('data-words');
    document.getElementById('word-count').value = words;
    calculateTotal(words);
  });
});

modelSelect.addEventListener('change', () => {
  calculateTotal();
});

document.getElementById('word-count').addEventListener('input', () => {
  calculateTotal();
});

function calculateTotal(words) {
  const wordCount = words || document.getElementById('word-count').value;
  const model = modelSelect.value;
  let price = 0;

  switch (model) {
    case 'chatgpt-4k':
      price = 0.002;
      break;
    case 'chatgpt-16k':
      price = 0.0035;
      break;
    case 'gpt4':
      price = 0.09;
      break;
    case 'gpt4-32k':
      price = 0.18;
      break;
    case 'gpt4-128k':
      price = 0.04;
      break;
    default:
      break;
  }

  const total = (wordCount / 500) * price;
  resultText.textContent = '$' + total.toFixed(2);
}

calculateTotal();
