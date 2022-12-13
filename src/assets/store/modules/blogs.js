import axios from 'axios'

const state = {
    blogs:[
        {
            id: 1,
            title: 'This is the blog title'
        },
        {
            id: 2,
            title: 'This is the blog title 2'
        }
    ]
};


const getters = {
    allBlogs: (state) => state.blogs
};


const actions ={
    async fetchBlogs(commit){
        const response = await axios.get(
            'https://techcrunch.com/wp-json/wp/v2/posts'
            );
        console.log(response.data)
        commit('setBlogs',response.data)
    }
};


const mutations ={
    setBlogs: (state, blogs) =>(state.blogs = blogs)
};

 
export default {
    state,
    getters,
    actions,
    mutations
}



