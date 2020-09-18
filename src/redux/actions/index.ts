import firebase from 'firebase';
import { helperActions } from './helper';
import { notificationsActions } from './notifications';
import { previousSpeakersActions } from './previous-speakers';
import { scheduleActions } from './schedule';
import { sessionsActions } from './sessions';
import { speakersActions } from './speakers';
import { userActions } from './user';

export {
  helperActions,
  notificationsActions,
  previousSpeakersActions,
  scheduleActions,
  sessionsActions,
  speakersActions,
  userActions,
};

// TODO: Remove type
declare global {
  interface Window {
    firebase: typeof firebase;
  }
}
