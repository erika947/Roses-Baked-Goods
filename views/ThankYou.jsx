const React = require('react')

class ThankYou extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="StyleSheet" href='/css/thankyou.css'></link>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"></link>
                </head>
                <body className="wallpaper">
                    <div>
                        <div className="test">
                        <h1>Thank You for Your Order!</h1>
                        <h3 className="thankyou">We will reach out to you to speak more about details and pricing. <br/> Click the home menu to go back to the main page.</h3>
                        <nav>
                            <a className="link" href="/api/v1/sweets/">Home Menu</a>
                        </nav>

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
                    </div>
                </body>
            </html>
        )
    }
}
module.exports = ThankYou