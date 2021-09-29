package org.generation.TrukombuGroup5.controller.dto;

public class ItemDTO {

    private String name;
    private String description;
    private double price;
    private String imageUrl1;
    private String imageUrl2;

    public ItemDTO( String name, String description, double price, String imageUrl1, String imageUrl2 )
    {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl1 = imageUrl1;
        this.imageUrl2 = imageUrl2;
    }

    public String getName() { return name; }

    public void setName( String name ) { this.name = name; }

    public String getDescription() { return description; }

    public void setDescription( String description ) { this.description = description; }

    public double getPrice() { return price; }

    public void setPrice( double price ) { this.price = price; }

    public String getImageUrl1() { return imageUrl1; }

    public void setImageUrl1( String imageUrl1 ) { this.imageUrl1 = imageUrl1; }

    public String getImageUrl2() { return imageUrl2; }

    public void setImageUrl2( String imageUrl2 ) { this.imageUrl1 = imageUrl2; }

}
