const btn = document.getElementById('code-output');
const area = document.getElementById('code_output');

const error1 = `<!-- Form End -->
<p>&nbsp;</p>
<!-- Main -->`;

const error2 = `<div class="slider">
<div id="bg-slider" class="owl-carousel owl-theme" style="opacity: 1; display: block;">
<div class="owl-wrapper-outer">
<div class="owl-wrapper" style="width: 4092px; left: 0px; display: block;">
<div class="owl-item" style="width: 1023px;">
<div class="item"><img src="assets/img/slide1/hero30.jpg" alt="The Last of us"></div>
</div>
<div class="owl-item" style="width: 1023px;">
<div class="item"><img src="assets/img/slide1/hero3.jpg" alt="The Last of us"></div>
</div>
</div>
</div>
<div class="owl-controls clickable">
<div class="owl-pagination">
<div class="owl-page active">&nbsp;</div>
<div class="owl-page">&nbsp;</div>
</div>
</div>
</div>
</div>`;

const error3 = `<div class="col-md-4">
<div class="checkbox">
<div class="icheckbox_square-yellow" style="position: relative;"><input style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" name="Allow to send?" type="checkbox"><ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
<label>&nbsp; Yes, I am happy for your network of lawyers to contact me. </label></div>
</div>`;

const error4 = `<div class="col-md-12" style="padding: 15px;">
<div class="col-md-4" style="padding-bottom: 10px;">
<div class="btn-group bootstrap-select"><button class="btn dropdown-toggle btn-default" title="Select your city" type="button" data-toggle="dropdown" data-id="lunchBegins"><span class="filter-option pull-left">Select your city</span>&nbsp;</button>
<div class="dropdown-menu open">
<div class="bs-searchbox"><input class="form-control" autocomplete="off" type="text"></div>
<ul class="dropdown-menu inner" role="menu">
<li data-original-index="1"><a tabindex="0" data-tokens="null"><span class="text">New york, CA</span></a></li>
<li data-original-index="2"><a tabindex="0" data-tokens="null"><span class="text">Paris</span></a></li>
<li data-original-index="3"><a tabindex="0" data-tokens="null"><span class="text">Casablanca</span></a></li>
<li data-original-index="4"><a tabindex="0" data-tokens="null"><span class="text">Tokyo</span></a></li>
<li data-original-index="5"><a tabindex="0" data-tokens="null"><span class="text">Marraekch</span></a></li>
<li data-original-index="6"><a tabindex="0" data-tokens="null"><span class="text">kyoto , shibua</span></a></li>
</ul>
</div>
<select id="lunchBegins" class="selectpicker" tabindex="-98" title="Select your city" name="City" required="" data-live-search="true" data-live-search-style="begins">
<option class="bs-title-option" value="">Select your city</option>
<option>New york, CA</option>
<option>Paris</option>
<option>Casablanca</option>
<option>Tokyo</option>
<option>Marraekch</option>
<option>kyoto , shibua</option>
</select></div>
</div>
<div class="col-md-4">
<div class="btn-group bootstrap-select"><button class="btn dropdown-toggle btn-default" title="Select your city" type="button" data-toggle="dropdown" data-id="lunchBegins1"><span class="filter-option pull-left">Select your city</span>&nbsp;</button>
<div class="dropdown-menu open">
<div class="bs-searchbox"><input class="form-control" autocomplete="off" type="text"></div>
<ul class="dropdown-menu inner" role="menu">
<li data-original-index="1"><a tabindex="0" data-tokens="null"><span class="text">New york, CA</span></a></li>
<li data-original-index="2"><a tabindex="0" data-tokens="null"><span class="text">Paris</span></a></li>
<li data-original-index="3"><a tabindex="0" data-tokens="null"><span class="text">Casablanca</span></a></li>
<li data-original-index="4"><a tabindex="0" data-tokens="null"><span class="text">Tokyo</span></a></li>
<li data-original-index="5"><a tabindex="0" data-tokens="null"><span class="text">Marraekch</span></a></li>
<li data-original-index="6"><a tabindex="0" data-tokens="null"><span class="text">kyoto , shibua</span></a></li>
</ul>
</div>
<select id="lunchBegins1" class="selectpicker" tabindex="-98" title="Select your city" name="City2" required="" data-live-search="true" data-live-search-style="begins">
<option class="bs-title-option" value="">Select your city</option>
<option>New york, CA</option>
<option>Paris</option>
<option>Casablanca</option>
<option>Tokyo</option>
<option>Marraekch</option>
<option>kyoto , shibua</option>
</select></div>
</div>
              <div class="col-md-4">
<div class="checkbox"> <label> <input name="Allow&nbsp;to&nbsp;send?" type="checkbox">&nbsp; Yes, I am happy for
    your network
    of lawyers to contact me. </label> </div>
</div>
<!-- <div class="col-md-4">
                                        <input type="text" class="form-control" placeholder="Phone Number*">                            </div> --></div>`

