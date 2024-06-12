import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanSuaComponent } from './duan-sua.component';

describe('DuanSuaComponent', () => {
  let component: DuanSuaComponent;
  let fixture: ComponentFixture<DuanSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuanSuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuanSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
