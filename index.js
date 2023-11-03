launch();
function create_div(txt)
{   
    let div=document.createElement('div');
    div.style.width='95%';
    div.style.backgroundColor='white'; 
    div.style.border='1px solid black'; 
    div.style.borderRadius='5px';
    div.style.margin='auto';
    div.style.padding='5px';
    div.style.marginTop='4px';
    div.style.overflow='hidden';
    div.innerHTML = txt ;
    let list=document.querySelector('.list');
    list.insertBefore(div, list.firstChild);
    return div;
}
function create_btn(div){
    let btn=document.createElement('button');
    btn.innerHTML="X";
    btn.style.width='20px';
    btn.style.height='20px';
    btn.style.float='right';
    btn.style.borderRadius='20px';
    btn.classList.add('btn');
    div.appendChild(btn);  
    return btn;
}
function launch(){
    document.querySelector('.btn').addEventListener("click", 
    function (){
        var txt=document.querySelector('.text').value ;    
        if(txt!="")
        {
            txt=(txt.length<=77)?txt:txt.substring(0,70)+"...";
            // Create div
            var div=create_div(txt);
            
            
            // Create button 
            var btn=create_btn(div);
            // Make input field empty
            document.querySelector('.text').value="";
            
            
            // Delete a div
            btn.addEventListener('click',function(){
                div.style.display='none';
            });
        }
    })
}
