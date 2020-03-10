import { async, TestBed } from '@angular/core/testing';
import { UdemyCourseFormComponent } from './udemy-course-form.component';
describe('UdemyCourseFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UdemyCourseFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UdemyCourseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=udemy-course-form.component.spec.js.map