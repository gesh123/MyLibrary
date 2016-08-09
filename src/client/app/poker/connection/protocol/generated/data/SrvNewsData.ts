
import { NewsVOData } from "./NewsVOData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvNewsData extends AbstractData {
	public newsVector:NewsVOData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
