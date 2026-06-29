let response:any = "42";
console.log(typeof response);
response = 42;
console.log(typeof response);
response = true;
console.log(typeof response);

let response1:unknown = "42";
console.log(typeof response1);
response1 = 42;
console.log(typeof response1);
response1 = true;
console.log(typeof response1);

let numericLength:number = (response as string).length;
console.log(numericLength);