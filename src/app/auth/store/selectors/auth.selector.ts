import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../common/types/app-state.interface";
import {AuthStateInterface} from "../../types/auth-state.interface";
import { BackendErrorsInterface } from "../../../common/types/backend-errors.interface";

export const selectAuth = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');
export const selectSubmitting = createSelector(selectAuth, (state: AuthStateInterface) => state.isSubmitting);
export const selectBackendErrors = createSelector(selectAuth, (state: AuthStateInterface) => state.errors);
