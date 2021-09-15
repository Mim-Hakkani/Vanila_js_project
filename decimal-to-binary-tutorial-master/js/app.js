const InputId = document.getElementById('number'); 
const Submit = document.getElementById('submit');

Submit.addEventListener('click',function(e){
    e.preventDefault();

    //get value from input form
    const getValue = InputId.value;
  
     if(getValue ===''){
         alert('Please Input a number');
     }
     else if(getValue<0){
         alert('input the positive number');
         InputId.value ='';
     }
     else{

                //Convert Value to intger
                const convert = Number(getValue) ;
            

                //Convert Decimal to binary Number

                const Binary = convert.toString(2);   
                //toString is used to convet decimal,hexa,octal,binary numbers
            

                // set the value in output form 

                const result = document.getElementById('result');
                result.style.visibility = 'visible';

                
                result.innerText = Binary;

            //InputId.value ='';
         
     }


  
})
