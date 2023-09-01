const catagoriesName=async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data=await res.json();
    const nameCat=data.data
    displayName(nameCat)
}

// catagoris name show
const displayName=(nameCat)=>{

    const divContain=document.getElementById('catacontainer');
       nameCat.forEach((nam)=>{

       const div=document.createElement('div');
        div.innerHTML=`
        <button onclick="loadAllId('${nam.category_id}')" class="bg-gray-400 py-1 px-3 rounded-md font-normal text-sm" >${nam.category}</button>
                `;
        divContain.appendChild(div)

      })
      loadAllId(1000)
}

catagoriesName()

// id fetch kora hoyece
const loadAllId= async (categoryId)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data=await res.json();
    const catId=data.data;
       
       const displaySection=document.getElementById('displaySection')
       displaySection.innerHTML=" ";
    // drawing button emplement section
    // const display=document.getElementById('notFound')
    if(catId.length===0){
        const div=document.createElement('div');
        div.classList='w-[150px] md:ml-[390px] lg:ml-[600px] text-center';
        div.innerHTML=`
        <img src="Icon.png">
        <p class='font-bold mt-5'><span class='font-bold'>Oops!!</span> Sorry,There is no content here not found</p>
        `
        displaySection.appendChild(div)
     }


     



//    every id card showing section
    
    catId.forEach((display)=>{

        // time seatting on img section
    d = Number(display.others.posted_date);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    let hDisplay = h > 0 ? h + (h == 1 ? " hour, ":"hours ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
    const time=hDisplay + mDisplay

// container a card setting section
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
                      <h1 class=' font-bold'>${display.title}</h1>
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
// calling another index2.html
const handelSecondHtml=()=>{
    window.location.href='index2.html'
}


// sorting section
const sortedName=async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data=await res.json();
    const nameCat=data.data
  console.log(nameCat)
    // sorted part
    nameCat.sort((city1,city2)=>{
        city1=Number.parseFloat(city1.others.views);
        city2=Number.parseFloat(city2.others.views);
        if(city1>city2){
            return -1;
        }
        else if(city1<city2){
            return 1;
        }
        return 0;
    })
    // display sorted card into container
    const displaySection=document.getElementById('displaySection')
    displaySection.innerHTML=" ";
    // const sortViewcontain=document.getElementById('sortView');
    // sortViewcontain.innerHTML=''
    nameCat.forEach((display)=>{
        
    let d = Number(display.others.posted_date);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + (h == 1 ? " hour, ":"hours ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
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
                      <h1 class=' font-bold'>${display.title}</h1>
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
















    
