var demoLinks = ['https://bloccit-rails3-rak.herokuapp.com/'];
var repoLinks = ['https://github.com/rob-king/bloccit_rails3'];


function hideModal(locator) {
  $(locator).removeAttr("data-toggle");
  $(locator).removeAttr("data-target");
  $(locator).attr('href', 'http://www.google.com');
  console.log(typeof(locator));
  console.log($(locator).id);
}


function setLinks(locator)
{
  $(locator).attr('href',demoLinks[0]);
}
