import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"

      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={5}
            aria-label="Slide 6"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://dlcdnwebimgs.asus.com/gain/D18A0305-999F-47BA-B4FB-372293978F2C/fwebp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://dlcdnwebimgs.asus.com/gain/CC1A1C6D-5B76-4664-80FE-4F32B38A8105/fwebp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://dlcdnwebimgs.asus.com/gain/354DB9BE-21A6-42A2-AD4D-734C5A2E3D14/fwebp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://dlcdnwebimgs.asus.com/gain/6EAB07EA-D987-4309-A4E1-45BC53B2C5A9/fwebp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://dlcdnwebimgs.asus.com/gain/2303D8AD-05E0-4A63-88A3-7B52ED144D9C/fwebp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://dlcdnwebimgs.asus.com/gain/68093439-A901-458C-808A-AA00DC6BB22A/fwebp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product */}

      <div className='product'>
        <div className='heading'>
          <h1> <u>  EXPLORE OUR PRODUCTS </u></h1>
        </div>


        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center gap-4">
                <div className="card" style={{ width: '15 rem  ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/AE927DDC-E861-4B68-A569-F5381F483EFD/w240/h175" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title"> Laptop </h5>
                  </div>
                </div>


                <div className="card" style={{ width: '15 rem ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/C9A4CB77-E474-4489-AB86-B519FC47234E/w240/h175" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">External Graphic Docks</h5>
                  </div>
                </div>


                <div className="card" style={{ width: '15 rem ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/44F0B24D-67A0-4716-A88C-B8B621B0D1F7/w240/h175" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Monitor</h5>
                  </div>
                </div>

                <div className="card" style={{ width: '15 rem ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/A77B9915-4015-4F08-AFFB-42270536B824/w240/h175" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Phone</h5>
                  </div>
                </div>




              </div>
            </div>


            <div className="carousel-item">
              <div className="d-flex justify-content-center gap-4">
                <div className="card" style={{ width: '15 rem ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/FB3145A7-F4C6-493F-BF30-3137E3DFD470/w240/h175" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Cooling</h5>
                  </div>
                </div>

                <div className="card" style={{ width: '15 rem ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/8E7A4860-965C-424A-AC63-E228E0D0B391/w240/h175" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Network</h5>
                  </div>
                </div>

                <div className="card" style={{ width: '15 rem ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/DD0607BB-A52B-4947-81D4-6E90FFE609C1/w240/h175" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Power Supply Unit </h5>
                  </div>
                </div>

                <div className="card" style={{ width: '15 rem ' }}>
                  <img src="https://dlcdnwebimgs.asus.com/gain/070A915A-ED63-4C9E-B837-F6F1766E2863/w240/h175
                  " className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Headsets & Audio </h5>
                  </div>
                </div>


              </div>
            </div>


          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon black-carousel-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon black-carousel-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      {/* Recent */}


      <div className='recent'>
        <h1> <u>RECENT STORIES </u> </h1>

        <div className='image1'>
          <div className='image'>
            <img src='https://dlcdnrog.asus.com/rog/media/1747683801380.webp' />
            <p> The ROG Strix Ace XG248QSG gaming monitor puts...<br></br>
              Generations of ROG displays have fueled esports gamers’ need... </p>
          </div>
          <div className='image'>
            <img src='https://dlcdnrog.asus.com/rog/media/1747085247686.webp' />
            <p>32-inch glossy WOLED panels debut in the ROG Stri...<br></br>
              Get inky blacks in any environment, deft reflection handling... </p>
          </div>
          <div className='image'>
            <img src='https://dlcdnrog.asus.com/rog/media/1747134351579.webp' />
            <p>Brighten up your battlestation with new white ROG...<br></br>
              Whether you want frosty peripherals to stand out amongst...</p>
          </div>
        </div>
        <div className='image2'>
          <div className='image3'>
            <img src='https://dlcdnrog.asus.com/rog/media/1746054853639.webp'/>
            <p> The ROG Azoth X 75% wireless keyboard is here, designed for hardcore gamers and..<br></br>
              At ROG, we pride ourselves on catering to hardcore PC gamers who like to mod their peripherals. That's why </p>
          </div>
          <div className='image3'>
            <img src='https://dlcdnrog.asus.com/rog/media/1745638333821.webp' />
            <p>ROG and DOOM: The Dark Ages collide in the ROG Astral GeForce RTX 5080 OC DOO..<br></br>
              Bold gaming performance meets the iconic style of the DOOM Slayer in the form of one unconquerable gr</p>
          </div>
        </div>
        <div
          className='learn'>
          <Link to="/Products">
            <center> <button> LEARN MORE</button> </center>
          </Link>
        </div>


      </div>

      <div className='rog'>
        <h2> <u> ROG IN ACTION </u></h2>
      </div>
      <div className='one1'>
        <div className='first'>
          <img src='https://dlcdnrog.asus.com/rog/media/1745898220713.webp' />
          <h4>GEMING</h4>
          <p>The best laptop-friendly PC games you can play without any...<br></br>
            If you want to game on the go without dragging a mouse or..<br></br> </p>
        </div>
        <div className='first'>
          <img src='https://dlcdnrog.asus.com/rog/media/1745373310794.webp' />
          <h4> GEMING</h4>
          <p>Like a Dragon: Pirate Yakuza in Hawaii is absurdist gaming...<br></br>
            Like a Dragon games are playable versions of weird stories...<br></br></p>
        </div>
        <div className='first'>
          <img src='https://dlcdnrog.asus.com/rog/media/1745358255315.webp' />
          <h4> GUIDES</h4>
          <p>Reintegrated: An ROG stylebook for today's competitive corp...<br></br>
            Working in a corporate office doesn't necessarily mean that...<br></br> </p>
        </div>
      </div>
      <div className='more'>
        <button> Learn More</button>
      </div>


      <div className='last'>
        <img src='https://dlcdnwebimgs.asus.com/gain/FDFFE426-0A29-40D5-8E26-C838EB26CA8F' />
        <div className='posi'>
          <h3> THE ART OF THE ROG UNIVERSE</h3>
          <p>Technology never sleeps, nor should the action. For those keen on winning power<br></br>
            the Republic of Gamers awaits. Driven by relentless innovation, ROG is committed to<br></br>
            producing out-of-this-world experiences for gamers and enthusiasts everywhere. </p>
        </div>
      </div>











    </>
  )
}

export default Home
