var expr = document.getElementById('display');
var sol = document.getElementById('solution');
var exp = "";

function expression(i)
{
    exp = exp.concat(i);
    expr.innerHTML = exp;
}

function calculation()
{
	ans = math.eval(exp);
	sol.innerHTML = ans;
    sol.style.backgroundColor = "lightgreen";
}

function del(){
	exp = exp.slice(-2,-1);
	expr.innerHTML = exp;
}

function clr(){
	expr.innerHTML = "";
	sol.innerHTML = "";
	exp = "";
	expr.style.backgroundColor = "lightblue";
	sol.style.backgroundColor = "lightblue";
}
