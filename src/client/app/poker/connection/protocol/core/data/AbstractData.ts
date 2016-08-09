/**
 * Created by gsemerdjiev on 21.7.2016 г..
 */

export abstract class AbstractData {

	protected _parent:AbstractData;

	[key:string]:any;

	constructor(parent?:AbstractData) {
		this._parent = parent;
	}

	public getParent():AbstractData{
		return this._parent;
	}

	public setParent(parent:AbstractData):void{
		this._parent = parent;
	}
}
