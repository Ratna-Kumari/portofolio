document.getElementById("navigation_buttons").addEventListener('click',(e)=>{
    window.location = `${window.origin}/${e.target.id}`
})

winHeight = document.documentElement.scrollHeight

height = (winHeight/80)*100



//window.addEventListener('scroll',()=>{
//    if(window.pageYOffset>height){
//        document.getElementById('footer').style.display = 'block'
//    }
//    else{
//        document.getElementById('footer').style.display = 'none'
//    }
//})

document.getElementById('li-1').addEventListener('click', ()=>{
    window.location = `${window.origin}/mywork`
})


document.getElementById('li-2').addEventListener('click', ()=>{
//    window.location = `${window.origin}/${}`
})


document.getElementById('li-1').addEventListener('click', ()=>{
    window.location = `${window.origin}/hireme`
})



window.addEventListener('scroll', ()=>{
    if(window.pageYOffset>183){
         console.log(window.pageYOffset)
        document.getElementById('icon').style.left = '10%'
        document.getElementById('navigation_buttons').style.left ='70%'
     }
    else if(window.pageYOffset < 183){
            document.getElementById('icon').style.left = '20%'
            document.getElementById('navigation_buttons').style.left ='60%'

    }
})
