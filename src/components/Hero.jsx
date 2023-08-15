const HeroSection = () => {
    return(

     <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESREVE THE BEST</h1>
            <p> shoes can add a little something special to an outfit, no matter what you are wearing....</p>
          

            < div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
                </div>
            <div className="shoppping">
               
        <p>Also Available On</p>
       
            <div className="brand-icons">
                <img src="/images/amazon.png" />
        <img src="/images/flipkart.png"/>
        </div>
        </div>
        </div>
    <div className="hero-image">   
            <img src="/images/shoe_image.png"/>
           
            </div>
    
            
    </main>
    );
};

export default HeroSection;