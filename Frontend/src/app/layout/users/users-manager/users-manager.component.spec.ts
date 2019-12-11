import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UsersManagerComponent } from './users-manager.component';

describe('UsersManagerComponent', () => {
    let component: UsersManagerComponent;
    let fixture: ComponentFixture<UsersManagerComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [UsersManagerComponent],
                schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
