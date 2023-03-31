import { Injectable } from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  icon: string;
  role: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: '' },
  { state: 'category', name: 'Manage Category', icon: 'categirt', role: 'admindashboard' },
];

@Injectable()
export class MenuItems {
    getMenuItem(): Menu[] {
        return  MENUITEMS
    }
}