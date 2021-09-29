package org.generation.TrukombuGroup5.repository;

import org.generation.TrukombuGroup5.repository.entity.Product;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring
// CRUD refers Create, Read, Update, Delete
public interface ItemRepository extends CrudRepository<Product, Integer>
{
}
