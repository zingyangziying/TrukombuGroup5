//This JS Purely for Class of Product Page

//global variable for use in Quantity Counter
let quantity = 1;
let storeProductinfo = [];

class ProductController {

    constructor() {
        this._items = [];  //empty object
    }

    //method to add the items into the array
    addItem(name, description, price, imageUrl1, imageUrl2, imageObject1, imageObject2)
    {
        //POST HTTP Method
        var productController = this;

        const formData = new FormData();
        //key/value pair
        //key (e.g. 'name') needs to match with the @RequestParam from the postmapping in your ItemController.java Class
        //value is the parameter that is passed from the productForm.js (e.g. New T-Shirt)

        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('imageUrl1', imageUrl1);
        formData.append('imageUrl2', imageUrl2);
        formData.append('imagefile1',imageObject1);
        formData.append('imagefile2',imageObject2);

        fetch('https://trukombu.herokuapp.com/item/add', {
             method: 'POST',
             body: formData
             })
             .then(response => response.json())
             .then(data => {
                 console.log('Success:', data);
                 alert("Successfully added to Product")
             })
             .catch((error) => {
                 console.error('Error:', error);
                 alert("Error adding item to Product")
             });
    }

    //Create addItem method to add the product item to the _items object
//    addItem(image, name, price, modalImageOne, modalImageTwo, modalDescription) {
//
//        const item = {
//            image: image,
//            name: name,
//            price: price,
//            modalImageOne: modalImageOne,
//            modalImageTwo: modalImageTwo,
//            modalDescription: modalDescription
//        }
//
//        this._items.push(item);
//
//    }

    displayItem() {
        var productController = this;
        productController._items = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('https://trukombu.herokuapp.com/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {
                        productId: item.productId,
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        imageUrl1: item.imageUrl1,
                        imageUrl2: item.imageUrl2
                    };
                    productController._items.push(itemObj);
                });

                productController.renderProductPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }



    //display the product _items on the webpage
    renderProductPage() {

        //Display the information on the infocard
        // 1) For Loop to loop through the _items

        //Create array to store each individual HTML Card
        const productHTMLList = [];

        //For Loop will loop through nth times
        for (let i = 0; i < this._items.length; i++)
        {
            const item = this._items[i];

            // 2) Call a function to create the HTML elements for the card
            //Creates HTML Elements for ONE info card, passing "i" as an argument in create HTMLCard function - line 80
            const productHTML = createHTMLCard(i, item);
            //Push the infocard into array from line 35
            productHTMLList.push(productHTML);

        } //End of For statement

        // 3) Insert the HTML elements of the cards to the productCards(#productCards)
        //Append the cards created to the #productCards id
        const pHTML = productHTMLList.join("\n");

        document.querySelector("#productCards").innerHTML = pHTML;


        //Create a loop to add the event listener to each "Find out more" button in the card displayed
        for (let j = 0; j < this._items.length; j++)
        {

            //displayProductDetail - event handler function
            const item = this._items[j];

            //Find out more button
            document.getElementById(j).addEventListener("click", function() { displayProductDetail(j, item); });

        }

         //add event listener button for quantity counter: + & - (id=add) (id=minus)
         document.getElementById("add").addEventListener("click", function() {increaseQty()} );
         document.getElementById("minus").addEventListener("click", function() {decreaseQty()} );

    } //End of displayItem method

} //End of ProductController Class



//Function not in ProductController Class, but ProductController Class uses this function - line 44
const createHTMLCard = (index, item) => `
    <div class="col mb-4">
        <div class="card border-0">
            <img src="${item.imageUrl1}" class="card-img-top" alt="TRUKOMBU Product Image">
            <div class="card-body text-center prezybeigebg">
                <h5 class="card-title font-weight-bold">${item.name}</h5>
                <p class="card-text">$${item.price.toFixed(2)}</p>
                <button id="${index}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#productModal">
                Find out more
                </button>
            </div>
        </div>
    </div>
`;



//Function to display Modal details, used in - line 65
function displayProductDetail(index, item) {

    document.getElementById("ModalName").innerText = item.name;
    document.getElementById("modalImageOne").src = item.imageUrl1;
    document.getElementById("modalImageTwo").src = item.imageUrl2;
    document.getElementById("modalDescription").innerText = item.description;
    document.getElementById("modalPrice").innerText = "$" + item.price.toFixed(2);

    //Setting Quantity Counter to be default 1 when closing & reopening modal
    quantity = 1;
    document.getElementById("showQty").value = quantity;
    


}


//function to increase quantity of counter, used in - line 70
function increaseQty()
{

   
    //if statement to prevent quantity from going past 10
    if (quantity > 0 && quantity < 10) {   //GOT PROBLEM HERE - SOLVED!
       
        quantity++;
        document.getElementById("showQty").value = quantity; //new qty will reflect after addition
    } else {
        
        quantity = 10; //Cap at max 10
        document.getElementById("showQty").value = quantity; //new qty will reflect after
    }

   
    document.getElementById("modalPrice").innerText = `$${(quantity * 7.90).toFixed(2)}`; 
    //price will multiply according to qty, use String interpolation to include dollar sign $ to the new price

    
}

//function to decrease quantity of counter, used in - line 71
function decreaseQty()
{
    
    //if statement to prevent quantity from going into negatives
    if (quantity > 1) {
    
        quantity--;
        document.getElementById("showQty").value = quantity; //new qty will reflect after substraction
    } else {
       
    quantity = 1; //Cap at min 1
    document.getElementById("showQty").value = quantity; //new qty will reflect after 
    }

    
    document.getElementById("modalPrice").innerText = `$${(quantity * 7.90).toFixed(2)}`; 
    //price will multiply according to qty, use String interpolation to include dollar sign $ to the new price
   
}



function infoSubmit(){

    alert("Product successfully added!");
    const ProductName1 = document.querySelector("#ModalName").innerText;
    //cant use xxx.value because #ModalName element is not an INPUT, unlike #showQty
    const ProductQty1 = document.querySelector("#showQty").value;
    const ProductPrice1 = document.querySelector("#modalPrice").innerText;
    //cant use xxx.value because #ModalPrice element is not an INPUT, unlike #showQty
    
    

    //list it as object
    let submitProduct = {

        name1:ProductName1,
        qty1:ProductQty1,
        price1:ProductPrice1
        
    
    }; 
    
    console.log(submitProduct);
    storeProductinfo.push(submitProduct);
    
    

}