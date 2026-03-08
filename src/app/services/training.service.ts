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
  intro: string;
  sections: Section[];
  tip: string | null;
  bullets: Bullet[];
  img?: string;
  imgAlt?: string;
  imgPos?: 'right' | 'bottom';
  imgRow?: string[];
  imgRowLabels?: string[];
}

@Injectable({ providedIn: 'root' })
export class TrainingService {
  readonly images = IMAGES;

  readonly trainingen: Training[] = [
    {
      num: '01', title: 'Wat is Phishing?', tag: 'Bewustwording',
      tagColor: '#00C4E8', tagBg: '#E6F9FD',
      img: 'img_s01', imgAlt: 'Niet klikken op phishing links', imgPos: 'right',
      intro: 'Hackers sturen nep-e-mailberichten. Je wordt gevraagd op een link te klikken, een bijlage te openen of ergens in te loggen — zo stelen ze jouw informatie.',
      sections: [{ label: 'Wat krijgt de hacker?', text: 'Als je klikt op een phishing-link krijgt de hacker direct toegang tot jouw privé-informatie, wachtwoorden en bestanden.' }],
      tip: '"Wat een boer niet kent, klikt hij niet"',
      bullets: []
    },
    {
      num: '02', title: 'Soorten Phishing', tag: 'Kanalen',
      tagColor: '#00C98A', tagBg: '#E6FAF4',
      imgRow: ['img_s02a', 'img_s02b', 'img_s02c'],
      imgRowLabels: ['Telefoon', 'SMS', 'E-mail'],
      intro: 'Phishing komt helaas niet voor in één specifieke vorm. Er zijn talloze manieren, maar er zijn veel voorkomende varianten waarop je getraind kunt zijn.',
      sections: [],
      tip: null,
      bullets: [
        { label: 'E-mail phishing', text: 'Een hacker wil dat jij klikt om jouw informatie te stelen. Ze vragen je op een link of bijlage te klikken. NIET KLIKKEN.', type: 'neutral' },
        { label: 'SMS phishing', text: 'Een hacker wil dat je klikt op een link in een SMS. Niet klikken — dan stelen ze jouw informatie.', type: 'neutral' },
        { label: 'Telefoon phishing', text: 'Hackers bellen je met een onbekend nummer. NIET opnemen of terugbellen. Wacht op voicemail en zoek het nummer ZELF op.', type: 'neutral' }
      ]
    },
    {
      num: '03', title: 'Wat komt na de @', tag: 'E-mail',
      tagColor: '#7B61FF', tagBg: '#EEEEFF',
      intro: 'Check het domein: een domein is wat na het @-teken komt, bijvoorbeeld @cybershield.com. Hackers gebruiken een NEP-domein om phishing-e-mails te sturen.',
      sections: [],
      tip: 'Kijk eerst op de officiële website of het klopt. Het laatste woord voor ".com" of ".nl" is de juiste indicatie.',
      bullets: [
        { label: 'Veilig', text: '@cybershield.com', type: 'safe' },
        { label: 'Gevaarlijk', text: '@cybershield.mail.com of noreply@mail.cybershield.com', type: 'danger' }
      ]
    },
    {
      num: '04', title: 'Spelling na de @', tag: 'E-mail',
      tagColor: '#7B61FF', tagBg: '#EEEEFF',
      intro: 'Hackers gebruiken NEP-spelling om een domein echt te laten lijken. Soms zijn het hele kleine letters die anders zijn — bijna niet te zien.',
      sections: [{ label: 'Verwarrende tekens', text: 'vv lijkt op w &nbsp;·&nbsp; rn lijkt op m &nbsp;·&nbsp; 0 (nul) lijkt op o (letter) &nbsp;·&nbsp; l (L) lijkt op 1 (één)' }],
      tip: 'Kijk goed naar de letters, ook als het domein lijkt te kloppen. Controleer altijd het domein van de e-mail.',
      bullets: []
    },
    {
      num: '05', title: 'Urgentie', tag: 'Psychologie',
      tagColor: '#FF6B35', tagBg: '#FFF0EB',
      img: 'img_s05', imgAlt: 'Vrouw reageert op urgente phishing e-mail', imgPos: 'bottom',
      intro: '"Oh nee, ik moet nu mijn wachtwoord veranderen!" Iedereen heeft haast. Hackers misbruiken dit om je sneller te laten klikken.',
      sections: [{ label: 'Herken urgentiephrases', text: '"Uw account wordt geblokkeerd" · "Actie vereist binnen 24 uur" · "Uw betaling is mislukt" · "Bevestig nu uw gegevens"' }],
      tip: 'Geeft het bericht je haast? Denk goed na. VERTRAAG jezelf — echte organisaties geven je altijd de tijd.',
      bullets: []
    },
    {
      num: '06', title: 'App/SMS Phishing', tag: 'Mobiel',
      tagColor: '#00C98A', tagBg: '#E6FAF4',
      img: 'img_s06', imgAlt: 'Voorbeeld phishing SMS bericht', imgPos: 'right',
      intro: 'Steeds vaker krijgen we sms-berichten van onbekende of buitenlandse nummers. Hackers misbruiken dit om je te laten klikken en je informatie te stelen.',
      sections: [],
      tip: 'Echte bedrijven en de overheid vragen je NOOIT via sms om op een link te klikken.',
      bullets: [
        { label: 'Vraag jezelf af', text: 'Waarom stuurt een bedrijf via een privénummer mij een sms?', type: 'neutral' },
        { label: 'Vraag jezelf af', text: 'Verwacht ik dit bericht van de KVK of Belastingdienst?', type: 'neutral' },
        { label: 'Vraag jezelf af', text: 'Doe ik überhaupt zaken met dit bedrijf?', type: 'neutral' }
      ]
    },
    {
      num: '07', title: 'Telefoon / Voice / Social Media Phishing', tag: 'Vishing',
      tagColor: '#FF6B35', tagBg: '#FFF0EB',
      img: 'img_s07', imgAlt: 'Vishing aanval illustratie', imgPos: 'right',
      intro: 'Hackers bellen je en proberen je informatie te stelen. Met AI kan tegenwoordig de stem van je baas worden nagebootst, of ze doen zich voor als bankmedewerker.',
      sections: [],
      tip: 'Neem geen onbekende nummers op. Bel altijd via het officiële nummer van de website terug.',
      bullets: [
        { text: 'Ik volg niet klakkeloos stappen van iemand die mij belt.', type: 'neutral' },
        { text: 'Ik vertrouw het niet — dus ik hang op.', type: 'neutral' },
        { text: 'Ik zoek het bedrijf op en bel zelf via de website terug.', type: 'neutral' }
      ]
    },
    {
      num: '08', title: 'Het lijkt altijd echt', tag: 'Herkenning',
      tagColor: '#00C4E8', tagBg: '#E6F9FD',
      img: 'img_s08', imgAlt: 'Nep ING phishing e-mail voorbeeld', imgPos: 'right',
      intro: 'Met mooie logo\'s worden je gegevens gestolen. Alleen omdat er een logo staat, betekent dit niet dat een e-mail officieel van ING of een andere organisatie komt.',
      sections: [{ label: 'Wat hackers nabootsen', text: 'Officiële logo\'s van ING, Belastingdienst, PostNL, Microsoft, DHL, bol.com en andere bekende merken worden 1-op-1 gekopieerd.' }],
      tip: 'Let altijd op het e-mailadres van de afzender. Check of je iets hoort te verwachten van deze afzender.',
      bullets: []
    },
    {
      num: '09', title: 'Soms is de afzender goed, maar het bericht malware', tag: 'Geavanceerd',
      tagColor: '#CC2222', tagBg: '#FFEAEA',
      img: 'img_s09', imgAlt: 'E-mail met verborgen phishing link analyse', imgPos: 'bottom',
      intro: 'Zelfs als een e-mail van een collega komt, betekent dat niet dat de e-mail geen phishing-link bevat. De phishing-link zit dan verborgen in een link of bestand.',
      sections: [{ label: 'Voorbeeld uit de praktijk', text: 'Je ontvangt salarisstroken van een collega, maar je werkt in marketing. Je hoort dit helemaal niet te ontvangen. Vraag altijd na.' }],
      tip: 'Verwacht ik dit? Hoor ik dit te ontvangen? Zo niet — vraag het na bij de persoon die het heeft gestuurd.',
      bullets: []
    },
    {
      num: '10', title: 'Credential Phishing', tag: 'Inloggevens',
      tagColor: '#CC2222', tagBg: '#FFEAEA',
      img: 'img_s10', imgAlt: 'Nep Microsoft Outlook inlogpagina', imgPos: 'right',
      intro: 'Hackers bouwen websites na. Hiermee vragen ze je via een link je wachtwoord te wijzigen. De website lijkt precies op die van Office — maar is NEP.',
      sections: [],
      tip: 'Log nooit in via een link in een e-mail. Typ altijd zelf de website in je browser.',
      bullets: [
        { text: 'Log nooit in via een link in een e-mail.', type: 'neutral' },
        { text: 'Typ altijd zelf de website in de browser.', type: 'neutral' },
        { text: 'Meld het direct als je per ongeluk hebt ingelogd via een link.', type: 'neutral' },
        { text: 'Wijzig regelmatig je wachtwoord — ook als preventie.', type: 'neutral' }
      ]
    }
  ];

  getImage(key: string): string {
    return this.images[key] ?? '';
  }
}
