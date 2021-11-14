import { ProfileInterface } from "./profile.interface";

export interface ArticleResponseInterface {
	"articles": Article[],
	"articlesCount": number
}

export interface Article {
	"slug": string,
	"title": string,
	"description": string,
	"body": string,
	"tagList": string[],
	"createdAt": Date,
	"updatedAt": Date,
	"favorited": boolean,
	"favoritesCount": number,
	"author": ProfileInterface
}
