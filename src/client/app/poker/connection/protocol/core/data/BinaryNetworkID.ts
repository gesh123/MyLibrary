import {AbstractData} from "./AbstractData";

export class BinaryNetworkID extends AbstractData{
	/** Entity identifier. */
	public id: number;

	/** Network identifier. */
	public networkID: number;

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
