package org.generation.TrukombuGroup5.controller;

import org.generation.TrukombuGroup5.component.FileUploadUtil;
import org.generation.TrukombuGroup5.controller.dto.ItemDTO;
import org.generation.TrukombuGroup5.repository.entity.Product;
import org.generation.TrukombuGroup5.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/item")
public class ItemController {

    final ItemService itemService;

    @Value("${image.folder}")
    private String imageFolder;

    //Autowired will implicitly inject the ItemService as a dependency to ItemController so that we can call the methods in the ItemService
    public ItemController( @Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }

    //GetMapping is the route that corresponds to the HTTP GET method calls from the client
    //Cross-origin resource sharing (CORS)
    @CrossOrigin
    @GetMapping( "/all" )
    public Iterable<Product> getItems()
    {
        return itemService.all();
    }

    @CrossOrigin
    @GetMapping( "/{id}" )
    public Product findItemById( @PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

    @CrossOrigin
    @PostMapping("/add")
    public Product save(  @RequestParam(name="name", required = true) String name,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="price", required = true) double price,
                       @RequestParam(name="imageUrl1", required = true) String imageUrl1,
                       @RequestParam(name="imageUrl2", required = true) String imageUrl2,
                       @RequestParam("imagefile1") MultipartFile multipartFile1,
                       @RequestParam("imagefile2") MultipartFile multipartFile2) throws IOException {

        //imageUrl = images/T-Shirt5.png (String)
        //String uploadDir1 = "productImages/images";
        String fileName1 = StringUtils.cleanPath(multipartFile1.getOriginalFilename());
        FileUploadUtil.saveFile1(imageFolder, fileName1, multipartFile1);

        String fileName2 = StringUtils.cleanPath(multipartFile2.getOriginalFilename());
        FileUploadUtil.saveFile2(imageFolder, fileName2, multipartFile2);

        ItemDTO itemDto = new ItemDTO(name, description, price, imageUrl1, imageUrl2);
        return itemService.save(new Product(itemDto));
    }

}
