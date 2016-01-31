import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('_availableCalendars.list').ready()) {
    const collection = Collections._availableCalendars.find().fetch();
    console.log("hello from col composer len: " + collection.length);
    onData(null, {collection});
  }
};

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps()
  )(component);
