// const panels = document.querySelectorAll('.ea-world__panel');
// const pips = document.querySelectorAll('.ea-world__pip');
// const prevButton = document.querySelector('.ea-world__button--previous');
// const nextButton = document.querySelector('.ea-world__button--next');





// let currentSlide = 0;

// Funcție pentru a afișa un anumit slide
// function showSlide(n) {
  // panels.forEach((panel, index) => {
  //   panel.style.display = index === n ? 'block' : 'none';
  // });
//   pips.forEach((pip, index) => {
//     pip.classList.toggle('carousel-pip--active', index === n);
//   });
//   currentSlide = n;
// }

// Funcție pentru a afișa următorul slide
// function nextSlide() {
//   showSlide((currentSlide + 1) % panels.length);
// }

// Funcție pentru a afișa slide-ul anterior
// function prevSlide() {
//   showSlide((currentSlide - 1 + panels.length) % panels.length);
// }

// Afișează primul slide la încărcare
// showSlide(0);

// Adaugă event listener-e pentru butoane
// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// Afișează automat slide-uri la fiecare 5 secunde (opțional)
// setInterval(nextSlide, 5000);


document.addEventListener('DOMContentLoaded', () => {
  const slides = [
    {
      title: 'Wraeclast',
      image: '/assets/pics/ea-world/wraeclast.webp',
      decal: '/assets/pics/ea-world/text-decal-1.webp',
      pattern: '/assets/pics/ea-world/text-pattern-1.webp',
      content: `<p>Timp de 20 de ani, Wraeclast a fost eliberat de orice sursă de corupție, dar contele de Ogham, tentat de promisiunile puterii, intenționează să-l valorifice încă o dată.</p>
                <p>Morții învie, monștrii se mută și nebunia se răspândește din această nouă Sămânță a Corupției.</p>`
    },
    {
      title: 'Act 1',
      image: '/assets/pics/ea-world/act-i (1).webp',
      decal: '/assets/pics/ea-world/text-decal-2.webp',
      pattern: '/assets/pics/ea-world/text-pattern-2.webp',
      content: `<p>Corupția și bolile se înfloresc în fiecare colț întunecat al pădurilor primordiale din Ogham. Pietrele funerare uzate ale lui Ezomyte și Eternal marchează deopotrivă secole de vărsare de sânge, o amărăciune care a apărut din nou din cauza întoarcerii răului.</p>`
    },
    {
      title: 'Act 2',
      image: '/assets/pics/ea-world/act-ii.webp',
      decal: '/assets/pics/ea-world/text-decal-3.webp',
      pattern: '/assets/pics/ea-world/text-pattern-3.webp',
      content: `<p>Odinioară un pământ luxuriant și înverzit, Vastiri este acum mai cunoscut pentru nisipurile sale purpurie, pustii înnegrite și sălinurile aspre. În căutarea comerțului și a oazelor, caravanele nomade traversează dunele aspre, umbrite doar de ruinele vaste ale trecutului lor glorios.</p>`
    },
    {
      title: 'Act 3',
      image: '/assets/pics/ea-world/act-iii.webp',
      decal: '/assets/pics/ea-world/text-decal-4.webp',
      pattern: '/assets/pics/ea-world/text-pattern-4.webp',
      content: `<p>Junglele continentului interior ascund ziguratele în descompunere ale vechiului Vaal, cândva culmea civilizației pe Wraeclast. Acum, nu a mai rămas nimic decât piatră deteriorată, temple acoperite de vegetație și rămășițe ale Cataclismului care a pus capăt acestui popor odată mare. </p>`
    }
  ];

  let currentSlide = 0;

  const panelImage = document.querySelector('.ea-world__panel-image');
  const textFrame = document.querySelector('.ea-world-text-frame');
  const textTitle = document.querySelector('.ea-world-text-frame__title');
  const textContent = document.querySelector('.ea-world-text-frame__content');
  const pips = document.querySelectorAll('.ea-world__pip');

  const updateSlide = (index) => {
    const slide = slides[index];
    console.log(`Updating to slide ${index}`, slide);
    panelImage.src = slide.image;
    textFrame.style.setProperty('--2cbea550', `url('${slide.decal}')`);
    textFrame.style.setProperty('--5558ce7a', `url('${slide.pattern}')`);
    textTitle.textContent = slide.title;
    textContent.innerHTML = slide.content;

    pips.forEach((pip, i) => {
      pip.classList.toggle('carousel-pip--active', i === index);
    });
    
  };

  document.querySelector('.ea-world__button--previous').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  });

  document.querySelector('.ea-world__button--next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
  });

  pips.forEach((pip, index) => {
    pip.addEventListener('click', () => {
      currentSlide = index;
      updateSlide(currentSlide);
    });
  });

  updateSlide(currentSlide);

  
});