const React = require('react')
    class NEW extends React.Component{
        render() {
            return (
                <div>
                    <h1>New Items page</h1>
                    <form action="/api/v1/sweets/" method="POST">
                        Name: <br/> <input type="text" name="name" /><br/>
                        flavors: <br/> <input type="text" name="flavors" /><br/>
                        Image: <br/> <input type="text" name="image" /><br/>
                        Price: <br/> <input type="text" name="price"/><br/>
                        Stock: <br/> <input type="text" name="stock"/><br/>
                        <input type="submit" name="" value="Submit Order"/>
                     </form>
                     <nav>
     <a href="/api/v1/sweets/">Home Menu</a>
 </nav>
                </div>);
          }
    }
    module.exports = NEW