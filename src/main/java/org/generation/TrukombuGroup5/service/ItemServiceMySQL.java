package org.generation.TrukombuGroup5.service;

import org.generation.TrukombuGroup5.repository.ItemRepository;
import org.generation.TrukombuGroup5.repository.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ItemServiceMySQL implements ItemService {

    private final ItemRepository itemRepository;

    public ItemServiceMySQL( @Autowired ItemRepository itemRepository ) { this.itemRepository = itemRepository; }

    @Override
    public Product save( Product product )
    {
        return itemRepository.save( product );
    }

    @Override
    public void delete( int itemId )
    {
        itemRepository.deleteById( itemId );
    }

    @Override
    public List<Product> all()
    {
        List<Product> result = new ArrayList<>();
        itemRepository.findAll().forEach( result::add );
        return result;
    }

    @Override
    public Product findById( int itemId )
    {
        Optional<Product> item = itemRepository.findById( itemId );
        Product productResponse = item.get();
        return productResponse;
    }

}
