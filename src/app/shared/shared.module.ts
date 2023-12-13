import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SoundPlayerComponent } from "./components/sound-player.component";
import { ContentLayoutComponent } from "./layout/content-layout.component";

@NgModule({
    declarations:[
        ContentLayoutComponent,
        SoundPlayerComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports:[SoundPlayerComponent]
})
export class SharedModule{}