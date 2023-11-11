import {Image, Container, Button} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';

export default function Rental(){
    return(
        <>
        <Container className='text-center p-4'>
            <h1>Sewa Mobil/Private Charter</h1>
            <h4>Bingung cari sewa kendaraan yang aman dan terpercaya? Disini tempatnya!</h4>
            <p>Zikri Tour & Travel selalu menyediakan kendaraan yang prima dan bersih yang siap digunakan kapanpun untuk memenuhi kebutuhan Anda.</p>
            <p>Jenis Kendaraan yang Tersedia</p>
            <Container >
                <Row>
                    <Col md={6}>
                        <Image
                        src="/Avanza Pict.png"
                        className="d-inline-block w-75"
                        alt="Pins logo"/>
                    </Col>
                    <Col md={6} className='text-start'>
                        <h2>Rental Avanza</h2>
                        <p>Kapasitas 5-6 Orang dengan Biaya Sewa Sebesar Rp. 800.000,-</p>
                        <Button>Rental Sekarang</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image
                        src="/Innova Pict.png"
                        className="d-inline-block w-75"
                        alt="Pins logo"/>
                    </Col>
                    <Col md={6} className='text-start'>
                        <h2>Rental Innova</h2>
                        <p>Kapasitas 5-6 Orang dengan Biaya Sewa Sebesar Rp. 800.000,-</p>
                        <Button>Rental Sekarang</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image
                        src="/Hiace Pict.png"
                        className="d-inline-block w-75"
                        alt="Pins logo"/>
                    </Col>
                    <Col md={6} className='text-start'>
                        <h2>Rental Hiace</h2>
                        <p>Kapasitas 5-6 Orang dengan Biaya Sewa Sebesar Rp. 800.000,-</p>
                        <Button>Rental Sekarang</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}