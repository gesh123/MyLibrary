/**
 * Created by hivaga on 7/15/2016.
 */
export class PokerCommandHeader
{

  // -----------------------------------------
  // PUBLIC PROPERTIES
  // -----------------------------------------

  /**  The standard size in bytes of the header */
  public static HEADER_SIZE_BYTES: number = 6;

  /** The size of the command. */
  public size: number = 0;

  // -----------------------------------------
  // PRIVATE PROPERTIES
  // -----------------------------------------

  private _commandID: number;

  private _processorID: number;

  private _uid: number;


  // -----------------------------------------
  // CONSTRUCTOR
  // -----------------------------------------


  constructor(processorID:number = 0, commandID:number = 0)
  {
    this.update(processorID, commandID);
  }


  // -----------------------------------------
  // PUBLIC METHODS
  // -----------------------------------------
  public get cid():number
  {
    return this._commandID;
  }

  public get pid():number
  {
    return this._processorID;
  }

  public get uid():number
  {
    return this._uid;
  }

  public update(processorID:number = 0, commandID:number = 0):void
  {
    this._processorID = processorID;
    this._commandID = commandID;
    this.updateUID();
  }

  // -----------------------------------------
  // PROTECTED METHODS
  // -----------------------------------------


  // -----------------------------------------
  // PRIVATE METHODS
  // -----------------------------------------
  private updateUID():void
  {
    this._uid = ((this._commandID & 0x0FFF) | ((this._processorID << 12) & 0xF000));
  }

}
