import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { ForgotPasswordComponent } from 'app/main/authentication/forgot-password/forgot-password.component';


const routes = [
    {
        path     : '',
        component:ForgotPasswordComponent
    }
];
 
@NgModule({
    declarations: [
        ForgotPasswordComponent
           ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
    ]
})
export class ForgotPasswordModule
{
}
