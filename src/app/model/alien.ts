export class Alien {
	id:number=0;
	type:string="";
	submitted_by:string="";
	description:string="";

	constructor(id:number=0, type:string='', submitted_by:string='', description:string=''){
		this.id = id;
		this.type = type;
		this.submitted_by = submitted_by;
		this.description = description;
	}
}