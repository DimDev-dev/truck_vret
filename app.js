document.querySelectorAll(".form").forEach((form) => {
  const result = form.querySelector(".result p");
  const submit = form.querySelector("button");

  const canUseTruck = () => {
    const grande_palette = form.querySelector("#gp").value;
    const demi_palette = form.querySelector("#dp").value;

    const max_palette = 66;
    const demi_palettePerGrande = 2;

    const total_demi_palette =
      parseInt(grande_palette) * demi_palettePerGrande + parseInt(demi_palette);
    const rest_demi_palette_sucess = max_palette - total_demi_palette;
    const rest_demi_palette_error = total_demi_palette - max_palette;

    const palettes = Math.floor(total_demi_palette / demi_palettePerGrande);
    const demi_palettes = total_demi_palette % demi_palettePerGrande;

    console.log("total_demi_palette", total_demi_palette);
    console.log("grande_palette", grande_palette);
    console.log("demi_palette", demi_palette);

    if (total_demi_palette <= max_palette) {
      result.classList.remove("error");
      result.classList.add("success");
      result.innerHTML = `Vous pouvez utiliser le camion, il reste ${Math.floor(
        rest_demi_palette_sucess / demi_palettePerGrande
      )} palette(s) et ${
        rest_demi_palette_sucess % demi_palettePerGrande
      } demi-palette(s) disponible(s).`;
    } else {
      result.classList.remove("success");
      result.classList.add("error");
      result.innerHTML = `Vous ne pouvez pas utiliser le camion, il y a ${Math.floor(
        rest_demi_palette_error / demi_palettePerGrande
      )} palette(s) et ${
        rest_demi_palette_error % demi_palettePerGrande
      } demi-palette(s) de trop.`;
    }
  };

  submit.addEventListener("click", canUseTruck);
});
