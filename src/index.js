module.exports = function check(str, bracketsConfig) {
  let closeToOpenBrackets = {};
  let openBrackets = [];
	
  for(let k = 0; k < bracketsConfig.length; k++){
    let openBracket = bracketsConfig[k][0];
    let closeBracket = bracketsConfig[k][1];
    closeToOpenBrackets[closeBracket] = openBracket;  // change name indexses 1, 0
    openBrackets.push(openBracket);
  } 
  
  //console.log(openBrekets);
  
	let stack = [];
	
	for(let i = 0; i < str.length; i++){
  	
  	let curBracket = str[i];
    
    //console.log(current);
    if(Object.keys(closeToOpenBrackets).includes(curBracket) && stack.includes(curBracket) && openBrackets.includes(curBracket)){
      stack.pop();  
    } else if (openBrackets.includes(curBracket)){
    	stack.push(curBracket);
    } else{
    		if(stack.length === 0){
    			return false;
        }
    
    		if(closeToOpenBrackets[curBracket] !== stack.pop()){
        	return false;
        } 
    }
  
  }

  // |{|{}||
  
  console.log(stack);
   
  return stack.length === 0;
}
