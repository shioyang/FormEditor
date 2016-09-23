import { Component } from '@angular/core';

@Component({
    selector: 'new-form',
    templateUrl: './new-form.component.html',
    styles: []
})
export class NewFormComponent {
    onGoBack(): void {
        window.history.back();
    }
}
