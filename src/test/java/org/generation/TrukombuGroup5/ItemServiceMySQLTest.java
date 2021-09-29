//package org.generation.TrukombuGroup5;
//
//
//import org.generation.TrukombuGroup5.repository.*;
//import org.generation.TrukombuGroup5.repository.entity.Product;
//import org.generation.TrukombuGroup5.service.*;
//import org.junit.jupiter.api.*;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.boot.test.context.*;
//
//@SpringBootTest
//@TestInstance(TestInstance.Lifecycle.PER_CLASS)
////enables us to ask JUnit to create only one instance of the test class and reuse it between tests.
//public class ItemServiceMySQLTest {
//
//    //Mocking is done when you invoke methods of a class that has external communication e.g. database or rest calls
//    @Mock
//    ItemRepository itemRepository;
//
//    ItemService itemService;
//    Product itemMock;
//
//    @BeforeAll
//    public void setup()
//    {
//        itemService = new ItemServiceMySQL(itemRepository);
//        itemMock = Mockito.mock(Product.class);
//    }
//
//    @Test
//    public void saveCallsItemsRepositorySave()
//    {
//        Mockito.reset(itemRepository);
//        itemService.save(itemMock);
//        Mockito.verify(itemRepository).save(itemMock);
//    }
//
//}
