import React from 'react'
import * as reactBootstrap from 'react-bootstrap';
import './ticket.css'
export default function Ticket(props) {
    return (

        <div className="ticket">
            <div className="cardhead">
                <div className='head'>
                    <div className="title">{props.header}</div>
                    <div className="data">{props.data}</div>
                </div>
                <div style={{ backgroundColor: props.color }} className="icon">
                    <i className={props.icon}></i>
                </div>
            </div>
            <div className="cardFooter">
                <div className="footerIcon">
                    <div className="icon">
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>

                    <div className="plus">rising <span style={{color:"grey"}}>good stats</span></div>
                </div>
            </div>
        </div>
    )
}



/* 
<reactBootstrap.Card  style={{ width: '15rem',border:"1px solid #0E185F" }}>
                <reactBootstrap.Card.Header>Number of Reservations</reactBootstrap.Card.Header>
                <reactBootstrap.Card.Body>
                    <reactBootstrap.Card.Title style={{color:"#0E185F"}}>56</reactBootstrap.Card.Title>
                    <reactBootstrap.Card.Text>
                        
                    </reactBootstrap.Card.Text>
                </reactBootstrap.Card.Body>
            </reactBootstrap.Card>
*/