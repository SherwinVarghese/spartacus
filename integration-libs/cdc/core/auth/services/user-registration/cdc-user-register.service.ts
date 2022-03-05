import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AuthService,
  Command,
  CommandService,
  UserActions,
  WindowRef
} from '@spartacus/core';
import { User } from '@spartacus/user/account/root';
import {
  Title,
  UserRegisterFacade,
  UserSignUp
} from '@spartacus/user/profile/root';
import {
  UserProfileConnector, UserProfileService
} from 'feature-libs/user/profile/core';
import { CdcJsService } from 'integration-libs/cdc/root';
import { Observable } from 'rxjs';

@Injectable()
export class CDCUserRegisterService implements UserRegisterFacade {
  protected registerCommand: Command<{ user: UserSignUp }, User> =
    this.command.create(
      ({ user }) =>
        new Observable<User>((userRegistered) => {
          if (user.firstName && user.lastName && user.uid && user.password) {
            this.cdcJSService.registerUserWithoutScreenSet(user);
          }
          this.store.dispatch(new UserActions.RegisterUserSuccess());
          userRegistered.complete();
        })
    );


  constructor(
    protected userProfile: UserProfileService,
    protected userConnector: UserProfileConnector,
    protected authService: AuthService,
    protected command: CommandService,
    protected store: Store,
    protected winRef: WindowRef,
    protected cdcJSService: CdcJsService
  ) {}

  register(user: UserSignUp): Observable<User> {
    throw new Error('Method not implemented.' + user);
  }
  registerGuest(guid: string, password: string): Observable<User> {
    password = '';
    throw new Error('Method not implemented.' + guid + password);
  }
  getTitles(): Observable<Title[]> {
    throw new Error('Method not implemented.');
  }

}
