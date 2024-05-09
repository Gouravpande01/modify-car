import Login from './log-in';
import './header.css'
function header(){
    return(
        <div className="head">
            
                <div className='gorv'>
                    <Login/>
                    <div className='my'>
                     <p>Send Enquiry</p></div>
                    <div>
                    <img src="download-removebg-preview.png"/> 
                    </div>
                    
                    <div className='Rohit'>
                    <label>Our services </label>
                    <select > 
                        <option>car Detailing & cleaning</option>
                        <option>Denting & Painting</option>
                        <option>Paint Protection Films</option>
                        <option>Ceramic & Graphene Coatings</option>
                        <option>Wrap Jobs</option>
                        <option>Insurance Claim</option>
                        <option>Interior Modification</option>
                    </select> 
                    </div>



                </div>
            </div>
        
    )
}
export default header;