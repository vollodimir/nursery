# Nursery

HTML templtate, landing page, HTML to WordPress, mobile first, jQuery

HTML version hosted: <a href="http://pl.vn.ua/nursery/">pl.vn.ua/nursery</a>

WordPress version hosted: <a href="http://nursery.pl.vn.ua/">nursery.pl.vn.ua</a>

WordPress template is archive: <strong>wp-nursery.zip</strong>

## WP Nursery installation theme guide to WordPress

### Steps:

<ul>
  <li>Install plugins (<strong>Plugins</strong> > <strong>Add New</strong>, search name plugins. Then install and activate.):
        <ul>
            <li><a href="https://wordpress.org/plugins/advanced-custom-fields/">Advanced Custom Fields</a></li>
            <li><a href="https://wordpress.org/plugins/newsletter/">Newsletter</a></li>
        </ul>
  </li>
  <li>Download the demo data in site: <strong>Import</strong> > <strong>WordPress</strong> > select the <strong>demo_data.xml</strong> file. The demo data is located in the theme directory called demo_data.xml</li>
  <li>Enjoy!</li>
</ul>

## HTML tags to form Newsletter:

```
<form method="post" action="/?na=s">
<div class="subscribe__row">
<input type="email" placeholder="Enter Your Email" required />
<div class="subscribe__btn btn"><button  type="submit" >join the list</button></div>
</div>
</form>
```

### HTML tags to footer widgets:

#### Footer Widget 1:

```
<h3>HOURS & LOCAtION</h3>

<p><strong>2317 Fort Worth Hwy<br />
Weatherford, Texas 76087</strong></p>
<p>Mon-Sat: 9 AM – 5 PM<br />
Closed Sunday</p>
```

#### Footer Widget 2:

```
<h3>Judy’s recent posts</h3>

<ul>
	<li><a href="#">Native trees and shrubs for Bluebirds</a></li>
	<li><a href="#">Fun with Tillandsias, or air plants</a></li>
	<li><a href="#">Fall is an Ideal Time to Plant Trees</a></li>
	<li><a href="#">Drought Tolerant Plants</a></li>
	<li><a href="#">Urban sprawl and deer-resistant plants</a></li>
</ul>
```

#### Footer Widget 3:

```
<h3>Menu</h3>

<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Judy’s Journal</a></li>
  <li><a href="#">Shop Online</a></li>
  <li><a href="#">Get Financing</a></li>
  <li><a href="#">Contact Us</a></li>
</ul>
```

#### Footer Widget 4:

```
<h3>Contact</h3>

<div class="telephone"><a href="tel:817-596-0003">817-596-0003</a></div>
<p><strong>info@stuartnursery.com</strong></p>

<div class="widget__socials">
<div class="widget__socials-ithem">
<a href="#"><img src="/wp-content/themes/wp-nursery/assets/img/icon/socials_fb.svg" alt="" /></a>
</div>
<div class="widget__socials-ithem">
<a href="#"><img src="/wp-content/themes/wp-nursery/assets/img/icon/socials_telegram.svg" alt="" /></a>
</div>
<div class="widget__socials-ithem">
<a href="#"><img src="/wp-content/themes/wp-nursery/assets/img/icon/socials_instagram.svg" alt="" /></a>
</div>
</div>
```
