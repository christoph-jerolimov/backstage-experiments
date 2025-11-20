import { SchedulerServiceTaskScheduleDefinitionConfig } from '@backstage/backend-plugin-api';

export interface Config {
  scaffolder?: {
    scheduled?: Array<{
      templateRef: string;
      schedule: SchedulerServiceTaskScheduleDefinitionConfig;
      values?: any;
      secrets?: any;
    }>;
  };
}
