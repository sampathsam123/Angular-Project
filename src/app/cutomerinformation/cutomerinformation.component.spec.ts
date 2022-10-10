import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerinformationComponent } from './cutomerinformation.component';

describe('CutomerinformationComponent', () => {
  let component: CutomerinformationComponent;
  let fixture: ComponentFixture<CutomerinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
