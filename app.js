const sub=document.querySelector('.submit')
const con= document.querySelector('.confirm')
sub.addEventListener('click', function(){
    document.querySelector('.portal').classList.remove('portal')
    document.querySelector('body').style.backgroundColor="lightgreen"
})
con.addEventListener('click',function(){
    document.querySelector('.alert').classList.remove('alert')
})
const link=document.querySelector('.link')
link.addEventListener('click',function(){
    document.querySelector('.list').classList.remove('list')
    document.querySelector('.list').style.backgroundColor="yellow"
})