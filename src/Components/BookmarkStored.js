import   toast  from 'react-hot-toast';
export let getBlogOnLocalStorage=()=>{
    let blog=[];
    let findBlog=localStorage.getItem('blog');
    if(findBlog){
        blog=JSON.parse(findBlog);
    }
    return blog;
}

export let setBlogDataOnLocalStorage=blog=>{
    let checkedData=getBlogOnLocalStorage();
    let filterToFindConvert=checkedData.find(e=>e.id===blog.id);
    if(filterToFindConvert){
        return toast.error('Sorry Already Exist')
    }
    checkedData.push(blog);
    localStorage.setItem('blog',JSON.stringify(checkedData));
    toast.success('successfully save the localStorage');
}

export let handleDeleteBookMark=deleteBlog=>{
    let storedData=getBlogOnLocalStorage();
    let filterCondition=storedData.filter(card=>card.id !== deleteBlog.id);
   localStorage.setItem('blog',JSON.stringify(filterCondition))

}