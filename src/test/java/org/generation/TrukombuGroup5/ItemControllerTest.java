//package org.generation.TrukombuGroup5;
//
//
//import org.generation.TrukombuGroup5.controller.*;
//import org.generation.TrukombuGroup5.service.*;
//import org.junit.jupiter.api.*;
//import org.mockito.Mockito;
//import org.springframework.boot.test.context.*;
//
//@SpringBootTest
//@TestInstance( TestInstance.Lifecycle.PER_CLASS)
//public class ItemControllerTest {
//
//    //Test 3 methods from ItemController.
//    //ItemController has a dependency on ItemService
//    //Mock the ItemService to verify against the ItemController
//
//    ItemService itemService;
//    ItemController itemController;
//
//    @BeforeAll
//    public void setup()
//    {
//        itemService = Mockito.mock(ItemService.class);
//        itemController = new ItemController(itemService);
//    }
//
//    @Test
//    public void listItemService()
//    {
//        //to test getItems() method against the dependency method(itemService)
//
//        //every test needs to reset. if not, it will not "refresh" the implementation of the mock
//        Mockito.reset(itemService);
//        itemController.getItems();
//        Mockito.verify(itemService).all();
//    }
//
//    @Test
//    public void findItemService()
//    {
//        Mockito.reset(itemService);
//        int id = 3;
//        itemController.findItemById(id);
//        Mockito.verify(itemService).findById(id);
//    }
//
//    @Test
//    public void deleteItemService()
//    {
//        Mockito.reset(itemService);
//        int id = 6;
//        itemController.delete(id);
//        Mockito.verify(itemService).delete(id);
//    }
//
//}
