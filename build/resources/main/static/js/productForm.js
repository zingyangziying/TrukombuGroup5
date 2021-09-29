//Create an instance object of ProductController
const productControl = new ProductController();
var storeImage1 = ""
var storeImage2 = ""

//When user clicks on 'Submit', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const product_name = document.querySelector('#product_name');
    const product_description = document.querySelector('#product_description');
    const product_price = document.querySelector('#product_price');
    const product_image1 = document.querySelector('#product_image1');
    const product_image2 = document.querySelector('#product_image2');

    /*
        Do the Validation code here
    */

    // Get the values of the inputs - variable names to be same as MySQL columns
    const name = product_name.value;
    const description = product_description.value;
    const price = product_price.value;
    const imageUrl1 = "images/" + product_image1.value.replace("C:\\fakepath\\", "");
    const imageUrl2 = "images/" + product_image2.value.replace("C:\\fakepath\\", "");


    // Clear the form
    product_name.value = '';
    product_description.value = '';
    product_price.value = '';
    product_image1.value = '';
    product_image2.value = '';

    // Add the task to the task manager
    productControl.addItem(name, description, price, imageUrl1, imageUrl2, storeImage1, storeImage2);

});

// select file input
const input1 = document.querySelector('#product_image1');
const input2 = document.querySelector('#product_image2');

// add event listener
input1.addEventListener('change', () => {
    storeImage1 = input1.files[0];
});

input2.addEventListener('change', () => {
    storeImage2 = input2.files[0];
});