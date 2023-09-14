import logo from './logo.svg';
import './App.css';
import './components/main.css';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import './components/mybutton.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
      />
        <h3>The Wedding of</h3>
        <h1>Yossi & Roffi</h1>
        <h3>20.11.23</h3>
        <Button variant="contained" startIcon={<MailIcon/>}
        className="custom-button">Open Invitation</Button>
        {/* <TwitterButton>Open Invitation</TwitterButton> */}
      </header>
      <main className='main'>
        <section className='main-section'>
          <h4>Bismillahirrahmanirrahim</h4>
          <h4>Assalamualaikum Warahmatullahi Wabarakatuh</h4>
          <p>Maha Suci Allah SWT, yang telah menciptakan makhluknya berpasang-pasangan
Ya Allah, kami memohon Ridho-Mu atas putra/putri kami</p>

          <h1>Muhammad Roffi</h1>
          <p>Anak dari bapak x dan ibu y</p>
          <h1>&</h1>
          <h1>Yossi Yudia Dwi Chandra, S. Pd.</h1>
          <p>Anak dari bapak x dan ibu y</p>
          <br/>
          <p>Akan dilaksanakan</p>
          <h2>Akad Nikah</h2>

          <p>Jatimulyo, Lampung Selatan</p>
        </section>
        
      </main>
      
    </div>
  );
}


export default App;
