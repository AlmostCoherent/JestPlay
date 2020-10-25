import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FirstComponentComponent  } from '@jest-play/ui-components';
import { Component } from '@angular/core';

@Component({ selector: 'jest-play-first-component', template: '' })
export class FirstStubComponentComponent implements Partial<FirstComponentComponent> {
}

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, FirstStubComponentComponent],
    }).compileComponents();
  }); 

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jest-play'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jest-play');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to jest-play!'
    );
  });
});
