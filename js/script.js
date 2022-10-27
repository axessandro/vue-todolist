const {createApp} = Vue;

createApp({
    data(){
        return{
            newTask:{
                text: "",
                done: false,
            },
            tasks: [
                {
                    text:"Be challenger in League of Legends",
                    done: false,
                },
                {
                    text:"Eat fresh tuna in Gubbio",
                    done: false,
                },
                {
                    text:"Videocall with Santa",
                    done: false,
                },
            ],
        }
    },
    methods:{
        handleAdd(){
            if(this.newTask.text.length > 5){
                this.tasks.push({...this.newTask});
                this.newTask.text = "";
            } else {
                alert("To short dude, at least 8 characters");
            }
        },
        removeTask(indexTask){
            this.tasks.splice(indexTask, 1);
        },
        toggleDone(index){
           if(!this.tasks[index].done){
                this.tasks[index].done = true;
           } else {
                this.tasks[index].done = false;
                console.log(this.tasks[index].done);
            }
        }
    },
}).mount("#root")