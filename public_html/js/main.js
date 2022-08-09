/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






function Validate() {
            var password = document.getElementById("mailphone").value;
            var confirmPassword = document.getElementById("retypemailphone").value;
if(password === confirmPassword){  
return true;  
}  
else{  
alert("mail one and two must be same!");  
return false;  
        


}  
} 

  