 const React = require('react')


class Index extends React.Component {
    render() {
      const {bakedGoods} = this.props
      return (
        <div>
          <h1>Cakes, Cupcakes, Cookies</h1>
             <ul>
                {bakedGoods.map((bakedGoods) => {return(
                   <li >                              
                      <a href={`/api/v1/sweets/${bakedGoods.id}`}>
                        {bakedGoods.name.charAt(0).toUpperCase() + bakedGoods.name.slice(1)}</a>

                        <form action={`/api/v1/sweets/${bakedGoods.id}?_method=DELETE`} method='POST'>
                            <button type = "submit">Delete</button></form> 
                        <a href={`/api/v1/sweets/${bakedGoods.id}/edit`}>Edit Items</a>                            
                      </li>
                           );
                      })}
                 </ul>
                 {/* lines10 to 22 wont appear on the web browser come back and check to see why */}
                 <nav>
     <a href="/api/v1/sweets/new">New Item</a>
 </nav>
              </div>
        );
      }
    }

    module.exports = Index;


//     class Index extends React.Component{
//         render() {
//             const {bakedGoods} = this.props
//             return (
//                 <html>
//                 <head>
//                     <title>ChiChe's Homemade Sweets</title>
//                 </head>
//                 <body>
//                     <div>
//                     <h1>Cakes, Cupcakes, Cookies</h1>
//                     <h3>What would you like to do?</h3>
//                     <div>
//                     <ul>
//                 {bakedGoods.map((bakedGoods) => {
//                     return(
//                         <li >                              
//                         <a href={`/api/v1/sweets/${bakedGoods.id}`}>
//                         {bakedGoods.name.charAt(0).toUpperCase() + bakedGoods.name.slice(1)}</a>
//                         <form action={`/api/v1/sweets/${bakedGoods.id}?_method=DELETE`} method='POST'><button type = "submit">Delete</button></form> 
//                         <a href={`/api/v1/sweets/${bakedGoods.id}/edit`}>Edit bakedGoods</a>                            
//                         </li>
//                            );
//                       })}
//                  </ul>
//                     </div>
//                     <nav>
//      <a href="/api/v1/sweets/new">New Item</a>
//  </nav>
//                     </div>
//                 </body>
//                 </html>
//             );
//         }
//     }
//     module.exports = Index