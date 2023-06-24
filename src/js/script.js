fetch('src/json/projects.json')
  .then(response => response.json())
  .then(data => {
    const carouselIndicators = document.querySelector('#projectCarousel .carousel-indicators');
    const carouselInner = document.querySelector('#projectCarousel .carousel-inner');

    data.forEach((project, index) => {
      const carouselIndicator = document.createElement('li');
      carouselIndicator.setAttribute('data-target', '#projectCarousel');
      carouselIndicator.setAttribute('data-slide-to', index);
      if (index === 0) carouselIndicator.classList.add('active');

      const projectItem = document.createElement('div');
      projectItem.classList.add('carousel-item');
      if (index === 0) projectItem.classList.add('active');

      const projectCard = document.createElement('div');
      projectCard.classList.add('card');

      const img = document.createElement('img');
      img.classList.add('card-img-top');
      img.src = project.image;
      img.alt = project.title;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = project.title;

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.textContent = project.description;

      const buttonGroup = document.createElement('div');
      buttonGroup.classList.add('btn-group', 'mt-2'); // Add 'mt-2' class for top margin

      const githubButton = document.createElement('a');
      githubButton.href = project.githubLink;
      githubButton.target = '_blank';
      githubButton.classList.add('btn', 'btn-primary', 'mr-2'); // Add 'mr-2' class for right margin

      const githubIcon = document.createElement('i');
      githubIcon.classList.add('fab', 'fa-github'); // Add Font Awesome class for GitHub icon

      githubButton.appendChild(githubIcon);
      buttonGroup.appendChild(githubButton);

      const siteButton = document.createElement('a');
      siteButton.href = project.siteLink;
      siteButton.target = '_blank';
      siteButton.classList.add('btn', 'btn-primary');

      const siteIcon = document.createElement('i');
      siteIcon.classList.add('fas', 'fa-external-link-alt'); // Add Font Awesome class for external link icon

      siteButton.appendChild(siteIcon);
      buttonGroup.appendChild(siteButton);

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(buttonGroup);
      projectCard.appendChild(img);
      projectCard.appendChild(cardBody);
      projectItem.appendChild(projectCard);

      carouselIndicators.appendChild(carouselIndicator);
      carouselInner.appendChild(projectItem);
    });
  });
