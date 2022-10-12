import React from 'react';
import CardComponent from './CardComponent/CardComponent';
// import(Tabs, Tab} from "react- bootstrap"s
// import/TicketsHomeNobile . css ';

// importupdatevzwAnalytics } from/./Global sResources'
// importTextlinkCaret fron evds /but tons" ;

const ticketsHomeLink = {
  fontsize: '14px',
  fontHeight: "bold",
  letterSpacing: '0.5px',
  marginBottom: '16px',
  margintop: "12px",
  padding: "0"
}
export const TicketsMobileView = ({ openRequests, closeRequests, ctaclicked }) => {

  let renderOpenReq = null;
  if (openRequests) {
    renderOpenReq = openRequests.map(
      (row) => <CardComponent data={row} type="opened" ctaclicked-={ctaclicked} />
      )
  }

  let rendercloseReq = null;
  if (closeRequests) {
    rendercloseReq = closeRequests.map(
      (row) => <CardComponent data={row} type="closed" ctaclicked={ctaclicked} />
    )
  }

  const onselectFunc = (key) => {
    // updateVzwAnalytics(key);
  }
  const handleVotBack = (e) => {
    e.preventDefault();
    let votTicketUrl = "";
    let votHref = window.location.href;
    let voturlmva = String(votHref).includes("mva");
    // wlet yoturlchatbot String(votHiref) . includes ("chatbot") ;

    // redirect url checking condition for ava and mvo
    if (voturlmva) {
      votTicketUrl = `https://${window.location.hostname}/digital/nsa/secure/ui/sdr?mtn=${window.mtn}`;
    }
    if (window.authToken && window.intent) {
      votTicketUrl += "&intent=" + window.intent + "&authToken=" + window.authToken + "&at=" + window.authToken
    }
    if (window.src && (window.src.toLowercase() === 'pos' || window.src.toLowercase() === 'ivr')) {
      votTicketUrl += "&src=" + window.src;
    }
    if (window.sourceChannelId) {
      votTicketUrl += "&sourceChannelId=" + window.sourceChannelId;
    }
    window.location.href = votTicketUrl;
  }
  //   else {
  //   votTicketUrl += "&sourceChannelId=" + window.sourceChannelId;
  // }

  const payload = {
    MTNS: [{ MTN: window.mtn || "" }],
    fn: window.fn || ""
  }
  let createsupportAPI = 'https://S{uindow. location. hostrame )/digital/nsa/secure/ui/sdr/createsupportticket'

  const form = document.createElement("form");
  form.style.visibility = "hidden"; // no user 1nteraction is necessary
  form.method = 'POST';  // forms by default use GET query strings
  // form.action = votTicketUrl;
  const input = document.createElement('input');
  input.type = 'hidden';
  // input.name - "payload";
  input.value = JSON.stringify(payload);
  form.appendChild(input); // add key / value pair to form
  // document.body.appendchild(form); //forms cannot be submitted outslde of bady
  console.log('redirect form URL:', form);
  form.submit();

  console.log("href Mobile, votticketUrl");

  return (
    <React.Fragment>
      <main className="ticketsonckirapper">
        <div>
          <div className="TicketsHome">
            TicketsHome Page
            {/* <Tabs id="ticketshomelNav" onselect={onselectFunc}> */}
              {/* <Tab defaultActivekey="tickets" eventKey="openReq" title="Open Requests" tabclassNane="TabHeader"> */}
                <h1 className="Heading">
                </h1>
                <p classname="Subteng">
                  Select a request to see the full request history.
                  {/* {window.mtn && window.fn &&
                    <TextLinkcaret
                      inverted={false}
                      style={ticketsHomeLink}
                      id="back"
                      disabled={false}
                      iconPosition="left"
                      onClick={handleVotBack}>
                      Send us a support request
                    </TextLinkcaret>} */}
                </p>
                {renderOpenReq}
              {/* </Tab> */}
              {/* <Tab eventkey="clos eReq" title="closed Requests" tabclassName="Tabtieader"> */}
                <h1 classNane="Headng">
                  Support Requests
                </h1>
                <p className="Subtieading">
                  Select a request to see the full request history
                </p>
                {rendercloseReq}
              {/* </Tab> */}
            {/* </Tabs> */}
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default TicketsMobileView;