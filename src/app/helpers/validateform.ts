import { FormControl, FormGroup } from "@angular/forms";

export default class Validateform{
static validateform(formGroup:FormGroup)
{
  Object.keys(formGroup.controls).forEach(field=>{
    const cont = formGroup.get(field);
    if(cont instanceof FormControl)
    {
        cont.markAsDirty({onlySelf:true});
    }
    else if(cont instanceof FormGroup)
    {
      this.validateform(cont)
    }
  })
}
}