import React from 'react'

const Propss = (props) => {
  return (
    <>
      <div id="backdiv">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>

       
          <div className="card poi">
            <img src={props.image} className="card7-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-name"> {props.name}</h5>
              <h5 className="card-title">{props.title} </h5>
              <p className="card-text">
                {props.para}
              </p>
              <center>
                <a href="#" className="btn btn-primary">
                  ADD TO WISH LIST 
                </a>  </center>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default Propss
