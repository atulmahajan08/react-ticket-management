import React from "react"
import '..//config/ config/jest/test-setup.js';
import { render, screen , cleanup, waitfor} from "@testing-library/react";
import{shallow, mount} from enzyme;
import ConfimtionPage from '../confirmationPage.js';

afterEach(cleanup);

it('should set initial state', () => {
    const wrapper = shallow(<ConfimtionPage confirmData={{pageType:''}} />);
    expect(wrapper.state('viewTicket')).toBe(false);
    expect(wrapper.state('isLoading')).toBe(false);
    expect(wrapper.state('cancelSuccess')).toBe(false);
    expect(wrapper.state('pageType')).toBe(false);
    expect(wrapper.state('ticketNumber')).toBe(false);
    expect(wrapper.state('caseId')).toBe(false);
    expect(wrapper.state('callReason')).toBe(false);
});
