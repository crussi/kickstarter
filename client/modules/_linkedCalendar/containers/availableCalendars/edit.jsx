// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';
//
// import {singleComposer} from '../../composers/colors/single.jsx';
// import {editComposer, depsMapper} from '../../composers/colors/edit.jsx';
import dataComposer from '../../composers/availableCalendars/edit.jsx';

import Component from '../../components/availableCalendars/_form.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(singleComposer),
//     composeWithTracker(editComposer),
//     useDeps(depsMapper)
//   )(Component);
