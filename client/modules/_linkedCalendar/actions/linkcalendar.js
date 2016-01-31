export default {

  // create
  add({Meteor, LocalState, FlowRouter}, data) {

    const _id = Meteor.uuid();
    Meteor.call('_linkedCalendar.add', data, _id, (err) => {
      if (err) {
        return LocalState.set('_linkedCalendar.SAVE_ERROR', err.message);
      }
    });
    FlowRouter.go(`/available-calendars/${_id}`);
  },

  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {
    // console.log ('actions._linkedCalendar.update _id', _id);
    // console.log ('actions._linkedCalendar.update data', data);

    Meteor.call('_linkedCalendar.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_linkedCalendar.SAVE_ERROR', err.message);
      }
    });
    FlowRouter.go(`/available-calendars/${_id}`);
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log ('actions._linkedCalendar.update _id', _id);
    // console.log ('actions._linkedCalendar.update data', data);

    Meteor.call('_linkedCalendar.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_linkedCalendar.DELETE_ERROR', err.message);
      }
      FlowRouter.go(`/available-calendars/`);

  });
  },

  // clearError
  clearErrors({LocalState}) {
    LocalState.set('_linkedCalendar.DELETE_ERROR', null);
    return LocalState.set('_linkedCalendar.SAVE_ERROR', null);
  }

};
