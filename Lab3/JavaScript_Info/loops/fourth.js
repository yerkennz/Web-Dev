let n = +prompt("Enter any number",'');

gooo:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j*j <= i; j++) { 
    if (i % j == 0) continue gooo; 
  }
  alert( i );
}