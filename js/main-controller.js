console.log('Starting up');



function onInit() {
  renderProjects()
}


onInit()

function renderProjects() {
  console.log('checking');

  var strHtml = gProjects.map(function (project) {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" onclick="renderModal('${project.id}')">
      <div class="portfolio-hover" >
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid proj" src="img/portfolio/${project.id}.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="project-title">${project.title}</p>
    </div>
  </div>
    `
  })
  document.querySelector('.row-projects-container').innerHTML = strHtml.join('');

}


function renderModal(projId) {
  console.log('check modal');
  var project = getProjById(projId)
  var elProj = document.querySelector('.modal-body')
  elProj.innerHTML = `
    <h2>${project.name}</h2>
      <p class="item-intro text-muted">${project.title}</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="">
          <p>${project.desc}</p>
            <ul class="list-inline">
              <li>Date: ${new Date(project.publishedAt).toLocaleDateString().split("/")}</li>
              <li>Client: Threads</li>
              <li>Category: Illustration</li>
            </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
     Close Project</button>
  <button onclick="window.open('http://www.website.com/page')"
    class="btn btn-primary" data-dismiss="modal" type="button">          
    Check it Out</button>
                  `
  $("#portfolioModal1").modal();
}

// document.querySelector('.portfolio-modal modal modash fade').innerHTML = strHtml.join('');


function onSubmit() {
 var subject = $('#Subject').val();
 var message = $('#Body').val();
 
 window.open("http://mail.google.com/mail/?view=cm&fs=1&to=benben1510@gmail.com&su=" + subject + "&body=" + message);
 
}