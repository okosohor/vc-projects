import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageProductItem } from './project-page-product-item';

describe('ProjectPageProductItem', () => {
  let component: ProjectPageProductItem;
  let fixture: ComponentFixture<ProjectPageProductItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPageProductItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPageProductItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
