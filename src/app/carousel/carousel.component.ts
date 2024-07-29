

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides = [
    { text: 'Des formulaires importants',
       image: 'assets/auth-slider1.png', caption:
       'Des themes specieux pour s adopter a votre style et a votre marque une impresion durable pour avec plus de 50+ themes etonnants. Transformez votre formulaire en un clin doeil ou personnsliser-le pour mettre en valeur votre flaire et votre creativite' },
    { text: 'Des formulaires plus intelligents',
       image: 'assets/auth-slider2.png', caption:
       'Fonctionnalités logiques pour une meilleure collecte de données Les formulaires intelligents donnent de meilleurs résultats. Rendez vos formulaires plus attrayants en affichant ou en masquant les questions en fonction des réponses.' },
    { text: 'Automatiser fotre fluxe de travail',
       image: 'assets/auth-slider3 (1).png', caption:
       'Plus de 5000+ integration pour travailler  avec votre utils prefere Form.app est une grande joueur d"equipe. Connectez votre formulaire a votre application preferer et profitez d"un flux de travail beaucoup plus simple' },
    { text: 'Rassemblez votre équipe',
       image: 'assets/auth-slider4.png', caption:
       'Le travail d"équipe fait fonctionner le rêve Invitez votre équipe et commencez à travailler ensemble sur forms.app en quelques secondes' }
  ];

  slideIndex = 0;
  slideInterval: any;

  ngOnInit() {
    this.showSlides();
  }

  ngOnDestroy() {
    clearTimeout(this.slideInterval);
  }

  showSlides() {
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => dot.classList.remove('active'));

    this.slideIndex++;
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    }

    const offset = -this.slideIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    dots[this.slideIndex].classList.add('active');

    this.slideInterval = setTimeout(() => this.showSlides(), 3000); 
  }

  currentSlide(n: number) {
    clearTimeout(this.slideInterval);
    this.slideIndex = n;
    this.showSlides();
  }
}


