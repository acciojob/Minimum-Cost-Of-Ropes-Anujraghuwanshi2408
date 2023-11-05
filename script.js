function calculateMinCost() {
  //your code here
let ropes = document.getElementById("rope-lengths").split(",").map(str => parseInt(str));
let minCost = 0;

	while(ropes.length > 1){
		ropes.sort((a,b) => a-b);
		minCost += ropes[0] + ropes[1];
		ropes.splice(0, 2, combinedCost);
	}

	
	
 
document.getElementById("result").innerText = minCost;
  
  
}  



