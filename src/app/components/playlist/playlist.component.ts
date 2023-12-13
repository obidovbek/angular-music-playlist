import { Component } from "@angular/core";
import { IPlaylist } from "./model/playlist";
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent{
    selectedSound!:IPlaylist|null;
    showPlayer:boolean=false;
    displayedColumns: string[] = ['id', 'name', 'filename'];
    playlist:IPlaylist[] = [
        { id: 1, name: 'celine dion - without you', filename: 'celine dion - without you.mp3' },
        { id: 2, name: 'Sound 2', filename: 'sound2.mp3' },
        { id: 3, name: 'Sound 3', filename: 'sound3.mp3' },
    ];
    dataSource = new MatTableDataSource(this.playlist);
}   