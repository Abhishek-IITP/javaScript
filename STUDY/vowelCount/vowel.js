const arrowVowels=(n)=>{
    let count=0;
    for (let i=0;i<=n.length;i++){
        if (n[i]==='a'|| n[i]==='e' || n[i]==='i' || n[i]==='o' || n[i]==='u'){
            count++
        }
    }
    return count;
    
}
n="hello world";
console.log(arrowVowels(n));