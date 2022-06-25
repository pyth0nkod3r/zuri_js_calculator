  var numx = Number(prompt("Enter the first number."));
    var op = prompt("Enter a simple operator. (+,-,*,×,/,÷,%)");
    var numy = Number(prompt("Enter the second number."));

    switch (op){
        
        case "+":
            alert(numx + numy);
            break;
            
        case "-":
            alert(numx - numy);
            break;
        
        case "*":
            alert(numx * numy);
            break;
            
        case "x":
            alert(numx * numy);
            break;
            
        case "X":
            alert(numx * numy);
            break;
        
        case "/":
            alert(numx / numy);
            break;
            
        case "÷":
            alert(numx / numy);
            break;
            
        case "%":
            alert(numx % numy);
            break;
            
        default:
            alert("Invalid Operator!")
        
}
