import React from 'react';
import { Table } from 'reactstrap';

const Tablegrid = (props) => {
  return (

    <div className="container-fluid" style={{height:'200px', marginTop:'30px' }}>
      
          <div className="col" style={{textAlign: 'center', margin:'0 0 90px',  }}>
            Reasons why we're widely favored
          </div>
       
    <div className="container" style={{height:'200px', marginTop:'30px' }}>

          <div className="row">
          <div className="col">

            Atendimento Rápído <br/><br/>
            We care for your dental health with a great compassion & understanding so that you can have the best smile.

          </div>

          <div className="col"> 

            Experiência <br/><br/>
            We care for your dental health with a great compassion & understanding so that you can have the best smile.
          
          </div>

          <div className="col"> 

            Clientes Satisfeitos <br/><br/>
            We care for your dental health with a great compassion & understanding so that you can have the best smile.
          
          </div>
        </div>
      </div>
    
        </div>
     );
}

export default Tablegrid;