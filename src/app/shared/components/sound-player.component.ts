import { Component, Input, ViewChild, ElementRef, SimpleChanges   } from '@angular/core';
import { IPlaylist } from 'src/app/components/playlist/model/playlist';

@Component({
  selector: 'app-sound-player',
  template: `
    <audio #audioPlayer controls *ngIf="selectedSound" style="width:100%;">
      <source src="./assets/music/{{selectedSound.filename}}" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
  `,
})
export class SoundPlayerComponent {
  @Input() selectedSound: IPlaylist | null = null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedSound']) {
        this.selectedSound = changes['selectedSound'].currentValue;
        this.loadAndPlayAudio()
    }
  }

  private loadAndPlayAudio() {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.load();
    }
  }
}