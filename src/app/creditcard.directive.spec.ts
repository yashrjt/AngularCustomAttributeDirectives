import { CreditcardDirective } from './creditcard.directive';
import {AppComponent} from './app.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, Directive} from '@angular/core';
import {By} from '@angular/platform-browser';

/*
describe('CreditcardDirective', () => {
  it('should create an instance', () => {
    const directive = new CreditcardDirective();
    expect(directive).toBeTruthy();
  });
});
*/

describe('CreditCardDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CreditcardDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  /*spec*/
  it('should format a  credit card number by spaces', () => {
    const creditCardDirective =  fixture.debugElement.query(By.directive(CreditcardDirective)).nativeElement;
    creditCardDirective.value = '1234567';
    creditCardDirective.dispatchEvent(new Event('input'));
    expect(creditCardDirective.value).toBe('1234 567');
  });
     it('should have only 16 digits', () => {
    const creditCardDirective =  fixture.debugElement.query(By.directive(CreditcardDirective)).nativeElement;
    creditCardDirective.value = '1234567890123456789';
    creditCardDirective.dispatchEvent(new Event('input'));
    expect(creditCardDirective.value).toBe('1234 5678 9012 3456');
  });
});
