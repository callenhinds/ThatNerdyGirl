function chooseService(service) {

  var i = 1;
  var msg = '';

  if (service === 'va') {
    msg = '<h3>Virtual Assistant Services</h3>';

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

  } else if (service === 'web') {
    msg = '<h3>Web Development</h3>';

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

  } else if (service === 'social') {
    msg = '<h3>Social Media Management</h3>';

    while (i < 6) {
      msg += 'Service ' + i + ': ';

      if (i === 1) msg += 'Content planning & scheduling';
      else if (i === 2) msg += 'Post creation (graphics & captions)';
      else if (i === 3) msg += 'Engagement & comment replies';
      else if (i === 4) msg += 'Analytics & performance tracking';
      else if (i === 5) msg += 'Trend research & hashtag strategy';

      msg += '<br />';
      i++;
    }
  }

  var el = document.getElementById('blackboard');
  el.innerHTML = msg;
}
