function viewChange(){
    if(document.getElementById('sample')){
        id = document.getElementById('sample').value;
        jp = document.getElementById('jp');
        en = document.getElementById('en');
        if(id == 'selected_jpn'){
            jp.style.display = "";
            en.style.display = "none";
        }else if(id == 'selected_en'){
            jp.style.display = "none";
            en.style.display = "";
        }
        else if(id == 'selected_all'){
            jp.style.display = "";
            en.style.display = "";
        }
    }
  }