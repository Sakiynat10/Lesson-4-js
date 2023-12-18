//1

// let n = +prompt("qatorlar sonini kiriting");

// for ( let i = 1 ; i <= n; i++){
//         // console.log(2 * i -1);
//         let row = "";
//         // console.log(n - i);
        
//         //adding spaces
//         for(let j = 1; j <= n - i; j++){
//             row += " "
//         }


//         //making stars
//         for(let j = 1; j <= 2 * i - 1; j++){
//             row += "*";
//         }
//         console.log(row);
// }


//2
// let n =+prompt('qatorlar sonini kiriting');
// for(let i = n ; i >= 1 ; i--){
//     let row = "";
//     for( j = 1; j <= n-i ; j++){
//         row += " "
//     }

//     for(let j = 1; j<= 2 * i -1; j++){
//         row += "*"
//     }
//     console.log(row);
// }


//3
//  let n = +prompt(' n sonini kiriting')
//  count = 0;
//  while(n >= 1 ){
//     n = parseInt(n / 10);
//     count++;
//  }
//  console.log(count);




//4
// let n = +prompt(' sonni kiriiting');

// while(n >= 1){
//     n = parseInt(n / 10);
//     console.log(n)
// }




//while-1
// let A = +prompt('A sonini kiriting')
// let B = +prompt("A dan kichik B sonini kiriiting")

// while(A >= B){
//     A -= B;
// }
// console.log(A , "A kesmaning bo'sh qismi");


//while-2

// let A = +prompt('A sonini kiriting');
// let B = +prompt('B sonini kiriting');

// count = 0;
// while(A >= B){
//     A -=B
//     count++
// }
// console.log(count , "A kesmada shunchA B kesma joylashgan")



//while - 3
// let n = +prompt(' n sonini kiriting');
// count = 0
// while(n >= 3 ** count){
//     count++
//     console.log(count , "counts");
// }

// if(n == 3 ** count ){
//     console.log(n , "3 ning darajasi")
// }else{
//     console.log(n , "3 ning darajasi emas")
// }

//while - 4;
// let n = +prompt(' n sonini kiriting');
// let m = +prompt('m sonini kiriting');
// count = 0;
// while(n >= m){
//     n -= m ;
//     count++;
// }
// console.log(count , "butun" , n , "qoldiq");



//while-5
// let n = +prompt(" sonni kiriting");
// let res = 10;
// count = 0;
//  while( n >= res){
//     amount=n % 10;
//     n = (n - amount)/10;
//     count++
//  }
//  console.log(amount * res ** count + n);



 //while-6
// let n = +prompt(" sonni kiriting");
// let res = 10;
// count = 0;
//  while( n >= res){
//     amount=n % 10;
//     n = (n - amount)/10;
//     count++
//  }
//  console.log(amount + n);


//while-7
// let n = +prompt(" sonni kiriting");
// let res = 10;
// count = 0;
//  while( n >= res){
//     amount=n % 10;
//     if(amount == 2 || count == 2){
//         console.log(" 2soni mavjud");
//     }
    
//     n = (n - amount)/10;
//     count++

//     if(n == 2){
//         console.log(" 2 soni mavjud")
//     }
//  }


//while-8
// let n = +prompt(" sonni kiriting");
// let res = 10;
// count = 0;
//  while( n >= res){
//     amount=n % 2;
//     if(amount == 1 || count == 2){
//         console.log(" toq son");
//     }
    
//     n = (n - amount)/10;
//     count++
//  }

