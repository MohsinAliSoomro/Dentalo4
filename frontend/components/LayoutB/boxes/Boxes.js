import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/Link'
import styles from './boxes.module.css'


const Boxes = (props) => {
  return (
    <div className="wrapper container-fluid" style={{marginTop: '60px', display:'grid', gridGap: '0', justifyItems:'center', width:'1200px'}}>
    <Row>
      <Col >
      <CardImg style={{ width:'350px', height:'300px', }} src="/static/images/1.png" />
        <Card style={{ display:'absolute', zIndex:'2', width:'350px', height:'190px', transform:'translateY(-50px)',
        opacity:'0.7', textAlign:'center', }} body>
          <Link href='/'>
          <CardTitle style={{cursor:'pointer', transform:'translateY(-10px)' }}><strong>Artigos</strong>
          <hr className="hr" /></CardTitle>
          </Link>

          <CardText >Confira nosso blog com artigos interessantes sobre radiologia
          odontológica.</CardText>
        </Card>
      </Col>
      <Col >
        <CardImg style={{ width:'350px', height:'300px', }} src="/static/images/1.png" />
        <Card style={{ display:'absolute', zIndex:'2', width:'350px', height:'190px', transform:'translateY(-50px)',
        opacity:'0.7', textAlign:'center'}} body>
          <CardTitle style={{cursor:'pointer', transform:'translateY(-10px)' }}><strong>Classificados</strong><hr/></CardTitle>
          <CardText style={{paddingBottom: '40px'}}>Na seção de aparelhos usados você encontrará as melhores ofertas disponíveis.</CardText>
        </Card>
      </Col>

      <Col >
        <CardImg style={{ width:'350px', height:'300px', }}src="/static/images/2.png" />
        <Card style={{ display:'absolute', zIndex:'2', width:'350px', height:'190px', transform:'translateY(-50px)',
        opacity:'0.7', textAlign:'center'}} body>          
          <CardTitle style={{cursor:'pointer', transform:'translateY(-10px)'}}><strong>Serviços</strong><hr/></CardTitle>
          <CardText style={{paddingBottom: '40px'}}>Estamos prontos para lhe atender o mais breve possível. Teste nossos serviços.</CardText>
        </Card>
      </Col>
  </Row>
  </div>
  );
};

export default Boxes;