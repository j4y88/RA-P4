export class Journal {
	ID:number;
	title:string;
	content:string;
	categories:Array<string>;
	image:string;
	date:string;
	author:string;

	constructor(ID:number=0, title:string='', content:string='', categories:Array<string>=[], image:string='', date:string='', author:string=''){
		this.ID = ID;
		this.title = title;
		this.content = content;
		this.categories = categories;
		this.image = image;
		this.date = date;
		this.author = author;
	}
}