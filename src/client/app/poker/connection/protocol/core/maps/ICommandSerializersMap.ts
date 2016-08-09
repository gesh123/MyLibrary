import {IPokerCommandSerializer} from "../serializers/IPokerCommandSerializer";
/**
 * Created by hivaga on 7/16/2016.
 */
export interface ICommandSerializersMap
{
	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------
  getCommand(pid:number, cid:number):IPokerCommandSerializer;

}
