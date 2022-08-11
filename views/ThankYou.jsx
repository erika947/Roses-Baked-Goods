const React = require('react')

    class ThankYou extends React.Component{
        render() {
            return (
                <div>
                    <h1>Thank You for Your Order</h1>
                    <h3>We will reach out to you to speak more about detail and pricing</h3>
                     <nav>
     <a href="/api/v1/sweets/">Home Menu</a>
 </nav>
                </div>);
          }
    }
    module.exports = ThankYou