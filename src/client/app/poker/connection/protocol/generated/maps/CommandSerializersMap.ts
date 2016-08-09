
import { SrvHandShakeOKCommandSerializer } from "../serializers/SrvHandShakeOKCommandSerializer";
import { SrvErrorDisconnectedCommandSerializer } from "../serializers/SrvErrorDisconnectedCommandSerializer";
import { SrvConnectErrorCommandSerializer } from "../serializers/SrvConnectErrorCommandSerializer";
import { SrvCompressedCommandSerializer } from "../serializers/SrvCompressedCommandSerializer";
import { SrvSSLDataCommandSerializer } from "../serializers/SrvSSLDataCommandSerializer";
import { SrvConnectGameOKCommandSerializer } from "../serializers/SrvConnectGameOKCommandSerializer";
import { SrvServerInfoCommandSerializer } from "../serializers/SrvServerInfoCommandSerializer";
import { SrvServerCountersInfoCommandSerializer } from "../serializers/SrvServerCountersInfoCommandSerializer";
import { SrvGameInfoCommandSerializer } from "../serializers/SrvGameInfoCommandSerializer";
import { SrvGameWaitersInfoCommandSerializer } from "../serializers/SrvGameWaitersInfoCommandSerializer";
import { SrvAdminMsgCommandSerializer } from "../serializers/SrvAdminMsgCommandSerializer";
import { SrvWaitListCommandSerializer } from "../serializers/SrvWaitListCommandSerializer";
import { SrvHandWinnersCommandSerializer } from "../serializers/SrvHandWinnersCommandSerializer";
import { SrvShowHandsCommandSerializer } from "../serializers/SrvShowHandsCommandSerializer";
import { SrvPlayerChatMsgCommandSerializer } from "../serializers/SrvPlayerChatMsgCommandSerializer";
import { SrvObserverChatMsgCommandSerializer } from "../serializers/SrvObserverChatMsgCommandSerializer";
import { SrvPlayerDelayedFoldCommandSerializer } from "../serializers/SrvPlayerDelayedFoldCommandSerializer";
import { SrvPlayerSecondsLeftToActCommandSerializer } from "../serializers/SrvPlayerSecondsLeftToActCommandSerializer";
import { SrvAwayPlayerPickedUpCommandSerializer } from "../serializers/SrvAwayPlayerPickedUpCommandSerializer";
import { SrvFinishedOnPlaceCommandSerializer } from "../serializers/SrvFinishedOnPlaceCommandSerializer";
import { SrvAddToWaitListOkCommandSerializer } from "../serializers/SrvAddToWaitListOkCommandSerializer";
import { SrvAddToWaitListErrorCommandSerializer } from "../serializers/SrvAddToWaitListErrorCommandSerializer";
import { SrvRemoveFromWaitListOkCommandSerializer } from "../serializers/SrvRemoveFromWaitListOkCommandSerializer";
import { SrvRemoveFromWaitListErrorCommandSerializer } from "../serializers/SrvRemoveFromWaitListErrorCommandSerializer";
import { SrvLogonOkCommandSerializer } from "../serializers/SrvLogonOkCommandSerializer";
import { SrvSitOkCommandSerializer } from "../serializers/SrvSitOkCommandSerializer";
import { SrvBackOnSeatOkCommandSerializer } from "../serializers/SrvBackOnSeatOkCommandSerializer";
import { SrvSitErrorCommandSerializer } from "../serializers/SrvSitErrorCommandSerializer";
import { SrvLogonErrorCommandSerializer } from "../serializers/SrvLogonErrorCommandSerializer";
import { SrvMoneyCommandSerializer } from "../serializers/SrvMoneyCommandSerializer";
import { SrvUserStateOnTableCommandSerializer } from "../serializers/SrvUserStateOnTableCommandSerializer";
import { SrvTableStateCommandSerializer } from "../serializers/SrvTableStateCommandSerializer";
import { SrvCardDealCommandSerializer } from "../serializers/SrvCardDealCommandSerializer";
import { SrvPotCardDealCommandSerializer } from "../serializers/SrvPotCardDealCommandSerializer";
import { SrvTUShowDownCommandSerializer } from "../serializers/SrvTUShowDownCommandSerializer";
import { SrvUserTurnCommandSerializer } from "../serializers/SrvUserTurnCommandSerializer";
import { SrvUserExtraTurnCommandSerializer } from "../serializers/SrvUserExtraTurnCommandSerializer";
import { SrvUserActionNotifyCommandSerializer } from "../serializers/SrvUserActionNotifyCommandSerializer";
import { SrvBetRoundCompleteCommandSerializer } from "../serializers/SrvBetRoundCompleteCommandSerializer";
import { SrvOutOfMoneyCommandSerializer } from "../serializers/SrvOutOfMoneyCommandSerializer";
import { SrvUpdateHintTextCommandSerializer } from "../serializers/SrvUpdateHintTextCommandSerializer";
import { SrvNewsCommandSerializer } from "../serializers/SrvNewsCommandSerializer";
import { SrvSessionCreatedCommandSerializer } from "../serializers/SrvSessionCreatedCommandSerializer";
import { SrvGameStartCommandSerializer } from "../serializers/SrvGameStartCommandSerializer";
import { SrvAltCurrencyRateCommandSerializer } from "../serializers/SrvAltCurrencyRateCommandSerializer";
import { SrvPingCommandSerializer } from "../serializers/SrvPingCommandSerializer";
import { SrvPlayerProfileCommandSerializer } from "../serializers/SrvPlayerProfileCommandSerializer";
import { SrvCashierStatusCommandSerializer } from "../serializers/SrvCashierStatusCommandSerializer";
import { SrvRplHandHistoryCommandSerializer } from "../serializers/SrvRplHandHistoryCommandSerializer";
import { SrvCatchThisNumberCommandSerializer } from "../serializers/SrvCatchThisNumberCommandSerializer";
import { SrvTransferUncalledBetCommandSerializer } from "../serializers/SrvTransferUncalledBetCommandSerializer";
import { SrvPrizePoolClosedCommandSerializer } from "../serializers/SrvPrizePoolClosedCommandSerializer";
import { SrvPlayerRanksCommandSerializer } from "../serializers/SrvPlayerRanksCommandSerializer";
import { SrvMoveDealChipCommandSerializer } from "../serializers/SrvMoveDealChipCommandSerializer";
import { SrvHoldemPlayerPosCommandSerializer } from "../serializers/SrvHoldemPlayerPosCommandSerializer";
import { SrvLogonChangeCommandSerializer } from "../serializers/SrvLogonChangeCommandSerializer";
import { SrvRequestPassCommandSerializer } from "../serializers/SrvRequestPassCommandSerializer";
import { SrvPasswordErrorCommandSerializer } from "../serializers/SrvPasswordErrorCommandSerializer";
import { SrvDeadBetCommandSerializer } from "../serializers/SrvDeadBetCommandSerializer";
import { SrvSetJackpotsCommandSerializer } from "../serializers/SrvSetJackpotsCommandSerializer";
import { SrvUpdateJackpotsCommandSerializer } from "../serializers/SrvUpdateJackpotsCommandSerializer";
import { SrvUserTurnTimeoutCommandSerializer } from "../serializers/SrvUserTurnTimeoutCommandSerializer";
import { SrvUserTurnExtraTimeoutCommandSerializer } from "../serializers/SrvUserTurnExtraTimeoutCommandSerializer";
import { SrvUserMoreMoneyNotifyCommandSerializer } from "../serializers/SrvUserMoreMoneyNotifyCommandSerializer";
import { SrvDisconnectNotifyCommandSerializer } from "../serializers/SrvDisconnectNotifyCommandSerializer";
import { SrvDrawCardsCommandSerializer } from "../serializers/SrvDrawCardsCommandSerializer";
import { SrvUserDrawCardsNotifyCommandSerializer } from "../serializers/SrvUserDrawCardsNotifyCommandSerializer";
import { SrvRakeRacePointsCommandSerializer } from "../serializers/SrvRakeRacePointsCommandSerializer";
import { SrvUpdateTimeBankConfigCommandSerializer } from "../serializers/SrvUpdateTimeBankConfigCommandSerializer";
import { SrvPlayerParticipationsCommandSerializer } from "../serializers/SrvPlayerParticipationsCommandSerializer";
import { SrvNetworksConfigurationCommandSerializer } from "../serializers/SrvNetworksConfigurationCommandSerializer";
import { SrvUnreadMessageCountCommandSerializer } from "../serializers/SrvUnreadMessageCountCommandSerializer";
import { SrvGameResetCommandSerializer } from "../serializers/SrvGameResetCommandSerializer";
import { SrvCardDeckInUseCommandSerializer } from "../serializers/SrvCardDeckInUseCommandSerializer";
import { SrvBetRoundStartCommandSerializer } from "../serializers/SrvBetRoundStartCommandSerializer";
import { ClHandShakeCommandSerializer } from "../serializers/ClHandShakeCommandSerializer";
import { ClByeCommandSerializer } from "../serializers/ClByeCommandSerializer";
import { ClSSLDataCommandSerializer } from "../serializers/ClSSLDataCommandSerializer";
import { ClGetServerInfoCommandSerializer } from "../serializers/ClGetServerInfoCommandSerializer";
import { ClGetGameInfoCommandSerializer } from "../serializers/ClGetGameInfoCommandSerializer";
import { ClGetGameWaitersInfoCommandSerializer } from "../serializers/ClGetGameWaitersInfoCommandSerializer";
import { ClGetCountersInfoCommandSerializer } from "../serializers/ClGetCountersInfoCommandSerializer";
import { ClChatMsgCommandSerializer } from "../serializers/ClChatMsgCommandSerializer";
import { ClAddToWaitListCommandSerializer } from "../serializers/ClAddToWaitListCommandSerializer";
import { ClAddGlobalWaitListCommandSerializer } from "../serializers/ClAddGlobalWaitListCommandSerializer";
import { ClRemoveFromWaitListCommandSerializer } from "../serializers/ClRemoveFromWaitListCommandSerializer";
import { ClAcceptInviteCommandSerializer } from "../serializers/ClAcceptInviteCommandSerializer";
import { ClRejectInviteCommandSerializer } from "../serializers/ClRejectInviteCommandSerializer";
import { ClConnectGameCommandSerializer } from "../serializers/ClConnectGameCommandSerializer";
import { ClLogonCommandSerializer } from "../serializers/ClLogonCommandSerializer";
import { ClLogoutCommandSerializer } from "../serializers/ClLogoutCommandSerializer";
import { ClGetMoneyCommandSerializer } from "../serializers/ClGetMoneyCommandSerializer";
import { ClSitDownCommandSerializer } from "../serializers/ClSitDownCommandSerializer";
import { ClMoreMoneyCommandSerializer } from "../serializers/ClMoreMoneyCommandSerializer";
import { ClUserActionCommandSerializer } from "../serializers/ClUserActionCommandSerializer";
import { ClBackCommandSerializer } from "../serializers/ClBackCommandSerializer";
import { ClActionInAdvanceCommandSerializer } from "../serializers/ClActionInAdvanceCommandSerializer";
import { ClPingCommandSerializer } from "../serializers/ClPingCommandSerializer";
import { ClKeepAliveCommandSerializer } from "../serializers/ClKeepAliveCommandSerializer";
import { ClSendUserPassCommandSerializer } from "../serializers/ClSendUserPassCommandSerializer";
import { ClGetHandHistoryCommandSerializer } from "../serializers/ClGetHandHistoryCommandSerializer";
import { ClSubscribeForJackpotsCommandSerializer } from "../serializers/ClSubscribeForJackpotsCommandSerializer";
import { ClUnsubscribeFromJackpotsCommandSerializer } from "../serializers/ClUnsubscribeFromJackpotsCommandSerializer";
import { ClSubscribeForBBJNotificationsCommandSerializer } from "../serializers/ClSubscribeForBBJNotificationsCommandSerializer";
import { ClDrawCardsCommandSerializer } from "../serializers/ClDrawCardsCommandSerializer";
import { ClAutoTopupInfoCommandSerializer } from "../serializers/ClAutoTopupInfoCommandSerializer";
import { ClNotifyLocaleIdChangeCommandSerializer } from "../serializers/ClNotifyLocaleIdChangeCommandSerializer";
import { ClSetMyNickNameCommandSerializer } from "../serializers/ClSetMyNickNameCommandSerializer";
import { SrvTourCountersInfoCommandSerializer } from "../serializers/SrvTourCountersInfoCommandSerializer";
import { SrvTournamentsInfoCommandSerializer } from "../serializers/SrvTournamentsInfoCommandSerializer";
import { SrvTournamentsInfoSnapshotCommandSerializer } from "../serializers/SrvTournamentsInfoSnapshotCommandSerializer";
import { SrvTourDetailsCommandSerializer } from "../serializers/SrvTourDetailsCommandSerializer";
import { SrvTournamentTemplatesInfoCommandSerializer } from "../serializers/SrvTournamentTemplatesInfoCommandSerializer";
import { SrvTourQualifiersCommandSerializer } from "../serializers/SrvTourQualifiersCommandSerializer";
import { SrvUnknownTourCommandSerializer } from "../serializers/SrvUnknownTourCommandSerializer";
import { SrvTourTableInfoCommandSerializer } from "../serializers/SrvTourTableInfoCommandSerializer";
import { SrvTourStartInfoCommandSerializer } from "../serializers/SrvTourStartInfoCommandSerializer";
import { SrvLevelSwitchCommandSerializer } from "../serializers/SrvLevelSwitchCommandSerializer";
import { SrvTourMoneyCommandSerializer } from "../serializers/SrvTourMoneyCommandSerializer";
import { SrvTourUnregisterResultCommandSerializer } from "../serializers/SrvTourUnregisterResultCommandSerializer";
import { SrvTourRegisterResultCommandSerializer } from "../serializers/SrvTourRegisterResultCommandSerializer";
import { SrvTourTourneyStatusCommandSerializer } from "../serializers/SrvTourTourneyStatusCommandSerializer";
import { SrvMultiTourInitializeCommandSerializer } from "../serializers/SrvMultiTourInitializeCommandSerializer";
import { SrvTourMoveToTableCommandSerializer } from "../serializers/SrvTourMoveToTableCommandSerializer";
import { SrvTourPlayerFinishedCommandSerializer } from "../serializers/SrvTourPlayerFinishedCommandSerializer";
import { SrvNewTourTablesCommandSerializer } from "../serializers/SrvNewTourTablesCommandSerializer";
import { SrvUpdateTablesCommandSerializer } from "../serializers/SrvUpdateTablesCommandSerializer";
import { SrvTourSeatInfoCommandSerializer } from "../serializers/SrvTourSeatInfoCommandSerializer";
import { SrvUpdatePlayersCommandSerializer } from "../serializers/SrvUpdatePlayersCommandSerializer";
import { SrvUpdateMinPlayersToStartCommandSerializer } from "../serializers/SrvUpdateMinPlayersToStartCommandSerializer";
import { SrvUpdatePrizeDescrCommandSerializer } from "../serializers/SrvUpdatePrizeDescrCommandSerializer";
import { SrvGetExtraMoneyReplyCommandSerializer } from "../serializers/SrvGetExtraMoneyReplyCommandSerializer";
import { SrvTourProtectionErrorCommandSerializer } from "../serializers/SrvTourProtectionErrorCommandSerializer";
import { SrvPlayersOnTableCommandSerializer } from "../serializers/SrvPlayersOnTableCommandSerializer";
import { SrvTakeSeatInfoCommandSerializer } from "../serializers/SrvTakeSeatInfoCommandSerializer";
import { SrvTourFinishedInfoCommandSerializer } from "../serializers/SrvTourFinishedInfoCommandSerializer";
import { SrvMoreToursInitInfoCommandSerializer } from "../serializers/SrvMoreToursInitInfoCommandSerializer";
import { SrvUpdateMoreToursPrizesInfoCommandSerializer } from "../serializers/SrvUpdateMoreToursPrizesInfoCommandSerializer";
import { SrvSendTourAutoMsgCommandSerializer } from "../serializers/SrvSendTourAutoMsgCommandSerializer";
import { SrvTourStartingInfoCommandSerializer } from "../serializers/SrvTourStartingInfoCommandSerializer";
import { SrvTourSittingOutPlayersCommandSerializer } from "../serializers/SrvTourSittingOutPlayersCommandSerializer";
import { SrvTourPlayerSitOutCommandSerializer } from "../serializers/SrvTourPlayerSitOutCommandSerializer";
import { SrvTourPlayerBackOnTableCommandSerializer } from "../serializers/SrvTourPlayerBackOnTableCommandSerializer";
import { SrvTourEndRemainingHandsCommandSerializer } from "../serializers/SrvTourEndRemainingHandsCommandSerializer";
import { SrvTourEndRemainingHandsUpdateCommandSerializer } from "../serializers/SrvTourEndRemainingHandsUpdateCommandSerializer";
import { SrvTourEndRemainingTimeCommandSerializer } from "../serializers/SrvTourEndRemainingTimeCommandSerializer";
import { SrvTourEndRemainingPlayersCommandSerializer } from "../serializers/SrvTourEndRemainingPlayersCommandSerializer";
import { SrvTourEndRemainingPlayersUpdateCommandSerializer } from "../serializers/SrvTourEndRemainingPlayersUpdateCommandSerializer";
import { SrvTourReenterResultCommandSerializer } from "../serializers/SrvTourReenterResultCommandSerializer";
import { SrvUpdateTourReentrantsCountCommandSerializer } from "../serializers/SrvUpdateTourReentrantsCountCommandSerializer";
import { SrvStartTourRematchVotingCommandSerializer } from "../serializers/SrvStartTourRematchVotingCommandSerializer";
import { SrvTourRematchVotingInProgressCommandSerializer } from "../serializers/SrvTourRematchVotingInProgressCommandSerializer";
import { SrvPlayerVoteForRematchCommandSerializer } from "../serializers/SrvPlayerVoteForRematchCommandSerializer";
import { SrvVoteForTourRematchFailedCommandSerializer } from "../serializers/SrvVoteForTourRematchFailedCommandSerializer";
import { SrvTourPlayerTableCommandSerializer } from "../serializers/SrvTourPlayerTableCommandSerializer";
import { SrvStartReadyVotingCommandSerializer } from "../serializers/SrvStartReadyVotingCommandSerializer";
import { SrvGameStartDelayedForRebuysCommandSerializer } from "../serializers/SrvGameStartDelayedForRebuysCommandSerializer";
import { SrvStartRebuyGracePeriodCommandSerializer } from "../serializers/SrvStartRebuyGracePeriodCommandSerializer";
import { SrvPlayersInRebuyGracePeriodCommandSerializer } from "../serializers/SrvPlayersInRebuyGracePeriodCommandSerializer";
import { SrvGracePeriodRebuysAvailableCommandSerializer } from "../serializers/SrvGracePeriodRebuysAvailableCommandSerializer";
import { SrvNotifyForRebuyInGracePeriodCommandSerializer } from "../serializers/SrvNotifyForRebuyInGracePeriodCommandSerializer";
import { SrvSyncBreakInfoCommandSerializer } from "../serializers/SrvSyncBreakInfoCommandSerializer";
import { SrvUpdateRebuysCountCommandSerializer } from "../serializers/SrvUpdateRebuysCountCommandSerializer";
import { SrvUpdateAddonsCountCommandSerializer } from "../serializers/SrvUpdateAddonsCountCommandSerializer";
import { SrvTourTimesCommandSerializer } from "../serializers/SrvTourTimesCommandSerializer";
import { SrvTourLevelCommandSerializer } from "../serializers/SrvTourLevelCommandSerializer";
import { SrvLateRegLevelCommandSerializer } from "../serializers/SrvLateRegLevelCommandSerializer";
import { SrvRemainingUnitsTillTourEndCommandSerializer } from "../serializers/SrvRemainingUnitsTillTourEndCommandSerializer";
import { SrvUpdateWinnerPlacesCountCommandSerializer } from "../serializers/SrvUpdateWinnerPlacesCountCommandSerializer";
import { SrvLongCommentCommandSerializer } from "../serializers/SrvLongCommentCommandSerializer";
import { SrvUseBreaksCommandSerializer } from "../serializers/SrvUseBreaksCommandSerializer";
import { SrvPlayerTourInfoCommandSerializer } from "../serializers/SrvPlayerTourInfoCommandSerializer";
import { SrvPlayerRemovedFromTourCommandSerializer } from "../serializers/SrvPlayerRemovedFromTourCommandSerializer";
import { SrvSetSnGBeastJackpotCommandSerializer } from "../serializers/SrvSetSnGBeastJackpotCommandSerializer";
import { SrvUpdateSnGBeastJackpotCommandSerializer } from "../serializers/SrvUpdateSnGBeastJackpotCommandSerializer";
import { SrvUpdateJackpotsOnTourEndCommandSerializer } from "../serializers/SrvUpdateJackpotsOnTourEndCommandSerializer";
import { SrvStartAddonGracePeriodCommandSerializer } from "../serializers/SrvStartAddonGracePeriodCommandSerializer";
import { SrvGameStartDelayedForAddonsCommandSerializer } from "../serializers/SrvGameStartDelayedForAddonsCommandSerializer";
import { SrvPlayersInAddonGracePeriodCommandSerializer } from "../serializers/SrvPlayersInAddonGracePeriodCommandSerializer";
import { SrvGracePeriodAddonsAvailableCommandSerializer } from "../serializers/SrvGracePeriodAddonsAvailableCommandSerializer";
import { SrvNotifyForAddonInGracePeriodCommandSerializer } from "../serializers/SrvNotifyForAddonInGracePeriodCommandSerializer";
import { SrvNotifyForAddonRejectedByPlayerCommandSerializer } from "../serializers/SrvNotifyForAddonRejectedByPlayerCommandSerializer";
import { SrvTournamentRemovedCommandSerializer } from "../serializers/SrvTournamentRemovedCommandSerializer";
import { SrvNewPlayerInAddonGracePeriodCommandSerializer } from "../serializers/SrvNewPlayerInAddonGracePeriodCommandSerializer";
import { SrvTourStartTimeChangeCommandSerializer } from "../serializers/SrvTourStartTimeChangeCommandSerializer";
import { SrvJackpotTourBuyInInfoCommandSerializer } from "../serializers/SrvJackpotTourBuyInInfoCommandSerializer";
import { SrvJackpotTourRegRequestCommandSerializer } from "../serializers/SrvJackpotTourRegRequestCommandSerializer";
import { SrvJackpotTourCancelRegRequestCommandSerializer } from "../serializers/SrvJackpotTourCancelRegRequestCommandSerializer";
import { SrvJackpotTourForceCancelRegRequestCommandSerializer } from "../serializers/SrvJackpotTourForceCancelRegRequestCommandSerializer";
import { SrvJackpotTourForceCancelRegRequestExCommandSerializer } from "../serializers/SrvJackpotTourForceCancelRegRequestExCommandSerializer";
import { SrvStartSelectingBuyInMultiplierCommandSerializer } from "../serializers/SrvStartSelectingBuyInMultiplierCommandSerializer";
import { SrvStartJackpotTourPrizeNegoCommandSerializer } from "../serializers/SrvStartJackpotTourPrizeNegoCommandSerializer";
import { SrvJackpotTourPrizeNegoInProgressCommandSerializer } from "../serializers/SrvJackpotTourPrizeNegoInProgressCommandSerializer";
import { SrvEndJackpotTourPrizeNegoCommandSerializer } from "../serializers/SrvEndJackpotTourPrizeNegoCommandSerializer";
import { SrvJackpotTourVoteForAltPrizesCommandSerializer } from "../serializers/SrvJackpotTourVoteForAltPrizesCommandSerializer";
import { SrvJackpotTourPrizeDistributionInfoCommandSerializer } from "../serializers/SrvJackpotTourPrizeDistributionInfoCommandSerializer";
import { SrvJackpotTourStartTimeCommandSerializer } from "../serializers/SrvJackpotTourStartTimeCommandSerializer";
import { SrvUnknownJackpotTourTemplateCommandSerializer } from "../serializers/SrvUnknownJackpotTourTemplateCommandSerializer";
import { SrvJackpotTourPlayerRegisteredCommandSerializer } from "../serializers/SrvJackpotTourPlayerRegisteredCommandSerializer";
import { SrvJackpotTourPrizeInfoCommandSerializer } from "../serializers/SrvJackpotTourPrizeInfoCommandSerializer";
import { SrvObserveTournamentTableCommandSerializer } from "../serializers/SrvObserveTournamentTableCommandSerializer";
import { SrvCanObserveTourTemplateTableCommandSerializer } from "../serializers/SrvCanObserveTourTemplateTableCommandSerializer";
import { SrvRecentWinnersCommandSerializer } from "../serializers/SrvRecentWinnersCommandSerializer";
import { SrvTournamentTemplateGetRegCountCommandSerializer } from "../serializers/SrvTournamentTemplateGetRegCountCommandSerializer";
import { SrvTourPlayerPositionCommandSerializer } from "../serializers/SrvTourPlayerPositionCommandSerializer";
import { SrvTourAverageChipsCommandSerializer } from "../serializers/SrvTourAverageChipsCommandSerializer";
import { SrvPlayerTournamentViewCommandSerializer } from "../serializers/SrvPlayerTournamentViewCommandSerializer";
import { SrvTourPlayersCountCommandSerializer } from "../serializers/SrvTourPlayersCountCommandSerializer";
import { SrvTourSmallestStackCommandSerializer } from "../serializers/SrvTourSmallestStackCommandSerializer";
import { SrvTourPrizePoolCommandSerializer } from "../serializers/SrvTourPrizePoolCommandSerializer";
import { SrvEnableIncrementalTourAwardingCommandSerializer } from "../serializers/SrvEnableIncrementalTourAwardingCommandSerializer";
import { SrvDisableIncrementalTourAwardingCommandSerializer } from "../serializers/SrvDisableIncrementalTourAwardingCommandSerializer";
import { SrvTourAwardIncrementedCommandSerializer } from "../serializers/SrvTourAwardIncrementedCommandSerializer";
import { SrvTourPrizeDistributionStartedCommandSerializer } from "../serializers/SrvTourPrizeDistributionStartedCommandSerializer";
import { ClGetTourCountersInfoCommandSerializer } from "../serializers/ClGetTourCountersInfoCommandSerializer";
import { ClGetTournamentsInfoCommandSerializer } from "../serializers/ClGetTournamentsInfoCommandSerializer";
import { ClSubscribeForTournamentTemplatesInfoCommandSerializer } from "../serializers/ClSubscribeForTournamentTemplatesInfoCommandSerializer";
import { ClUnsubscribeForTournamentTemplatesInfoCommandSerializer } from "../serializers/ClUnsubscribeForTournamentTemplatesInfoCommandSerializer";
import { ClSubscribeForTournamentTemplateDetailsInfoCommandSerializer } from "../serializers/ClSubscribeForTournamentTemplateDetailsInfoCommandSerializer";
import { ClUnsubscribeForTournamentTemplateDetailsInfoCommandSerializer } from "../serializers/ClUnsubscribeForTournamentTemplateDetailsInfoCommandSerializer";
import { ClObserveTournamentTemplateTableCommandSerializer } from "../serializers/ClObserveTournamentTemplateTableCommandSerializer";
import { ClTournamentTemplateGetRegCountCommandSerializer } from "../serializers/ClTournamentTemplateGetRegCountCommandSerializer";
import { ClPeekTournamentsInfoCommandSerializer } from "../serializers/ClPeekTournamentsInfoCommandSerializer";
import { ClGetTourDetailsCommandSerializer } from "../serializers/ClGetTourDetailsCommandSerializer";
import { ClSubscribeForQualifiersCommandSerializer } from "../serializers/ClSubscribeForQualifiersCommandSerializer";
import { ClUnsubscribeFromQualifiersCommandSerializer } from "../serializers/ClUnsubscribeFromQualifiersCommandSerializer";
import { ClGetMultiInitializeInfoCommandSerializer } from "../serializers/ClGetMultiInitializeInfoCommandSerializer";
import { ClGetTourSeatInfoCommandSerializer } from "../serializers/ClGetTourSeatInfoCommandSerializer";
import { ClGetTourTableInfoCommandSerializer } from "../serializers/ClGetTourTableInfoCommandSerializer";
import { ClGetUpdateInfoCommandSerializer } from "../serializers/ClGetUpdateInfoCommandSerializer";
import { ClUnsubscribeClientCommandSerializer } from "../serializers/ClUnsubscribeClientCommandSerializer";
import { ClTourUnregisterCommandSerializer } from "../serializers/ClTourUnregisterCommandSerializer";
import { ClTourRegisterCommandSerializer } from "../serializers/ClTourRegisterCommandSerializer";
import { ClGetTourMoneyCommandSerializer } from "../serializers/ClGetTourMoneyCommandSerializer";
import { ClMoveMe2MyTableCommandSerializer } from "../serializers/ClMoveMe2MyTableCommandSerializer";
import { ClGetExtraMoneyInfoCommandSerializer } from "../serializers/ClGetExtraMoneyInfoCommandSerializer";
import { ClSubscribeForTableCommandSerializer } from "../serializers/ClSubscribeForTableCommandSerializer";
import { ClGetMoreToursInitInfoCommandSerializer } from "../serializers/ClGetMoreToursInitInfoCommandSerializer";
import { ClUpdateMoreToursInfoCommandSerializer } from "../serializers/ClUpdateMoreToursInfoCommandSerializer";
import { ClGetCondPrizeLimitInfoCommandSerializer } from "../serializers/ClGetCondPrizeLimitInfoCommandSerializer";
import { ClVoteCommandSerializer } from "../serializers/ClVoteCommandSerializer";
import { ClVoteForRematchCommandSerializer } from "../serializers/ClVoteForRematchCommandSerializer";
import { ClTourReenterCommandSerializer } from "../serializers/ClTourReenterCommandSerializer";
import { ClGetTourPlayerTableCommandSerializer } from "../serializers/ClGetTourPlayerTableCommandSerializer";
import { ClGetSyncBreakInfoCommandSerializer } from "../serializers/ClGetSyncBreakInfoCommandSerializer";
import { ClSetAutoRebuysCommandSerializer } from "../serializers/ClSetAutoRebuysCommandSerializer";
import { ClSetAutoAddonCommandSerializer } from "../serializers/ClSetAutoAddonCommandSerializer";
import { ClRequestInstantRebuyCommandSerializer } from "../serializers/ClRequestInstantRebuyCommandSerializer";
import { ClExtraChipsPrefChangedCommandSerializer } from "../serializers/ClExtraChipsPrefChangedCommandSerializer";
import { ClUnsubscribeFromTableCommandSerializer } from "../serializers/ClUnsubscribeFromTableCommandSerializer";
import { ClSubscribeForSnGBeastJackpotCommandSerializer } from "../serializers/ClSubscribeForSnGBeastJackpotCommandSerializer";
import { ClUnsubscribeFromSnGBeastJackpotCommandSerializer } from "../serializers/ClUnsubscribeFromSnGBeastJackpotCommandSerializer";
import { ClRequestInstantAddonCommandSerializer } from "../serializers/ClRequestInstantAddonCommandSerializer";
import { ClRejectInstantAddonCommandSerializer } from "../serializers/ClRejectInstantAddonCommandSerializer";
import { ClJackpotTourRegRequestCommandSerializer } from "../serializers/ClJackpotTourRegRequestCommandSerializer";
import { ClJackpotTourCancelRegRequestCommandSerializer } from "../serializers/ClJackpotTourCancelRegRequestCommandSerializer";
import { ClGetJackpotTourBuyInInfoCommandSerializer } from "../serializers/ClGetJackpotTourBuyInInfoCommandSerializer";
import { ClSubscribeForPlayerTournamentViewCommandSerializer } from "../serializers/ClSubscribeForPlayerTournamentViewCommandSerializer";
import { ClUnsubscribeFromPlayerTournamentViewCommandSerializer } from "../serializers/ClUnsubscribeFromPlayerTournamentViewCommandSerializer";
import { ClMiscCashierInfoCommandSerializer } from "../serializers/ClMiscCashierInfoCommandSerializer";
import { ClMiscGenerateSessionCommandSerializer } from "../serializers/ClMiscGenerateSessionCommandSerializer";
import { ClMiscForgotPassCommandSerializer } from "../serializers/ClMiscForgotPassCommandSerializer";
import { ClRplGetHandHistoryCommandSerializer } from "../serializers/ClRplGetHandHistoryCommandSerializer";
import { ClGetPlayerProfileCommandSerializer } from "../serializers/ClGetPlayerProfileCommandSerializer";


