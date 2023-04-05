let users = []

function render(){
    let userContainer = document.getElementById('output')
    userContainer.innerText = ' '

    users.map((user)=>{
        let divv = document.createElement('div')
        let cb = document.createElement('input');
        cb.type = 'checkbox';   
        cb.id = 'check';
        divv.classList.add('report')
        userContainer.appendChild(divv)
        divv.appendChild(cb)
        cb.appendChild(document.createTextNode(''));

        let div = document.createElement('div')
        let hr = document.createElement('hr')
        userContainer.appendChild(hr)
        let taskName = document.createElement('p')
        let taskDesc = document.createElement('p')
        let taskDate = document.createElement('p')
        div.classList.add('user')
        taskName.classList.add('text')
        taskDesc.classList.add('text')
        taskDate.classList.add('op-date')
        taskName.innerText = user.tname
        taskDesc.innerText = user.tdesc
        taskDate.innerText = user.tdate
        userContainer.appendChild(divv)
        divv.appendChild(div)
        div.appendChild(taskName)
        div.appendChild(taskDesc)
        div.appendChild(taskDate)      
    })
}


function validateForm() {
    let x = document.getElementById('task').value;
    let y = document.getElementById('desc').value
    let z = document.getElementById('duedate').value
    if (x == "") {
      alert("Task name must be filled out");
      return false;
    }
    if (z == "") {
        alert("Due date must be filled out");
        return false;
    }
  }

function register(){
    let task = document.getElementById('out')
    let status = validateForm()
    if(status != false){
        task.innerHTML = ''
        let tname = document.getElementById('task')
        let tdesc = document.getElementById('desc')
        let date = document.getElementById('duedate')
        let newdate = new Date(date.value)
        let tdate = newdate.toUTCString()
        let tempuser = {
            tname: tname.value,
            tdesc: tdesc.value,
            tdate: tdate,
        }
    
        let taskcount = users.filter((user)=>{
            return user.tname == tname.value
        })
    
        if(taskcount.length == 0)
        {
            users.push(tempuser)
            render()
        }
        else{
            alert('Task already exists!!')
        }
    }
}