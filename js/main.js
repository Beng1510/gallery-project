console.log('Starting up');



function onInit() {
    // createProjects()
    renderProjects()
}


onInit()

function renderProjects() {
 console.log('checking');  
var strHtml = gProjects.map(function (project) {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a id ="${project.id}class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.title}</p>
    </div>
  </div>
    `
})
document.querySelector('.projects-container').innerHTML = strHtml.join('');

}


function createProjects(id) {
    var project = getProjById(id)
    var strHTML = ` 
    strHTML += <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>
        `
        document.querySelector('.projects-container').innerHTML = strHTML;
    }