const error2_correction = `<div class="slider">
<div id="bg-slider" class="owl-carousel owl-theme">
  <div class="item"><img src="assets/img/slide1/hero30.jpg" alt="The Last of us"></div>
  <div class="item"><img src="assets/img/slide1/hero3.jpg" alt="The Last of us"></div>
</div>
</div>`;

const error3_correction = `              <div class="col-md-4">
<div class="checkbox"> <label> <input name="Allow&nbsp;to&nbsp;send?" type="checkbox">&nbsp; Yes, I am happy for
    your network
    of lawyers to contact me. </label> </div>
</div>`;

const error4_correction = `            <div class="col-md-12" style="padding: 15px;">
<div class="col-md-4" style="
              padding-bottom: 10px;                        ">
  <select id="lunchBegins" class="selectpicker" required="" data-live-search="true"
    data-live-search-style="begins" title="Select your city" name="City">
    <option>New york, CA</option>
    <option>Paris</option>
    <option>Casablanca</option>
    <option>Tokyo</option>
    <option>Marraekch</option>
    <option>kyoto , shibua</option>
  </select>
</div>
<div class="col-md-4">
  <select id="lunchBegins1" class="selectpicker" tabindex="-98" title="Select your city" name="City2" required="" data-live-search="true" data-live-search-style="begins">
    <option class="bs-title-option" value="">Select your city</option>
    <option>New york, CA</option>
    <option>Paris</option>
    <option>Casablanca</option>
    <option>Tokyo</option>
    <option>Marraekch</option>
    <option>kyoto , shibua</option>
  </select>
</div>
<div class="col-md-4">
  <div class="checkbox"> <label> <input name="Allow&nbsp;to&nbsp;send?" type="checkbox">&nbsp; Yes, I am happy for
      your network
      of lawyers to contact me. </label> </div>
</div>
<!-- <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Phone Number*">                            </div> -->
</div>`;