import { ICommandSerializersMap } from "../../core/maps/ICommandSerializersMap";
import { IPokerCommandSerializer } from "../../core/serializers/IPokerCommandSerializer";

export class PokerGeneratedCommandSerializersMap implements ICommandSerializersMap
{
	private static COMMAND_SERIALIZERS_MAP:{ [pid: number]: { [cid: number]: any } } =
	{
		1: {
					1: SrvHandShakeOKCommandSerializer,
					2: SrvErrorDisconnectedCommandSerializer,
					3: SrvConnectErrorCommandSerializer,
					6: SrvCompressedCommandSerializer,
					7: SrvSSLDataCommandSerializer,
					35: SrvConnectGameOKCommandSerializer,
					36: SrvServerInfoCommandSerializer,
					38: SrvServerCountersInfoCommandSerializer,
					39: SrvGameInfoCommandSerializer,
					40: SrvGameWaitersInfoCommandSerializer,
					42: SrvAdminMsgCommandSerializer,
					43: SrvWaitListCommandSerializer,
					48: SrvHandWinnersCommandSerializer,
					49: SrvShowHandsCommandSerializer,
					50: SrvPlayerChatMsgCommandSerializer,
					52: SrvObserverChatMsgCommandSerializer,
					53: SrvPlayerDelayedFoldCommandSerializer,
					54: SrvPlayerSecondsLeftToActCommandSerializer,
					55: SrvAwayPlayerPickedUpCommandSerializer,
					56: SrvFinishedOnPlaceCommandSerializer,
					57: SrvAddToWaitListOkCommandSerializer,
					59: SrvAddToWaitListErrorCommandSerializer,
					61: SrvRemoveFromWaitListOkCommandSerializer,
					63: SrvRemoveFromWaitListErrorCommandSerializer,
					68: SrvLogonOkCommandSerializer,
					69: SrvSitOkCommandSerializer,
					70: SrvBackOnSeatOkCommandSerializer,
					71: SrvSitErrorCommandSerializer,
					72: SrvLogonErrorCommandSerializer,
					73: SrvMoneyCommandSerializer,
					74: SrvUserStateOnTableCommandSerializer,
					75: SrvTableStateCommandSerializer,
					76: SrvCardDealCommandSerializer,
					77: SrvPotCardDealCommandSerializer,
					78: SrvTUShowDownCommandSerializer,
					79: SrvUserTurnCommandSerializer,
					80: SrvUserExtraTurnCommandSerializer,
					81: SrvUserActionNotifyCommandSerializer,
					82: SrvBetRoundCompleteCommandSerializer,
					83: SrvOutOfMoneyCommandSerializer,
					84: SrvUpdateHintTextCommandSerializer,
					85: SrvNewsCommandSerializer,
					87: SrvSessionCreatedCommandSerializer,
					90: SrvGameStartCommandSerializer,
					91: SrvAltCurrencyRateCommandSerializer,
					92: SrvPingCommandSerializer,
					93: SrvPlayerProfileCommandSerializer,
					95: SrvCashierStatusCommandSerializer,
					111: SrvRplHandHistoryCommandSerializer,
					113: SrvCatchThisNumberCommandSerializer,
					115: SrvTransferUncalledBetCommandSerializer,
					116: SrvPrizePoolClosedCommandSerializer,
					122: SrvPlayerRanksCommandSerializer,
					125: SrvMoveDealChipCommandSerializer,
					127: SrvHoldemPlayerPosCommandSerializer,
					128: SrvLogonChangeCommandSerializer,
					130: SrvRequestPassCommandSerializer,
					131: SrvPasswordErrorCommandSerializer,
					134: SrvDeadBetCommandSerializer,
					137: SrvSetJackpotsCommandSerializer,
					138: SrvUpdateJackpotsCommandSerializer,
					147: SrvUserTurnTimeoutCommandSerializer,
					148: SrvUserTurnExtraTimeoutCommandSerializer,
					149: SrvUserMoreMoneyNotifyCommandSerializer,
					150: SrvDisconnectNotifyCommandSerializer,
					151: SrvDrawCardsCommandSerializer,
					152: SrvUserDrawCardsNotifyCommandSerializer,
					158: SrvRakeRacePointsCommandSerializer,
					159: SrvUpdateTimeBankConfigCommandSerializer,
					160: SrvPlayerParticipationsCommandSerializer,
					162: SrvNetworksConfigurationCommandSerializer,
					163: SrvUnreadMessageCountCommandSerializer,
					164: SrvGameResetCommandSerializer,
					165: SrvCardDeckInUseCommandSerializer,
					166: SrvBetRoundStartCommandSerializer,
					
				},
			2: {
					4: ClHandShakeCommandSerializer,
					5: ClByeCommandSerializer,
					8: ClSSLDataCommandSerializer,
					2050: ClGetServerInfoCommandSerializer,
					2052: ClGetGameInfoCommandSerializer,
					2053: ClGetGameWaitersInfoCommandSerializer,
					2054: ClGetCountersInfoCommandSerializer,
					2056: ClChatMsgCommandSerializer,
					2057: ClAddToWaitListCommandSerializer,
					2059: ClAddGlobalWaitListCommandSerializer,
					2061: ClRemoveFromWaitListCommandSerializer,
					2063: ClAcceptInviteCommandSerializer,
					2064: ClRejectInviteCommandSerializer,
					2068: ClConnectGameCommandSerializer,
					2069: ClLogonCommandSerializer,
					2070: ClLogoutCommandSerializer,
					2071: ClGetMoneyCommandSerializer,
					2073: ClSitDownCommandSerializer,
					2074: ClMoreMoneyCommandSerializer,
					2076: ClUserActionCommandSerializer,
					2077: ClBackCommandSerializer,
					2079: ClActionInAdvanceCommandSerializer,
					2081: ClPingCommandSerializer,
					2082: ClKeepAliveCommandSerializer,
					2086: ClSendUserPassCommandSerializer,
					2088: ClGetHandHistoryCommandSerializer,
					2090: ClSubscribeForJackpotsCommandSerializer,
					2091: ClUnsubscribeFromJackpotsCommandSerializer,
					2092: ClSubscribeForBBJNotificationsCommandSerializer,
					2104: ClDrawCardsCommandSerializer,
					2108: ClAutoTopupInfoCommandSerializer,
					2109: ClNotifyLocaleIdChangeCommandSerializer,
					2112: ClSetMyNickNameCommandSerializer,
					
				},
			3: {
					101: SrvTourCountersInfoCommandSerializer,
					102: SrvTournamentsInfoCommandSerializer,
					104: SrvTournamentsInfoSnapshotCommandSerializer,
					106: SrvTourDetailsCommandSerializer,
					107: SrvTournamentTemplatesInfoCommandSerializer,
					108: SrvTourQualifiersCommandSerializer,
					109: SrvUnknownTourCommandSerializer,
					110: SrvTourTableInfoCommandSerializer,
					111: SrvTourStartInfoCommandSerializer,
					112: SrvLevelSwitchCommandSerializer,
					113: SrvTourMoneyCommandSerializer,
					114: SrvTourUnregisterResultCommandSerializer,
					115: SrvTourRegisterResultCommandSerializer,
					116: SrvTourTourneyStatusCommandSerializer,
					117: SrvMultiTourInitializeCommandSerializer,
					118: SrvTourMoveToTableCommandSerializer,
					119: SrvTourPlayerFinishedCommandSerializer,
					120: SrvNewTourTablesCommandSerializer,
					121: SrvUpdateTablesCommandSerializer,
					122: SrvTourSeatInfoCommandSerializer,
					123: SrvUpdatePlayersCommandSerializer,
					125: SrvUpdateMinPlayersToStartCommandSerializer,
					126: SrvUpdatePrizeDescrCommandSerializer,
					127: SrvGetExtraMoneyReplyCommandSerializer,
					128: SrvTourProtectionErrorCommandSerializer,
					129: SrvPlayersOnTableCommandSerializer,
					130: SrvTakeSeatInfoCommandSerializer,
					132: SrvTourFinishedInfoCommandSerializer,
					139: SrvMoreToursInitInfoCommandSerializer,
					142: SrvUpdateMoreToursPrizesInfoCommandSerializer,
					144: SrvSendTourAutoMsgCommandSerializer,
					148: SrvTourStartingInfoCommandSerializer,
					151: SrvTourSittingOutPlayersCommandSerializer,
					152: SrvTourPlayerSitOutCommandSerializer,
					153: SrvTourPlayerBackOnTableCommandSerializer,
					163: SrvTourEndRemainingHandsCommandSerializer,
					164: SrvTourEndRemainingHandsUpdateCommandSerializer,
					165: SrvTourEndRemainingTimeCommandSerializer,
					166: SrvTourEndRemainingPlayersCommandSerializer,
					167: SrvTourEndRemainingPlayersUpdateCommandSerializer,
					171: SrvTourReenterResultCommandSerializer,
					173: SrvUpdateTourReentrantsCountCommandSerializer,
					174: SrvStartTourRematchVotingCommandSerializer,
					175: SrvTourRematchVotingInProgressCommandSerializer,
					176: SrvPlayerVoteForRematchCommandSerializer,
					177: SrvVoteForTourRematchFailedCommandSerializer,
					178: SrvTourPlayerTableCommandSerializer,
					179: SrvStartReadyVotingCommandSerializer,
					181: SrvGameStartDelayedForRebuysCommandSerializer,
					182: SrvStartRebuyGracePeriodCommandSerializer,
					183: SrvPlayersInRebuyGracePeriodCommandSerializer,
					184: SrvGracePeriodRebuysAvailableCommandSerializer,
					185: SrvNotifyForRebuyInGracePeriodCommandSerializer,
					186: SrvSyncBreakInfoCommandSerializer,
					187: SrvUpdateRebuysCountCommandSerializer,
					188: SrvUpdateAddonsCountCommandSerializer,
					189: SrvTourTimesCommandSerializer,
					190: SrvTourLevelCommandSerializer,
					191: SrvLateRegLevelCommandSerializer,
					192: SrvRemainingUnitsTillTourEndCommandSerializer,
					193: SrvUpdateWinnerPlacesCountCommandSerializer,
					194: SrvLongCommentCommandSerializer,
					195: SrvUseBreaksCommandSerializer,
					196: SrvPlayerTourInfoCommandSerializer,
					198: SrvPlayerRemovedFromTourCommandSerializer,
					200: SrvSetSnGBeastJackpotCommandSerializer,
					201: SrvUpdateSnGBeastJackpotCommandSerializer,
					202: SrvUpdateJackpotsOnTourEndCommandSerializer,
					203: SrvStartAddonGracePeriodCommandSerializer,
					204: SrvGameStartDelayedForAddonsCommandSerializer,
					205: SrvPlayersInAddonGracePeriodCommandSerializer,
					206: SrvGracePeriodAddonsAvailableCommandSerializer,
					207: SrvNotifyForAddonInGracePeriodCommandSerializer,
					208: SrvNotifyForAddonRejectedByPlayerCommandSerializer,
					209: SrvTournamentRemovedCommandSerializer,
					210: SrvNewPlayerInAddonGracePeriodCommandSerializer,
					211: SrvTourStartTimeChangeCommandSerializer,
					213: SrvJackpotTourBuyInInfoCommandSerializer,
					214: SrvJackpotTourRegRequestCommandSerializer,
					215: SrvJackpotTourCancelRegRequestCommandSerializer,
					216: SrvJackpotTourForceCancelRegRequestCommandSerializer,
					217: SrvJackpotTourForceCancelRegRequestExCommandSerializer,
					218: SrvStartSelectingBuyInMultiplierCommandSerializer,
					219: SrvStartJackpotTourPrizeNegoCommandSerializer,
					220: SrvJackpotTourPrizeNegoInProgressCommandSerializer,
					221: SrvEndJackpotTourPrizeNegoCommandSerializer,
					222: SrvJackpotTourVoteForAltPrizesCommandSerializer,
					223: SrvJackpotTourPrizeDistributionInfoCommandSerializer,
					224: SrvJackpotTourStartTimeCommandSerializer,
					225: SrvUnknownJackpotTourTemplateCommandSerializer,
					226: SrvJackpotTourPlayerRegisteredCommandSerializer,
					228: SrvJackpotTourPrizeInfoCommandSerializer,
					230: SrvObserveTournamentTableCommandSerializer,
					231: SrvCanObserveTourTemplateTableCommandSerializer,
					233: SrvRecentWinnersCommandSerializer,
					235: SrvTournamentTemplateGetRegCountCommandSerializer,
					237: SrvTourPlayerPositionCommandSerializer,
					238: SrvTourAverageChipsCommandSerializer,
					239: SrvPlayerTournamentViewCommandSerializer,
					240: SrvTourPlayersCountCommandSerializer,
					241: SrvTourSmallestStackCommandSerializer,
					242: SrvTourPrizePoolCommandSerializer,
					243: SrvEnableIncrementalTourAwardingCommandSerializer,
					244: SrvDisableIncrementalTourAwardingCommandSerializer,
					245: SrvTourAwardIncrementedCommandSerializer,
					246: SrvTourPrizeDistributionStartedCommandSerializer,
					
				},
			4: {
					2049: ClGetTourCountersInfoCommandSerializer,
					2050: ClGetTournamentsInfoCommandSerializer,
					2052: ClSubscribeForTournamentTemplatesInfoCommandSerializer,
					2053: ClUnsubscribeForTournamentTemplatesInfoCommandSerializer,
					2054: ClSubscribeForTournamentTemplateDetailsInfoCommandSerializer,
					2055: ClUnsubscribeForTournamentTemplateDetailsInfoCommandSerializer,
					2056: ClObserveTournamentTemplateTableCommandSerializer,
					2057: ClTournamentTemplateGetRegCountCommandSerializer,
					2058: ClPeekTournamentsInfoCommandSerializer,
					2059: ClGetTourDetailsCommandSerializer,
					2060: ClSubscribeForQualifiersCommandSerializer,
					2061: ClUnsubscribeFromQualifiersCommandSerializer,
					2062: ClGetMultiInitializeInfoCommandSerializer,
					2063: ClGetTourSeatInfoCommandSerializer,
					2064: ClGetTourTableInfoCommandSerializer,
					2065: ClGetUpdateInfoCommandSerializer,
					2066: ClUnsubscribeClientCommandSerializer,
					2067: ClTourUnregisterCommandSerializer,
					2068: ClTourRegisterCommandSerializer,
					2069: ClGetTourMoneyCommandSerializer,
					2070: ClMoveMe2MyTableCommandSerializer,
					2071: ClGetExtraMoneyInfoCommandSerializer,
					2077: ClSubscribeForTableCommandSerializer,
					2078: ClGetMoreToursInitInfoCommandSerializer,
					2079: ClUpdateMoreToursInfoCommandSerializer,
					2080: ClGetCondPrizeLimitInfoCommandSerializer,
					2082: ClVoteCommandSerializer,
					2083: ClVoteForRematchCommandSerializer,
					2085: ClTourReenterCommandSerializer,
					2086: ClGetTourPlayerTableCommandSerializer,
					2088: ClGetSyncBreakInfoCommandSerializer,
					2089: ClSetAutoRebuysCommandSerializer,
					2090: ClSetAutoAddonCommandSerializer,
					2091: ClRequestInstantRebuyCommandSerializer,
					2092: ClExtraChipsPrefChangedCommandSerializer,
					2094: ClUnsubscribeFromTableCommandSerializer,
					2095: ClSubscribeForSnGBeastJackpotCommandSerializer,
					2096: ClUnsubscribeFromSnGBeastJackpotCommandSerializer,
					2097: ClRequestInstantAddonCommandSerializer,
					2098: ClRejectInstantAddonCommandSerializer,
					2101: ClJackpotTourRegRequestCommandSerializer,
					2102: ClJackpotTourCancelRegRequestCommandSerializer,
					2103: ClGetJackpotTourBuyInInfoCommandSerializer,
					2105: ClSubscribeForPlayerTournamentViewCommandSerializer,
					2106: ClUnsubscribeFromPlayerTournamentViewCommandSerializer,
					
				},
			6: {
					105: ClMiscCashierInfoCommandSerializer,
					107: ClMiscGenerateSessionCommandSerializer,
					110: ClMiscForgotPassCommandSerializer,
					115: ClRplGetHandHistoryCommandSerializer,
					120: ClGetPlayerProfileCommandSerializer,
					
				},
			
	};

	public getCommand(pid:number, cid:number):IPokerCommandSerializer
	{
		return PokerGeneratedCommandSerializersMap.COMMAND_SERIALIZERS_MAP[pid][cid];
	}
};
