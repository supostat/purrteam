import { TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('About Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [LoginComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    //noinspection TypeScriptUnresolvedFunction
    expect(fixture.nativeElement.children[0].textContent).toContain('Login screen!');
  });

});
