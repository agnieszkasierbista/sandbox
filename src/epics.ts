import {of} from "ramda";
import {combineEpics, Epic, ofType} from "redux-observable";
import {delay, switchMap} from "rxjs";


export const abc: Epic = action$ => action$.pipe(
    ofType('ABC'),
    delay(1000),
    switchMap(() => {
        return of({type: "XYZ"})
    })
);

export const uploadImg: Epic = action$ => action$.pipe(
    ofType('START'),
    delay(3000),
    switchMap(() => {
        return of({type: "UPLOADED"})
    })
);

export const rootEpic = combineEpics(
    abc,
    uploadImg
);