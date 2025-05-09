/**
=========================================================================
=========================================================================
Template Name: Dashboardkit - Admin Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app/
File: themes.js
Description:  this file will contains overall theme setup and handle
              behavior of live custumizer like Dark/Light, LTR/RTL,
              preset color, theme layout, theme contarast etc.
=========================================================================
=========================================================================
*/

var rtl_flag = false;
var dark_flag = false;
const chartInstances = {};
var primary = '#7267ef';

var themepreset = new Array();
themepreset[1] = primary;
themepreset[2] = '#6610f2';
themepreset[3] = '#9b59b6';
themepreset[4] = '#e83e8c';
themepreset[5] = '#ea4d4d';
themepreset[6] = '#e67e22';
themepreset[7] = '#ffa21d';
themepreset[8] = '#17c666';
themepreset[9] = '#008080';
themepreset[10] = '#3ec9d6';

function layout_change_default() {
  // Determine the initial layout based on the user's system preference for color scheme
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  let dark_layout = prefersDarkScheme.matches ? 'dark' : 'light';

  // Apply the initial layout
  layout_change(dark_layout);

  // Set the active class on the default theme button, if it exists
  const btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (btn_control) {
    btn_control.classList.add('active');
  }

  // Listen for changes in the user's system color scheme preference
  prefersDarkScheme.addEventListener('change', (event) => {
    dark_layout = event.matches ? 'dark' : 'light';
    layout_change(dark_layout);
  });
}

// // dark switch mode
function dark_mode() {
  const darkModeToggle = document.getElementById('dark-mode');
  
  // Ensure the element exists before proceeding
  if (!darkModeToggle) return;

  // Toggle between dark and light modes based on the checkbox status
  const mode = darkModeToggle.checked ? 'dark' : 'light';
  layout_change(mode);
}

// preset color
document.addEventListener('DOMContentLoaded', function () {
  // Handle preset color changes
  const presetColors = document.querySelectorAll('.preset-color > a');
  if (presetColors.length) {
    presetColors.forEach(colorElement => {
      colorElement.addEventListener('click', function (event) {
        let targetElement = event.target;

        // Traverse up to find the correct clickable element
        if (targetElement.tagName === 'SPAN') {
          targetElement = targetElement.parentNode;
        } else if (targetElement.tagName === 'IMG') {
          targetElement = targetElement.closest('a');
        }

        const presetValue = targetElement.getAttribute('data-value');
        preset_change(presetValue);
      });
    });
  }

  // Initialize SimpleBar if .pct-body exists
  const pctBody = document.querySelector('.pct-body');
  if (pctBody) {
    new SimpleBar(pctBody);
  }

  // Handle layout reset
  const layoutResetBtn = document.querySelector('#layoutreset');
  if (layoutResetBtn) {
    layoutResetBtn.addEventListener('click', () => location.reload());
  }

  // Handle RTL layout toggle
  const rtlLayoutToggle = document.querySelector('#layoutmodertl');
  if (rtlLayoutToggle) {
    rtlLayoutToggle.addEventListener('click', () => {
      const isChecked = rtlLayoutToggle.checked ? 'true' : 'false';
      layout_rtl_change(isChecked);
    });
  }
});
function layout_sidebar_change(value) {
    if (value == 'dark') {
      // Set the sidebar theme to 'dark'
      document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-theme', 'dark');
  
      // Find the active button in the sidebar theme control and remove its active class
      var control = document.querySelector('.theme-sidebar-color .btn.active');
      if (control) {
        control.classList.remove('active'); // Remove active class from current button
      }
  
      // Add the active class to the button representing the dark theme
      var darkBtn = document.querySelector(".theme-sidebar-color .btn[data-value='true']");
      if (darkBtn) {
        darkBtn.classList.add('active'); // Set the active class for dark theme
      }
    } else {
      // Set the sidebar theme to 'light'
      document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-theme', 'light');
  
      // Find the active button in the sidebar theme control and remove its active class
      var control = document.querySelector('.theme-sidebar-color .btn.active');
      if (control) {
        control.classList.remove('active'); // Remove active class from current button
      }
  
      // Add the active class to the button representing the light theme
      var lightBtn = document.querySelector(".theme-sidebar-color .btn[data-value='false']");
      if (lightBtn) {
        lightBtn.classList.add('active'); // Set the active class for light theme
      }
    }
  }

  
