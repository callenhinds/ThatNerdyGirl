function chooseService(service) {

  var i = 1;
  var msg = '';

  if (service === 'va') {
    while (i < 6) {
      msg += 'Task ' + i + ': ';

      if (i === 1) msg += 'Inbox management';
      else if (i === 2) msg += 'Calendar scheduling';
      else if (i === 3) msg += 'Customer support replies';
      else if (i === 4) msg += 'Data entry & organization';
      else if (i === 5) msg += 'Research assistance';

      msg += '<br />';
      i++;
    }

  } else {
    while (i < 6) {
      msg += 'Feature ' + i + ': ';

      if (i === 1) msg += 'Responsive design';
      else if (i === 2) msg += 'Fast loading speeds';
      else if (i === 3) msg += 'SEO optimization';
      else if (i === 4) msg += 'Modern UI/UX';
      else if (i === 5) msg += 'Contact forms & integrations';

      msg += '<br />';
      i++;
    }
  }

  var el = document.getElementById('blackboard');
  el.innerHTML = msg;
}
