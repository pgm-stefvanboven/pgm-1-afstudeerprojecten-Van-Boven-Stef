(() => {
  const app = {
    init() {
      console.log("1. Initialize Application");
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      console.log("2. Cache Elements");
      this.$projects = document.querySelector(".projects");
      this.$navigation = document.querySelector(".navigation");
      this.$events = document.querySelector(".events");
      this.$digitalClock = document.querySelector('#digital-clock');
      this.$projectDetails = document.querySelector('.project-details');
    },
    generateUI() {
      console.log("3. Generate User Interface");
      this.$projects.innerHTML = this.generateHTMLForProjects(projects);
      const $projects = this.$projects.querySelectorAll('.project');
      $projects.forEach(($project) => {
        $project.addEventListener('click', (ev) => {
          const id = ev.currentTarget.dataset.id;
          this.generateUIForProjectDetails(id);
        });
      });
      this.$navigation.innerHTML = this.generateHTMLForNavigation(navigation);
      this.$events.innerHTML = this.generateHTMLForEvents(events);
      setInterval(() => {

        this.$digitalClock.innerText = this.getHTMLForDigitalClock();
        
        }, 500);
    },
    generateHTMLForProjects(projects) {
      let tmpStr = "";
      for (let i = 0; i < projects.length; i++) {
        tmpStr += this.generateHTMLForProject(projects[i]);
      }
      return tmpStr;
    },
    generateHTMLForProject(project) {
      return `
      <div class="project" data-id="${project.id}">
        <picture class="project-screenshots">
          <img src="${project.screenshots[0]}">
        </picture>
        <p class="project-name">${project.author.name}</p>
        <h2 class="project-title">${project.title}</h2>
        <p class="project-technologies">${project.technologies.name}</p>
      </div>
      `;
    },
    generateUIForProjectDetails(id) {
      const Project = projects.find((Project) => Project.id === id);
      this.$projectDetails.innerHTML = this.generateHTMLForProjectDetails(Project);
    },
    generateHTMLForProjectDetails(Project) {
      console.log(Project);
      return `
      <div class="Project-details__left">
        <picture class="Project-details__pictures">
          <img src="${Project.screenshots[0]}">
          <img src="${Project.screenshots[1]}">
          <img src="${Project.screenshots[2]}">
          <img src="${Project.screenshots[3]}">
        </picture>
      </div>
      <div class="project-details__right">
        <p class="project-details__author">${Project.author.name}</p>
        <h2 class="project-details__title">${Project.title}</h2>
        <p class="project-details__technologies">${Project.technologies.name}</p>
        <p class="project-details__synopsis">${Project.synopsis}</p>
      </div>
      `;
    },
    generateHTMLForNavigation(navigation) {
      let tmpStr = "";
      for (let i = 0; i < navigation.length; i++) {
        tmpStr += this.generateHTMLForNavigationItem(navigation[i]);
      }
      return tmpStr;
    },
    generateHTMLForNavigationItem(navigationItem) {
      return `
        <a target="${navigationItem.type}" href="${navigationItem.link}" title="${navigationItem.name}">${navigationItem.name}</a>
      `;
    },
    generateUIForNavigation() {
      this.$navigation.innerHTML = this.generateHTMLForNavigation(navigation);
    },
    generateHTMLForEvents(events) {
      let tmpStr = "";
      for (let i = 0; i < events.length; i++) {
        tmpStr += this.generateHTMLForEventsItem(events[i]);
      }
      return tmpStr;
    },
    generateHTMLForEventsItem(eventsItem) {
      return `
      <div class="events">
        <ul>
            <li>
             <a target="${"_blank"}" href="${eventsItem.link}" title="${eventsItem.title}">${eventsItem.title}</a>
            </li>
        </ul>
      </div>     
      `;
    },
    generateUIForEvents() {
      this.$events.innerHTML = this.generateHTMLForEvents(events);
    },
    getHTMLForDigitalClock() {
      const startAcademicYear = 1695019500000;
      const now = new Date().getTime();
      const diff = now - startAcademicYear;
    
     return this.getTimeDifferenceAsString(diff);
    },
    getTimeDifferenceAsString(diff) {
      const days = Math.floor(diff / (24 * 3600 * 1000));
      const time = `${this.toBits(days, 3, 0)}days`;
      return time;
    },
    toBits(v, n, b) {
      let vStr = String(v);
      while (vStr.length < n) {
        vStr = b + vStr;
      }
      return vStr;
    },
    updateTimeCurrentAcademicYear() {
      const now = new Date().getTime();
      const diff = now - startCurrentAcademicYear;
      this.$currentAcademicYearTime.innerText =
      this.getTimeDifferenceAsString(diff);
    },
    generateUIfordigitalclock() {
      this.$digitalclock.innerHTML = this.generatedigitalclock()
    }
  };
  app.init();
})();
