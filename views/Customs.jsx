const React = require('react')
class Custom extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="StyleSheet" href='/css/customs.css'></link>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"></link>
                </head>
                <body className="wallpaper">
                    <div className="test">
                        <h1>Custom Orders page</h1>
                        <form action="/api/v1/sweets/customs" method="POST">
                            Name: <br /> <input type="text" name="name" /><br />
                            Email: <br /> <input type="text" name="email" /><br />
                            Phone Number: <br /> <input type="text" name="phone_number" /><br />
                            Customize your order: <br /> <textarea id="w3review" placeholder="Rememinder that prices may vary depending on customizations to your order" name="w3review" rows="28" cols="100"></textarea><br />
                            <input type="submit" name="" value="Submit Order" />
                        </form>


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
module.exports = Custom