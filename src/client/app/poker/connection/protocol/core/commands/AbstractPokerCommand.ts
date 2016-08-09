import {PokerCommandHeader} from "../data/PokerCommandHeader";
import {IPokerCommand} from "./IPokerCommand";

/**
 * Created by hivaga on 7/15/2016.
 */
export abstract class AbstractPokerCommand implements IPokerCommand
{

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
  public data:any;

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------
  private _name:string;
  private _header:PokerCommandHeader = new PokerCommandHeader();


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------

	constructor()
	{
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

  public init(processorID: number, commandID: number, name: string): void
  {
    this._header = new PokerCommandHeader(processorID, commandID);
    this._name = name;
  }

  public get name():string
  {
    return this._name;
  }

  /**
   * The commandType is the combination of the command ID and the processor ID.
   * A number whose first byte is the processor ID and next 3 bytes are the command ID.
   */
  public get uid(): number
  {
    return this.header.uid;
  }

  /** Processor ID aka PID */
  public get pid():number
  {
    return this.header.pid;
  }

  /** command ID aka CID */
  public get cid():number
  {
    return this.header.cid;
  }

  /** Command size in Bytes */
  public get size():number
  {
    return this.header.size;
  }

  /** The size of the command in Bytes */
  public set size(value:number)
  {
    this.header.size = value;
  }

  public get header():PokerCommandHeader
  {
    return this._header;
  }


  // -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
