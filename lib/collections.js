import {Mongo} from 'meteor/mongo';

export default {
  Posts: new Mongo.Collection('posts'),
  Comments: new Mongo.Collection('comments')
  ,_colors: new Mongo.Collection('colors')
  ,_availableCalendars: new Mongo.Collection('availableCalendars')
};
