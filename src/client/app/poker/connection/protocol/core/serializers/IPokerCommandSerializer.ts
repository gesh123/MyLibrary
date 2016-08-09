
import {IPokerCommand} from "../commands/IPokerCommand";
import {ArrayBufferBuilder} from "../../../../utils/ArrayBufferBuilder";


/**
 * Created by hivaga on 7/14/2016.
 */
export interface IPokerCommandSerializer
{

  // -----------------------------------------
  // PUBLIC PROPERTIES
  // -----------------------------------------



  // -----------------------------------------
  // PUBLIC METHODS
  // -----------------------------------------

  serialize(buffer: ArrayBufferBuilder, data: IPokerCommand): void;

  deserialize(buffer: ArrayBufferBuilder, data: IPokerCommand): void;


}
