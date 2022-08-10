const React = require('react')
    class Show extends React.Component{
        render() {
            return (
                <html>
                <head>
                    <title>ChiChe's Homemade Sweets</title>
                </head>
                <body>
                    <h1>Cakes, Cupcakes, Cookies</h1>
                    <h3>What would you like to do?</h3>
                    <div>
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