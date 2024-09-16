let companies=['Bloomberg','Microsoft','Uber','google','IBM','Netflix'];
console.log(companies);

// a remove the first company from the array

console.log(companies.shift());
console.log(companies);


// remove Uber & add OLA in its place 
console.log(companies.splice(1,1,'OLA'));
console.log(companies)
// add Amazon at the end

console.log(companies.push('amazon'));
console.log(companies)