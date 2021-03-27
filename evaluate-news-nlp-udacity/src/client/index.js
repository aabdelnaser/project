import { checkForWebsite } from './js/checkForWebsite'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
alert("Welcome ")

const insideLogic = function (submit)
{
const submit = document.getElementById('submit-button')
submit.addEventListener('click', () =>
{
    handleSubmit();
})
}
window.addEventListener('DOMContentLoaded', insideLogic)
export {checkForWebsite, handleSubmit}
