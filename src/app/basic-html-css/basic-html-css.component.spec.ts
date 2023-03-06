import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHtmlCssComponent } from './basic-html-css.component';

describe('BasicHtmlCssComponent', () => {
  let component: BasicHtmlCssComponent;
  let fixture: ComponentFixture<BasicHtmlCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicHtmlCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicHtmlCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
