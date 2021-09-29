package org.generation.TrukombuGroup5.service;

import org.generation.TrukombuGroup5.repository.entity.Product;
import java.util.List;

public interface ItemService {

    Product save( Product product );

    void delete( int itemId );

    List<Product> all();

    Product findById( int itemId );

}
