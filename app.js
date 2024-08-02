const result = document.querySelector("#result");
const submit = document.querySelector("#submit");

const canUseTruck = () => {
  const grande_palette = document.querySelector("#gp").value;
  const demi_palette = document.querySelector("#dp").value;

  const max_palette = 66;
  const demi_palettePerGrande = 2;

  const total_palette =
    parseInt(grande_palette) * demi_palettePerGrande + parseInt(demi_palette);

  console.log("total_palette", total_palette);
  console.log("grande_palette", grande_palette);
  console.log("demi_palette", demi_palette);

  if (total_palette <= max_palette) {
    result.classList.remove("error");
    result.classList.add("success");
    result.innerHTML = "Vous pouvez utiliser le camion";
  } else {
    result.classList.remove("success");
    result.classList.add("error");
    result.innerHTML = "Vous ne pouvez pas utiliser le camion";
  }
};

submit.addEventListener("click", canUseTruck);
