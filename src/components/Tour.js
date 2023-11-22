import {Carousel, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {Whatsapp} from 'react-bootstrap-icons'

const StyledImage = styled.img`
  filter: brightness(50%);
`;

export default function Tour(){
    return(
        <>
            <Carousel>
                <Carousel.Item 
                // style={{height:"75vh"}}
                >
                    <StyledImage
                    src="/Bandung Pict.png"
                    className='img-fluid w-100'
                    
                    // height="40"
                    // className="d-inline-block align-top"
                    alt="Pins logo"
                    />
                    <div className="carousel-caption">
                    <h1>Tour Kota Bandung</h1>
                    <h3 className='fw-normal'>Nikmati Perjalanan Terbaik Menjelajahi Indahnya Kota Bandung Bersama Kami</h3>
                    <p>Segera Reservasi Perjalanan Anda Di Sini</p>
                    <Button className='btn rounded-5' size="lg">
                        <Whatsapp/>
                        Booking Sekarang</Button>
                </div>
                </Carousel.Item>
                <Carousel.Item 
                // style={{height:"75vh"}}
                >
                    <StyledImage
                    src="/Bandung Pict-1.png"
                    className='img-fluid w-100'
                    
                    // height="40"
                    // className="d-inline-block align-top"
                    alt="Pins logo"
                    />
                    <div className="carousel-caption">
                    <h1>Tour Kota Bandung</h1>
                    <h3 className='fw-normal'>Nikmati Perjalanan Terbaik Menjelajahi Indahnya Kota Bandung Bersama Kami</h3>
                    <p>Segera Reservasi Perjalanan Anda Di Sini</p>
                    <Button className='btn rounded-5' size="lg">
                        <Whatsapp/>
                        Booking Sekarang</Button>
                </div>
                </Carousel.Item>
                <Carousel.Item 
                // style={{height:"75vh"}}
                >
                    <StyledImage
                    src="/Bandung Pict-2.png"
                    className='img-fluid w-100'
                    
                    // height="40"
                    // className="d-inline-block align-top"
                    alt="Pins logo"
                    />
                    <div className="carousel-caption">
                    <h1>Tour Kota Bandung</h1>
                    <h3 className='fw-normal'>Nikmati Perjalanan Terbaik Menjelajahi Indahnya Kota Bandung Bersama Kami</h3>
                    <p>Segera Reservasi Perjalanan Anda Di Sini</p>
                    <Button className='btn rounded-5' size="lg">
                        <Whatsapp/>
                        Booking Sekarang</Button>
                </div>
                </Carousel.Item>
                <Carousel.Item 
                // style={{height:"75vh"}}
                >
                    <StyledImage
                    src="/Bandung Pict-3.png"
                    className='img-fluid w-100'
                    
                    // height="40"
                    // className="d-inline-block align-top"
                    alt="Pins logo"
                    />
                    <div className="carousel-caption">
                    <h1>Tour Kota Bandung</h1>
                    <h3 className='fw-normal'>Nikmati Perjalanan Terbaik Menjelajahi Indahnya Kota Bandung Bersama Kami</h3>
                    <p>Segera Reservasi Perjalanan Anda Di Sini</p>
                    <Button className='btn rounded-5' size="lg">
                        <Whatsapp/>
                        Booking Sekarang</Button>
                </div>
                </Carousel.Item>
                <Carousel.Item 
                // style={{height:"75vh"}}
                >
                    <StyledImage
                    src="/Bandung Pict-4.png"
                    className='img-fluid w-100'
                    
                    // height="40"
                    // className="d-inline-block align-top"
                    alt="Pins logo"
                    />
                    <div className="carousel-caption">
                    <h1>Tour Kota Bandung</h1>
                    <h3 className='fw-normal'>Nikmati Perjalanan Terbaik Menjelajahi Indahnya Kota Bandung Bersama Kami</h3>
                    <p>Segera Reservasi Perjalanan Anda Di Sini</p>
                    <Button className='btn rounded-5' size="lg">
                        <Whatsapp/>
                        Booking Sekarang</Button>
                </div>
                </Carousel.Item>
                <Carousel.Item 
                // style={{height:"75vh"}}
                >
                    <StyledImage
                    src="/Bandung Pict-5.png"
                    className='img-fluid w-100'
                    
                    // height="40"
                    // className="d-inline-block align-top"
                    alt="Pins logo"
                    />
                    <div className="carousel-caption">
                    <h1>Tour Kota Bandung</h1>
                    <h3 className='fw-normal'>Nikmati Perjalanan Terbaik Menjelajahi Indahnya Kota Bandung Bersama Kami</h3>
                    <p>Segera Reservasi Perjalanan Anda Di Sini</p>
                    <Button className='btn rounded-5' size="lg">
                        <Whatsapp/>
                        Booking Sekarang</Button>
                </div>
                </Carousel.Item>
                <Carousel.Item 
                // style={{height:"75vh"}}
                >
                    <StyledImage
                    src="/Bandung Pict-6.png"
                    className='img-fluid w-100'
                    
                    // height="40"
                    // className="d-inline-block align-top"
                    alt="Pins logo"
                    />
                    <div className="carousel-caption">
                    <h1>Tour Kota Bandung</h1>
                    <h3 className='fw-normal'>Nikmati Perjalanan Terbaik Menjelajahi Indahnya Kota Bandung Bersama Kami</h3>
                    <p>Segera Reservasi Perjalanan Anda Di Sini</p>
                    <Button className='btn rounded-5' size="lg">
                        <Whatsapp/>
                        Booking Sekarang</Button>
                </div>
                </Carousel.Item>
                
                {/* <Carousel.Caption>
                    <p>tes</p>
                </Carousel.Caption> */}
            </Carousel>
        </>
    )
}