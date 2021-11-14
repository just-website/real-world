import { GlobalConstantsClass } from "./global-constants.class";

export class HelperUtilsClass {
	public static getStringArticlesQueryParams(pageIndex: number): string {
		const limit = GlobalConstantsClass.articlesPerPage;
		const offset = (pageIndex - 1) * limit;
		return `?offset=${offset}&limit=${limit}`;
	}
}
