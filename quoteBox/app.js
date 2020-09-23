// An array of Objects with the quote and source as properties
var quotes = [
    {
        quote: " If you wanna find me , please just me location ",
        source: "Khabib Nurmagomedov",

    },
    {
        quote: "I have a dream",
        source: "Martin Luther King",

    },
    {
        quote: "এবারের সংগ্রাম স্বাধীনতার সংগ্রাম।",
        source: "বঙ্গবন্ধু শেখ মুজিব ",

    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "Walt Disney",

    },
    {
        quote: "If it wasn’t hard, everyone would do it. It’s the hard that makes it great",
        source: "Tom Hanks",

    }
];

let generateQuote = function (){

	return Math.floor(Math.random() * quotes.length);
} 



document.querySelector('#button-container').addEventListener('click',(e)=>{
	const btnIds = ['generate-quote','red', 'blue', 'green', 'yellow'] ;
	if (btnIds.includes(e.target.id)) {
		if ( btnIds[0] == e.target.id ) {
			let a = quotes[generateQuote()];
			console.log(a);
			let ptagSource = document.createElement('span');
			let br = document.createElement('br');
			ptagSource.textContent = ' - '+ a.source;
			
			ptagSource.classList.add('author')
			console.log(ptagSource);

			let ptagOfQuote = document.getElementsByClassName('quotebox')[0].firstElementChild
			
			ptagOfQuote.textContent = a.quote;
			ptagOfQuote.appendChild(br);
			ptagOfQuote.appendChild(ptagSource);

			return;



		}
		else{
       		const color = [
			    {
			        red: "#8B0000"
			       
			    },
			    {
			        blue:"#00008B"

			    },
			    {
			        green:"#388e3c"
			    },
			    {
			     yellow:"#fbc02d"
			    },
			    {
			     bg1:"#ffebee"
			    },
			    {
			    bg2:"#e3f2fd"
			    },
			    {
			       bg3:"#f1f8e9 " 
			    },
			    {
			        bg4:"#f9fbe7"
			    }
			]

        	if ( btnIds[1] == e.target.id ){
            let quotebox=document.querySelector('.quotebox');
            let quotetext=document.querySelector('.quotebox-text');
            quotetext.style.color=color[0].red;
            quotebox.style.border="3px solid"+ color[0].red;
            quotebox.style.background=color[4].bg1;

        	}
        	else if ( btnIds[2] == e.target.id ){
	            let quotebox=document.querySelector('.quotebox');
	            let quotetext=document.querySelector('.quotebox-text');
	            quotetext.style.color=color[1].blue;
	            quotebox.style.border="3px solid"+color[1].blue;
	            quotebox.style.background=color[5].bg2;

        	}
         	else if ( btnIds[3] == e.target.id ){
	            let quotebox=document.querySelector('.quotebox');
	            let quotetext=document.querySelector('.quotebox-text');
	            quotetext.style.color=color[2].green;
	            quotebox.style.border="3px solid"+color[2].green;
	            quotebox.style.background=color[6].bg3;

        	}
        	else if ( btnIds[4] == e.target.id ){
        	    let quotebox=document.querySelector('.quotebox');
	            let quotetext=document.querySelector('.quotebox-text');
	            quotetext.style.color=color[3].yellow;
	            quotebox.style.border="3px solid"+color[3].yellow;
	            quotebox.style.background=color[7].bg4;

       		}

		}

	}

});
