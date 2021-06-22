(function () {
  'use strict';
  console.log("Minimizing Thunderbird..");
  var minimizeAll = function () {
    browser.windows.getAll().then((wins) => {
      wins.forEach((w) => {
        let info = { state: "minimized" };
        browser.windows.update(w.id, info);
      });
    });
    console.log("All windows minimized!");
  };

  browser.windows.onCreated = setTimeout(() => {
    minimizeAll();
  }, 200);
})();
