import React from "react";
// import Col, Button from "react-bootstrap";
// import /CardComponent.css;
// import(BsChevronRight } from 'react-icons/bs';


const CardComponent = (props) => {
    return (
        <React.Fragment>
            <div className="CardContainer" tabIndex="0">
                <div>
                    <span className="card-tile-header">{props.data.sumary}</span>
                    {props.data.issNew ? <span className="new-badge">New</span> : ""}
                </div>
                <div className="align-cantent">
                    <div className="status-data" data-cs-mask>
                        <div><span>Reason: </span>{props.data.sumary}</div>
                        <div><span>Relating to:</span>{props.data.relatingTo}</div>
                        <div><span>Account #: </span>{props.data.accountNumber}</div>
                        <div><span>Support Request: </span>{props.data.caseId}</div>
                        {props.type === "opened" ? <div>Request opened: {props.data.openedDate}</div>
                            : <div> Request closed: {props.data.closedDate}</div>}
                        <div><span>Status: </ span><span>{props.data.status}</span></div>

                        {/* <Button data-ticket={props.data.caseld} data-track className="arrow-btn-align" onClick={() => props.ctaclicked(props.data)} aria-label="click to view ticket details">
                            <BsChevronRight />
                        </Button> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CardComponent;
