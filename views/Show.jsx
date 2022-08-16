const React = require('react')
    class Show extends React.Component{
        render() {
            const bakedGoods = this.props.bakedGoods
            let qty;
            let button;
            if(bakedGoods.stock == 0) {
                qty = "Out of Stock"
                button = null
            } else {
                qty = bakedGoods.stock 
                button = <form action={`/api/v1/sweets/${bakedGoods.id}?_method=PUT`} method="POST">
                 <input type="hidden" name="name" value={bakedGoods.name} />
                 <input type="hidden" name="flavors" value={bakedGoods.flavors}/>
                <input type="hidden" name="image" value={bakedGoods.image}/>
                <input type="hidden" name="price" value={bakedGoods.price}/>
                <input type="hidden" name="stock" value={bakedGoods.stock - 1}/>
                <input type="submit" name="" value="Add to Cart"/>
             </form>
            }

            return (
                <html>
                <head>
                    <title></title>
                    <link rel="StyleSheet" href='/css/index.css'></link>
                </head>
                <body className="wallpaper">
                <div className='test'>
                    <h1 className="heading">ChiChe's Homemade Sweets</h1>
                    <h3>What would you like to do?</h3>
                    <h2>{bakedGoods.name.charAt(0).toUpperCase() + bakedGoods.name.slice(1)}</h2>
                    <h2>Flavor: {bakedGoods.flavors}</h2>
                    <div>
                    <img src={bakedGoods.image}></img> 
                    <h2>Price: {bakedGoods.price}</h2>
                    <h2>Available: {qty}</h2>
                    {button}
                    
                    <nav>
     <a href="/api/v1/sweets/">Home Menu</a>
 </nav>
                    </div>
                </div>
                </body>
                </html>
            );
        }
    }
    module.exports = Show