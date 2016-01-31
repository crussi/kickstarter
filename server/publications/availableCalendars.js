import {_availableCalendars} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('_availableCalendars.list', function () {
    console.log("hello from meteor publish _availableCalendars.list");
    const selector = {};
    const options = {
        fields: {_id: 1, title: 1},
        sort: {createdAt: -1},
        limit: 10
    };

    return _availableCalendars.find(selector, options);
});

Meteor.publish('_availableCalendars.single', function (_id) {
    check( _id, String);
    const selector = {_id};
    const response = _availableCalendars.find(selector);
    // console.log('publish _colors.single _id', _id);
    // console.log('publish _colors.single response.title', response.title);
    return response;
});
