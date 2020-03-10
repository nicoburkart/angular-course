import { async, TestBed } from '@angular/core/testing';
import { BootstrapPanelComponent } from './bootstrap-panel.component';
describe('BootstrapPanelComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BootstrapPanelComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BootstrapPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bootstrap-panel.component.spec.js.map