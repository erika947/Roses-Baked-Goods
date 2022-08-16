const React = require('react')


class Index extends React.Component {
  render() {
    const { bakedGoods } = this.props
    return (
      <html>
        <head>
          <title></title>
          <link rel="StyleSheet" href='/css/index.css'></link>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"></link>
        </head>
        <body className="wallpaper">
          <div>
            <div className='test'>
              <h1 className="heading">Welcome To ChiChe's Homemade Sweets</h1>
              <img className="logo" src="https://cdn.discordapp.com/attachments/901516146841358407/1008899357115944991/IMG_3803.png"></img>
              <p className="aboutme"> All natural...Wholesome...Freshly baked homemade sweets! <br/>Made to Order</p>
              
              <p className="aboutme" id="tab">Freshly home baked confections made from all natural, wholesome ingredients, with no artificial flavors, dyes or preservatives. Select from a variety of classical, signature and seasonal treats. ChiChe's Homemade Sweets is all about indulging your sweet tooth without feeling too guilty about it. Also available are our Gluten-free and Vegan options!</p>

              <ul className="listing">
                {bakedGoods.map((bakedGoods) => {
                  return (
                    <li >
                      <a className="link" href={`/api/v1/sweets/${bakedGoods.id}`}>
                        {bakedGoods.name.charAt(0).toUpperCase() + bakedGoods.name.slice(1)}</a>
                      <br />
                      <img className="picture" src={bakedGoods.image}></img>

                      <form className="link" action={`/api/v1/sweets/${bakedGoods.id}?_method=DELETE`} method='POST'>
                        <button className="link" type="submit">Delete</button></form>
                      <a className="link" href={`/api/v1/sweets/${bakedGoods.id}/edit`}>Edit Items</a>
                    </li>
                  );
                })}
              </ul>

              <h1> We Also Do Custom Cakes!</h1>
              <p className="customIntro">Come and look at our many different cakes that we have done to order in the past years.</p>

{/*Cakes Showcase: */}
              <div className="container">

                <div className="column">

                  <p className="nameplate">Nickelodeon Custom Cake</p>
                  <img className="cakes" src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/284346299_5030950750287032_6117057117197141364_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=fyy0aC1if2sAX9jQq70&_nc_ht=scontent-lga3-1.xx&oh=00_AT8q2B08g-M5k_kKAPs-PBZO6yU29GIjqbSVcahQdnBx4g&oe=62FF0D00'></img>
                </div>

                <div className="column">

                  <p className="nameplate">Tom and Jerry Custom Cake</p>
                  <img className="cakes" src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/284553392_5053774388004668_6325711150042795917_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4k_NkgLAupIAX-bVW82&_nc_ht=scontent-lga3-1.xx&oh=00_AT96oVM-Ex7VNa2L4A6H4TrPcHxzso0V_w7SGUwJVg3hOg&oe=62FF45A1'></img>
                </div>

                <div className="column">

                  <p className="nameplate">Jurassic Park Custom Cake</p>
                  <img className="cakes" src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/278198947_4907715295943912_3922143957989864673_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=PmOOOnGLOfoAX9oNqi_&_nc_ht=scontent-lga3-1.xx&oh=00_AT_iislxCzLQXRVLegRZjQQiCEML7Wiy7LAl2KcpmidEDA&oe=62FEAFD7'></img>
                </div>

                <div className="column">

                  <p className="nameplate">Macaron Custom Cake</p>
                  <img className="cakes" src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/277532756_4862988963749879_8203662708474052816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=X2QRc0bbZkkAX-rVymQ&_nc_ht=scontent-lga3-1.xx&oh=00_AT_e3m5bR8JiPpUHvK_WAJJn3UaMCkACg4KcsBHVsy8A3w&oe=63008EB7'></img>
                </div>

                <div className="column">

                  <p className="nameplate">Superman Cake</p>
                  <img className="cakes" src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/289605992_5100353083346798_995192270287285246_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=mNSvoIIdKTEAX9IHaxA&_nc_ht=scontent-lga3-1.xx&oh=00_AT8o734XxWvOORF8fcvW-RT8jXNI2gMyUwahXnqA8x6R2w&oe=62FFD8EB'></img>
                </div>

                <div className="column">

                  <p className="nameplate">Sushi Custom Cake</p>
                  <img className="cakes" src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/277106538_4875909362457839_8628181679296899134_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=vzg7K3IYXlgAX8wNExt&_nc_ht=scontent-lga3-1.xx&oh=00_AT8qT_MkWkeGrZXwNuUnZbIcLWSispOojOYJWcSo9AGo9w&oe=63000F05'></img>
                </div>

              </div>

<div>

  {/*Link to custom order page*/}
<p className='customlink'> Interested in getting your own customize cake? <br/> Click the link here to start your order<br/> <a className="link" href="/api/v1/sweets/customs">Start Customize Order!</a> 
</p>


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

              <nav>
                <a className="link" href="/api/v1/sweets/new">New Item</a>
              </nav>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;