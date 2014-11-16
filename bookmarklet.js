(function () {
    var elem = document.querySelector('[name="pull_request[body]"]');
    if (elem) elem.value += /* inject:template.md */["**This pull request fixes the following issues**:",
"",
"- Github Issue #123...",
"- JIRA link...",
"",
"**You can preview the link locally within** `/path/to/template` **which has been approved for**:",
"",
"- [ ] responsive behaviour tested",
"- [ ] browser and device tested",
"- [ ] passes validation (html / bootstrap)",
"- [ ] SEO optimized (html outline)",
"- [ ] printability (print css)",
"- [ ] doesn’t break anything else",
"",
"",
"**Unrelated changes**:",
"",
"- Additionally fixed...",
"- ...",
"",""];/* endinject */;
});
