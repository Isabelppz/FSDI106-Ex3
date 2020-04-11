
var items=[];

function init(){
    console.log("Admin Page");
}
window.onload=init;

//object constructor
class Item{
    constructor(code,title,price,description,category,image){
    this.code=code;
    this.title=title;
    this.price=price;
    this.description=description;
    this.category=category;
    this.image=image;
}
}
function register(){
    //console.log("Current items"+items.length);
    
    //save from the input in a variable
    var code=$("#code").val();
    var title=$("#title").val();
    var price=$("#price").val();
    var description=$("#description").val();
    var category=$("#category").val();
    var image=$("#image").val();

    if(code!="" && title!="" && price!="" && description!="" && category!="" ){
    //create object
    var newItem= new Item(code,title,price,description,category,image)

    //assign the var to the attribute
    items.push(newItem);
    console.log(newItem);
    console.log("New Item: "+ items.length);
    alert("You register a new product");
    }
}

$("#register-btn").on('click',function(){
    register();
});


