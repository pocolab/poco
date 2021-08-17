import {tEthereumAddress, eContractid} from './types';
import {getFirstSigner} from './contracts-getters';

import {withSaveAndVerify} from './contracts-helpers';
import {waitForTx} from './misc-utils';

export const deployPocoToken = async (
  verify?: boolean,
) => {
  const args: [] =[];
  return withSaveAndVerify(
    await new PocoTokenFactory(await getFirstSigner()).deploy(...args),
    eContractid.PocoToken,
    args,
    verify
  );
};

