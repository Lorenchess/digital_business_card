import {Container, Row, Col} from 'react-bootstrap';
import roberto from './assets/nobg-ledo-2.png';
import './Home.scss'

const Home = () => {
   return (
      <Container>
         <Row>
            <Col lg="6">
               
            </Col>
            <Col lg="6">
              <img src={roberto} alt="roberto gomez" className='author'/>
            </Col>
         </Row>
      
      </Container> 
   )
   
};

export default Home;
