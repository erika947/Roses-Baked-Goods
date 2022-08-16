const React = require('react');

class Edit extends React.Component {
  render() {
    const bakedGoods = this.props.bakedGoods
    return (
        <div>
            <h1>Edit ChiChe's Homemade Sweets page</h1>
            <form action={`/api/v1/sweets/${bakedGoods.id}?_method=PUT`} method="POST">
                Name: <br/> <input type="text" name="name" /><br/>
                Flavors: <br/> <input type="text" name="flavors" /> <br/>
                Image: <br/> <input type="text" name="image" /><br/>
                Price: <br/> <input type="text" name="price" /><br/>
                Stock: <br/> <input type="text" name="stock"/><br/>
                <input type="submit" name="" value="Edit Item"/>
             </form>
             <nav>
     <a href="/api/v1/sweets/">Home Menu</a>
 </nav>
        </div>);
  }
}

module.exports = Edit;