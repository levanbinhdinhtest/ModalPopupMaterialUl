//get btn open
let btnOpen = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.modal');
let btnClose = document.querySelector('.close-modal-btn');
let iconClose = document.querySelector('.fa-solid');
// classlist la lay tat ca cac class
//.toggle : ktra neu o do co class nay r thi xoa, chua co thi them vao
function toggleModal(){
    modal.classList.toggle('hide');
}
function addModal(){
    modal.classList.add('hide');
}

btnOpen.addEventListener('click',toggleModal);
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget)
    {
        toggleModal();
    }
});
btnClose.addEventListener('click',toggleModal);
iconClose.addEventListener('click',toggleModal);

