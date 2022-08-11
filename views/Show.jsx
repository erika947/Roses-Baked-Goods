const React = require('react')
    class Show extends React.Component{
        render() {
            const bakedGoods = this.props.bakedGoods
            return (
                <html>
                <head>
                    <title>ChiChe's Homemade Sweets</title>
                </head>
                <body>
                    <h1>Cakes, Cupcakes, Cookies</h1>
                    <h3>What would you like to do?</h3>
                    <h2>{bakedGoods.name.charAt(0).toUpperCase() + bakedGoods.name.slice(1)}</h2>
                    <div>
                    <img src={bakedGoods.image}></img> 
                    <nav>
     <a href="/api/v1/sweets/">Home Menu</a>
 </nav>
                    </div>
                </body>
                </html>
            );
        }
    }
    module.exports = Show