const TODO = document.getElementById('TODO');
const addbutton = document.getElementById('addbutton');
const TODOLIST = document.getElementById('TODOLIST');


function addtodo(){
const newtodotext = TODO.value;
TODO.value='';

const listitem = document.createElement('li');
const completecheckbox = document.createElement('input');
const todotext = document.createElement('span');
const deletebutton = document.createElement('button');

completecheckbox.type='checkbox';

listitem.appendChild(completecheckbox);
listitem.appendChild(todotext);
listitem.appendChild(deletebutton);

todotext.textContent = newtodotext;
deletebutton.textContent = 'delete';
TODOLIST.appendChild(listitem);

deletebutton.addEventListener('click',function(){
    TODOLIST.removeChild(listitem);
})
}
addbutton.addEventListener('click',addtodo)