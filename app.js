document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".form");

  forms.forEach((form) => {
    const result = form.querySelector(".result p");
    const submit = form.querySelector("button");

    const canUseTruck = () => {
      const grande_palette = form.querySelector("#gp").value;
      const demi_palette = form.querySelector("#dp").value;

      const max_palette = 66;
      const demi_palettePerGrande = 2;

      const total_demi_palette =
        parseInt(grande_palette) * demi_palettePerGrande +
        parseInt(demi_palette);

      const rest_demi_palette_sucess = max_palette - total_demi_palette;
      const rest_demi_palette_error = total_demi_palette - max_palette;

      if (total_demi_palette <= max_palette) {
        result.classList.add("success");
        result.innerHTML = `Vous pouvez utiliser le camion, il reste ${Math.floor(
          rest_demi_palette_sucess / demi_palettePerGrande
        )} palette(s) et ${
          rest_demi_palette_sucess % demi_palettePerGrande
        } demi-palette(s) disponible(s).`;
      } else {
        const additional_trucks =
          Math.ceil(rest_demi_palette_error / max_palette) + 1;
        const remaining_palettes = rest_demi_palette_error % max_palette;
        result.classList.add("success");
        result.innerHTML = `Il vous faut ${additional_trucks} camion(s) avec ${Math.floor(
          remaining_palettes / demi_palettePerGrande
        )} palette(s) et ${
          remaining_palettes % demi_palettePerGrande
        } demi-palette(s) dans le dernier camion.`;
      }
    };

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      canUseTruck();
    });
  });
});
