import { all, fork, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import sampleSagaSaga from 'app/sample-saga/sagas'
import { TypicodeUsersSaga } from 'app/users/store';
import { UnsplashSaga } from 'app/unsplash/store';

// export default function* root() {
//   yield fork(startup)
//   yield fork(nextRedditChange)
//   yield fork(invalidateReddit)
// }


export default function* rootSaga() {
//   // yield fork(sampleSagaSaga)
  yield all([ // gọi nhiều saga
    yield fork(TypicodeUsersSaga),
    yield fork(UnsplashSaga),
    sampleSagaSaga,
//   //     // watchIncrement(),
//   //     // watchDecrement()
  ]);
}