btn.addEventListener('click', () => {
    // area.textContent = tinymce.activeEditor.getContent()
    const title = document.getElementById('title1').value
    const keywords1 = document.getElementById('keywords1').value


    const part1 = `<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <meta name="description" content=" Go Global">
  <meta name="author" content="Haroon">
  <meta name="keyword" content="${keywords1}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800" rel="stylesheet" type="text/css">
  <!-- Place favicon.ico  the root directory -->
  <link rel="shortcut icon" href="./assets/img/favicon.ico" type="image/x-icon">
  <link rel="icon" href="./assets/img/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="assets/css/normalize.css">
  <link rel="stylesheet" href="assets/css/font-awesome.min.css">
  <link rel="stylesheet" href="assets/css/fontello.css">
  <link href="assets/fonts/icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet">
  <link href="assets/fonts/icon-7-stroke/css/helper.css" rel="stylesheet">
  <link href="assets/css/animate.css" rel="stylesheet" media="screen">
  <link rel="stylesheet" href="assets/css/bootstrap-select.min.css">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/icheck.min_all.css">
  <link rel="stylesheet" href="assets/css/price-range.css">
  <link rel="stylesheet" href="assets/css/owl.carousel.css">
  <link rel="stylesheet" href="assets/css/owl.theme.css">
  <link rel="stylesheet" href="assets/css/owl.transitions.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
</head>

<body>
  <!-- Body content -->
  <div class="header-connect">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-8  col-xs-12">
          <div class="header-half header-call">
            <p> <span><i class="pe-7s-call"></i> <a href="tel:07306000049"
                  style="font-weight: lighter; color:black;">+447
                  306 000 049</a></span> <span><i class="pe-7s-mail"></i> <a
                  href="mailto:enquiries@go-global.org.uk?subject=Type%20you%20problem"
                  style="font-weight: lighter; color:black;">
                  enquiries@go-global.org.uk</a></span> </p>
          </div>
        </div>
        <div class="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
          <div class="header-half header-social">
            <ul class="list-inline">
              <li><a href="#"><i class="fa fa-facebook"></i></a><br>
              </li>
              <li><a href="#"><i class="fa fa-twitter"></i></a><br>
              </li>
              <li><a href="#"><i class="fa fa-vine"></i></a><br>
              </li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a><br>
              </li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a><br>
              </li>
              <li><a href="#"><i class="fa fa-instagram"></i></a><br>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End top header -->
  <nav class="navbar navbar-default ">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#navigation"> <span class="sr-only">Toggle
            navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span>
          <span class="icon-bar"></span> </button> <a class="navbar-brand" href="index.html"><img
            src="assets/img/logo3.png" alt=""></a> </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse yamm" id="navigation">
        <div class="button navbar-right">
          <!-- <button class="navbar-btn nav-button wow login" onclick=" window.open('register.html')"
                        data-wow-delay="0s">Login</button> --> <button class="navbar-btn nav-button wow"
            onclick=" window.open('contact.html')" data-wow-delay="0s">Contact
            Us</button>
        </div>
        <ul class="main-nav nav navbar-nav navbar-right">
          <li class="ymm-sw" data-wow-delay="0s"> <a href="index.html" class="active">Home
            </a> </li>
          <li><a class="" href="./origin.html">UK Visa</a></li>
          <li><a class="" href="./origin.html">Work &amp; Business Visas</a></li>
          <li><a class="" href="./origin.html">UK Residency &amp; Citizenship</a></li>
          <li class="dropdown yamm-fw"> <a href="./origin.html" class="dropdown-toggle" data-toggle="dropdown"
              data-hover="dropdown" data-delay="200">Other
              Visas<b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li>
                <div class="yamm-content">
                  <div class="row">
                    <div class="col-sm-3">
                      <h5>Home pages</h5>
                      <ul>
                        <li> <a href="index.html">Home Style 1</a> </li>
                        <li> <a href="index-2.html">Home Style 2</a> </li>
                        <li> <a href="index-3.html">Home Style 3</a> </li>
                        <li> <a href="index-4.html">Home Style 4</a> </li>
                        <li> <a href="index-5.html">Home Style 5</a> </li>
                      </ul>
                    </div>
                    <div class="col-sm-3">
                      <h5>Pages and blog</h5>
                      <ul>
                        <li><a href="./origin.html">Blog listing</a> </li>
                        <li><a href="./origin.html">Blog Post (full)</a> </li>
                        <li><a href="./origin.html">Blog Post (Right)</a> </li>
                        <li><a href="./origin.html">Blog Post (left)</a> </li>
                        <li><a href="./origin.html">Contact style (1)</a> </li>
                        <li><a href="./origin.html">Contact style (2)</a> </li>
                        <li><a href="./origin.html">Contact style (3)</a> </li>
                        <li><a href="./origin.html">FAQ page</a> </li>
                        <li><a href="./origin.html">404 page</a> </li>
                      </ul>
                    </div>
                    <div class="col-sm-3">
                      <h5>Demo</h5>
                      <ul>
                        <li><a href="./origin.html">Demo pages style (1)</a> </li>
                        <li><a href="./origin.html">Demo pages style (2)</a> </li>
                        <li><a href="./origin.html">Demo pages style (3)</a> </li>
                      </ul>
                      <h5>Demo2 list</h5>
                      <ul>
                        <li><a href="./origin.html">Demo2 list style (1)</a> </li>
                        <li><a href="./origin.html">Demo2 list style (2)</a> </li>
                        <li><a href="./origin.html">Demo2 list style (3)</a> </li>
                      </ul>
                    </div>
                    <div class="col-sm-3">
                      <h5>Demo process</h5>
                      <ul>
                        <li><a href="./origin.html">Submit - step 1</a> </li>
                        <li><a href="./origin.html">Submit - step 2</a> </li>
                        <li><a href="./origin.html">Submit - step 3</a> </li>
                      </ul>
                      <h5>User account</h5>
                      <ul>
                        <li><a href="./origin.html">Register / login</a> </li>
                        <li><a href="./origin.html">Your Demo2</a> </li>
                        <li><a href="./origin.html">Submit Demo</a> </li>
                        <li><a href="./origin.html">Change password</a> </li>
                        <li><a href="./origin.html">Your profile</a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- /.yamm-content -->
              </li>
            </ul>
          </li>
          <!-- <li><a href="contact.html">Contact US</a></li> -->
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
  <!-- End of nav bar -->`;

    var part2 = tinymce.activeEditor.getContent();
    
    part2 = part2.replace(error1,'');
    part2 = part2.replace(error2, error2_correction);
    part2 = part2.replace(error3, error3_correction);
    part2 = part2.replace(error4, error4_correction);
    area.textContent = part2;
    console.log(part2);

    const part3 = `  <div style="background-color: #253551">
  <div class="container">
    <div class="row">
      <div class="col-md-3 padding-bottom-15 padding-top-40">
        <h3 style="color: white; font-weight: lighter;">Related pages for
          your continued reading.</h3>
      </div>
      <div class="col-md-3 padding-bottom-40 padding-top-40">
        <div class=" fav520">
          <div class="top520">
            <h3 class="urg520">UK Visa</h3>
          </div>
          <button class="but520">
            <p class="do520" onclick="window.open('contact.html')">Select</p>
          </button>
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="col-md-3 padding-bottom-40 padding-top-40">
        <div class=" fav520">
          <div class="top520">
            <h3 class="urg520">Spouse Visa</h3>
          </div>
          <button class="but520">
            <p class="do520" onclick="window.open('contact.html')">Select</p>
          </button>
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="col-md-3 padding-bottom-40 padding-top-40">
        <div class=" fav520">
          <div class="top520">
            <h3 class="urg520">Family Visas</h3>
          </div>
          <button class="but520">
            <p class="do520" onclick="window.open('contact.html')">Select</p>
          </button>
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="col-md-3 padding-bottom-40 padding-top-40 special520"></div>
      <div class="col-md-3 padding-bottom-40 padding-top-40">
        <div class=" fav520">
          <div class="top520">
            <h3 class="urg520">Indefinite Leave to Remain</h3>
          </div>
          <button class="but520">
            <p class="do520" onclick="window.open('contact.html')">Select</p>
          </button>
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="col-md-3 padding-bottom-40 padding-top-40">
        <div class=" fav520">
          <div class="top520">
            <h3 class="urg520">British Citizenship</h3>
          </div>
          <button class="but520">
            <p class="do520" onclick="window.open('contact.html')">Select</p>
          </button>
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="col-md-3 padding-bottom-40 padding-top-40">
        <div class=" fav520">
          <div class="top520">
            <h3 class="urg520">Spouse Visa Extension</h3>
          </div>
          <button class="but520">
            <p class="do520" onclick=" window.open('contact.html')">Select</p>
          </button>
        </div>
        <div class="col-lg-6"></div>
      </div>
    </div>
  </div>
</div>
<!-- Footer -->
<!-- Footer area-->
<div class="footer-area">
  <div class=" footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6 ">
          <div class="single-footer">
            <h4>About us </h4>
            <div class="footer-title-line"></div>
            <!-- <img src="assets/img/logo1.png" alt=""> -->
            <p>Go Global Lawyers London is a leading immigration law firm
              specialising in all areas of UK immigration law.</p>
            <p>Our immigration services are designed to meet our clients’
              needs and offer professional advice for every UK immigration
              application and process.</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-footer">
            <h4>Address </h4>
            <div class="footer-title-line"></div>
            <ul class="footer-adress">
              <li> <i class="pe-7s-map-marker strong"> </i>162 Plashet
                Road <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upton Park<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;London<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E13 0QT </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="single-footer">
            <h4>Contacts </h4>
            <div class="footer-title-line"></div>
            <ul class="footer-adress">
              <li><i class="pe-7s-mail"></i><a href="mailto:enquiries@go-global.org.uk?subject=Type%20you%20problem"
                  style="font-weight: lighter; color:black;">enquiries@go-global.org.uk</a></li>
              <li><i class="pe-7s-call strong"></i> <a href="tel:07306000049"
                  style="font-weight: lighter; color:black;">+447 306 000
                  049</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copy text-center">
    <div class="container">
      <div class="row">
        <div class="center"> <span>© <a href="#"> Go Global</a> , All
            rights reserved <span id="copyright">
              <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
            </span></span> </div>
      </div>
    </div>
  </div>
</div>
<script src="assets/js/modernizr-2.6.2.min.js"></script>
<script src="assets/js/jquery-1.10.2.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/bootstrap-select.min.js"></script>
<script src="assets/js/bootstrap-hover-dropdown.js"></script>
<script src="assets/js/easypiechart.min.js"></script>
<script src="assets/js/jquery.easypiechart.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/wow.js"></script>
<script src="assets/js/icheck.min.js"></script>
<script src="assets/js/price-range.js"></script>
<script src="assets/js/main.js"></script>
<script>
  // get the element
  const element = document.getElementById('send-button')



  // always checking if the element is clicked, if so, do alert('hello')
  element.addEventListener("click", () => {
    const a520 = document.getElementById('520').value.length != 0
    const a521 = document.getElementById('521').value.length != 0
    const a522 = document.getElementById('522').value.length != 0
    const a523 = document.getElementById('523').value.length != 0
    const a524 = document.getElementById('lunchBegins').value.length != 0
    const a525 = document.getElementById('lunchBegins1').value.length != 0
    if (a520 && a521 && a522 && a523 && a524 && a525) {
      // setTimeout(alert('Your form have been submitted!'), 8000);
    }


  });
</script>
</body>

</html>`;

    const combined = part1 + part2 + part3;

    saveFile(combined, title);
});


function saveFile(bakwas, naam) {
    // get the textbox data...
    // textToWrite = document.getElementById("mytext").value;
    // put the data in a Blob object...
    var textFileAsBlob = new Blob([bakwas], { type: 'text/plain' });
    // create a hyperlink <a> element tag that will be automatically clicked below...
    var downloadLink = document.createElement("a");
    // set the file name...
    // const name1 = 
    downloadLink.download = `${naam}.html`;
    // set the <a> tag href as a URL to point to the Blob
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    // automaitcally click the <a> element to go to the URL to save the textFileAsBlob...
    downloadLink.click();
};