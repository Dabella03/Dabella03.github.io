// import React, { Component } from 'react';
// import './bubble.css';
// import circle from './image/circle1.png';

// class Bubble extends Component {
//   componentDidMount() {
//     // Mengaktifkan animasi setelah 1 detik
//     setTimeout(() => {
//       document.querySelector('.gambar-animasi').classList.add('active');
//     }, 1000);
//   }

//   render() {
//     return (
//       <div className="container">
//         <img src={circle} className="gambar-animasi" />
//       </div>
//     );
//   }
// }

// export default Bubble;
import React, { Component } from 'react';
import './bubble.css'; // Buat file CSS untuk latar belakang dan animasi

class Bubble extends Component {
  render() {
    return (
      <div className="background-container">
        <div className="bubble"></div>
      </div>
    );
  }
}

export default Bubble;
