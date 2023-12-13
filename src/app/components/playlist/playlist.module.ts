import { NgModule } from "@angular/core";
import { PlaylistRoutingModule } from "./playlist-routing.module";
import { MatTableModule } from '@angular/material/table';
import { PlaylistComponent } from "./playlist.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations:[
        PlaylistComponent
    ],
    imports: [
        PlaylistRoutingModule,
        MatTableModule,
        SharedModule,
        CommonModule
    ]
})
export class PlaylistModule{}