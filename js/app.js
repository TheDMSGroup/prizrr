$(function() {
  // accessibility set font-size
  var fontSize = localStorage.getItem('fontSize') || 1;

  if (fontSize) {
    $('html').css('font-size', fontSize + 'em');
  }

  $('#bigger-font').click(function(){
    fontSize+= .05
    localStorage.setItem('fontSize', fontSize);
    $('html').css('font-size', fontSize + 'em');
  });

  $('#smaller-font').click(function(){
    fontSize+= -.05
    localStorage.setItem('fontSize', fontSize);
    $('html').css('font-size', fontSize + 'em');
  });

  $('#default-font').click(function(){
    fontSize = 1;
    localStorage.setItem('fontSize', 1);
    $('html').css('font-size', fontSize + 'em');
  });

  // accessibility set theme
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      }
      else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
      }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
  }
});