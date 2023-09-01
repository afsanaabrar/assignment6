const catagoriesName=async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data=await res.json();
    const nameCat=data.data
      console.log(nameCat)
    displayName(nameCat)


}

const displayName=(nameCat)=>{
   




    const divContain=document.getElementById('catacontainer');
    divContain.innerHTML=''
    
      nameCat.forEach((nam)=>{
        const div=document.createElement('div');

        div.innerHTML=`
        <button onclick="loadAllId('${nam.category_id}')" class="bg-gray-400 py-1 px-3 rounded-md" id="btn">${nam.category}</button>
                `;
        divContain.appendChild(div)

      })

}
// displayName(1000)
catagoriesName()

// id section
const loadAllId= async (categoryId)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data=await res.json();
    const catId=data.data;
      console.log(catId)

   
    const notFound=document.getElementById('notFound')
    notFound.innerHTML=' '
    if(catId.length===0){
        const div=document.createElement('div');
        div.classList='w-[150px] ml-[600px]'
        const imgElement=document.createElement('img')
        imgElement.src='Icon.png'
        div.appendChild(imgElement)
        const p=document.createElement('p')
       
        p.innerText='Oops!! Sorry,There is no content here not found'
        div.appendChild(p)
        notFound.appendChild(div)
     }




    const displaySection=document.getElementById('displaySection')
    displaySection.innerHTML=" ";
    catId.forEach((display)=>{
        
        
        d = Number(display.others.posted_date);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, ":"hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
    const time=hDisplay + mDisplay


   
  const div=document.createElement('div');
        div.innerHTML=`
        <div class="card w-72 bg-base-100 shadow-xl">
                  <div class="relative">
                  <img src="${display.thumbnail}" class="w-full h-[200px]">
                  <div  class="bg-black text-white absolute right-2 bottom-2 text-[13px]  rounded-md" >${time}</div>
                  </div>   
               <div class="card-body">
                  <div class="flex flex-row gap-5">
                      <img src="${display.authors[0].profile_picture}" class="h-10 w-10 rounded-full">
                      <h1>${display.title}</h1>
                  </div>
                  <div class="flex flex-row gap-5">
                       <h1>${display.authors[0].profile_name}</h1>
                       <img src="${display.authors[0].verified?'Group.svg':''}">
                  </div>
                  <div>
                      <p>${display.others.views} views</p>
                  </div>
                </div>
            </div>
        `
        displaySection.appendChild(div) ;
        
    })
   
}
// for index2.html
const handelSecondHtml=()=>{
    window.location.href='index2.html'
}



const sortedName=async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data=await res.json();
    const nameCat=data.data
    //    console.log(nameCat)
    
   const sortView=document.getElementById('sortView')
       sortView.innerHTML=''
      nameCat.forEach((display)=>{
        //  console.log(display)
       
     d = Number(display.others.posted_date);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, ":"hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
        const time=hDisplay + mDisplay
    
        const div=document.createElement('div')
         div.innerHTML=`
         <div class="card w-72 bg-base-100 shadow-xl">
                  <div class="relative">
                  <img src="${display.thumbnail}" class="w-full h-[200px]">
                  <div  class="bg-black text-white absolute right-2 bottom-2 text-[13px]  rounded-md" >${time}</div>
                  </div>   
               <div class="card-body">
                  <div class="flex flex-row gap-5">
                      <img src="${display.authors[0].profile_picture}" class="h-10 w-10 rounded-full">
                      <h1>${display.title}</h1>
                  </div>
                  <div class="flex flex-row gap-5">
                       <h1>${display.authors[0].profile_name}</h1>
                       <img src="${display.authors[0].verified?'Group.svg':''}">
                  </div>
                  <div>
                      <p>${display.others.views} views</p>
                  </div>
                </div>
            </div>
         
         `
         sortView.appendChild(div)
        })
        const dat=display.sort((a,b)=>{
            if(a.display.others.views<b.display.others.views){
                return -1
            }
        })
        console.log(dat)
}










    
