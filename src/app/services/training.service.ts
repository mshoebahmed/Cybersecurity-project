import { Injectable } from '@angular/core';
import { IMAGES } from '../../assets/images';

export interface Bullet {
  label?: string;
  text: string;
  type: 'safe' | 'danger' | 'neutral';
}

export interface Section {
  label: string;
  text: string;
}

export interface Training {
  num: string;
  title: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  image:string;
}

@Injectable({ providedIn: 'root' })
export class TrainingService {
  readonly images = IMAGES;

  readonly trainingen: Training[] = [
    {
      num: '01', title: 'Wat is Phishing?', tag: 'Bewustwording',
      tagColor: '#00C4E8', tagBg: '#E6F9FD',
      image:"assets/slide1.png"
   
    },
    {
      num: '02', title: 'Soorten Phishing', tag: 'Kanalen',
      tagColor: '#00C98A', tagBg: '#E6FAF4',
      image:"assets/slide2.png"
  
    },
    {
      num: '03', title: 'Wat komt na de @', tag: 'E-mail',
      tagColor: '#7B61FF', tagBg: '#EEEEFF',
      image:"assets/slide3.png"
    },
    {
      num: '04', title: 'Spelling na de @', tag: 'E-mail',
      tagColor: '#7B61FF', tagBg: '#EEEEFF',
      image:"assets/slide4.gif"
    },
    {
      num: '05', title: 'Urgentie', tag: 'Psychologie',
      tagColor: '#FF6B35', tagBg: '#FFF0EB',
      image:"assets/slide5.png"
    },
    {
      num: '06', title: 'App/SMS Phishing', tag: 'Mobiel',
      tagColor: '#00C98A', tagBg: '#E6FAF4',
      image:"assets/slide6.png"
    },
    {
      num: '07', title: 'Telefoon / Voice / Social Media Phishing', tag: 'Vishing',
      tagColor: '#FF6B35', tagBg: '#FFF0EB',
      image:"assets/slide7.png"
    },
    {
      num: '08', title: 'Het lijkt altijd echt', tag: 'Herkenning',
      tagColor: '#00C4E8', tagBg: '#E6F9FD',
      image:"assets/slide8.png"
    },
    {
      num: '09', title: 'Soms is de afzender goed, maar het bericht malware', tag: 'Geavanceerd',
      tagColor: '#CC2222', tagBg: '#FFEAEA',
      image:"assets/slide9.png"
    },
    {
      num: '10', title: 'Credential Phishing', tag: 'Inloggevens',
      tagColor: '#CC2222', tagBg: '#FFEAEA',
      image:"assets/slide10.png"
    }
  ];

  getImage(key: string): string {
    return this.images[key] ?? '';
  }
}
