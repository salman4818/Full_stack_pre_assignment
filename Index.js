
document.querySelector(`#Add`).onclick=function(){

    document.querySelector(`.errorMsg`).innerHTML="";

    if(document.querySelector(`#newTask input`).value.length==0){
       /* alert("Please Enter Something")*/
        document.querySelector(`.errorMsg`).innerHTML="Please enter something";
    }
    else {
        document.querySelector(`#taskResult`).innerHTML+=`
            <div class ="taskResultt">
            <span id="taskname">
            ${document.querySelector
            (`#newTask input`).value}
            </span>
            
            <button class="delete">
           <i class='fas fa-trash'></i>
            </button>
            </div>
`;

        let current_Task = document.querySelectorAll
        (".delete");
        for (let i=0; i<current_Task.length;i++){
            current_Task[i].onclick=function (){
                this.parentNode.remove();
            }

        }
        let taskResult =document.querySelectorAll
        ("#newTask");

        for (let i=0; i<taskResult.length;i++){
            taskResult[i].onclick = function(){
            this.classList.toggle(`completed`);

            }
        }

        document.querySelector("#newTask input").value="";

    }

}



function removeAll(){


    document.querySelector(`#taskResult`).innerHTML="";
}