function layout_header_change(value) {
    if (value == 'dark') {
      // Set the header theme to 'dark'
      document.getElementsByTagName('body')[0].setAttribute('data-pc-header-theme', 'dark');
  
      // Find the active button in the header theme control and remove its active class
      var control = document.querySelector('.theme-header-color .btn.active');
      if (control) {
        control.classList.remove('active'); // Remove active class from current button
      }
  
      // Add the active class to the button representing the dark theme
      var darkBtn = document.querySelector(".theme-header-color .btn[data-value='true']");
      if (darkBtn) {
        darkBtn.classList.add('active'); // Set the active class for dark theme
      }
    } else {
      // Set the header theme to 'light'
      document.getElementsByTagName('body')[0].setAttribute('data-pc-header-theme', 'light');
  
      // Find the active button in the header theme control and remove its active class
      var control = document.querySelector('.theme-header-color .btn.active');
      if (control) {
        control.classList.remove('active'); // Remove active class from current button
      }
  
      // Add the active class to the button representing the light theme
      var lightBtn = document.querySelector(".theme-header-color .btn[data-value='false']");
      if (lightBtn) {
        lightBtn.classList.add('active'); // Set the active class for light theme
      }
    }
  }
  
function layout_caption_change(value) {
    document.body.setAttribute('data-pc-sidebar-caption', value);
    var control = document.querySelector('.theme-nav-caption .btn.active');
    if (control) {
      control.classList.remove('active');
    }
    var newActive = document.querySelector(`.theme-nav-caption .btn[data-value='${value}']`);
    if (newActive) {
      newActive.classList.add('active');
    }
  }
  
function preset_change(value) {
  const body = document.querySelector('body');
  const control = document.querySelector('.pct-offcanvas');

  // Set the 'data-pc-preset' attribute on the body
  body.setAttribute('data-pc-preset', value);

  // Update active state in the UI if control exists
  if (control) {
    const activeElement = document.querySelector('.preset-color > a.active');
    const newActiveElement = document.querySelector(`.preset-color > a[data-value='${value}']`);

    const allCharts = document.querySelectorAll('.apexcharts-canvas');
    var chartId = "";
    allCharts.forEach((chart) => {
      chartId = String("#"+chart.parentElement.getAttribute('id'));
      updatePrimaryColorIfUsed(chartId, themepreset[value.replace('preset-', '')]);
    });
    primary = themepreset[value.replace('preset-', '')];

    if (activeElement) {
      activeElement.classList.remove('active');
    }
    if (newActiveElement) {
      newActiveElement.classList.add('active');
    }
  }
}
function updatePrimaryColorIfUsed(chart, newColor) {
  try {
    var chartId = chart.replace('#', '');
    var chartInst = chartInstances[chartId];
    var currentColors = chartInst.w.globals.colors.slice();
    if (currentColors) {
      var index = -1;
      if(currentColors.length >= 1){index = currentColors.map((c, index) => c.toLowerCase() === primary.toLowerCase() ? index : -1).filter(index => index !== -1)}
      if (index !== -1) {
        var newColors = [...currentColors];
        index.forEach((i) => {
          newColors[i] = newColor;
        });
        chartInst.updateOptions({
          colors: newColors
        });
      }
    }
    if(chartInst.opts?.theme?.monochrome?.enabled){
      const updatedOptions = replaceMonochromeColor(chartInst.opts, primary, newColor);
      chartInst.updateOptions(updatedOptions);
    }
    if(chartInst.opts.fill.gradient.colorStops){
      const updatedOptions = replaceColorInNestedColorStops(chartInst.opts, primary, newColor);
      chartInst.updateOptions(updatedOptions);
    }
  } catch (error) {}
}
function replaceColorInNestedColorStops(chartOptions, oldColor, newColor) {
  const colorStops = chartOptions?.fill?.gradient?.colorStops;
  if (Array.isArray(colorStops)) {
    chartOptions.fill.gradient.colorStops = colorStops.map(stopArray =>
      stopArray.map(stop => ({
        ...stop,
        color: stop.color === oldColor ? newColor : stop.color
      }))
    );
  }
  return chartOptions;
}

