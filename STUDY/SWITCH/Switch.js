let fruits = prompt("enter the name of fruit");
switch (fruits){
    case 'apple':
        console.log("apples are 120rs/kg");
        break;

    case 'mango':
        console.log('mangoes are 90rs/kg');
        break;
     
    case "banana":
        console.log("bananas are 75rs/derzon");
        break;
    
    case "lichi":
        console.log("lichis are 250rs/kg");
        break;
     default:
        console.log("sorry,",fruits,"are out of stock");        
} 


let dishes=prompt("enter the dish you what to have:");
switch(dishes){
    case 'Biryani':
        console.log("biryani is 200rs plate");
        break;
    case 'panner butter masala':
        console.log("panner butter masala is 320rs plate");
        break;
    case 'chicken tikka masala':
        console.log("chicken tikka masala is 300 rs plate");
        break;
    default:
        console.log( `  sorry ${dishes} is currently unavailable`);            
}
