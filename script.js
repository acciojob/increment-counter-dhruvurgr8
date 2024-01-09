//your JS code here. If required.
let count = 0;
document.getElementById('counter').InnerHtml = count;
function Increment(){
	alert(count);
	count+=1;
	document.getElementById('counter').textContent = count;
}