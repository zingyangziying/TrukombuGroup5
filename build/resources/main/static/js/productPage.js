//This JS for Miscellaneous things for Product Page

//1)Instantiate ProductController class
//2)addItem to your product instance
//3)displayItem on the product page
const product = new ProductController();

function loadData()
{
    product.displayItem();
}

loadData();



//Create an instance of ProductController Class
//Hardcode way to add product items into the product items using productController template
//"addItem(image, name, price, modalImageOne, modalImageTwo, modalDescription)" follow this format
//const product = new ProductController();
//product.addItem("../images/TRUKOMBU Grapefruit.png", "Grapefruit 300ml", "$7.90", "../images/TRUKOMBU Grapefruit.png", "../images/TRUKOMBU Grapefruit Label Resized.png", "This Grapefruit flavored Kombucha is light, citrus-y and ultra refreshing! It makes for a perfect beverage on a hot sunny day!");
//product.addItem("../images/TRUKOMBU Apple Ginger.png", "Apple Ginger 300ml", "$7.90", "../images/TRUKOMBU Apple Ginger.png", "../images/TRUKOMBU Apple Ginger Label Resized.png", "This Apple Ginger flavored Kombucha gives a faint apple flavor which comes with a kick thanks to the ginger!");
//product.addItem("../images/TRUKOMBU Carrot Apple.png", "Carrot Apple 300ml", "$7.90", "../images/TRUKOMBU Carrot Apple.png", "../images/TRUKOMBU Carrot Apple Label Resized.png", "If you are wondering if Carrot and Apple goes well together, it does! This is a Kombucha flavor that's slightly savory thanks to the Carrots!");
//product.addItem("../images/TRUKOMBU Lemon Lime.png", "Lemon Lime 300ml", "$7.90", "../images/TRUKOMBU Lemon Lime.png", "../images/TRUKOMBU Lemon Lime Label Resized.png", "Regardless of your ability to pull off a straight face after chewing on a Lemon, this Kombucha flavor is pleasantly citrus-y and greatly refreshing!");
//product.addItem("../images/TRUKOMBU Pear Almond.png", "Pear Almond 300ml", "$7.90", "../images/TRUKOMBU Pear Almond.png", "../images/TRUKOMBU Pear Almond Label Resized.png", "This Pear Almond flavored Kombucha combines two surprisingly compatible ingredients to give your tastebuds a light and delightful flavor!");
//product.addItem("../images/TRUKOMBU Blueberry Mint.png", "Blueberry Mint 300ml", "$7.90", "../images/TRUKOMBU Blueberry Mint.png", "../images/TRUKOMBU Blueberry Mint Label Resized.png", "This Blueberry Mint flavored Kombucha is a perfect balance of sweet berry and smooth mint!");
//product.displayItem();



//JS to ensure that the first image is always displayed in Modal Carousel, instead of last shown image when closed
$(".modal").on('show.bs.modal', function () {

    var firstItem = $(this).find(".carousel-item:first");
    if ( !firstItem.hasClass("active") ) 

    {
      $(this).find(".active").removeClass("active");
      firstItem.addClass("active");
    }

});



//JS for Back To Top Button
//Get the button:
mybutton = document.getElementById("backToTopButton");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//JS for Modal Quantity Counter
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}