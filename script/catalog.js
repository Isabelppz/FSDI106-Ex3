//global variables
var items=[
{ //first item
    code: '1tvs',
    title: 'Tv',
    price: 1000,
    description: 'Samsung',
    category: 'Electronics',
    image: 'img/tv.jpg'
},
{ //second item
    code: '1ph10',
    title: 'Phone',
    price: 1000,
    description: 'I Phone X',
    category: 'Mobile devices',
    image: 'img/cel.jpg'
},
{  //third item
    code: '2spks',
    title: 'Speakers',
    price: 1000,
    description: 'Bose Speakers',
    category: 'Audio',
    image: 'img/spk.png'
},
{ //Fourth item
    code: '1cpc',
    title: 'Computer',
    price: 1000,
    description: 'HP Pavilion',
    category: 'Hardware',
    image: 'img/pc.jpg'
}
];

//functions
function displayCatalog(){
    //1-travel inside the array
    for(var i=0;i<items.length;i++){
    //2-get element from the array
    var product = items[i];
    //3-create the string
    var layout=`<div class="item" id="${product.code}">
    <img src="${product.image}">
    <h4>${product.title}</h4>
    <h6 class="item-price">${product.price}</h6>
    <p>${product.description}</p>
    <div class="button-div">
    <button class="btn btn-primary mb-2">Add to cart</button>
    </div>
    </div>`;
    console.log(i,layout);
    //4-display the element in the DOM (HTML)
    $("#catalog").append(layout);
    }
}
//displayCatalog();

function init(){
    console.log('Catalog page');
    displayCatalog();
}

$('#search-btn').on('click',function(){
   // body search function
   var searchString=$('#search-txt').val();
   //travel inside the array
   for(var i=0;i<items.length;i++){
        //conditional
       if(searchString.toUpperCase()!= items[i].title.toUpperCase()){
           //execute the change
           $('#'+items[i].code).hide();
       }
       else{
           //execute the change
           $('#'+items[i].code).show();
       }
       
   if(searchString==""){
    $('#'+items[i].code).show();

   }
   }
}); 

//initialization
window.onload=init; 