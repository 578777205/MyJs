
        function add(){

            if(!document.querySelector("#input").value==""){
                          var time=new Date;
            var year=time.getFullYear();
            var month=time.getMonth()+1;
            var day=time.getDate();
            var h=time.getHours();var m=time.getMinutes();var s=time.getSeconds();
            String(month).length<2 ? month="0"+month :month;String(day).length<2 ? day="0"+day :day;String(h).length<2 ? h="0"+h :h;String(m).length<2 ? m="0"+m :m;String(s).length<2 ? s="0"+s :s;
            var newli=document.createElement("li");
            var span=document.createElement("span");
            span.classList.add("comment");
            var div=document.createElement("div");
            div.classList.add("time");
            var button=document.createElement("button");
            button.classList.add("del");
            button.onclick=function(){
                newli.classList.add("animated","slideOutRight");
                var self=this;
                setTimeout(function(){
                  self.parentNode.parentNode.removeChild(self.parentNode);   
                },1000)
                 
            };
            span.innerHTML=document.querySelector("#input").value;
            div.innerHTML=year+"-"+month+"-"+day+" "+h+":"+m+":"+s;
            button.innerHTML="删除";

            newli.appendChild(span);        newli.appendChild(div);        newli.appendChild(button);
            newli.classList.add("animated","slideInLeft");
            //document.querySelector("#table").appendChild(newli); 
            document.querySelector("#table").insertBefore (newli,document.querySelector("#table").firstChild);
            }
            else
            alert("评论为空，无法添加");

        }

        