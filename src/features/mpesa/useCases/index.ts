import { TypeMapper } from '@exam-cell-common/utils';
import { makeMpesaAccessTokenUseCase } from './accessToken';
import { makeMpesaB2CResultUrlUsecase } from './b2cResult';
import { makeMpesaB2CTimeoutUrlUsecase } from './b2cTimeout';
import { makeMpesaB2CUseCase } from './b2c';
import { makeMpesaBalanceResultUseCase } from './balanceResult';
import { makeMpesaBalanceTimeoutUseCase } from './balanceTimeout';
import { makeMpesaBalanceUseCase } from './balance';
import { makeMpesaConfirmationUseCase } from './confirmation';
import { makeMpesaRegistrationUseCase } from './register';
import { makeMpesaReversalUseCase } from './reverse';
import { makeMpesaReverseResultUrl } from './reverseResultUrl';
import { makeMpesaReverseTimeoutUrl } from './reverseTimeoutUrl';
import { makeMpesaSimulationUseCase } from './simulate';
import { makeMpesaStkCallbackUseCase } from './stkCallBack';
import { makeMpesaStkUseCase } from './stk';
import { makeMpesaValidationUseCase } from './validation';

const mpesaAccessTokenUseCase = makeMpesaAccessTokenUseCase();
const mpesaB2CResultUrlUsecase = makeMpesaB2CResultUrlUsecase();
const mpesaB2CTimeoutUrlUsecase = makeMpesaB2CTimeoutUrlUsecase();
const mpesaB2CUseCase = makeMpesaB2CUseCase();
const mpesaBalanceResultUseCase = makeMpesaBalanceResultUseCase();
const mpesaBalanceTimeoutUseCase = makeMpesaBalanceTimeoutUseCase();
const mpesaBalanceUseCase = makeMpesaBalanceUseCase();
const mpesaConfirmationUseCase = makeMpesaConfirmationUseCase();
const mpesaRegistrationUseCase = makeMpesaRegistrationUseCase();
const mpesaReversalUseCase = makeMpesaReversalUseCase();
const mpesaReverseResultUrl = makeMpesaReverseResultUrl();
const mpesaReverseTimeoutUrl = makeMpesaReverseTimeoutUrl();
const mpesaSimulationUseCase = makeMpesaSimulationUseCase();
const mpesaStkCallbackUseCase = makeMpesaStkCallbackUseCase();
const mpesaStkUseCase = makeMpesaStkUseCase();
const mpesaValidationUseCase = makeMpesaValidationUseCase();

export {
	mpesaAccessTokenUseCase,
	mpesaB2CResultUrlUsecase,
	mpesaB2CTimeoutUrlUsecase,
	mpesaB2CUseCase,
	mpesaBalanceResultUseCase,
	mpesaBalanceTimeoutUseCase,
	mpesaBalanceUseCase,
	mpesaConfirmationUseCase,
	mpesaRegistrationUseCase,
	mpesaReversalUseCase,
	mpesaReverseResultUrl,
	mpesaReverseTimeoutUrl,
	mpesaSimulationUseCase,
	mpesaStkCallbackUseCase,
	mpesaStkUseCase,
	mpesaValidationUseCase,
};

const mpesaUseCases = Object.freeze({
	mpesaAccessTokenUseCase,
	mpesaB2CResultUrlUsecase,
	mpesaB2CTimeoutUrlUsecase,
	mpesaB2CUseCase,
	mpesaBalanceResultUseCase,
	mpesaBalanceTimeoutUseCase,
	mpesaBalanceUseCase,
	mpesaConfirmationUseCase,
	mpesaRegistrationUseCase,
	mpesaReversalUseCase,
	mpesaReverseResultUrl,
	mpesaReverseTimeoutUrl,
	mpesaSimulationUseCase,
	mpesaStkCallbackUseCase,
	mpesaStkUseCase,
	mpesaValidationUseCase,
});

type useCases = typeof mpesaUseCases;

export type MpesaUseCasesType = TypeMapper<useCases>;

export default mpesaUseCases;
