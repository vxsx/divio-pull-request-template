(function () {
    var elem = document.querySelector('[name="pull_request[body]"]');
    if (elem) elem.value += /* inject:template.md */''/* endinject */;
});
