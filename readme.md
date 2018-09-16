# Project Responsice Accessible Form

This project's purpose is to develop a a mobile-first, accessible form that validates user input. I built a responsive, accessible shopping/checkout form with custom validation. I made use of scss, gulp, semantic html, and javascript.

## Accessibility

The chrome devtools and the [Web Accessibility Checklist](https://a11yproject.com/checklist.html) was used to make sure it passess the accessiblity aduit. ARIA was used to make sure all inputs have corresponding labels, images have appropriate alt text, ARIA roles were defined and focus states worked properly.

## Form Validation

The form included these fields with required status and validations:

* Product size or equivalent depending on your design choice (required, single size)
* Product color or equivalent depending on your design choice (required, single color)
* Name (required)
* Email (required, validates as email)
* Address 1 (required)
* Address 2 (optional)
* City (required)
* State (required, can be input or select element)
* Zipcode (required, must validate for either a 5 or 9 digit zipcode US zipcode format)

It also included: 

* Visually displayed descriptive error messaging and styled them in a manner fitting of an error, such as red text or iconography.
* Keeps track of errors and prevent form submission if any errors.
* Updates the Order Summary portion accordingly as the user proceeds through the form.
* Make use of built-in validity checks via the constraints validation API as well as custom conditionals.
* Incorporated the javascript class syntax for validation.

If everything validates then a success message with order details is provided.

## 77Shop

[77Shop](https://ephan077.github.io/project-responsive-form/). If you'd like to run this locally please clone or download.

![Screenshot of image clone](img/clone.png)
