import { TypeMapper } from '@exam-cell-common/utils';
import { makeMpesaAccessTokenController } from './accessToken';
import { makeMpesaB2CController } from './b2c';
import { makeMpesaB2CResultController } from './b2cResult';
import { makeMpesaB2CTimeoutController } from './b2cTimeout';
import { makeMpesaBalanceController } from './balance';
import { makeMpesaBalanceResultController } from './balanceResult';
import { makeMpesaBalanceTimeoutController } from './balanceTimeout';
import { makeMpesaConfirmationController } from './confirmation';
import { makeMpesaRegistrationController } from './register';
import { makeMpesaReversalController } from './reverse';
import { makeMpesaReversalResultController } from './reverseResult';
import { makeMpesaReversalTimeoutController } from './reverseTimeout';
import { makeMpesaSimulationController } from './simulate';
import { makeMpesaStkCallbackController } from './stkCallBack';
import { makeMpesaStkController } from './stk';
import { makeMpesaValidationController } from './validation';
import useCase from '../useCases';

const mpesaAccessTokenController = makeMpesaAccessTokenController({ useCase });
const mpesaB2CController = makeMpesaB2CController({ useCase });
const mpesaB2CResultController = makeMpesaB2CResultController({ useCase });
const mpesaB2CTimeoutController = makeMpesaB2CTimeoutController({ useCase });
const mpesaBalanceController = makeMpesaBalanceController({ useCase });
const mpesaBalanceResultController = makeMpesaBalanceResultController({
	useCase,
});
const mpesaBalanceTimeoutController = makeMpesaBalanceTimeoutController({
	useCase,
});
const mpesaConfirmationController = makeMpesaConfirmationController({
	useCase,
});
const mpesaRegistrationController = makeMpesaRegistrationController({
	useCase,
});
const mpesaReversalController = makeMpesaReversalController({ useCase });
const mpesaReversalResultController = makeMpesaReversalResultController({
	useCase,
});
const mpesaReversalTimeoutController = makeMpesaReversalTimeoutController({
	useCase,
});
const mpesaSimulationController = makeMpesaSimulationController({ useCase });
const mpesaStkCallbackController = makeMpesaStkCallbackController({ useCase });
const mpesaStkController = makeMpesaStkController({ useCase });
const mpesaValidationController = makeMpesaValidationController({ useCase });

export {
	mpesaAccessTokenController,
	mpesaB2CController,
	mpesaB2CResultController,
	mpesaB2CTimeoutController,
	mpesaBalanceController,
	mpesaBalanceResultController,
	mpesaBalanceTimeoutController,
	mpesaConfirmationController,
	mpesaRegistrationController,
	mpesaReversalController,
	mpesaReversalResultController,
	mpesaReversalTimeoutController,
	mpesaSimulationController,
	mpesaStkCallbackController,
	mpesaStkController,
	mpesaValidationController,
};
const mpesaController = Object.freeze({
	mpesaAccessTokenController,
	mpesaB2CController,
	mpesaB2CResultController,
	mpesaB2CTimeoutController,
	mpesaBalanceController,
	mpesaBalanceResultController,
	mpesaBalanceTimeoutController,
	mpesaConfirmationController,
	mpesaRegistrationController,
	mpesaReversalController,
	mpesaReversalResultController,
	mpesaReversalTimeoutController,
	mpesaSimulationController,
	mpesaStkCallbackController,
	mpesaStkController,
	mpesaValidationController,
});

type controllerType = typeof mpesaController;

export default mpesaController;

export type mpesaControllerType =
	TypeMapper<controllerType>[keyof controllerType];
