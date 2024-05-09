
import { Link } from 'react-router-dom';
import './Home.css'
function Home(){
    return(
        <div className="BaseHome">
            <div className='Bg'>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <img src="bg1.jpg" class="d-block w-100" alt="..."/> 
    </div>
    <div class="carousel-item">
      <img src="bg2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="bg1.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            

            </div>
            <div className="Home1">
            <div className="H1-section">
              <Link to="/cera"> <img width="300" height="280"src="1 ceramc.jpg"  /> </Link>
            </div>
            <div className="H2-section">
                <img width="300" height="280"src="2protection.jpg" />
            </div>
            <div className="H3-section">
                <img width="300" height="280"src="3denting.jpg"/>
            </div>
            <div className="H4-section">
                <img width="300" height="280"src="4Detaling.jpg"/>
            </div> 
            </div>
            <div className="Home2">
            <div className="H5-section">
                <img width="300" height="280"src="5Wrap.jpg"/>
            </div>
            <div className="H6-section">
                <img width="300" height="280"src="6insurence.jpg"/>
            </div>
            <div className="H7-section">
                <img width="300" height="280"src="7modify interior.jpg"/>
            </div>
            <div className="H8-section">
                <img width="300" height="280"src="8other.jpg"/>
            </div>
            
            </div>
        </div>

    )

}
export default Home;