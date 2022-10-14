import { RuntimeChecks } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

export const ExtModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
];

export const runtimeChecks: RuntimeChecks = {
  strictStateSerializability: false,
  strictActionSerializability: false,
  strictStateImmutability: true,
  strictActionImmutability: true,
  strictActionWithinNgZone: true,
  strictActionTypeUniqueness: true,
};
