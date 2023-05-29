//three div with order container flex-box div

let body = document.body;
let trackBlack = 0;

/**
 *
 * @returns {HTMLDivElement}
 */
function createContainer() {
  //create container
  let containerDiv = document.createElement("div");
  containerDiv.setAttribute("class", "container");
  return containerDiv;
}

/**
 *
 * @returns {HTMLButtonElement}
 */

function createSetButtonSize() {
  //create set size button
  let setButton = document.createElement("button");
  setButton.textContent = "Set Grid";
  setButton.setAttribute("class", "buttonset");
  setButton.addEventListener("click", () => {
    let askSize = prompt("How much size bro:");

    if (askSize >= 100 || askSize <= 0) {
      alert("Cant have a size more 100 or less than 0");
    } else {
      //i want to remove the entire element and start all over
      while (body.hasChildNodes()) {
        body.removeChild(body.firstChild);
      }
      gridMaker(askSize);
    }
  });
  return setButton;
}

/**
 *
 * @param {HTMLDivElement} containerDiv
 * @param {Number} size
 */
function createTheGrid(containerDiv, size) {
  //Grid
  for (let k = 1; k <= size; k++) {
    //create row
    let flexDiv = document.createElement("div");
    flexDiv.setAttribute("class", "flex");
    //create column
    for (let j = 1; j <= size; j++) {
      let innerDiv = document.createElement("div");
      innerDiv.setAttribute("class", "flexinnerdiv");
      innerDiv.addEventListener("mouseenter", () => {
        innerDiv.style.cssText = `background-color: rgb(${getColorRandomly()},${getColorRandomly()},${getColorRandomly()})`;
        ++trackBlack;
      });
      flexDiv.append(innerDiv);
    }
    //adding row to container
    containerDiv.append(flexDiv);
  }
}

/**
 *
 * @returns {Number}
 */
function getColorRandomly() {
  let color = 0;
  if (trackBlack > 10) {
    trackBlack = 0;
  }
  while (color == 0 && trackBlack < 10) {
    color = Math.round(Math.random() * 255);
  }
  return color;
}

function gridMaker(size) {
  let containerDiv = createContainer();
  containerDiv.append(createSetButtonSize());
  createTheGrid(containerDiv, size);
  //adding container to body
  body.append(containerDiv);
}

gridMaker(16);
