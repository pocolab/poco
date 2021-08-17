import { task } from 'hardhat/config';

import { eContractid, eEthereumNetwork } from '../../helpers/types';

import { registerContractInJsonDb } from '../../helpers/contracts-helpers';
import {
  getProxy,
  getTokenTimeLock,
} from '../../helpers/contracts-getters';


import { waitForTx } from '../../helpers/misc-utils';
import { OWNER_ADDRESS } from '../../helpers/constants';
import { verifyContract } from '../../helpers/etherscan-verification';

task(`deploy-poco-token`, `Deploys the contract`)
  .addFlag('verify', 'Verify StakedAave contract via Etherscan API.')
  .setAction(async ({ verify, vaultAddress, aaveAddress }, localBRE) => {
    await localBRE.run('set-DRE');

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    const network = localBRE.network.name as eEthereumNetwork;

    
    await deployPocoToken(verify)
  });