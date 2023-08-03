class shop {
  products ( name ,model,brand,cpu,price){
   this.name=name;
   this.model=model;
   this.brand=brand;
   this.cpu=cpu;
   this.price=price;
  }
    addToCart () {
        console.log(`${this.name}  added to your purchases ` )
        
    }

    removeFromCart(){
        console.log(`${this.name} removed from your purchases`)
    }
    
}
shop.addToCart()
shop.removeFromCart()
