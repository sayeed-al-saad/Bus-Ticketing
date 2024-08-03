document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.getElementsByClassName('btn');
    let count =0;
    let sum = 0;

    Array.from(buttons).forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const value = event.target;
            const seatClass = event.target.value;
            // console.log("value",event.target.value)
            // console.log("value",event.target.value)
            count++;
            
            const valueId = value.id;
            console.log(valueId);
            const element = document.getElementById(valueId);
            if (element && count<=5) {

                sum+=550;
                console.log(sum)
                 
                console.log('nice');
                element.classList.remove('btn-outline');
                element.classList.add('btn-primary'); // Add a new class to change the background color
          
               const newDiv =  document.createElement('div');
               newDiv.innerHTML=
               `
                    <div class="flex justify-between">
                        <p class="text-gray-700 font-extrabold">${valueId}</p>
                        <p class="text-gray-700 font-extrabold">${seatClass}</p>
                        <p class="text-gray-700 font-extrabold"><span>550</span></p>
                    </div>
               `
               document.getElementById('price_id').innerHTML=
               `
                    <p>BDT<span>${sum}</span></p>
               
               `
               document.getElementById('grand-Total').innerHTML =
               `
                <span id="grand-Total">${sum}</span>
               `

            
             
             const container = document.getElementById('selectId');
             container.appendChild(newDiv)

            const seat = document.getElementById('seatNumber')
            const seatCount = seat.innerHTML=
            `
               <span>${count}</p>
            
            `


            const applyElement = document.getElementById('apply').addEventListener('click', ()=>{
                const couponElement = document.getElementById('coupon')
                const couponValue = couponElement.value
                parseInt(couponValue);
                console.log(couponValue, 'this is couponvalue')
                if(couponValue === 'NEW15'){
                    console.log('get some off')
                    sum = sum - sum * 0.15  
                }
                if(couponValue === 'COUPLE20'){
                    console.log('get some off')
                    sum = sum - sum * 0.20  
                }
                
            document.getElementById('price_id').innerHTML=
            `
                 <p>BDT<span>${sum.toFixed(2)}</span></p>
            
            `
            document.getElementById('grand-Total').innerHTML =
            `
             <span id="grand-Total">${sum.toFixed(2)}</span>    
            `
            })

            }
        });
    });
});                         