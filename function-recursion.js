function recursion(i){
    if(i == 1){
        return 1 ;
    }
    return i + recursion(i-1);

}

console.log(recursion(5));