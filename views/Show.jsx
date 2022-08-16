const React = require('react')
class Show extends React.Component {
    render() {
        const bakedGoods = this.props.bakedGoods
        let qty;
        let button;
        if (bakedGoods.stock == 0) {
            qty = "Out of Stock"
            button = null
        } else {
            qty = bakedGoods.stock
            button = <form action={`/api/v1/sweets/${bakedGoods.id}?_method=PUT`} method="POST">
                <input type="hidden" name="name" value={bakedGoods.name} />
                <input type="hidden" name="flavors" value={bakedGoods.flavors} />
                <input type="hidden" name="image" value={bakedGoods.image} />
                <input type="hidden" name="price" value={bakedGoods.price} />
                <input type="hidden" name="stock" value={bakedGoods.stock - 1} />
                <input type="submit" name="" value="Add to Cart" />
            </form>
        }

        return (
            <html>
                <head>
                    <title></title>
                    <link rel="StyleSheet" href='/css/show.css'></link>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"></link>
                </head>
                <body className="wallpaper">
                    <div className='test'>
                        <h1 className="heading">ChiChe's Homemade Sweets</h1>
                        <img className="logo" src="https://cdn.discordapp.com/attachments/901516146841358407/1008899357115944991/IMG_3803.png"></img>

                        <div className="nameplate">
                            <h2 className="">{bakedGoods.name.charAt(0).toUpperCase() + bakedGoods.name.slice(1)}</h2>
                            <h2 className="">Flavor: {bakedGoods.flavors}</h2>
                            <div>
                                <img className="picture" src={bakedGoods.image}></img>
                                <h2 className="">Price: {bakedGoods.price}</h2>
                                <h2 className="">Available: {qty}</h2>
                            </div>
                            {button}
                        </div>

                        {/* Social links:*/}

                        <div className="social">
                            <button className="icon-btn facebook">
                                <a className="links" href="https://www.facebook.com/chicheshomemadesweets/" target="_blank">
                                    <i className="fa fa-facebook"></i>
                                </a></button>

                            <button className="icon-btn instagram">
                                <a className="links" href="https://www.instagram.com/chicheshomemadesweets/?hl=en/" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </a></button>

                        </div>

                        <nav>
                            <a className="link" href="/api/v1/sweets/">Home Menu</a>
                        </nav>
                    </div>
                </body>
            </html>
        );
    }
}
module.exports = Show