import { getDay } from "./weather"
import { displayManager } from "./display"


function form () {
  const form = document.querySelector("form")
  const formBtnSubmit = document.querySelector(".btnSubmit")

  formBtnSubmit.addEventListener("click", () => {
    getDay(form.inputLocation.value)
    displayManager.locationDisplay(form.inputLocation.value)
  })

}

const formFun = form()

export {formFun}