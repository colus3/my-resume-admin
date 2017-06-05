/**
 * Created by colus on 2016. 10. 9..
 */
import authentication from './authentication';
import content from './content';

import { combineReducers } from 'redux';

export default combineReducers({ authentication, content });