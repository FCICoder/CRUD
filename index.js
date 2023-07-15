
// var salary=Number(prompt('salary?'));
// function totSal(sal)
// {
//     var tot=sal+100;
  
//     return tot;
    
// }
// var total=totSal(salary)
// console.log(total);

// document.getElementById('demo').innerHTML=`salary ${total}`;


// var x=10;
// console.log(x);
// function welcome(){
    
//      x=100;
//     console.log(x);
// }
// welcome()
// console.log(x);

var pname=document.getElementById("pName");

var pCat=document.getElementById("pCat");

var price=document.getElementById("pPrice");

var pdesc=document.getElementById("desc");

var prodSearch= document.getElementById("prodSearch");

var productList=[];

document.getElementById("bton1").innerHTML="Add Product";

function createProduct(){

var product = {

    productName:pname.value,
    prodCat:pCat.value,
    prodPrice :price.value,
    prodDesc:pdesc.value
}

productList.push(product);
Reset();
display();
console.log(product)
console.log(productList)
document.getElementById("bton1").innerHTML="Add Product"

}

function Reset(){
    pname.value="";
    pCat.value="";
    price.value="";
    pdesc.value="";
}

function display(){
    var trs=``
    for(var i=0;i<productList.length;i++){
        trs+=` <tr>
        <td>${i+1}</td>
        <td>${productList[i].productName}</td>
        <td>${productList[i].prodCat}</td>
        <td>${productList[i].prodPrice}</td>
        <td>${productList[i].prodDesc}</td>

        <td><button class="btn btn-outline-warning"onclick="update(${i})"><i class="fa-regular fa-pen-to-square"></i></button></td>
        <td><button class="btn btn-outline-danger" onclick="delet(${i})"><i class="fa-sharp fa-solid fa-trash"></i></button></td>  

        </tr>`

    }

    document.getElementById('tableBody').innerHTML=trs;
}


function delet(index){
    productList.splice(index,1);
    display();
}


function searchProduct(){
    var trs=``
    for(var i=0;i<productList.length;i++){
        if(productList[i].productName.includes(prodSearch.value)){
            var pr = document.getElementById("prodSearch").value.trim();
        
          
            var re = new RegExp(pr);
            
     
        trs+=`
     
        <tr>
        <td>${i+1}</td>
        <td>
        
          ${productList[i].productName.replace(re,`<span>${pr}</span>`)}
        
        
        </td>
        <td>${productList[i].prodCat}</td>
        <td>${productList[i].prodPriceprice}</td>
        <td>${productList[i].prodDesc}</td>

        <td><button class="btn btn-outline-warning"><i class="fa-regular fa-pen-to-square"></i></button></td>
        <td><button class="btn btn-outline-danger" onclick="delet(${i})"><i class="fa-sharp fa-solid fa-trash"></i></button></td>  

        </tr>`
        }
    }
    

    document.getElementById('tableBody').innerHTML=trs;
}


function update(index){
    for(var i=0;i<productList.length;i++){
    pname.value=productList[index].productName;
    pCat.value=productList[index].prodCat;
    price.value=productList[index].prodPrice;
    pdesc.value=productList[index].prodDesc;
    productList.splice(index,1);
    display();
    document.getElementById("bton1").innerHTML="update";
    `<td><button class="btn btn-outline-warning " onclick="update(${i})"><i class="fa-regular fa-pen-to-square"></i></button></td>`
    
   
}
    

}