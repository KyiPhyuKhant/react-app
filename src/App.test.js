import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



if (window.innerWidth <= 768 && window.location.href.indexOf("contact-us") > -1) {
  document.querySelectorAll("li.nav-item:not(.contact-us)").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("li.nav-item.contact-us").classList.add("active");
}
else {
}


if (window.innerWidth <= 768) {
  if (window.location.href.indexOf("contact-us") > -1) {
    var navItems = document.querySelectorAll("li.nav-item:not(.contact-us)");
    navItems.forEach(function(navItem) {
      navItem.classList.remove("active");
    });
    var contactUsNavItem = document.querySelector("li.nav-item.contact-us");
    contactUsNavItem.classList.add("active");
  }
} else {
  
}
