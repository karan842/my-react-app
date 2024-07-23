import profilePic from './assets/duck.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile-picture" width="200" height="200"></img>
            <h2 className='card-title'>Karan Shingde</h2>
            <p className='card-text'>I am ML Engineer and lift weights</p>
        </div>
    )  
}

export default Card
  