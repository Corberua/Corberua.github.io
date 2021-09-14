$(document).ready(function(){
   let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.zn3, .zn2, .zn1, .zn');
elements.each ((i,el) => {
   observer.observe(el); 
});
    
});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}

let a = $('#st1');
let b = $('#st2');
let c = $('#st3');
function calc(){
     if(a === "визитка" && b === "шаблон" && c === "пиксель"){
    document.getElementById('#st6').innerHTML = '100';
         
}
}



setTimeout(exampleModal, 1000);


$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});


	$(function() {
		var target_block = $(".klient");
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false;
				$({numberValue: 0}).animate({numberValue: 1000}, {
					duration: 20000,
					easing: "linear",
					step: function(val) {
						$(".klient h3").html(Math.ceil(val)); 
					}	
				});
		}
	});
	});
	
$('select.listen').change(function(){
  let a=$('[name="site"] :selected').val();
    let b=$('[name="dyzine"] :selected').val();
    let c=$('[name="Adap"] :selected').val();
    if(a === 'tipe1' && b === 'tipe1' && c === 'tipe1' ){
        $('#st4').html('<option value="tipe">5</option>')
        $("#st5").html('<option value="tipe2">3000</option>');
        
    }else if(a === 'tipe1' && b === 'tipe2' && c === 'tipe1' ){
        $('#st4').html('<option value="tipe">10</option>')
        $("#st5").html('<option value="tipe2">5000</option>');
    }
    else if(a === 'tipe1' && b === 'tipe1' && c === 'tipe2' ){
        $('#st4').html('<option value="tipe">10</option>')
        $("#st5").html('<option value="tipe2">5000</option>');
    }
    else if(a === 'tipe1' && b === 'tipe2' && c === 'tipe2' ){
        $('#st4').html('<option value="tipe">10</option>')
        $("#st5").html('<option value="tipe2">10000</option>');
    }
    else if(a === 'tipe2' && b === 'tipe1' && c === 'tipe1' ){
        $('#st4').html('<option value="tipe">10</option>')
        $("#st5").html('<option value="tipe2">8000</option>');
    }
    else if(a === 'tipe2' && b === 'tipe2' && c === 'tipe1' ){
        $('#st4').html('<option value="tipe">15</option>')
        $("#st5").html('<option value="tipe2">15000</option>');
    }else if(a === 'tipe2' && b === 'tipe1' && c === 'tipe2' ){
        $('#st4').html('<option value="tipe">20</option>')
        $("#st5").html('<option value="tipe2">20000</option>');
    }else if(a === 'tipe2' && b === 'tipe2' && c === 'tipe2' ){
        $('#st4').html('<option value="tipe">20</option>')
        $("#st5").html('<option value="tipe2">25000</option>');
    }
})



/*}else if(a === "Визитка" && b === "Шаблон" && c === "Резина"){
    alert("10 дней");
    alert("3000рублей");
}else if(a === "Визитка" && b === "Уник" && c === "Пиксель"){
    alert("10 дней");
    alert("3000рублей");
}else if(a === "Визитка" && b === "Уник" && c === "Резина"){
    alert("15 дней");
    alert("5000рублей");  
}else if(a === "Витрина" && b === "Шаблон" && c === "Пиксель"){
    alert("10 дней");
    alert("3000рублей");
}else if(a === "Витрина" && b === "Шаблон" && c === "Резина"){
    alert("18 дней");
    alert("5000рублей");
}else if(a === "Витрина" && b === "Уник" && c === "Пиксель"){
    alert("15 дней");
    alert("5000рублей");
}else if(a === "Витрина" && b === "Уник" && c === "Резина"){
    alert("20 дней");
    alert("10000рублей");
}

/*
let a =  (prompt("тип сайта", "Визитка, Витрина"));
let b =  (prompt("дизайн", "Шаблон, Уник"));
let c =  (prompt("адативность", "Пиксель, Резина"));
if(a === "Визитка" && b === "Шаблон" && c === "Пиксель"){
    alert("1 неделя");
    alert("1000рублей");
}else if(a === "Визитка" && b === "Шаблон" && c === "Резина"){
    alert("10 дней");
    alert("3000рублей");
}else if(a === "Визитка" && b === "Уник" && c === "Пиксель"){
    alert("10 дней");
    alert("3000рублей");
}else if(a === "Визитка" && b === "Уник" && c === "Резина"){
    alert("15 дней");
    alert("5000рублей");  
}else if(a === "Витрина" && b === "Шаблон" && c === "Пиксель"){
    alert("10 дней");
    alert("3000рублей");
}else if(a === "Витрина" && b === "Шаблон" && c === "Резина"){
    alert("18 дней");
    alert("5000рублей");
}else if(a === "Витрина" && b === "Уник" && c === "Пиксель"){
    alert("15 дней");
    alert("5000рублей");
}else if(a === "Витрина" && b === "Уник" && c === "Резина"){
    alert("20 дней");
    alert("10000рублей");
}*/












    


