import { of } from "ramda";
import { combineEpics, Epic, ofType } from "redux-observable";
import { delay, EMPTY, switchMap } from "rxjs";


export const abc: Epic = action$ => action$.pipe(
    ofType('ABC'),
    delay(1000),
    switchMap(() => {
        return of({type: "XYZ"})
    })
);

export const rootEpic = combineEpics(
    abc
);