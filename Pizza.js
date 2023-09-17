let coupon=[123,456,789];

function couponMatch(){
    let b=document.getElementById("coupon-no").value;
    for(let i=0;i<coupon.length;i++)
    {
        if(b==coupon[i]){
           
            return true
            break
        }else{
            
            return false
            break
        }
    }
}

function Generate(){
    let b=document.getElementById("Pizza-type").value;
    let a=document.getElementById("Name").value;
    let c=document.getElementById("Pizza-size").value;
    alert("sorry matching failed")
    
    document.write("<br>",a);
            document.write("<br>",b);
        switch(c){
            case "Small pizza slice":
                document.write("<br>","Your total bill is 100rs");break;
            case "Medium pizza slice":document.write("<br>","Your total bill is 200rs");break;
            case "Large pizza slice":document.write("<br>","Your total bill is 300rs");break;
        }
        
}
function Generate20(){
    let b=document.getElementById("Pizza-type").value;
    let c=document.getElementById("Pizza-size").value;
    let a=document.getElementById("Name").value;
    alert("coupon no matched")

    document.write("<br>",a);
            document.write("<br>",b);
        switch(c){
            case "Small pizza slice":document.write("<br>","Your total bill is :",100-(100*0.2));break;
            case "Medium pizza slice":document.write("<br>","Your total bill is :",200-(200*0.2));break;
            case "Large pizza slice":document.write("<br>","Your total bill is :",300-(300*0.2));break;
        }
        
}