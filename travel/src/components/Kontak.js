import { Card, Button, Container, CardBody, Row, Col } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";

export default function Kontak(){
    return(
        <Container className="text-center p-4">
            <h1>Prioritas kami</h1>
            <Container fluid className="my-4">
                <Row>
                    <Col md={4} className="p-2">
                        <Container>
                        <Card className="mx-3 p-3 bg-primary" style={{minHeight:'25rem'}}>
                            <CardBody>
                                <h2 className="text-warning">Aman</h2>
                                <h5 className="pt-4 fw-normal text-white">Anda tidak perlu risau soal kenyamanan karena Kami 
                                    memberikan pengalaman perjalanan yang terbaik dengan kendaraan yang bersih, 
                                    nyaman serta administrasi yang tentunya sudah lengkap</h5>
                            </CardBody>
                        </Card>
                        </Container>
                    </Col>
                    <Col md={4} className="p-2">
                    <Container>
                <Card className="mx-3 p-3 bg-primary" style={{minHeight:'25rem'}}>
                    <CardBody>
                        <h2 className="text-warning">Terpercaya</h2>
                        <h5 className="pt-4 fw-normal text-white">Kami bekerja secara profesional untuk memberikan 
                        layanan terbaik yang bisa memenuhi setiap kebutuhan Anda</h5>
                    </CardBody>
                </Card>
                </Container>
                </Col>
                <Col md={4} className="p-2">
                    <Container>
                <Card className="mx-3 p-3 bg-primary" style={{minHeight:'25rem'}}>
                    <CardBody>
                        <h2 className="text-warning">Terjangkau</h2>
                        <h5 className="pt-4 fw-normal text-white">Pergi jalan-jalan atau liburan jadi lebih mudah dan gak bikin kantung kering 
                        karena Kami selalu punya solusi untuk setiap kebutuhan Anda </h5>
                    </CardBody>
                </Card>
                </Container>
                </Col>
                </Row>
            </Container>
            <h4>Tunggu Apa Lagi? Nikmati Perjalanan Terbaik Bersama Zikri Tour & Travel.</h4>
            <p> Segera Hubungi Kontak Kami untuk Detail Lebih Lanjut</p>
            <Button className="" size="large"> <Whatsapp/> 0899-0001-9980</Button>
            
        </Container>
    )
}