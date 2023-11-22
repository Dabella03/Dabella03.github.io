import {ListGroup, Container, Button} from 'react-bootstrap';
import image from "../images/Airport.png";

export default function Travel(){
    return(
        <>
        <div className=' pt-5'>
            <div className='text-white p-5'
            style={{backgroundImage:`url(${image}`}}>
                <Container className='p-4 text-center'>
                    <h1>Travel Bandung - Bandara Jakarta</h1>
                    {/* <p>City Tour, Travel Bandung-Bandara & Rent Car</p> */}
                </Container>
            </div>
            <Container>
                <h3>Nikmati layanan Travel Bandara yang aman dan nyaman dengan pilihan rute:</h3>
                <ListGroup as="ul">
                    <ListGroup.Item as="li">Bandung - Bandara Soekarno Hatta (Soetta)</ListGroup.Item>
                    <ListGroup.Item as="li">Bandung - Bandara Halim Perdana Kusuma</ListGroup.Item>
                    <ListGroup.Item as="li">Bandara Soekarno Hatta - Bandung</ListGroup.Item>
                    <ListGroup.Item as="li">Bandara Halim Perdana Kusuma - Bandung</ListGroup.Item>
                </ListGroup>
                <Container>
                    <p>Kenyamanan dan Keamanan Penumpang adalah Prioritas Kami, sehingga Kami Menyediakan Transportasi Terbaik untuk Mengantarkan Anda Sampai Tujuan. </p>
                </Container>
                <Container>
                    <p>Hubungi Kami untuk Informasi lebih lanjut</p>
                    <Button>Hubungi Kami</Button>
                </Container>
            </Container>
        </div>
        </>
    )
}