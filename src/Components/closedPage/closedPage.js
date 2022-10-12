import React from 'react';
// import {Contalner, to, Col, Card, button} fron "react-bootstrao"
// import './ClosedPage.css';
// import natieeirectoPae ) fron l.Jcomnnative';
// import ( loglicstream ) fron /.-/camon/logger"
// import utility framd.Jcmon/utils";
// import PSRUR, pPulatefagittributes, updatrValytics fron /..61otalskesources'
// import Loader fron -/..shared/camponents/Loader/Loader"
// import Loder from evds/loaders/dist/cjs/conponents/Loader"
// import ttociet, tpestittycienthegest ) fron .J.dcomottpclient"s
// import tton as Wsuttom, TetLinkCanret) fros ds/buttons"
// import isnaile ) from "react-device-detect";


class ClosedPage extends Component {
    state = {
        isLoading: false,
        closeSccess: false,
    }


    handleCloselticket = () => {
        this.setState({
            isLoading: true
        })

        const { caseId, ticketNumber } = window;
        const reqPayload = {
            caseld: caseId ? caseId : "",
            ticketNumber: ticketNumber ? ticketNumber : caseId,
            ticketDetails: {
                remark: [{
                    actor: "Custoner",
                    fullName: "",
                    dateTimeRemark: new Date().toUTCString(),
                    remark: ""
                }]
            }
        }
        if (window.src) {
            reqPayload.src = window.src ? window.src : "";
        }

        const config = {
            headers: {
                'Content-Type': "application/json",
                'channelId': "utility.getChannelId()",
                'cache': 'no-cache',
                "pageName": 'ticket closed',
                'flowName': "closePage"
            }
        }


        let apiurl = `API_BASE_URL + 'Closeticet'`;

        postHttpClientRequest(apiurl, reqPayload, config).then(
            (response) => {
                console.log(response.data);
                this.setstate({ isLoading: false });
                if (response.data.body && response.data.body.apiResponse.statusDesc === "success") {
                    this.setstate({ closeSuccess: true })
                } else {
                    this.setstate({ closeSuccess: false })
                    this.props.history.push("/error")
                }
            }
        )
    }

    componentDidMount() {
        this.handleCloselticket();
        window.scrollTo(0, 0);
    }

    navigateSupportRequest = (e) => {
        e.preventDefault();
        let ticketsUrl = "";
        let homeURlmva = String('homehrf').includes("mva");

        // redirect checking condition for mva nd mvo
        if (homeURlmva) {
            ticketsUrl = `https://${window.location.hostname}/digital/nsa/secure/sdr/mva/ticketshome`
        } else {
            ticketsUrl = `https://${window.location.hostname}/digital/nsa/secure/sdr/mva/ticketshome`
        }
        window.open(ticketsUrl, "_self");
    };

    render() {
        let accoverviewBtn = "";
        let nativePagetype = "myFeed";
        let userAgent = "";

        console.leg("userAgent", userAgent);
        if (window.location.hostname.indexOf("vzx") > -1) {
            accoverviewBtn = "https//winda. 2ocation.hostne/secure/overvielow109/"
        } else {
            accoverviewBtn = "https//winda. 2ocation.hostne/secure/overvielow109/"
        }
        const loader = this.state.isLoading ? <Loader action fullscreen={true} /> : null;
        var renderContent = this.state.closeSccess ?
            <div className="rapper">
                <p>Your request has completed</p>
            </div>
            : null;
        return (
            <>
                {loader}
            </>
        )

    }
}