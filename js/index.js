/* Global Variables */
let ProductName=document.getElementById("ProductName");
let ProductCategory=document.getElementById("ProductCategory");
let ProductPrice=document.getElementById("ProductPrice");
let ProductDescription=document.getElementById("ProductDescription");
let Button=document.getElementById("add");
let ProductList=[];
let Product;
let currentIndex;

if(localStorage.getItem("productt")=== null){
    ProductList=[];
}
else{
    ProductList=JSON.parse(localStorage.getItem("productt"));
    Display()

}

Button.onclick=function(){
    if(Button.innerHTML=="Add Product")
    {
        CreateProduct();
    }
    else
    {
        Save();
    }
    localStorage.setItem("productt",JSON.stringify(ProductList));
    Display();
    Reset();
}


/* End of Global Variables */

/* Function ( Create Product )  */
function CreateProduct(){
Product={
    name:ProductName.value,
    category:ProductCategory.value,
    price:ProductPrice.value,
    description:ProductDescription.value
}

ProductList.push(Product);
console.log(ProductList);
localStorage.setItem("productt",JSON.stringify(ProductList));
Display();
Reset();



}
/* End of Function ( Create Product )  */


/* Reset Function */

function Reset(){
    ProductName.value="";
    ProductCategory.value="";
    ProductPrice.value="";
    ProductDescription.value="";
}
/* End of Reset Function */



/* Display Function */
function Display(){
    let trs="";

    for(let i=0;i<ProductList.length;i++)
    {
        trs +=`
        <tr>
        <td>${i+1}</td>
        <td>${ProductList[i].name}</td>
        <td>${ProductList[i].category}</td>
        <td>${ProductList[i].price}</td>
        <td>${ProductList[i].description}</td>
        <td><button class="btn btn-outline-warning" onclick="update(${i})"><i class="fa-solid fa-edit"></i></button></td>
        <td><button class="btn btn-outline-danger" onclick="deletee(${i})"><i class="fa-solid fa-trash"></i></button></td>
      </tr>`
    
        
    }

    document.getElementById("body").innerHTML=trs;

}
/* End of Display Function */



/* Delete Function */
function deletee(index){
    ProductList.splice(index,1);
    localStorage.setItem("productt",JSON.stringify(ProductList));
    Display();

}
/* End of Delete Function */


/* Update Function */

function update(index){
    currentIndex=index;
ProductName.value=ProductList[index].name;
ProductCategory.value=ProductList[index].category;
ProductPrice.value=ProductList[index].price;
ProductDescription.value=ProductList[index].description;

document.getElementById("add").innerHTML="Update Product";

}

/* End of Update Function */

/* Save Product */

function Save(){

    Product={
        name:ProductName.value,
        category:ProductCategory.value,
        price:ProductPrice.value,
        description:ProductDescription.value
    }

    ProductList[currentIndex]=Product;
    document.getElementById("add").innerHTML="Add Product";
  
}