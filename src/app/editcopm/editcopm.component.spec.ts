import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcopmComponent } from './editcopm.component';

describe('EditcopmComponent', () => {
  let component: EditcopmComponent;
  let fixture: ComponentFixture<EditcopmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcopmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
