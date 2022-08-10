const React = require('react')
    class NEW extends React.Component{
        render() {
            return (
                <div>
                    <h1>Custom Orders page</h1>
                    <form action="/api/v1/sweets/" method="POST">
                        Name: <br/> <input type="text" name="name" /><br/>
                        Email: <br/> <input type="text" name="email" /><br/>
                        Customize your Cake order: <br/> <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea><br/>
                        <input type="submit" name="" value="Submit Order"/>
                     </form>
                     <nav>
     <a href="/api/v1/sweets/">Home Menu</a>
 </nav>
                </div>);
          }
    }
    module.exports = NEW