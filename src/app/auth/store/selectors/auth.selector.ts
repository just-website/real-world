import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../../common/types/app-state.interface";
import { AuthStateInterface } from "../../types/auth-state.interface";

export const authSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');
export const submittingSelector = createSelector(authSelector, (state: AuthStateInterface) => state.isSubmitting);
export const backendErrorsSelector = createSelector(authSelector, (state: AuthStateInterface) => state.errors);
export const currentUserSelector = createSelector(authSelector, (state: AuthStateInterface) => state.currentUser);
export const isLoggedInSelector = createSelector(authSelector, (state: AuthStateInterface) => state.isLoggedIn);
