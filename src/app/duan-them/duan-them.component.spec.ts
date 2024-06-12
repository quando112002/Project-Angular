import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanThemComponent } from './duan-them.component';

describe('DuanThemComponent', () => {
  let component: DuanThemComponent;
  let fixture: ComponentFixture<DuanThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuanThemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuanThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
