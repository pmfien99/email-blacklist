import blacklist from './utils/blacklist';

window.Webflow ||= [];
window.Webflow.push(() => {
  const masterBlacklist: string[] = blacklist;

  const emailSubmit: HTMLElement | null = document.getElementById('demoFormSubmit');
  const emailField: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;

  if (emailSubmit && emailField) {
    emailSubmit.addEventListener('click', () => {
      const domain: string = emailField.value.split('@')[1];

      if (masterBlacklist.indexOf(domain) !== -1) {
        emailField.value = '';
        emailField.setCustomValidity(
          'Enter a valid business email or contact us at hello@daloopa.com'
        );
        emailField.setAttribute('placeholder', 'name@example.com');
      } else {
        emailField.setCustomValidity('');
      }
    });
  }
});
