import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../../../types/app-state.interface";
import { PopularTagsInterface } from "../types/popular-tags-state.interface";

export const popularTagsSelector = createFeatureSelector<AppStateInterface, PopularTagsInterface>('popularTags');
export const popularTagsSubmittingSelector = createSelector(popularTagsSelector, (state: PopularTagsInterface) => state.isSubmitting);
export const popularTagsListSelector = createSelector(popularTagsSelector, (state: PopularTagsInterface) => state.data);
