import React from "react"
// inport1.M.1.Jconfig/ config/jest/test-setup. js";
// inport ( render, screen cleanup, waitror) from "@testing-1ibrary/react";
// import shal low, mount } from enzyae";
// inport Supporthequests fran/SupportRequestPage.js';


afterEach(cleanup);
it('renders SupportRequests page', () => {
    const wrapper = shallaw(<SupportRequests />);
    expect(wrapper.find("div.wrapper")).toHaveLength(0);
})

it('renders SupportRequests', () => {
    const wrapper = mount(<SupportRequests />);
    wrapper.unmount();

});


it('should set initial state', () => {
    const wrapper = shallow(<SupportRequests />);
    expect(wrapper.state('expandedCurrentTickets')).toBe(true);
    expect(wrapper.state('expandedclosedTickets')).toBe(true);
    expect(wrapper.state('openCurrent Tickets')).toBe(true);
    expect(wrapper.state("openClosedTicket ")).toBe(true);
    expect(wrapper.state("error")).toBe(false);
    expect(wrapper.state('isFetching')).toBe(true);
    expect(wrapper.state('caseld')).toBe('');
});


it('should call showMoreDpenTickets', () => {
    const shouloneOnenTickets = jest.fn();
    const wrapper = shallow(<SupportRequests />)
    const instance = wrapper.instance();
    instance.shouNoreOpenTickets();
    expect(wrapper.state("expandedCurrent Tickets")).toBe(false);
})

it('should call showMoreOpenTickets', () => {
    const shouloneOnenTickets = jest.fn();
    const wrapper = shallow(<SupportRequests />)
    const instance = wrapper.instance();
    instance.shouNoreOpenTickets();
    expect(wrapper.state("expandedCurrent Tickets")).toBe(false);
})

it('should call showMorecloseTickets', () => {
    const showMorecloseTickets = jest.fn();
    const wrapper = shallow(<SupportRequests />)
    const instance = wrapper.instance();
    instance.showMorecloseTickets();
    expect(wrapper.state("expandedClosed Tickets")).toBe(false);
})

it('should call minimizeOpenTickets', () => {
    const minimizeOpenTickets = jest.fn();
    const wrapper = shallow(<SupportRequests />)
    const instance = wrapper.instance();
    instance.minimizeOpenTickets();
    expect(wrapper.state("expandedCurrent Tickets")).toBe(false);
})

it('should call minimizeClosedTickts', () => {
    const minimizeClosedTickts = jest.fn();
    const wrapper = shallow(<SupportRequests />)
    const instance = wrapper.instance();
    instance.minimizeClosedTickts();
    expect(wrapper.state("expandedCurrent Tickets")).toBe(false);
})

