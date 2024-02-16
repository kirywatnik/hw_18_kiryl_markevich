/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }


let ask = function(question, yes, no){
    if(confirm(question)) yes()
    else no();
}
let num = (question, yes, no) => {
    if(confirm(question)) yes()
    else no();
}

calculator = {
    a: 0,
    b: 0,
    read(){
        this.a = prompt('Введите значение');
        this.b = prompt('Введите значение');
    },
    sum(){
        console.log(Number(this.a)+Number(this.b));
    },
    mul(){
        console.log(this.a*this.b);
    }
};
calculator.read();
calculator.sum();
calculator.mul();


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep();

 //1 
let user = {
  surname: 'Kiryl',
  age:20,
  isMarried: true
};

delete user.age;
delete user.isMarried;
console.log(user);

//2
let user = {
  surname: 'Kiryl',
  age:20,
  isMarried: true
};
console.log('age' in user);
console.log('dfde' in user);

//3
const student = {
  name: 'John',
  age:19,
  isHappy: true
};
for (let key in student){
  console.log(key);
}
for (let key in student){
  console.log(student[key]);
}

//4
const colors = {
  'ru pum pu ru rum':{
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
  }
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//5
let salaries = {
  andrew: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexadnra: 199
};
let average = (salaries.andrew+salaries.sveta+salaries.anton+salaries.igor+salaries.alexadnra)/5;
console.log(average);

//6
let user = {

};
user.login = prompt('Введите логин');
user.pass = prompt('Введите пароль');
if(confirm('Подтвердите данные '+ user.login +' '+ user.pass)){
  alert('Добро пожоловать');
}
*/
//7
let str = {
  string: prompt("СЧЕТ"),
  trans: function(string){
  let s = "";
  if(string.length>3){
    return alert('неверное введенные данные');
  }
  for(let i=0;i<string.length; i++){
    switch(string[i]){
      case '0': 
        s = s+'нуль';
        break;
      case '1': 
        s = s+'один';
        break;  
      case '2': 
        s = s+'два';
        break;
      case '3': 
        s = s+'три';
        break;   
      case '4': 
        s = s+'четрые';
        break;
      case '5': 
        s = s+'пять';
        break;
      case '6': 
        s = s+'шесть';
        break;
      case '7': 
        s = s+'семь';
        break;
      case '8': 
        s = s+'восемь';
        break;
      case '9': 
        s = s+'девять';
        break;
      default: s=s+':';

    }
  }
  return s;
}
};
console.log(str.trans(str.string));




