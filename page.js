let notite = document.getElementById("main_input");
let enteredTextContainer = document.getElementsByClassName("inputt");
let flex = document.getElementsByClassName("flexcontainer");
let notes = 0, id_s = 0, cclick = 0;
let active_notes = 0;
const menuItems = [ 'All', 'Active', 'Completed'];  
function functia1(){ //all
    let myVarsDel = document.getElementsByClassName('the_Dot_hide');
    const n = myVarsDel.length;
    for( let i = n-1; i>= 0; i--){
        myVarsDel[i].classList.remove('the_Dot_hide');
        console.log(n);
    }
}
function functia2(){ //active
    let myVarsDel = document.getElementsByClassName('the_Dot_hide');
    const n = myVarsDel.length;
    for( let i = n-1; i>= 0; i--){
        myVarsDel[i].classList.remove('the_Dot_hide');
    }

    let myVars = document.getElementsByClassName('entered_text_crossed');
    for( let i = 0; i< myVars.length; i++){
        myVars[i].classList.add('the_Dot_hide');
    }
}
function functia3(){ //completed
    let myVarsDel = document.getElementsByClassName('the_Dot_hide');
    const n = myVarsDel.length;
    for( let i = n-1; i>= 0; i--){
        myVarsDel[i].classList.remove('the_Dot_hide');
    }

    let myVars = document.getElementsByClassName('entered_text'); //cele care 
    for( let i = 0; i< myVars.length; i++){
       if(!myVars[i].classList.contains('entered_text_crossed')) {
         myVars[i].classList.add('the_Dot_hide'); }
    }
}
let butom = document.getElementsByClassName("butonul");

let butom_exist = document.getElementsByClassName("butonul");
        butom_exist[0].addEventListener('click', () => {        //creeaza event pt fiecare data cand select all e apasat
            cclick++;
            cclick= cclick%2;
        let allDots = document.getElementsByClassName('the_Dot');
        let allChecked = true;
        let butommm = document.getElementsByClassName("butonul");
        butommm[0].classList.add("butonul_exista"); 
        let butom = document.getElementsByClassName("butonul_exista");    
        butom[0].classList.toggle("butonul_exista_clicked"); 
    for (let i = 0; i < allDots.length; i++) {
        if (!allDots[i].classList.contains('the_Dot_clicked')) {  //verificam daca exista cel putin o notita unchecked
            allChecked = false;
            allDots[i].classList.toggle('the_Dot_clicked');         //aplicam efectu de checked pe butoane
            active_notes--;
           /* let clr_but = document.getElementsByClassName('clear_completed');
            if(active_notes != notes) {
            clr_but[0].classList.remove('the_Dot_hide');
            }
            else
            clr_but[0].classList.add('the_Dot_hide'); */
            var lastChar = allDots[i].id.charAt(allDots[i].id.length - 1);
            var selectedLabelID = 'label_' + lastChar;
            var myLab = document.getElementById(selectedLabelID);
                myLab.classList.toggle('entered_text_crossed');   //iar daca labelu exista aplicam si pe texct efectul de text crossed
        }
    }

    if (allChecked) {
        for (let i = 0; i < allDots.length; i++) { //daca toate sunt checked atunci le dam uncheck la toate
            allDots[i].classList.toggle('the_Dot_clicked');
            active_notes++;
            // You need to get the corresponding label for each dot and toggle its class
            var lastChar = allDots[i].id.charAt(allDots[i].id.length - 1);
            var selectedLabelID = 'label_' + lastChar;
            var myLab = document.getElementById(selectedLabelID);

            if (myLab) {
                myLab.classList.toggle('entered_text_crossed');
            }
        }
    }
    let label = document.getElementsByClassName('num_left');
        if(active_notes == 1)
    {   
        label[0].textContent = '1 item left';
    }
    else
     label[0].textContent = active_notes+ ' items left';
     let clr_but = document.getElementsByClassName('clear_completed');
    if(active_notes != notes) {
    clr_but[0].classList.remove('the_Dot_hide');
    }
    else
    clr_but[0].classList.add('the_Dot_hide');
});


