import { Action, Middleware, Dispatch } from "redux";

/**
 * ThunkActions return a function, allowing for asynchronous tasks to be better
 * executed, providing access to dispatch, getState, and extra arguments.
 */
export type ThunkAction<Result, State, Extras, ActionType = Action> = (
    dispatch: Dispatch<Action>,
    getState: () => State,
    extraArgument: Extras
) => Result;

/**
 * Thunk middleware for applying to your store.
 *
 * Example:
 * ```
 const store = createStore(
     combineReducers(...reducers),
        applyMiddleware(thunk),
    );
    ```
    */
declare const thunk: Middleware & {
    withExtraArgument(extraArgument: any): Middleware;
};

export default thunk;