function replaceMonochromeColor(chartOptions, oldColor, newColor) {
  if (
    chartOptions?.theme?.monochrome?.enabled &&
    chartOptions.theme.monochrome.color === oldColor
  ) {
    chartOptions.theme.monochrome.color = newColor;
  }

  return chartOptions;
}

function layout_rtl_change(value) {
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  const directionControl = document.querySelector('.theme-direction .btn.active');
  const rtlBtn = document.querySelector(".theme-direction .btn[data-value='true']");
  const ltrBtn = document.querySelector(".theme-direction .btn[data-value='false']");

  if (value === 'true') {
    rtl_flag = true;
    body.setAttribute('data-pc-direction', 'rtl');
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');

    // Update active button state for RTL
    if (directionControl) directionControl.classList.remove('active');
    if (rtlBtn) rtlBtn.classList.add('active');
  } else {
    rtl_flag = false;
    body.setAttribute('data-pc-direction', 'ltr');
    html.removeAttribute('dir');
    html.removeAttribute('lang');

    // Update active button state for LTR
    if (directionControl) directionControl.classList.remove('active');
    if (ltrBtn) ltrBtn.classList.add('active');
  }
}

function layout_change(layout) {
    // Get the off-canvas control element
    var control = document.querySelector('.pct-offcanvas');
    
    // Set the theme attribute on the body based on the layout value
    document.getElementsByTagName('body')[0].setAttribute('data-pc-theme', layout);
  
    // Remove the active class from the default layout button if it exists
    var btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
    if (btn_control) {
      btn_control.classList.remove('active');
    }
  
    // If the layout is set to 'dark'
    if (layout == 'dark') {
      dark_flag = true;
  
      // Change the logo source for dark mode in the invoice and auth form
      if (document.querySelector('.invoice-logo')) {
        document.querySelector('.invoice-logo').setAttribute('src', '../assets/images/logo-white.svg');
      }
  
      if (document.querySelector('.auth-form img.img-logo')) {
        document.querySelector('.auth-form img.img-logo').setAttribute('src', '../assets/images/logo-white.svg');
      }
  
      // Remove the active class from the current theme layout button and activate the dark layout button
      var control = document.querySelector('.theme-layout .btn.active');
      if (control) {
        control.classList.remove('active');
        document.querySelector(".theme-layout .btn[data-value='false']").classList.add('active');
      }
    } 
    // If the layout is set to anything other than 'dark'
    else {
      dark_flag = false;
  
      // Change the logo source for light mode in the invoice and auth form
      if (document.querySelector('.invoice-logo')) {
        document.querySelector('.invoice-logo').setAttribute('src', '../assets/images/logo-dark.svg');
      }
  
      if (document.querySelector('.auth-form img.img-logo')) {
        document.querySelector('.auth-form img.img-logo').setAttribute('src', '../assets/images/logo-dark.svg');
      }
  
      // Remove the active class from the current theme layout button and activate the light layout button
      var control = document.querySelector('.theme-layout .btn.active');
      if (control) {
        control.classList.remove('active');
        document.querySelector(".theme-layout .btn[data-value='true']").classList.add('active');
      }
    }
  }
  function change_box_container(value) {
    // Check if the .pc-content element exists
    if (document.querySelector('.pc-content')) {
  
      // If value is 'true', switch to boxed layout
      if (value == 'true') {
        // Add 'container' class to the content and footer, remove 'container-fluid' from the footer
        document.querySelector('.pc-content').classList.add('container');
        document.querySelector('.footer-wrapper').classList.add('container');
        document.querySelector('.footer-wrapper').classList.remove('container-fluid');
  
        // Update the active button for the boxed layout option
        var control = document.querySelector('.theme-container .btn.active');
        if (control) {
          control.classList.remove('active');
          document.querySelector(".theme-container .btn[data-value='true']").classList.add('active');
        }
      } 
      // If value is not 'true', switch to full-width layout
      else {
        // Remove 'container' class and add 'container-fluid' to the footer
        document.querySelector('.pc-content').classList.remove('container');
        document.querySelector('.footer-wrapper').classList.remove('container');
        document.querySelector('.footer-wrapper').classList.add('container-fluid');
  
        // Update the active button for the full-width layout option
        var control = document.querySelector('.theme-container .btn.active');
        if (control) {
          control.classList.remove('active');
          document.querySelector(".theme-container .btn[data-value='false']").classList.add('active');
        }
      }
    }
  }
  