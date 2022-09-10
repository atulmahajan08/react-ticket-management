import React from 'react'
import TicketsMobileView from './ticketsmobileview/TicketsMobileView';

// import container, Row, Col, Button from "react-bootstrap";
// 1e trom react-device -detect
// import { BsChevronRight } from 'react-icons/bs";
// import abiecomponent from /tableComponent/Tablecomponent;
// nport JsonData SuppontreuestckJsans
// Lnport Loader fron ./shared/components/Loader/ Loader";
// port oader tromvds/ loaders/dist/cjs/components /Loader";
// import
// utility fro
// import httpCl fent, { postHttpclientRequest ) from"/.. /common/httpCl ient",
// AASEUR populatel agAttributes, updateAnalyticsPageView from
// port cketsHomeob1le froa./ticketsHoneHlobile/TicketsHomewobile's
// import ( TextLinkCaret } from gvds/buttons';


let pageData = [];
let closedCasesArr = [];
let openCasesArr = [];
// jsonData;

const ticketsHomeLLnk = {
  fontSize: '10px',
  marginBattom: '56px'
}

const API = API_BASE_URL + 'GEt';
const validateString = (str) => str ? str.toString().trim() : "";

export default class SupportTickets extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      closedTicketDsta: [],
      currentlyOpenData: [],
      expandedCurrentTickets: true,
      expandedClosedTickets: true,
      openCurrentTicket: true,
      openClosedTicket: true,
      manageTicketData: [],
      error: false,
      caseId: '',
      isFetching: true
    }
  }
  componentDidnount() {
    window.scrollTo(0, 0);
    // utility.loadutagscript():
    // logClickStream ("PAGE- LOADED", "PAGE-LOADED", "PAGE - LOADED", "ticket shome")
    // populateTagattributes("all support requests");
    // opdateAnalyticsPagevie();
  }
  componentDidMount() {
    let accNumval = "";
    if ((window.tokenDetails) != null) {
      Object.keys(window.tokenDetalls).map((key, i) => {
        let temp = window.tokenDetails[key];
        this.setState({ [key]: temp })
        return (temp)
      })
    }
    if ((window.requestPayload) != null) {
      Object.keys(window.requestPayload).map((res, i) => {
        let caseIds = window.requestPayload[res];
        if (res === "accountNumber") {
          accNumval = caseIds;
        }
        return (caseIds);
      })
    }

    let endPoint = API;
    if (window.authToken && window.intent) {
      endPoint += "?intent=" + validateString(window.intent) + "&authfoken=" + validateString(window.authToken)
    }

    let bodyOne = JSON.stringify({
      "accountNumber": accNumVal,
      "intent": window.callReason ? window.callReason : ""
    });
    if (window.src) {
      bodyOne.src = window.src ? window.src : "";
    }
    let axConfig = {
      headers: {
        "Content-Type": "application/json",
        "channelId": "utility.getChannelId()",
        "cache": "no-cache",
        "pageNane": "all support requests",
        "flowName": "ticketshome"
      }
    }
    postHttpClientRequest(endPoint, bodyOne, axConfig).then(
      (response) => {
        pageData = response.data || {};
        const { body = {} } = pageData;
        const { managedResolutionDetalls = {}, apiResponse = {} } = body;
        const { statusDesc = '' } = apiResponse;
        const { openCases = [], closedCases = [] } = managedResolutionDetalls;
        if (statusDesc == "SUCCESS") {
          openCasesArr = [];
          let iterateVal = 0;
          openCases.length > 0 && openCases.map(item => {
            iterateVal < 4 ? openCasesArr.push(item) : "";
            iterateVal++
          })
          closedCasesArr = [];
          let iteratevalClosed = 0;
          closedCases.length > 0 && closedCases.map(item => {
            iterateValClosed < 4 ? closedCasesArr.push(item) : "";
            iteratevalclosed++
          })
          this.setState({
            currentlyOpenData: openCasesArr.length === 0 ? [{
              "caseld": "",
              "lastUpdatedDate": "",
              "summary": "",
              "status": "",
              "lines": "",
              "openedDate": "",
              "isNew": "",
            }] : openCasesArr,
            closedTicketData: closedCasesArr.length === 0 ? [{
              "caseld": "",
              "closedDate": "",
              "summary": "",
              "status": "",
              "lines": "",
              "openedDate": "",
              "isNew": ""
            }] : closedCasesArr,
            isFetching: false
          })
        } else {
          this.setState({
            error: true,
            isFetching: false
          })
        }
        return (response);
      })

    showMoreOpenTickets = () => {
      const { body = {} } = pageData;
      const { managedResolutionDetails = {} } = body;
      const { openCases = {} } = managedResolutionDetails
      this.setstate({
        currentlyOpenData: openCases,
        expandedCurrentTickets: false
      })
    }

    showMoreCloseTickets = () => {
      const { body = {} } = pageData;
      const { managedResolutionDetails = {} } = body;
      const { closeCases = {} } = managedResolutionDetails
      this.setstate({
        closedTicketData: closeCases,
        expandedClosedTickets: false
      });
    }


    mininizeOpenTickets = () => {
      this.setState({
        CurrentlyOpenData: openCasesArr,
        expandedCurrentTickets: true
      });
    }

    mininizeClosedTickets = () => {
      this.setState({
        closedTicketData: closedCasesArr,
        expandedClosedTickets: true
      });
    }

    function handleView(row) {
      let supportTicket = row.caseId;
      let manageTicketurl = "";
      let manageHref = window.location.href;
      let managetUrlmva = String(manageHref).includes("mva");
      let manageturlchatbot = String(manageHref).includes("chatbot");
      let callReasonval = "";

      if (rowSummary.includes("mdnChange") || rowSummary.includes("mdn change")) {
        callReasonval = "MDNChange"
      }
      else if (rowSummary.includes("folllowup") || rowSummary.includes("follow up")) {
        callReasonval = "Followup"
      }
      else if (rowSummary.includes("followout") || rowSummary.includes("follow out")) {
        callReasonval = "FollowOut"
      }
      else if (rowSummary.includes("device repair") || rowSummary.includes("device repair")) {
        callReasonval = "DeviceRepair"
      }
    }

    if (managetUrlmva) {
      manageTicketurl = `https://${window.location.hostname}/...`
    }
  }

  handleVotBack = (e) => {
    e.preventDefault();
    if (window.votFlag === 'N') {
      this.handleNonVotBack();
      return
    }

    let votTicketUrl = "";
    let votHref = window.location.href;
    let voturlmva = String(votHref).includes("mva");

    // redirect url checking condition for ava and mvo
    if (voturlmva) {
      votTicketUrl = `https://${window.location.hostname}/digital/nsa/secure/ui/sdr?mtn=${window.mtn}`;

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
    else {
      votTicketUrl += "&sourceChannelId=" + window.sourceChannelId;

      const payload = {
        MTNS: [{ MTN: window.mtn || "" }],
        fn: window.fn || ""
      }
      let createsupportAPI = `https://${window.location.hostrame}/digital/nsa/secure`;

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
    }
  }
  getItemFromSession = (key) => {
    return sessionStorage.getItem(key) || "";
  }

  handlelNonVotBack = () => {
    const { lines = "" } = window;
    const reqpayload = {
      MTNS: lines.split(",").map((el) => ({ MTN: el })) || [],
      device: this.getItemFromSession("device"),
      caseId: this.getItemFromSession("caseId"),
      relatingTo: this.getItemFromSession("relatingTo"),
      callReason: this.getItemFromSession("call Reason"),
      firstName: this.getItemFromSession("firstName"),
      reasonCode: this.getItemFromSession("reasonCode"),
      failureReason: this.getItemFromSession("failureReason"),
      reasonDescription: this.getItemFromSession("reasonDes criptiori"),
      latitude: this.getItemFromSession("latitude"),
      longitude: this.getItemFromSession("longitude")
    }

    let newVotURI = 'https://S{uindow. location. hostrame )/digital/nsa/secure/ui/sdr/createsupportticket';

    const form = document.createElement("form");
    form.style.visibility = "hidden"; // no user 1nteraction is necessary
    form.method = 'POST';  // forms by default use GET query strings
    // form.action = votTicketUrl;
    const input = document.createElement('input');
    input.type = 'hidden';
    // input.name - "payload";
    input.value = JSON.stringify(reqPayload);
    form.appendChild(input); // add key / value pair to form
    // document.body.appendchild(form); //forms cannot be submitted outslde of bady
    console.log('redirect form URL:', form);
    form.submit();
  }

  render() {
    utility. loadutagseript () ;
    document.body.classList.add("support Requests ");
    if(!this.state.isFetching && !this.state. error) {
      let openNewRequest = "";
      if(window.location.hostname.indexOf("das") > -1) {
        openNewRequest = "http://" + window.location.hostname + "ui/hub"
      } else {
        openNewRequest = "http://" + window.location.hostname + "ui/hub"
      }
      
      const { body = {} } = pageData;
      const { managedResolutionDetails = {} } = body;
      const { closedCases = [], openCases = []} = managedResolutionDetails;
      const openCasesData = openCases.length > 0 && openCases;
      const closeCasesData = closedCases.length > 0 && openCases;
      
      return (
        <div>
          {!openCasesData.length ? <div>No Records to display</div> : ""}
          <TicketsMobileView openRequests={pageData.body.managedResolutionDetails.openCases} closeRequests={pageData.body.managedResolutionDetails.closedCases} ctaClicked ={(caseId)=> this.handleView(caseId)} />
        </div>
      )
    }
  }
  
}