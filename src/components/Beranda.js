import {Container} from 'react-bootstrap';
import image from "../images/Intro.png";

export default function Beranda(){
    return(
        <div>
            <div className=' pt-5'>
            <div className='text-white p-5'
            style={{backgroundImage:`url(${image}`}}>
                <Container className='p-4 text-center'>
                    <h1>Zikri Tour & Travel</h1>
                    <p>City Tour, Travel Bandung-Bandara & Rent Car</p>
                </Container>
            </div>
        </div>
            <Container className='text-center p-5 my-5'>
                <h2 className='text-primary'>Selamat Datang di Zikri Tour & Travel</h2>
                <h5 className='mx-5 fw-normal'>Penyedia Layanan Terpercaya yang Melayani Jasa Travel Bandara Bandung-Jakarta, Tur Kota Bandung dan Rental Mobil</h5>
            </Container>
        </div>
    )
}