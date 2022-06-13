export * from './lib/open-telemetry-hook';

import {
  EvaluationContext,
  FlagEvaluationOptions,
  Provider,
  ProviderMetadata,
  ResolutionDetails,
} from '@openfeature/nodejs-sdk';

export class MyProvider implements Provider {
  metadata: ProviderMetadata;
  /**
   * The context transformer can be used to validate and manipulate before flag evaluation. This is optional but can be useful in many situtations.
   */
  contextTransformer: () => {};

  constructor() {}

  resolveBooleanEvaluation(
    flagKey: string,
    defaultValue: boolean,
    transformedContext: EvaluationContext,
    options: FlagEvaluationOptions
  ): Promise<ResolutionDetails<boolean>> {
    throw new Error('Method not implemented.');
  }
  resolveStringEvaluation(
    flagKey: string,
    defaultValue: string,
    transformedContext: EvaluationContext,
    options: FlagEvaluationOptions
  ): Promise<ResolutionDetails<string>> {
    throw new Error('Method not implemented.');
  }
  resolveNumberEvaluation(
    flagKey: string,
    defaultValue: number,
    transformedContext: EvaluationContext,
    options: FlagEvaluationOptions
  ): Promise<ResolutionDetails<number>> {
    throw new Error('Method not implemented.');
  }
  resolveObjectEvaluation<U extends object>(
    flagKey: string,
    defaultValue: U,
    transformedContext: EvaluationContext,
    options: FlagEvaluationOptions
  ): Promise<ResolutionDetails<U>> {
    throw new Error('Method not implemented.');
  }
}
