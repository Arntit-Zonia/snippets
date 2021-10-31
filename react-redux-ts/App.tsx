import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { State } from './state/reducers';
import * as actionCreators from "./state/action-creators/index";

const App = () => {
    // Using react-redux state with tsx functional components
    const { example } = useSelector((state: State) => state);
    const { setExample } = bindActionCreators(actionCreators, useDispatch());

    return (
        <div>{example}</div>
    );
}

export default App;