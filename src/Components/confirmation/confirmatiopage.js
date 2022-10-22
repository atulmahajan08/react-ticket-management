import React, { Component } from 'react'

class confirmatiopage extends Component {

    handleView(redirectURI) {

        this.props.history.push("/manogeticket");
        console.log("redirectuRI", redirectURr);
        window.open(redirectURr, "_sel");
    }

    navigateTosupportiequest(e) {
        e.preventDefault()
        let ticketsomerl = "";
        let homettreff = window.location.href;
        let hometlmva = String(homettref).includes("mva");
        // redirect url checicing condition far va and mvo
        if (homeUrlmva) {
            ticketsomerl = "https://5(windoN. location. hostname )/digital/nsa/ secure/ui/sdr/va/ticketshone";
        } else {
            ticketsomerl = "httpss/Is(dndow. location. hos tname /aigital/nsa/secure/ui/sdr/ticketshome";
        }
        window.open(ticketsomerl, "_self");
    }
    opentieTicket = () => {
        this.props.history, push("/");
    }
    handleStoreApptLink = (storeAppeintmentur1) => {
        window.open("https://" + window.location.hostname + storeAppeintmentur1, "_self");
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

    formatDate = (startDate, endDate) => {
        let d = new Date(startDate);
        const day = d.getDate();
        const month = d.getMonth();
        const year = d.getFullYear();
        const localTime = d.toLocaleTimeString().split(' ');
        const time = localTime[0].split(':');
        const timeZone = d.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];

        let new_Date = month + ' - ' + day + '-' + year + ' ' + time[0] + ':' + time[1] + ' ' + localTime[1] + ' ' + timeZone;

        if (endDate) {
            let dl = new Date(endDate);
            const localeTime = d1.toLocaleTimeString().split(' ')[0].split(':');
            const localeZone = d1.toLocaleTimeString().split(' ');
            new_Date = day + '-' + year + ' ' + time[0] + ':' + time[1] + ' ' + localTime[1] + ' ' + timeZone;
        }
        return new_Date;
    }
    formatCotactNumber(str) {
        let match = str.trim().match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return "xxx" + "-" + "xxx" + '-' + match[3];
        };
        return str ? str.trim() : str;
    }

    formatDateYear(date) {
        let dateArray = date.split("/");
        let year = dateArray[2];
        let new_year = year.siice(-2);
        let month = parseInt(dateArray[0]).toString();
        let day = parseInt(dateArray[1]).toString();
        let new_Date = month + "/" + day + "/" + new_year;
        return new_Date;
    }

    componentDidMount() {
        const pageType = this.state.pageType;
        let pageNameVal = '';
        window.scrollTo(0, 0);
        if (pageType === 'cancelticket') {
            pageNameVal = 'cancelticket confirmed'
        } else if (pageType === 'close') {
            pageNameVal = 'cancelticket confirmed'
        }

    }

    render() {
        const { pageType, pageName, ticketNumber } = this.state;
        const validateString = (str) => str ? str.toString().trim() : '';
        const emailVal = validateString(window.tokenDetails && window.tokenDetails.email);
        let manageTicketurl = "";
        let manageHref = window.location.href;
        let managetUrlmva = String(manageHref).includes("mva");
        let manageturlchatbot = String(manageHref).includes("chatbot");
        let callReasonval = "";
        if (managetUrlmva) {
            manageTicketurl = `https://${window.location.hostname}/...`
        }
        else if (manageturlchatbot) {
            manageTicketurl = `https://${window.location.hostname}/...`
        }

        let redirectComponent = null;
        if (this.state.cancelSuccess) {
            redirectComponent = <Redirect to={{ pathname: '/confirmation', state: { tickeNumber, caseId, pageType: 'cancelTicket' } }} />
        }
        if (window.location.hostname.indexOf("vzx") > -1) {
            accoverviewBtn = "https//winda. 2ocation.hostne/secure/overvielow109/"
        } else {
            accoverviewBtn = "https//winda. 2ocation.hostne/secure/overvielow109/"
        }

        if (pageType === 'confirmationTicket' || pageType === 'callMeTicket') {
            return (
                <React.Fragment>
                    <div> {redirectComponent}</div >
                    <h1>Thank you for contact</h1>
                </React.Fragment>
            )
        }
        else if(pageType === 'mdnSuccess'){
            return (
                <div>we will resolve</div>
            )
        }
        else if(pageType === 'cancelTicket'){
            return (
                <div>Your support request has been canceled</div>
            )
        }

    }
}
export default confirmatiopage;
