const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    creatrTags(e.target.value)
})

function creatrTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag =>tag.trim())

    tagsEl.innerHTML =''

    tags.forEach(tag =)

}