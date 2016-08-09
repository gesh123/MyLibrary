
import {PokerCommandHeader} from "../data/PokerCommandHeader";
import {ArrayBufferBuilder} from "../../../../utils/ArrayBufferBuilder";

/**
 * Created by hivaga on 7/15/2016.
 */
export class PokerCommandHeaderSerializer
{

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
  


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor()
	{
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

  /**
   * Helper method which writes header data to an ArrayBufferBuilder object.
   * This method should be called when all the data is written to the command body because it sets <this.size> to <target.pointer>.
   * Uses <this.size>, <this.commandID> and <this.processorID> to create the header data.
   * Does not change the position of the ArrayBufferBuilder pointer (it will be the same before and after calling this method).
   *
   * @param {Utils.ArrayBufferBuilder} buffer The ArrayBufferBuilder Write the command header here.
   * @param {PokerCommandHeader} header the header object from which tha data will be written.
   */
  public static serialize(buffer:ArrayBufferBuilder, header:PokerCommandHeader):void
  {
    let oldPointerPosition:number = buffer.pointer;
    let uid:number = header.uid;

    if (!header.size)
    {
      header.size = buffer.pointer;
    }

    buffer.pointer = 0;

    buffer.setUint32(header.size);			// 4 bytes for command size
    buffer.setUint16(uid);			// 2 bytes for command type (command id & processor id)

    buffer.pointer = oldPointerPosition;
  }

  /**
   * Helper method which reads header data from an ArrayBufferBuilder object.
   * This method reads the command header.
   *
   * @param {Utils.ArrayBufferBuilder} buffer The ArrayBufferBuilder Read the command header from here.
   * @param {PokerCommandHeader} header the header object from which tha data will be written.
   */
  public static deserialize(buffer:ArrayBufferBuilder, header:PokerCommandHeader): void
  {
    let size: number = buffer.getUint32();
    let uid: number = buffer.getUint16();
    let commandID:number = uid & 0xfff;
    let processorID:number = (uid >> 12) & 0xf;

    header.size = size;
    header.update(processorID, commandID);
  }

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
