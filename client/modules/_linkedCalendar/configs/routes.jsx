import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/theme.jsx';
import Links from '../../_home/components/links.jsx';
// import Simple from '../../_home/components/simple.jsx';

import AvailableCalendarsList from '../components/availableCalendars/collection.jsx';
import ColorsView from '../components/availableCalendars/single.jsx';
import ColorsAdd from '../components/availableCalendars/add.jsx';
import ColorsEdit from '../components/availableCalendars/edit.jsx';


export default (injectDeps) => {

  const LayoutCtx = injectDeps(Layout);

  FlowRouter.route('/link-calendar', {
    name: '_linkedCalendar.link-calendar',
    action() {
      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.collection' />)
        content: () => (<AvailableCalendarsList />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/available-calendars', {
    name: '_linkedCalendar.available-calendars',
    action() {
      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.collection' />)
        content: () => (<AvailableCalendarsList />),
        links: () => (<Links />)
      });
    }
  });

};
