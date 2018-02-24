module.exports = function check(str, bracketsConfig) {
      function typeBracket(sym){
        openBracket = 0;
        closeBracket = 0;
        for(j = 0; j < bracketsConfig.length;j++){
            if(sym === bracketsConfig[j][0]) openBracket = j+1;
            if(sym === bracketsConfig[j][1]) closeBracket = -j-1;
        }
        sum = openBracket+closeBracket;
            if(sum == 0){
                return "s"+openBracket;
            } else return sum;
    }
    
    stack = [];
    for(i = 0;i < str.length;i++){
        bracket = typeBracket(str[i]);
        if(bracket > 0){
            stack.push(bracket);
        } else if(bracket < 0){
            if(stack.pop()+bracket !== 0) return false;
        } else{
            if(stack[stack.length-1] !== bracket || stack.length == 0){
                stack.push(bracket);  
            } else {
                stack.pop();
            }
        }
    }
    if(stack.length != 0)return false;
    else return true;
}
