//Global Data storage 
let contact_library = [];
let product_library = [];

// JS for Contact Form 
function contactForm(){

    const FirstName = document.querySelector("#first_name").value;
    const LastName = document.querySelector("#last_name").value;
    const Email = document.querySelector("#email_address").value;
    const MobileNumber = document.querySelector("#mobile_number").value;
    const Subscribe = document.querySelector('input[type="checkbox"]').checked; //true for checked, false for unchecked

    //list it as object
    let Completed_contactForm = {

        fname:FirstName,
        lname:LastName,
        email:Email,
        mobile:MobileNumber,
        subscribe:Subscribe //boolean value
    
    };
    
    console.log(Completed_contactForm);
    contact_library.push(Completed_contactForm);
    document.querySelector("#prompt_text").innerHTML = "Thank you! We will contact you shortly.";
    
    }


function clearContactForm(){
    const FirstName = document.querySelector("#first_name").value ="";
    const LastName = document.querySelector("#last_name").value ="";
    const Email = document.querySelector("#email_address").value ="";
    const MobileNumber = document.querySelector("#mobile_number").value ="";
    const Subscribe = document.querySelector('input[type="checkbox"]').checked = false; //default is true

    document.querySelector("#prompt_text").style.display = "none";

}

// JS for Product Form 
//Called when the form is submitted
//function productForm(){
//
//
//    const ProductName = document.querySelector("#product_name").value;
//    const ProductDescription = document.querySelector("#product_description").value;
//    const PriceCurrency = document.querySelector("#CurrencySelect").value;
//    const ProductPrice = document.querySelector("#product_price").value;
//    const ProductImage1 = document.querySelector("#product_image1").files;
//    const ProductImage2 = document.querySelector("#product_image2").files;
//    //instead of .value (attribute), use .files to show the multiple files paths since input="file" mutiple is used
//    //.file returns object type
//
//    //list it as object
//    let Completed_productForm = {
//
//        name:ProductName,
//        description:ProductDescription,
//        currency:PriceCurrency,
//        price:ProductPrice,
//        image1:ProductImage1,
//        image2:ProductImage2
//
//    };
//
//    console.log(Completed_productForm);
//    product_library.push(Completed_productForm);
//    document.querySelector("#prompt_producttext").innerHTML = "Product listed successfully.";
//
//    //pass the information to the productController Class using addItem() method
//
//
//
//}
//
//function clearProductForm(){
//
//    const ProductName = document.querySelector("#product_name").value ="";
//    const ProductDescription = document.querySelector("#product_description").value ="";
//    const PriceCurrency = document.querySelector("#CurrencySelect").value ="sgd";
//    const ProductPrice = document.querySelector("#product_price").value ="";
//    const ProductImage1 = document.querySelector("#product_image1").files = null;
//    const ProductImage2 = document.querySelector("#product_image2").files = null;
//    //use null instead of "" since it is object type
//
//    document.querySelector("#prompt_producttext").style.display = "none";
//    document.querySelector(".custom-file-label").innerHTML = "Upload First Product Image";
//    document.querySelector("#fileList1").innerHTML = "";
//    document.querySelector("#fileList2").innerHTML = "";
//
//
//}


//Edited by Ray

const formList = [];

function validateForm() {

    const email = document.querySelector("#email").value; //get value of the email input and store in email variable
    formList.push(email); //push the value to formList empty array, store in local storage
    console.log(formList); 
    document.querySelector("#email").value = ""; //clear input field after submit successfully
    document.querySelector("#email_prompt").innerHTML = "Thanks for your subscription!"; //prompt message



}

/*
//Precella: JS for Subscribe on home page

const formList = [];  


function addForm() {

    console.log("in the function");

    const email = document.querySelector("#email").value;
    
}

    // Validate input in form
    function validateForm()  
    {  
        var x=document.homeSubscribeForm.email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  

        }  
        else
        {
        //Submit the form - add the form values to an array
        console.log("Form is submitted successfully.");
        addToList(item);
        }
    }

    function addToList(email) {
        const item = {
            email: email
        }
    
    //clear form after submitting
    formList.push(item);
    
      
    clearSubscribeForm();

    console.log(`Total Submission: ${formList.length}:`, formList);
    }
    
    function clearSubscribeForm() {
        document.querySelector("#email").value = "";
    };

    */