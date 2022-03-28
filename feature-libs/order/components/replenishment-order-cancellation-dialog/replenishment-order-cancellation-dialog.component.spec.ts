import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  GlobalMessageService,
  GlobalMessageType,
  I18nTestingModule,
  Translatable,
} from '@spartacus/core';
import {
  ReplenishmentOrder,
  ReplenishmentOrderHistoryFacade,
} from '@spartacus/order/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { KeyboardFocusTestingModule } from 'projects/storefrontlib/layout/a11y/keyboard-focus/focus-testing.module';
import { Observable, of } from 'rxjs';
import { ReplenishmentOrderCancellationDialogComponent } from './replenishment-order-cancellation-dialog.component';

const mockReplenishmentOrder: ReplenishmentOrder = {
  active: true,
  purchaseOrderNumber: 'test-po',
  replenishmentOrderCode: 'test-repl-order',
  entries: [{ entryNumber: 0, product: { name: 'test-product' } }],
};

class MockReplenishmentOrderHistoryFacade
  implements Partial<ReplenishmentOrderHistoryFacade>
{
  getReplenishmentOrderDetails(): Observable<ReplenishmentOrder> {
    return of(mockReplenishmentOrder);
  }

  getCancelReplenishmentOrderSuccess(): Observable<boolean> {
    return of(true);
  }

  cancelReplenishmentOrder(_replenishmentOrderCode: string): void {}

  clearCancelReplenishmentOrderProcessState(): void {}
}

class MockGlobalMessageService {
  add(
    _text: string | Translatable,
    _type: GlobalMessageType,
    _timeout?: number
  ): void {}
}

class MockLaunchDialogService {
  get data$(): Observable<any> {
    return of(undefined);
  }

  closeDialog(_reason: string): void {}
}

describe('ReplenishmentOrderCancellationDialogComponent', () => {
  let component: ReplenishmentOrderCancellationDialogComponent;
  let replenishmentOrderHistoryFacade: ReplenishmentOrderHistoryFacade;
  let globalMessageService: GlobalMessageService;
  let launchDialogService: LaunchDialogService;
  let fixture: ComponentFixture<ReplenishmentOrderCancellationDialogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [I18nTestingModule, KeyboardFocusTestingModule],
        declarations: [ReplenishmentOrderCancellationDialogComponent],
        providers: [
          {
            provide: ReplenishmentOrderHistoryFacade,
            useClass: MockReplenishmentOrderHistoryFacade,
          },
          { provide: GlobalMessageService, useClass: MockGlobalMessageService },
          { provide: LaunchDialogService, useClass: MockLaunchDialogService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(
      ReplenishmentOrderCancellationDialogComponent
    );
    replenishmentOrderHistoryFacade = TestBed.inject(
      ReplenishmentOrderHistoryFacade
    );
    globalMessageService = TestBed.inject(GlobalMessageService);
    launchDialogService = TestBed.inject(LaunchDialogService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to get replenishment order details', () => {
    let result: ReplenishmentOrder;

    replenishmentOrderHistoryFacade
      .getReplenishmentOrderDetails()
      .subscribe((data) => (result = data))
      .unsubscribe();

    expect(result).toEqual(mockReplenishmentOrder);
  });

  it('should redirect to same page and add global message on successful cancellation ', () => {
    spyOn(
      replenishmentOrderHistoryFacade,
      'cancelReplenishmentOrder'
    ).and.stub();
    spyOn(
      replenishmentOrderHistoryFacade,
      'clearCancelReplenishmentOrderProcessState'
    ).and.stub();
    spyOn(globalMessageService, 'add').and.stub();
    spyOn(launchDialogService, 'closeDialog').and.stub();

    component.onSuccess(true);

    expect(globalMessageService.add).toHaveBeenCalledWith(
      {
        key: 'orderDetails.cancelReplenishment.cancelSuccess',
        params: {
          replenishmentOrderCode: mockReplenishmentOrder.replenishmentOrderCode,
        },
      },
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );

    expect(launchDialogService.closeDialog).toHaveBeenCalledWith(
      'Successffully cancelled replenishment'
    );

    expect(
      replenishmentOrderHistoryFacade.clearCancelReplenishmentOrderProcessState
    ).toHaveBeenCalled();
  });

  it('should be able to call the close dialog', () => {
    spyOn(launchDialogService, 'closeDialog').and.stub();

    const mockCloseReason = 'test-close';

    component.close(mockCloseReason);

    expect(launchDialogService.closeDialog).toHaveBeenCalledWith(
      mockCloseReason
    );
  });

  it('should be able to call the cancel replenishment', () => {
    spyOn(
      replenishmentOrderHistoryFacade,
      'cancelReplenishmentOrder'
    ).and.stub();

    component.cancelReplenishment();

    expect(
      replenishmentOrderHistoryFacade.cancelReplenishmentOrder
    ).toHaveBeenCalledWith(mockReplenishmentOrder.replenishmentOrderCode);
  });
});