notite.addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') { // daca e apasat enter
        console.log(notes);
        if(notes === 0) {        //daca mai avem todouri scrise
            let butom = document.getElementsByClassName("butonul");   
            console.log(butom[0]); 
       butom[0].classList.add("butonul_exista");  //afiseaza butonul select all/ down arrow
        console.log(butom[0]);
        

        
        let newFooter = document.createElement('footer'); //cream dinamic un footer
        const dynamicList = document.createElement('ul'); //crream dinamic lista din footer
        dynamicList.className = 'footer-list';  //ii adaugam o clasa
        let label = document.createElement('label');
            label.textContent = '1 item left';
        label.classList.add('num_left');


        for ( let i = 0 ; i < menuItems.length ; i++) { //adaugam in lsita din footer butoanele all active si completed cu denumirile storuite in list_item
            const list_item = document.createElement('li');
            const butt = document.createElement('button');
            butt.textContent = menuItems[i];
            butt.classList.add('buttons_list');

            butt.addEventListener('click',function (){      //pt fiecare buton creat adaugam un event listener
                const allButtons = document.querySelectorAll('.buttons_list');
                allButtons.forEach(button => button.classList.remove('buttons_list_clicked'));  //ca butoanele sa nu poata sa fie active in acelasi timp

        // Add 'buttons_list_clicked' to the clicked button
        this.classList.add('buttons_list_clicked');
                window['functia' + (i + 1)]();      //fiecare buton apasat apeleaza la apasare functia cu nr corespunzator
            });
           
            list_item.appendChild(butt);    //adaugam butonu ca copil al listei
            dynamicList.appendChild(list_item);     //adaugam elementele listei ca copii ai listei
        }

        let clear_but = document.createElement('button');     //creeam + adaugam butonu de clear completed
        clear_but.textContent = "Clear completed";
        clear_but.classList.add('clear_completed');
        clear_but.classList.add('the_Dot_hide');

        newFooter.appendChild(label);   //adaugam labelu ca copil al footerului
        newFooter.appendChild(dynamicList);     //adaugam lista ca copil al footerului
        newFooter.appendChild(clear_but);
        flex[0].appendChild(newFooter);         //adaugam footeru ca copil al flexcontainerului
       let clear_comp = document.getElementsByClassName('clear_completed')[0];
clear_comp.addEventListener('click', function(event) {
    event.preventDefault();
let checked = document.getElementsByClassName('entered_text_crossed');
const nn =checked.length;
for( let i = nn-1; i>=0 ; i-- )//sterg invers pt ca vectorul se updateaza dinamic si stergang primu el al doilea devine primu si nu se sterge
{   
    checked[i].parentNode.removeChild(checked[i]);

}
notes = notes - nn;
active_notes =notes;
if(notes <= 0){
let existingFooter = document.getElementsByTagName('footer')[0];
                existingFooter.parentNode.removeChild(existingFooter);
                let butomm = document.getElementsByClassName("butonul_exista");
                console.log(cclick);
               if(butomm[0].classList.contains("butonul_exista_clicked"))
                butomm[0].classList.remove("butonul_exista_clicked");
                if(butomm[0].classList.contains("butonul_exista"))
                butomm[0].classList.remove("butonul_exista");
                cclick =0;
                notes = 0;
}
});

    }
        id_s++;
        notes++;
        active_notes++;
        event.preventDefault(); //previne comportamentu default al formului sa si dea refresh cand apesi pe enter
        let label = document.getElementsByClassName('num_left');
        if(active_notes == 1)
    {
        label[0].textContent = '1 item left';
    }
    else
     label[0].textContent = active_notes+ ' items left';

     let newLabel = document.createElement('label'); //cream un dinamic label cand apasam enter
     newLabel.innerHTML = notite.value;   //ii punem valoarea introdusa
     var uniqueIDl = 'label_' + id_s;
     newLabel.id = uniqueIDl;
     enteredTextContainer[0].appendChild(newLabel);
     newLabel.classList.add("entered_text");

       //creaza butonu X
       var myButton = document.createElement('button');
       myButton.className = 'the_x';
       var uniqueID = 'button_' + id_s;
        myButton.id = uniqueID;

       newLabel.appendChild(myButton);

       //creeaza dot buttonu
       var myButton2 = document.createElement('button');
       myButton2.className = 'the_Dot';
       var uniqueID2 = 'button2_' + id_s;
       myButton2.id = uniqueID2;
       newLabel.appendChild(myButton2);

        notite.value = "";

        myButton2.addEventListener('click', function() {
            // Toggle the 'clicked' class on the button
            this.classList.toggle('the_Dot_clicked');
            var lastChar = this.id.charAt(this.id.length - 1);
            var selectedLabelID = 'label_' + lastChar;
            var myLab = document.getElementById(selectedLabelID);
            myLab.classList.toggle('entered_text_crossed');

            if(myLab.classList.contains('entered_text_crossed'))
               active_notes --;
            else
            active_notes ++;
            let label = document.getElementsByClassName('num_left');
            if(active_notes == 1)
        {
            label[0].textContent = '1 item left';
        }
        else
         label[0].textContent = active_notes+ ' items left';
         let clr_but = document.getElementsByClassName('clear_completed');
        if(active_notes != notes) {
        clr_but[0].classList.remove('the_Dot_hide');
        }
        else
        clr_but[0].classList.add('the_Dot_hide');
        });
        
        myButton.addEventListener('click', function (event) {
            // Delete the label associated with this 'X' button
           //event.stopPropagation(); //opreste elementu sa ase mai propage cu parintii adica daca apas
            // pe x chiar daca x e pe label acesta sa stearga el doar cand apas pe x nu si pe parintele lui

            if (event.target.tagName === 'BUTTON' && event.target.classList.contains('the_x')) {
            var lastChar = this.id.charAt(this.id.length - 1);
            var selectedLabelID = 'label_' + lastChar;
            var myLabel = document.getElementById(selectedLabelID);
            console.log("I BEG");
            if(myLabel) {
                myLabel.parentNode.removeChild(myLabel);
                //console.log("A");
            if(!myLabel.classList.contains('entered_text_crossed'))
                active_notes--;
            notes--;
            //Sconsole.log(notes);
            let label = document.getElementsByClassName('num_left');
            console.log(label);
            if(active_notes == 1)
        {
            label[0].textContent = '1 item left';
        }
        else
         label[0].textContent = active_notes+ ' items left';

            if (notes === 0) { // se face 0 dispare si butonu 
                let existingFooter = document.getElementsByTagName('footer')[0];
                existingFooter.parentNode.removeChild(existingFooter);
                let butomm = document.getElementsByClassName("butonul_exista");
                console.log(cclick);
               if(butomm[0].classList.contains("butonul_exista_clicked"))
                butomm[0].classList.remove("butonul_exista_clicked");
                if(butomm[0].classList.contains("butonul_exista"))
                butomm[0].classList.remove("butonul_exista");
                cclick =0;
            }
        }
    }
        });
        // Add double-click event to make content editable
        newLabel.addEventListener('dblclick', function () {         //face editabil la double click
            newLabel.setAttribute('contenteditable', 'true');
        });
        newLabel.addEventListener('click',function(event){ // MI A LUAT O VIATA INTREAGA SA NU SE MAI STEARGA CAT APAS PE LABEL LABELU CI DOAR PE BUTON IM A GENIUS EVRIKA
            event.preventDefault();
        });
        // Add blur event to stop editing on losing focus
        newLabel.addEventListener('blur', function () {
            newLabel.removeAttribute('contenteditable');
        });
        newLabel.addEventListener("mouseenter", function () {//face butonu X vizibil when hovering over the label
            myButton.style.display = "block";
        });
        newLabel.addEventListener("mouseleave", function () {
            myButton.style.display = "none";
        });
        myButton.addEventListener("mouseenter",function(){
            myButton.classList.add("the_x_hover");
        });
        myButton.addEventListener("mouseleave",function(){
            myButton.classList.remove("the_x_hover");
        });
    }
});
 /* let clear_comp = document.getElementsByClassName('clear_completed')[0];
clear_comp.addEventListener('click', function(event) {
    event.preventDefault();
let checked = document.getElementsByClassName('entered_text_crossed');
const nn =checked.length;
for( let i = nn-1; i>=0 ; i-- )
{
    checked[i].parentNode.removeChild(checked[i]);
}
//notes = -1;
//active_notes =-1;
}); 
/*function getValue() {
    var inputElement = document.getElementById('main_input');
    var inputValue = inputElement.value;
    console.log('Input Value:', inputValue);
   // inputElement.value = '';
}*/// 
//1 e c
//2 nu e

//completed
// 1 e c
// 2 e hide

//active
// 1
//butom[0].classList.replace("butonul_exista","butonul"); 
//cclick 1 --> clicked
//cclick 0 -->not clicked