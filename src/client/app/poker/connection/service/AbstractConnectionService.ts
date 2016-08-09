import {AbstractConnection} from "../AbstractConnection";
import {ArrayBufferBuilder} from "../../utils/ArrayBufferBuilder";

/**
 * Created by hivaga on 7/14/2016.
 */
export abstract class AbstractConnectionService extends AbstractConnection
{

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
	public state:number;


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
	public abstract send(data:ArrayBufferBuilder):void;

}
