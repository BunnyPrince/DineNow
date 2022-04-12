import { NgModule } from '@angular/core';

import ApperyioControlValidationDirective from './apperyio_control_validation_directive';
import ApperyioFormChangeDirective from './apperyio_form_change_directive';
import ApperyioPasswordShowDirective from './apperyio_password_show_directive';

@NgModule({
    declarations: [
        ApperyioControlValidationDirective,
        ApperyioFormChangeDirective,
        ApperyioPasswordShowDirective,
    ],
    exports: [
        ApperyioControlValidationDirective,
        ApperyioFormChangeDirective,
        ApperyioPasswordShowDirective,
    ]
})
export class ApperyioDeclarablesModule {}
