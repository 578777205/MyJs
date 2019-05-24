var json = [
    {
        name:"zhangsan0",
        age:18,
        height:172
    },
    {
        name:"zhangsan1",
        age:18,
        height:174
    },
    {
        name:"zhangsan2",
        age:18,
        height:175
    },
    {
        name:"zhangsan3",
        age:18,
        height:170
    },
    {
        name:"zhangsan4",
        age:18,
        height:170
    },
    
    {
        name:"zhangsan5",
        age:18,
        height:170
    },
    
    {
        name:"zhangsan6",
        age:18,
        height:170
    },
    
    {
        name:"zhangsan7",
        age:18,
        height:170
    },
    
    {
        name:"zhangsan8",
        age:18,
        height:170
    },
    
    {
        name:"zhangsan9",
        age:18,
        height:170
    },
    
    {
        name:"zhangsan10",
        age:18,
        height:170
    }
];



//创建一个表格
function createtable(i){
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
     
    var  cache = document.createDocumentFragment();
    //创建tr 一个数组里面的对象就是一条数据，相对于是一个tr

    
         //
         var tr = document.createElement('tr');
         
         if(i%2 == 0){ 
            tr.classList.add('item')
         }
         
         tr.onmouseover = function(){
            this.classList.add('active')
         }
         tr.onmouseout = function(){
            this.classList.remove('active')
         }
    
         for(let key in json[i]){ //ES6 Object.values 
             var td = document.createElement('td');
             td.innerHTML = json[i][key]
             tr.appendChild(td);
         }
    
         var deleteTd = document.createElement('td');
    
         deleteTd.innerHTML = '<a href="#">删除</a>';
         tr.appendChild(deleteTd);
         tr.classList.add('animated','slideInLeft');//滑入动画
         cache.appendChild(tr); //DOM操作优化

    tbody.appendChild(cache);
    table.appendChild(tbody);
    
    //var aBtn = document.getElementsByTagName('a')

    
      
    table.addEventListener("click",function(event){
        if (event.target.innerHTML == "删除") {
            var ev=event.target.parentNode.parentNode;
            ev.classList.add('animated','slideOutRight');
           
            function del(){ ev.parentNode.removeChild(ev);}                    
            setTimeout(del,1200);
    
        }
    },false)  
    
    document.querySelector("body").appendChild(table)
    
}

for(var t=0;t<json.length;t++)
setTimeout("createtable("+ t+ ")",1000*t);
