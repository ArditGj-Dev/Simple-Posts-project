 // Variables
const postList = document.getElementById('post-list');

 // Event Listeners
 eventListeners();
 function eventListeners(){
     document.querySelector('#form').addEventListener('submit', newpost);
     postList.addEventListener('click', removePost);
 }


 // Functions
 function newpost(e){
     e.preventDefault();
     //Read text value
     const post = document.getElementById('post').value;

     //Button to Remove the tweet
     const removeBtn=document.createElement('a');
     removeBtn.classList='remove-post';
     removeBtn.textContent='Remove'
     //Create an <li> element
    
     const li = document.createElement('li');
     li.textContent=post;
     postList.appendChild(li);

     //add the remove btn to each tweet
     li.appendChild(removeBtn);
 }

 function removePost(q){
     if(q.target.classList.contains('remove-post')){
         q.target.parentElement.remove();
     }
 }