package org.generation.TrukombuGroup5.repository.entity;

import org.generation.TrukombuGroup5.controller.dto.ItemDTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;
    private String name;
    private String description;
    private double price;
    private String imageUrl1;
    private String imageUrl2;

    public Product() {}

    public Product( ItemDTO itemDto )
    {
        this.name = itemDto.getName();
        this.description = itemDto.getDescription();
        this.price = itemDto.getPrice();
        this.imageUrl1 = itemDto.getImageUrl1();
        this.imageUrl2 = itemDto.getImageUrl2();
    }

    public Integer getId() { return productId; }

    public void setId( Integer id ) { this.productId = productId; }

    public String getName() { return name; }

    public void setName( String name ) { this.name = name; }

    public String getDescription() { return description; }

    public void setDescription( String description ) { this.description = description; }

    public double getPrice() { return price; }

    public void setPrice( double price ) { this.price = price; }

    public String getImageUrl1() { return "/productImages/" + imageUrl1; }

    public void setImageUrl1( String imageUrl1 ) { this.imageUrl1 = imageUrl1; }

    public String getImageUrl2() { return "/productImages/" + imageUrl2; }

    public void setImageUrl2( String imageUrl2 ) { this.imageUrl1 = imageUrl2; }

    @Override
    public String toString()
    {
        return "Item{" + "productId=" + productId + ", name='" + name + '\'' + ", description='" + description + '\'' + ", price='" + price + '\'' + ", imageUrl1='" + imageUrl1 + '\'' + ", imageUrl2='" + imageUrl2 + '}';
    }

}
