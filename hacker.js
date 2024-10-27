let hacker = document.querySelector(".hacker");
let title = document.querySelector("title");

hackerDotGen(title);

function hackerDotGen(node, numOD = 5, time = 250) {
  let addCount = 0,
    removeCount = numOD;

  let interval = setInterval(() => {
    if (addCount < numOD && removeCount > 0) {
      node.innerText += ".";
      addCount++;
      if (addCount == numOD) {
        removeCount = 0;
      }
    } else if (addCount > 0 && removeCount < numOD) {
      node.innerText = node.innerText.slice(0, node.innerText.length - 1);
      removeCount++;
      if (removeCount == numOD) {
        addCount = 0;
      }
    }
  }, time);
  return interval;
}

function dispMsgRandTimePeriod(parentNode, msg) {
  return new Promise((resolve, reject) => {
    let node = document.createElement("div");
    node.classList.add("hackerText");
    parentNode.append(node);
    let randomTime = Math.floor(Math.random() * 5 + 1) * 1000;
    setTimeout(() => {
      node.innerText = "💀 ~ " + msg;
      resolve(true);
    }, randomTime);
  });
}

async function callHacker() {
  await dispMsgRandTimePeriod(hacker, "Initializing Hacking");
  let init1 = hackerDotGen(hacker.children[0]);
  await dispMsgRandTimePeriod(hacker, "Reading Your Files");
  let init2 = hackerDotGen(hacker.children[1]);
  clearInterval(init1);
  await dispMsgRandTimePeriod(hacker, "Password Files Detected");
  let init3 = hackerDotGen(hacker.children[2]);
  clearInterval(init2);
  await dispMsgRandTimePeriod(
    hacker,
    "Sending all your Passwords and personal files to server"
  );
  let init4 = hackerDotGen(hacker.children[3]);
  clearInterval(init3);
  await dispMsgRandTimePeriod(hacker, "Cleaning up");
  hackerDotGen(hacker.children[4]);
  clearInterval(init4);
}
callHacker();