import { BehaviorSubject } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { combineEpics, Epic } from "redux-observable";

import { epic as layoutEpic$ } from "common/ducks/layout";

const behaviorSubject = new BehaviorSubject(combineEpics());

export const registerEpic = (epic: Epic) => behaviorSubject.next(epic);

const dynamicEpic$: Epic = (action$, state$) =>
  behaviorSubject.pipe(
    mergeMap((epic: Epic) => epic(action$, state$, undefined))
  );

export const rootEpic = combineEpics(layoutEpic$, dynamicEpic$);
