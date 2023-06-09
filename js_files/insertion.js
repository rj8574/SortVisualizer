async function insert(){
    console.log("insertion");
    const ele=document.querySelectorAll(".bar");

    ele[0].style.background='green';
    for(let i=1;i<ele.length;i++)
    {
        console.log('Im ith loop');
        let j=i-1;
        let key=ele[i].style.height;
        ele[i].style.background='blue';

        await waitforme(delay);
        while(j>=0 && parseInt(ele[j].style.height)>parseInt(key))
        {
            console.log('in the loop');
            ele[j].style.background='blue';
            ele[j+1].style.height=ele[j].style.height;
            j--;
            await waitforme(delay);
            for(let k=i;k>=0;k--)
            {
                ele[k].style.background='green';
            }
            ele[j+1].style.height=key;
            ele[i].style.background='green'
        }
    }

}

const insSorrtBtn=document.querySelector(".insertionSort");
insSorrtBtn.addEventListener('click',async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insert();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})
