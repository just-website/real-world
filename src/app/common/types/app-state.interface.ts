import {AuthStateInterface} from "../../auth/store/types/auth-state.interface";
import { ArticlesStateInterface } from "../modules/feed/store/types/articles-state.interface";
import { PopularTagsInterface } from "../modules/popular-tags/store/types/popular-tags-state.interface";

export interface AppStateInterface {
	auth: AuthStateInterface,
	articles: ArticlesStateInterface,
	popularTags: PopularTagsInterface
}
