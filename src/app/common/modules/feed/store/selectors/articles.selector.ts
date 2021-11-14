import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../../../types/app-state.interface";
import { ArticlesStateInterface } from "../types/articles-state.interface";

export const articlesSelector = createFeatureSelector<AppStateInterface, ArticlesStateInterface>('articles');
export const articlesSubmittingSelector = createSelector(articlesSelector, (state: ArticlesStateInterface) => state.isSubmitting);
export const articlesDataSelector = createSelector(articlesSelector, (state: ArticlesStateInterface) => state.data);
