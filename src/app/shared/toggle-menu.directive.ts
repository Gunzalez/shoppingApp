import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    'selector': '[appToggleMenu]'
})
export class appToggleMenu {
    constructor(){}

    @HostBinding('class.open') isOpen:boolean = false

    @HostListener('click') myclick(){
        this.isOpen = !this.isOpen
    }
}