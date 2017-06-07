const questions = new Map();

questions.set(0, { title: 'What is 1+1?', answers: ['1', '2', '3', '4'], correct: 1})

export default function() {
  return questions.get(0);
}
