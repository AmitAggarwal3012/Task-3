const questions =[
    {
        'que': 'What does the character Popeye famously eat to boost his strength?',
        'a': 'Spinach',
        'b': 'Protien Shake',
        'c': 'Pizza',
        'd': 'Laddu',
        'correct': 'a'
    },


{
    'que':'On whom does oggy have a crush on?',
    'a': 'Monica',
    'b': 'Olivia',
    'c': 'Sweety',
    'd': 'Kristen',
    'correct': 'b'
},

{
    'que':'Where does Chhota Bheem live?',
    'a': 'Sonpur',
    'b': 'Rampur',
    'c': 'Dholakpur ',
    'd': 'Dhoklapur ',
    'correct': 'c'
},

{
    'que':'Whatis the pet dialouge of Inspector Chingum',
    'a': 'Chingum k changul se bchna impossible',
    'b': 'Tumhe bharat mata ki kasam',
    'c': 'Stop in the name of the law',
    'd': 'All of these',
    'correct': 'd'
},


{
    'que':"Who is the wealthiest person in the below options?",
    'a': 'Nobita',
    'b': 'Jyian',
    'c': 'Suneo',
    'd': 'Dekisuki',
    'correct': 'c'
},
]

let index =0;
let total = questions.length;
let right =0,
    wrong =0;
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.Options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
     queBox.innerText = ` ${index+1})${data.que}`;
     optionInputs[0].nextElementSibling.innerText = data.a;
     optionInputs[1].nextElementSibling.innerText = data.b;
     optionInputs[2].nextElementSibling.innerText = data.c;
     optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz =() =>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct ) {
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
   return;
}

const getAnswer =() => {
    let answer;
   optionInputs.forEach(
      (input) =>{
        if (input.checked){
            answer = input.value;
      }
      }
      )

  return answer;

}

const reset = () => {

 optionInputs.forEach(
    (input) => {
        input.checked = false
    }
 )

}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thanks  for your valuable time </h3>
    <h2> ${right}/ ${total} are correct </h2>
    `
}

 

loadQuestion();

