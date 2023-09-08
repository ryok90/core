'use strict';

import { RuntimeGlobals, RuntimeModule } from 'webpack';
import { Template } from 'webpack';

class FederationModuleInfoRuntimeModule extends RuntimeModule {
  constructor() {
    super('federation module info runtime', RuntimeModule.STAGE_BASIC + 1);
  }

  /**
   * @returns {string} runtime code
   */
  // eslint-disable-next-line max-lines-per-function
  override generate() {
    return Template.asString([
      `${RuntimeGlobals.require}.federation = {`,
      Template.indent([`cache: {},`, `remotes: {},`, `moduleInfo: {},`]),
      `}`,
    ]);
  }
}

export default FederationModuleInfoRuntimeModule;