(async function () {
  console.log("Minimizing Thunderbird..");
  const minimizeWindow = async function (w) {
    console.log("window created");
    console.log(w);
    let info = { state: "minimized" };
    if (w.id && w.type === "normal" && (w.state === "normal" || w.state === "maximized")) {
      await browser.windows.update(w.id, info);
    }
  };
  await browser.windows.onCreated.addListener(minimizeWindow);
  const windows = await browser.windows.getAll()
  for (let w of windows) {
    await minimizeWindow(w);
  }
})().catch(console.error);
