let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let answer = 0;
for (let key in salaries){
    answer += salaries[key];
}
alert(answer);