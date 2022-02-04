import {Container, Row, Col, Card, CardImg} from 'react-bootstrap';
import { SiLichess } from "react-icons/si";
import {FaPhoneAlt} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import roberto from './assets/nobg-ledo-3.png';
import './Home.scss'

const Home = () => {
   return (
      <Container fluid className='container-home'>
         <Row>
            <Col lg="6">
              <img src={roberto} alt="roberto gomez" className='author'/>
            </Col>
            <Col lg="6" className='header-info'>
               <h1>Classes Magistrales <SiLichess size={36}/></h1> 
               
               <h4>Para todos los niveles</h4>
               <h4>Conozca los secretos de la escuela Cubana de Ajedrez</h4>
               <h1 className='name'><strong>IM</strong> Roberto Carlos Gomez Ledo</h1>
               <p className='results'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit tenetur molestias iste ullam minima cupiditate repellat placeat obcaecati quo. Laboriosam in temporibus cum eaque similique? Natus obcaecati consectetur laboriosam explicabo illum. Cumque, voluptatem consequuntur quaerat, laborum explicabo sequi atque odio, fuga illo culpa odit! Dolor nostrum repudiandae voluptas animi cupiditate?</p>
               <p className='phone'> <FaPhoneAlt size={26} /> +34 600 836 909</p>
               <p className='email'> <HiOutlineMail size={30} /> rcgledo@gmail.com</p>
            </Col>
         </Row>
      
      </Container> 
   )
   
};

export default Home;
