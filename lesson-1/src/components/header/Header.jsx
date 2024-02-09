import React, { Component } from 'react'
import SEO from '../../assets/Rectangle 9.png'
import Phone from '../../assets/image 1.png'
import RED from '../../assets/image 5.png'
import RE from '../../assets/image 7.png'
import ded from '../../assets/image 8.png'
import de from '../../assets/image 9.png'



export default class Header extends Component {
  render(
    
  ) {const cardData=[
    {img:RE, title:'SEO Optimized', des:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',bg:'#404040'},
    {img:ded, title:'Responsive', des:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', bg:'#F74C55'},
    {img:de, title:'Cloud Services', des:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',bg:'#2D5F3B'}

  ]
    return (
      <div>
       
      
    <section class="asula ">
    <div class="container">
        <header class="tonyone">
            <div class="tin">
                <img src={SEO} alt="" />
                <p class="the">The Products </p>
                <p class="features">Features</p>
                <p class="contact">Contact</p>
                <p class="services">Services</p>
            </div>
        </header>
        <div class="inspire">
            <div class="text">
                <h1>Inspire your inspiration</h1>
                <h3>Simple to use for your app, products
                    showcase and your inspiration</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vitae eros eget tellus tristique bibendum. Donec
                    rutrum sed sem quis venenatis. Proin viverra risus a eros
                    volutpat tempor. In quis arcu et eros porta lobortis sit</p>
            </div>
            <div class="image">
               <img src={Phone} alt="" />
            </div>
        </div>
    </div>

</section>
<section class="there">
    <div class="only">
        <h1 class="are">
            There are only 3 colors, 10 digits
        </h1>
        <p class="texte">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of 
             Lorem Ipsum.</p>
            <img src={RED} alt="" />
            <div className="cards">
            {cardData.map(item=>{
          return(
           <div className='card'  key={item.title}>
          
           <div className='card-title'>
             <img src={item.img} alt="" />
             <h4>{item.title}</h4>
           
           </div>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
         </div>)

        })}
        </div>
             {/* <div className='cards'>
              <div className='card'>
                <div className='card-title'>
                  <img src={RE} alt="" />
                  <h4>SEO Optimized</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
              </div>
              <div className='card'>
                <div className='card-title'>
                  <img src={ded} alt="" />
                  <h4>SEO Optimized</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
              </div>
              <div className='card'>
                <div className='card-title'>
                  <img src={RE} alt="" />
                  <h4>SEO Optimized</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
              </div>

             </div> */}
             
    </div>
</section>







<div class="col">
    {/* <img src="footer.png" alt=""> */}
</div>
<section class="pos">
    <p class="akyry">If you any questions, please contact   +135 958745</p>
</section>
       
           
</div>
  
    )
  }
}
