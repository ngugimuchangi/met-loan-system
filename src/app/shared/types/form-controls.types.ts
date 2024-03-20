import { FormControl, FormGroup } from '@angular/forms';

export type FormControls<FormModel> = {
    // [K in keyof FormModel]: FormModel[K] extends {} ? FormGroup<FormControls<FormModel[K]>> : FormControl<FormModel[K]>;
    [K in keyof FormModel]: FormControl<FormModel[K]>;
}
